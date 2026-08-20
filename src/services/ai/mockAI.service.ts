// Realistic Mock & Heuristic AI Service (Zero-Failure Fallback Engine)
import { 
  IAIService, 
  ResumeAnalysisResult, 
  SkillGapResult, 
  CoverLetterParams, 
  ChatMessage 
} from './ai.interface';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const COMMON_SKILLS_DATABASE = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Java', 'C++',
  'SQL', 'PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'Docker', 'Kubernetes', 'Git',
  'Tailwind CSS', 'GraphQL', 'REST API', 'CI/CD', 'Agile', 'Scrum', 'Linux',
  'Machine Learning', 'Data Analysis', 'HTML5', 'CSS3', 'Vue.js', 'Express', 'Django'
];

function extractSkillsHeuristic(text: string): string[] {
  const found = new Set<string>();
  const lower = text.toLowerCase();
  
  for (const skill of COMMON_SKILLS_DATABASE) {
    const escaped = skill.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b${escaped}\\b`, 'i');
    if (regex.test(lower)) {
      found.add(skill);
    }
  }
  return Array.from(found);
}

export class MockAIService implements IAIService {
  async analyzeResume(resumeText: string): Promise<ResumeAnalysisResult> {
    await delay(1200); // Realistic AI thinking time

    const detectedSkills = extractSkillsHeuristic(resumeText);
    const hasSummary = /summary|objective|profile/i.test(resumeText);
    const hasExperience = /experience|work history|employment/i.test(resumeText);
    const hasEducation = /education|university|degree|bachelor|master|b\.tech/i.test(resumeText);
    const hasProjects = /projects|portfolio/i.test(resumeText);
    const hasContact = /email|phone|linkedin|github|@/i.test(resumeText);

    let score = 55;
    if (hasContact) score += 10;
    if (hasSummary) score += 8;
    if (hasExperience) score += 12;
    if (hasEducation) score += 8;
    if (detectedSkills.length >= 5) score += 7;
    score = Math.min(score, 94);

    const atsCompatibility: 'High' | 'Medium' | 'Low' = score >= 80 ? 'High' : score >= 65 ? 'Medium' : 'Low';

    const sections = [
      {
        name: 'Contact & Profile Header',
        score: hasContact ? 9 : 4,
        atsFriendly: hasContact,
        content: hasContact ? 'Valid contact details, professional links detected.' : 'Missing structured contact information or LinkedIn profile.',
        issues: hasContact ? [] : ['No direct email or phone number found in top header.'],
        recommendations: ['Ensure email, phone, location, and GitHub/LinkedIn are clearly placed at the top.'],
      },
      {
        name: 'Professional Summary',
        score: hasSummary ? 8 : 5,
        atsFriendly: true,
        content: hasSummary ? 'Clear executive summary highlighting career focus.' : 'No distinct professional summary section found.',
        issues: hasSummary ? [] : ['Add a 3-line summary with core target keywords.'],
        recommendations: ['Include 2-3 high-impact keywords targeting your desired role in the summary.'],
      },
      {
        name: 'Work Experience & Impact',
        score: hasExperience ? 8 : 4,
        atsFriendly: true,
        content: hasExperience ? 'Experience entries found with role titles.' : 'Limited work experience or quantifiable metrics detected.',
        issues: ['Some bullet points lack quantifiable numbers (e.g. % growth, latency reduction).'],
        recommendations: ['Use the XYZ formula: Accomplished [X], as measured by [Y], by doing [Z].'],
      },
      {
        name: 'Technical Skills Matrix',
        score: detectedSkills.length >= 4 ? 9 : 6,
        atsFriendly: true,
        content: `Extracted ${detectedSkills.length} key industry skills: ${detectedSkills.slice(0, 6).join(', ')}.`,
        issues: detectedSkills.length < 5 ? ['Skill list is brief. Expand with relevant frameworks and tools.'] : [],
        recommendations: ['Group skills into categories (Frontend, Backend, Cloud & DevOps, Core Tools).'],
      },
      {
        name: 'Education & Certifications',
        score: hasEducation ? 9 : 6,
        atsFriendly: true,
        content: hasEducation ? 'Academic credentials and degree information identified.' : 'Include university, degree, and graduation year.',
        issues: [],
        recommendations: ['List relevant certifications, coursework, or honors alongside your degree.'],
      }
    ];

    return {
      overallScore: score,
      atsCompatibility,
      sections,
      keywords: {
        found: detectedSkills.length > 0 ? detectedSkills : ['Web Development', 'Git', 'Problem Solving'],
        missing: ['System Design', 'CI/CD Pipelines', 'Performance Optimization', 'Unit Testing'],
        industryRelevant: ['TypeScript', 'React', 'Microservices', 'RESTful APIs', 'Cloud Architecture'],
      },
      formatting: {
        score: 8,
        issues: ['Ensure standard single-column ATS format with clean bullet points.'],
        suggestions: ['Avoid multi-column tables or embedded images for maximum ATS parsing reliability.'],
      },
      extractedSkills: detectedSkills.length > 0 ? detectedSkills : ['JavaScript', 'HTML5', 'CSS3', 'Git', 'React'],
      summary: `Your resume demonstrates solid domain foundations with an ATS compatibility score of ${score}/100. By incorporating quantifiable business impact metrics and categorizing your core skills, your candidate ranking will significantly increase across screening systems.`,
    };
  }

  async generateResumeSection(section: string, userInput: string, existingContent?: string): Promise<string> {
    await delay(1000);

    switch (section.toLowerCase()) {
      case 'summary':
        return `Results-driven Software Engineer with proven expertise in building scalable web applications and high-performance cloud architectures. Skilled in modern full-stack development, cross-functional collaboration, and delivering customer-centric digital solutions that improve system efficiency and user engagement.`;
      
      case 'skills':
        return `• Programming Languages: TypeScript, JavaScript (ES6+), Python, SQL\n• Frontend Frameworks: React, Next.js, Tailwind CSS, Redux Toolkit, HTML5/CSS3\n• Backend & Cloud: Node.js, Express, PostgreSQL, MongoDB, Redis, Docker, AWS (S3, Lambda)\n• Methodologies & Tools: Git, REST APIs, CI/CD, Agile/Scrum, Jest/Unit Testing`;

      case 'experience':
        return `• Architected and developed responsive full-stack features using React, TypeScript, and Node.js, boosting user retention by 28%.\n• Optimized database queries and API response times, reducing average latency by 35% across high-traffic microservices.\n• Collaborated with product and UX teams in bi-weekly Agile sprints to deliver production-ready features on schedule.\n• Implemented automated CI/CD test suites that eliminated 90% of regressions prior to deployment.`;

      case 'projects':
        return `• Scalable Cloud Management Dashboard: Built a modular monitoring portal utilizing React, Tailwind CSS, and Supabase with real-time analytics.\n• AI-Powered Workflow Assistant: Integrated automated document analysis and section generation using LLM APIs, speeding up user task completion by 45%.`;

      case 'certifications':
        return `• AWS Certified Solutions Architect – Associate (2024)\n• Meta Certified Front-End Developer Specialization\n• Agile Project Delivery & Scrum Master Certified`;

      default:
        return existingContent 
          ? `${existingContent}\n• Enhanced: ${userInput}`
          : `• Successfully implemented ${userInput} utilizing modern industry best practices.\n• Delivered measurable efficiency improvements and maintained 99.9% reliability.`;
    }
  }

  async analyzeSkillGap(currentSkills: string[], targetRole: string): Promise<SkillGapResult> {
    await delay(1200);

    const skillsLower = currentSkills.map(s => s.toLowerCase());
    
    // Dynamically adjust comparison
    const roleTitle = targetRole.trim() || 'Senior Full Stack Engineer';
    const roleSalary = '$110,000 - $160,000 / year';

    const requiredSkillMatrix = [
      { name: 'TypeScript / Modern JS', category: 'Technical' as const, req: 90, curr: skillsLower.includes('typescript') || skillsLower.includes('javascript') ? 85 : 45 },
      { name: 'System Design & Scalability', category: 'Domain' as const, req: 85, curr: skillsLower.includes('system design') ? 80 : 40 },
      { name: 'Cloud & Docker / DevOps', category: 'Technical' as const, req: 80, curr: skillsLower.includes('aws') || skillsLower.includes('docker') ? 75 : 35 },
      { name: 'Database Architecture (SQL/NoSQL)', category: 'Technical' as const, req: 85, curr: skillsLower.includes('sql') || skillsLower.includes('postgresql') || skillsLower.includes('mongodb') ? 80 : 50 },
      { name: 'Agile Leadership & Code Reviews', category: 'Soft' as const, req: 75, curr: 70 },
    ];

    const skillComparison = requiredSkillMatrix.map(item => ({
      skill: item.name,
      category: item.category,
      currentLevel: item.curr,
      requiredLevel: item.req,
      gap: Math.max(0, item.req - item.curr),
      priority: (item.req - item.curr > 30 ? 'Critical' : item.req - item.curr > 15 ? 'High' : 'Medium') as 'Critical' | 'High' | 'Medium',
    }));

    const missingSkills = [
      {
        skill: 'Distributed Systems & Microservices',
        importance: 'Critical' as const,
        timeToLearn: '4-6 weeks',
        learningResources: ['Designing Data-Intensive Applications (Book)', 'System Design Primer (GitHub)'],
      },
      {
        skill: 'CI/CD Pipelines & Containerization',
        importance: 'High' as const,
        timeToLearn: '3-4 weeks',
        learningResources: ['Docker & Kubernetes: The Complete Guide', 'GitHub Actions CI/CD Mastery'],
      },
      {
        skill: 'Automated Testing (TDD/E2E)',
        importance: 'Medium' as const,
        timeToLearn: '2 weeks',
        learningResources: ['Testing React with Jest and React Testing Library', 'Playwright End-to-End Testing'],
      }
    ];

    const readinessScore = Math.round(
      skillComparison.reduce((acc, curr) => acc + curr.currentLevel, 0) / skillComparison.length
    );

    return {
      targetRoleAnalysis: {
        title: roleTitle,
        description: `High-impact technical role focusing on developing resilient software architectures, collaborating across engineering teams, and optimizing production deployments.`,
        averageSalary: roleSalary,
        demandLevel: 'High',
      },
      skillComparison,
      missingSkills,
      strengths: currentSkills.length > 0 ? currentSkills.slice(0, 4) : ['Core Programming', 'Frontend Development', 'Problem Solving'],
      learningRoadmap: {
        phase1: {
          title: 'Foundation & Core Proficiency',
          duration: 'Weeks 1 - 4',
          focus: ['Advanced TypeScript Patterns', 'Relational Database Schema Design & Indexing'],
          milestones: ['Build a type-safe full-stack application with strict schema validation.'],
        },
        phase2: {
          title: 'Architecture & Scalability',
          duration: 'Weeks 5 - 8',
          focus: ['Docker Containerization', 'Microservices Communication', 'Caching with Redis'],
          milestones: ['Deploy containerized services behind an API Gateway with rate limiting.'],
        },
        phase3: {
          title: 'Production Readiness & Mastery',
          duration: 'Weeks 9 - 12',
          focus: ['System Design Mock Interviews', 'CI/CD Automated Deployments', 'Monitoring & Observability'],
          milestones: ['Complete 5 full-scale System Design architectural case studies.'],
        }
      },
      overallReadiness: readinessScore,
      estimatedTimeToReady: readinessScore >= 75 ? '4-6 weeks' : '8-12 weeks',
    };
  }

  async generateCoverLetter(params: CoverLetterParams): Promise<string> {
    await delay(1000);

    const dateStr = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const candidateName = params.candidateName || 'Candidate';
    const skillsList = params.skills && params.skills.length > 0 
      ? params.skills.join(', ') 
      : 'Modern Software Development, Technical Problem Solving, Scalable Architecture';
    
    const keySkill1 = params.skills?.[0] || 'Modern Technologies';
    const keySkill2 = params.skills?.[1] || 'Collaborative Engineering';
    
    // Create job-role specific tailoring
    const roleFocus = params.jobTitle.toLowerCase().includes('frontend')
      ? `crafting highly responsive, accessible user interfaces and seamless frontend experiences`
      : params.jobTitle.toLowerCase().includes('backend')
      ? `architecting resilient microservices, optimizing database pipelines, and building high-throughput APIs`
      : params.jobTitle.toLowerCase().includes('devops') || params.jobTitle.toLowerCase().includes('cloud')
      ? `streamlining automated CI/CD pipelines, provisioning robust cloud infrastructure, and ensuring 99.9% system reliability`
      : params.jobTitle.toLowerCase().includes('full stack')
      ? `delivering end-to-end full-stack solutions, bridging frontend performance with scalable backend systems`
      : `engineering scalable, high-performance software systems and driving technical excellence`;

    const resumeSnippet = params.resumeData.trim()
      ? `With proven hands-on background in ${params.resumeData.slice(0, 140).replace(/\n/g, ' ')}...`
      : `With a strong track record in ${skillsList},`;

    return `Date: ${dateStr}

Hiring Team
${params.companyName}

Subject: Application for ${params.jobTitle}

Dear Hiring Manager,

I am writing to express my enthusiastic interest in the ${params.jobTitle} position at ${params.companyName}. Having followed ${params.companyName}'s innovation and growth in the tech industry, I am deeply inspired by your mission and product roadmap. My technical background in ${skillsList}, paired with my dedication to ${roleFocus}, makes me an exceptional candidate for this role.

${resumeSnippet} I have successfully delivered robust software solutions, improved system efficiency, and partnered with cross-functional teams to bring complex product features from conception to production. I specialize in leveraging tools like ${keySkill1} and ${keySkill2} to solve complex challenges and build scalable, user-centric software.

What excites me most about joining ${params.companyName} is the opportunity to contribute directly to your team's impactful projects. I am confident that my technical problem-solving capabilities, proactive communication, and commitment to engineering best practices will enable me to hit the ground running and create immediate value.

Thank you for considering my application for the ${params.jobTitle} role. I look forward to the opportunity to discuss how my skill set and passion align with the future goals of ${params.companyName}.

Sincerely,
${candidateName}
`;
  }

  async chat(message: string, history: ChatMessage[], skills: string[]): Promise<string> {
    await delay(800);

    const lower = message.toLowerCase();

    if (lower.includes('resume') || lower.includes('cv')) {
      return `To make your resume standout to recruiters:
1. **Focus on Outcomes**: Use metrics (e.g. "Improved page load by 40%") rather than listing generic duties.
2. **ATS Optimization**: Stick to clean single-column headings and standard bullet points.
3. **Skill Highlighting**: Place your strongest core skills (${skills.length > 0 ? skills.slice(0, 3).join(', ') : 'TypeScript, React, Node.js'}) right below your professional summary.

Would you like me to help rewrite any specific section of your resume?`;
    }

    if (lower.includes('interview') || lower.includes('prep')) {
      return `Here is an actionable 3-step strategy for technical interview preparation:
1. **Data Structures & Algorithms**: Master core patterns (Two Pointers, Sliding Window, BFS/DFS, Dynamic Programming).
2. **System Design**: Practice scaling architectures (Load balancers, Caching strategies, Database partitioning).
3. **Behavioral STAR Technique**: Prepare 4-5 stories demonstrating leadership, handling ambiguity, and technical trade-offs.

What specific company or role are you currently preparing for?`;
    }

    if (lower.includes('roadmap') || lower.includes('learn') || lower.includes('course')) {
      return `Based on current industry demand${skills.length > 0 ? ` and your current skills (${skills.join(', ')})` : ''}:
- **Recommended Free Resources**:
  • *Roadmap.sh* (Visual developer roadmaps)
  • *freeCodeCamp* & *fullstackopen.com* (Comprehensive full-stack mastery)
  • *System Design Primer* on GitHub
- **Certification Paths**:
  • AWS Certified Developer / Solutions Architect Associate
  • Meta Frontend/Backend Professional Certificate

Would you like me to curate a specific week-by-week schedule for a particular topic?`;
    }

    return `Hello! I'm your AI Career Advisor. I can assist you with:
• **ATS Resume Optimization & Section Rewriting**
• **Skill Gap Analysis & Tailored Learning Roadmaps**
• **Technical & Behavioral Interview Prep**
• **Targeted Job Search Strategies & Cover Letters**

How can I best support your career goals today?`;
  }
}
