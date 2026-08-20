// Pluggable AI Service Contract

export interface SectionAnalysis {
  name: string;
  score: number;
  atsFriendly: boolean;
  content: string;
  issues: string[];
  recommendations: string[];
}

export interface ResumeAnalysisResult {
  overallScore: number;
  atsCompatibility: 'High' | 'Medium' | 'Low';
  sections: SectionAnalysis[];
  keywords: {
    found: string[];
    missing: string[];
    industryRelevant: string[];
  };
  formatting: {
    score: number;
    issues: string[];
    suggestions: string[];
  };
  extractedSkills: string[];
  summary: string;
}

export interface SkillComparison {
  skill: string;
  category: 'Technical' | 'Soft' | 'Domain';
  currentLevel: number;
  requiredLevel: number;
  gap: number;
  priority: 'Critical' | 'High' | 'Medium' | 'Low';
}

export interface MissingSkill {
  skill: string;
  importance: 'Critical' | 'High' | 'Medium' | 'Low';
  timeToLearn: string;
  learningResources: string[];
}

export interface LearningPhase {
  title: string;
  duration: string;
  focus: string[];
  milestones: string[];
}

export interface SkillGapResult {
  targetRoleAnalysis: {
    title: string;
    description: string;
    averageSalary: string;
    demandLevel: 'High' | 'Medium' | 'Low';
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

export interface CoverLetterParams {
  resumeData: string;
  jobTitle: string;
  companyName: string;
  jobDescription?: string;
  skills?: string[];
  candidateName?: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface IAIService {
  analyzeResume(resumeText: string, customApiKey?: string): Promise<ResumeAnalysisResult>;
  generateResumeSection(section: string, userInput: string, existingContent?: string, customApiKey?: string): Promise<string>;
  analyzeSkillGap(currentSkills: string[], targetRole: string, customApiKey?: string): Promise<SkillGapResult>;
  generateCoverLetter(params: CoverLetterParams, customApiKey?: string): Promise<string>;
  chat(message: string, history: ChatMessage[], skills: string[], customApiKey?: string): Promise<string>;
}
