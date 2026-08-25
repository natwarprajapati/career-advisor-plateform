import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Target, Loader2, Plus, TrendingUp, Clock, BookOpen, CheckCircle2, Sparkles } from 'lucide-react';
import { Button, Card, Input, Badge, Progress, CircularGauge, LearnerProgressBadge } from '@/ui';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Link } from 'react-router-dom';
import DashboardNavbar from '@/components/dashboard/DashboardNavbar';
import { SkillGapSkeleton } from '@/components/skill-gap';
import { useUser } from '@/contexts/UserContext';
import { aiService } from '@/services/ai';

interface SkillComparison {
  skill: string;
  category: string;
  currentLevel: number;
  requiredLevel: number;
  gap: number;
  priority: string;
}

interface MissingSkill {
  skill: string;
  importance: string;
  timeToLearn: string;
  learningResources: string[];
}

interface LearningPhase {
  title: string;
  duration: string;
  focus: string[];
  milestones: string[];
}

interface Analysis {
  targetRoleAnalysis: {
    title: string;
    description: string;
    averageSalary: string;
    demandLevel: string;
  };
  skillComparison: SkillComparison[];
  missingSkills: MissingSkill[];
  strengths: string[];
  learningRoadmap: {
    phase1: LearningPhase;
    phase2: LearningPhase;
    phase3: LearningPhase;
  };
  overallReadiness: number;
  estimatedTimeToReady: string;
}

const popularRoles = [
  'Software Engineer',
  'Data Scientist',
  'Product Manager',
  'UX Designer',
  'DevOps Engineer',
  'Machine Learning Engineer',
];

