import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileSearch, 
  FileText, 
  GitBranch, 
  Briefcase,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const features = [
  {
    icon: FileSearch,
    title: 'AI Resume Screening & ATS Evaluation',
    description: 'Upload your resume and get instant AI analysis against ATS criteria. Receive actionable improvement suggestions.',
    highlights: ['ATS Score Meter', 'Format Optimization', 'Keyword Analysis', 'Section Feedback'],
    color: 'from-primary to-navy-light',
    bgColor: 'bg-primary/5',
    link: '/resume-screening',
  },
  {
    icon: FileText,
    title: 'AI Resume Builder',
    description: 'Build an ATS-optimized resume from scratch. Enter your skills and experience, let AI craft compelling content.',
    highlights: ['Step-by-Step Builder', 'Live Preview', 'ATS Optimization', 'Downloadable PDF'],
    color: 'from-secondary to-cyan',
    bgColor: 'bg-secondary/5',
    link: '/resume-builder',
  },
  {
    icon: GitBranch,
    title: 'Skill Gap Detection & Learning Roadmap',
    description: 'Compare your skills against target roles. Get personalized learning paths to bridge the gap.',
    highlights: ['Skill Comparison', 'Radar Visualization', 'Learning Timeline', 'AI Recommendations'],
    color: 'from-cyan to-secondary',
    bgColor: 'bg-cyan/5',
    link: '/skill-gap',
  },
  {
    icon: Briefcase,
    title: 'AI Job Search & Matching',
    description: 'Semantic matching finds jobs that truly fit your profile. See match percentages and relevance scores.',
    highlights: ['Smart Matching', 'Salary Insights', 'Location Filters', 'Cover Letter AI'],
    color: 'from-navy-light to-primary',
    bgColor: 'bg-navy/5',
    link: '/jobs',
  },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="features" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky-500/10 text-sky-700 dark:text-sky-300 border border-sky-500/30 text-xs font-bold uppercase tracking-wider mb-4">
            Core Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            AI-Powered Career{' '}
            <span className="gradient-text">Intelligence</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground font-medium">
            Four powerful AI tools working together to transform your career journey from uncertain to unstoppable.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="glass-card-hover h-full p-8 border border-border/80 flex flex-col justify-between">
                <div>
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed font-medium">{feature.description}</p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className={`${feature.bgColor} rounded-xl p-5 mb-6 border border-border/50`}>
                    <div className="grid grid-cols-2 gap-3">
                      {feature.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-sky-500 flex-shrink-0" />
                          <span className="text-xs sm:text-sm font-semibold text-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  to={feature.link}
                  className="inline-flex items-center gap-2 text-sky-600 dark:text-sky-400 font-bold hover:text-sky-500 hover:gap-3 transition-all pt-2"
                >
                  Try this feature
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