const SkillGap = () => {
  const [skills, setSkills] = useState<string[]>([]);
  const [skillInput, setSkillInput] = useState('');
  const [targetRole, setTargetRole] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<Analysis | null>(null);
  const { toast } = useToast();
  const { userProfile, isLoading } = useUser();

  useEffect(() => {
    if (userProfile?.skills && userProfile.skills.length > 0) {
      setSkills((prev) => (prev.length === 0 ? userProfile.skills! : prev));
    }
    if (userProfile?.current_role) {
      setTargetRole((prev) => (!prev ? userProfile.current_role! : prev));
    }
  }, [userProfile]);

  const addSkill = () => {
    if (skillInput.trim() && !skills.includes(skillInput.trim())) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput('');
    }
  };

  const removeSkill = (skill: string) => {
    setSkills(skills.filter(s => s !== skill));
  };

  const analyzeGap = async () => {
    if (skills.length === 0) {
      toast({
        title: 'Skills required',
        description: 'Please add at least one skill.',
        variant: 'destructive',
      });
      return;
    }

    if (!targetRole.trim()) {
      toast({
        title: 'Target role required',
        description: 'Please enter your target role.',
        variant: 'destructive',
      });
      return;
    }

    setIsAnalyzing(true);
    try {
      const data = await aiService.analyzeSkillGap(skills, targetRole);

      if (data) {
        setAnalysis(data as Analysis);
        toast({
          title: 'Analysis complete!',
          description: 'Your skill gap analysis is ready.',
        });
      }
    } catch {
      toast({
        title: 'Analysis failed',
        description: 'Failed to analyze skill gap. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical': return 'bg-red-500';
      case 'High': return 'bg-orange-500';
      case 'Medium': return 'bg-yellow-500';
      default: return 'bg-green-500';
    }
  };

  if (isLoading) {
    return <SkillGapSkeleton />;
  }

  return (
    <>
      <Helmet>
        <title>Skill Gap Detection - AI Career Navigator</title>
        <meta name="description" content="Identify skill gaps between your current abilities and target role requirements." />
      </Helmet>

      <div className="min-h-screen bg-background">
        {userProfile && <DashboardNavbar />}
        <div className={`container-custom py-8 ${userProfile ? 'pt-24' : ''}`}>
          <Link to={userProfile ? '/dashboard' : '/'} className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            {userProfile ? 'Back to Dashboard' : 'Back to Home'}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">Skill Gap Detection</h1>
            <p className="text-muted-foreground mb-8">Identify gaps between your skills and target role requirements</p>

            {!analysis ? (
              <Card className="glass-card p-6 md:p-8">
                <div className="space-y-6">
                  {/* Current Skills */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Current Skills
                    </label>
                    <div className="flex gap-2 mb-3">
                      <Input
                        value={skillInput}
                        onChange={(e) => setSkillInput(e.target.value)}
                        placeholder="Add a skill (e.g., Python, React, SQL)..."
                        onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                      />
                      <Button onClick={addSkill} variant="secondary">
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 min-h-[40px]">
                      {skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="primary"
                          className="cursor-pointer hover:bg-rose-500/20 hover:border-rose-500/40 hover:text-rose-500 transition-colors"
                          onClick={() => removeSkill(skill)}
                        >
                          {skill} ×
                        </Badge>
                      ))}
                      {skills.length === 0 && (
                        <span className="text-xs text-muted-foreground font-medium">No skills added yet</span>
                      )}
                    </div>
                  </div>

                  {/* Target Role */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Target Role
                    </label>
                    <Input
                      value={targetRole}
                      onChange={(e) => setTargetRole(e.target.value)}
                      placeholder="Enter your target job role (e.g. Senior Frontend Engineer)..."
                    />
                    <div className="flex flex-wrap items-center gap-2 mt-3">
                      <span className="text-xs font-semibold text-muted-foreground">Popular:</span>
                      {popularRoles.map((role) => (
                        <Button
                          key={role}
                          variant="ghost"
                          size="sm"
                          onClick={() => setTargetRole(role)}
                          className="text-xs h-7 rounded-lg bg-muted/60 hover:bg-sky-500/10 hover:text-sky-500 font-semibold"
                        >
                          {role}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <Button
                    onClick={analyzeGap}
                    disabled={isAnalyzing || skills.length === 0 || !targetRole.trim()}
                    className="w-full btn-primary"
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Analyzing Skill Gap...
                      </>
                    ) : (
                      <>
                        <Target className="w-4 h-4 mr-2" />
                        Analyze Skill Gap
                      </>
                    )}
                  </Button>
                </div>
              </Card>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                {/* Overview Card */}
                <Card className="glass-card p-6 md:p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h2 className="text-2xl font-bold text-primary mb-2">
                        {analysis.targetRoleAnalysis?.title}
                      </h2>
                      <p className="text-muted-foreground mb-4">
                        {analysis.targetRoleAnalysis?.description}
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <div>
                          <span className="text-sm text-muted-foreground">Average Salary</span>
                          <p className="font-semibold text-secondary">{analysis.targetRoleAnalysis?.averageSalary}</p>
                        </div>
                        <div>
                          <span className="text-sm text-muted-foreground">Demand Level</span>
                          <p className="font-semibold text-green-600">{analysis.targetRoleAnalysis?.demandLevel}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2">
                      <CircularGauge
                        score={analysis.overallReadiness}
                        size="md"
                        label="Overall Readiness"
                        sublabel={analysis.estimatedTimeToReady}
                        showGrade
                      />
                    </div>
                  </div>
                </Card>

                {/* Skill Comparison */}
                <Card className="glass-card p-6 md:p-8">
                  <h3 className="text-xl font-bold text-primary mb-6">Skill Comparison</h3>
                  <div className="space-y-4">
                    {analysis.skillComparison?.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="p-4 border border-border rounded-lg"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{skill.skill}</span>
                            <Badge variant="outline" className="text-xs">{skill.category}</Badge>
                          </div>
                          <Badge className={`${getPriorityColor(skill.priority)} text-white`}>
                            {skill.priority}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <span className="text-xs text-muted-foreground">Current</span>
                            <Progress value={skill.currentLevel} className="h-2 mt-1" />
                            <span className="text-xs">{skill.currentLevel}%</span>
                          </div>
                          <div>
                            <span className="text-xs text-muted-foreground">Required</span>
                            <Progress value={skill.requiredLevel} className="h-2 mt-1" />
                            <span className="text-xs">{skill.requiredLevel}%</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>

                {/* Strengths */}
                {analysis.strengths?.length > 0 && (
                  <Card className="glass-card p-6 md:p-8">
                    <h3 className="text-xl font-bold text-primary mb-4">Your Strengths</h3>
                    <div className="flex flex-wrap gap-2">
                      {analysis.strengths.map((strength, i) => (
                        <Badge key={i} variant="secondary" className="text-sm">
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                          {strength}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                )}

                {/* Missing Skills */}
                {analysis.missingSkills?.length > 0 && (
                  <Card className="glass-card p-6 md:p-8">
                    <h3 className="text-xl font-bold text-primary mb-6">Skills to Learn</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {analysis.missingSkills.map((skill, index) => (
                        <div key={index} className="p-4 border border-border rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium">{skill.skill}</span>
                            <Badge variant="outline">{skill.importance}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            <Clock className="w-3 h-3 inline mr-1" />
                            {skill.timeToLearn}
                          </p>
                          {skill.learningResources?.length > 0 && (
                            <div>
                              <p className="text-xs font-medium mb-1">Resources:</p>
                              <ul className="text-xs text-muted-foreground">
                                {skill.learningResources.slice(0, 3).map((resource, i) => (
                                  <li key={i}>• {resource}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </Card>
                )}

                {/* Learning Roadmap */}
                <Card className="glass-card p-6 md:p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-secondary" />
                      Phased Learning Roadmap
                    </h3>
                    <Badge variant="default" className="text-xs">
                      AI Generated
                    </Badge>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    {['phase1', 'phase2', 'phase3'].map((phaseKey, index) => {
                      const phase = analysis.learningRoadmap?.[phaseKey as keyof typeof analysis.learningRoadmap];
                      if (!phase) return null;
                      const phaseStatus = index === 0 ? "in-progress" : index === 1 ? "default" : "disabled";
                      const phaseProgress = index === 0 ? 35 : 0;

                      return (
                        <motion.div
                          key={phaseKey}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex flex-col justify-between p-4 border border-border/80 rounded-2xl bg-card/50 backdrop-blur-sm"
                        >
                          <div>
                            <LearnerProgressBadge
                              status={phaseStatus}
                              size="sm"
                              skillName={phase.title}
                              category={`Phase ${index + 1}`}
                              progress={phaseProgress}
                              className="mb-3 w-full justify-between"
                            />
                            <div className="mb-3">
                              <p className="text-xs font-semibold text-muted-foreground mb-1.5">Focus Areas:</p>
                              <div className="flex flex-wrap gap-1.5">
                                {phase.focus?.map((f, i) => (
                                  <Badge key={i} variant="secondary" >
                                    {f}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            {phase.milestones?.length > 0 && (
                              <div>
                                <p className="text-xs font-semibold text-muted-foreground mb-1.5">Key Milestones:</p>
                                <ul className="text-xs space-y-1 text-muted-foreground">
                                  {phase.milestones.map((m, i) => (
                                    <li key={i} className="flex items-start gap-1.5">
                                      <span className="text-emerald-500 font-bold">✓</span>
                                      <span>{m}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                          <div className="mt-4 pt-2 border-t border-border/40 text-[11px] font-semibold text-sky-500 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>Estimated Duration: {phase.duration}</span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </Card>

                <div className="flex gap-4">
                  <Button
                    onClick={() => {
                      setAnalysis(null);
                      setSkills([]);
                      setTargetRole('');
                    }}
                    variant="outline"
                    className="flex-1"
                  >
                    Start New Analysis
                  </Button>
                  <Link to="/resources" className="flex-1">
                    <Button className="w-full btn-primary">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Find Learning Resources
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SkillGap;
