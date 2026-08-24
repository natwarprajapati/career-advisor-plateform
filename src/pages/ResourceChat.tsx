import { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Send, Loader2, Bot, User, BookOpen, Sparkles, Plus, Check } from 'lucide-react';
import { Button, Card, Input, Badge } from '@/ui';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import type { Json } from '@/integrations/supabase/types';
import { Link } from 'react-router-dom';
import DashboardNavbar from '@/components/dashboard/DashboardNavbar';
import { useUser } from '@/contexts/UserContext';
import { aiService } from '@/services/ai';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const suggestedTopics = [
  'React best practices',
  'Python for data science',
  'AWS certifications',
  'System design interview prep',
  'Machine learning fundamentals',
  'DevOps roadmap',
];

const ResourceChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);
  const [skillInput, setSkillInput] = useState('');
  const [chatId, setChatId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const { userProfile } = useUser();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addSkill = () => {
    if (skillInput.trim() && !skills.includes(skillInput.trim())) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput('');
    }
  };

  const removeSkill = (skill: string) => {
    setSkills(skills.filter(s => s !== skill));
  };

  const persistChatHistory = async (newMessages: Message[]) => {
    if (!userProfile) return;
    try {
      if (chatId) {
        await supabase
          .from('chat_history')
          .update({ messages: newMessages as unknown as Json, updated_at: new Date().toISOString() })
          .eq('id', chatId);
      } else {
        const title = newMessages[0]?.content.slice(0, 35) + '...' || 'Career Consultation';
        const { data } = await supabase
          .from('chat_history')
          .insert({
            user_profile_id: userProfile.id,
            title,
            messages: newMessages as unknown as Json,
          })
          .select()
          .single();
        if (data) setChatId(data.id);
      }
    } catch {
      // Silent error fallback
    }
  };

  const sendMessage = async (messageText?: string) => {
    const text = messageText || input;
    if (!text.trim()) return;

    const userMessage: Message = { role: 'user', content: text };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    try {
      const reply = await aiService.chat(text, messages, skills);

      if (reply) {
        const allMessages: Message[] = [...updatedMessages, { role: 'assistant', content: reply }];
        setMessages(allMessages);
        persistChatHistory(allMessages);
      }
    } catch {
      toast({
        title: 'Failed to get response',
        description: 'Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <Helmet>
        <title>Learning Resources Chat - AI Career Navigator</title>
        <meta name="description" content="Get personalized learning resource recommendations based on your skills and career goals." />
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
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-2 tracking-tight">Learning Resources Chat</h1>
            <p className="text-sm text-muted-foreground font-medium mb-8">Get personalized learning recommendations powered by AI</p>

            <div className="grid lg:grid-cols-4 gap-6">
              {/* Skills Sidebar */}
              <Card className="glass-card p-4 lg:col-span-1 h-fit border border-border/80">
                <h3 className="font-bold text-foreground mb-3 flex items-center gap-2 text-sm">
                  <Sparkles className="w-4 h-4 text-sky-500" />
                  Your Skills
                </h3>
                <p className="text-xs text-muted-foreground mb-3 font-medium">
                  Add your skills for better recommendations
                </p>
                <div className="flex gap-2 mb-3">
                  <Input
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    placeholder="Add skill..."
                    className="text-sm"
                    onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                  />
                  <Button size="sm" onClick={addSkill} variant="secondary" className="font-semibold">
                    Add
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
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
                </div>

                {messages.length === 0 && (
                  <div className="mt-6">
                    <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">Suggested Topics</h4>
                    <div className="space-y-1.5">
                      {suggestedTopics.map((topic) => (
                        <Button
                          key={topic}
                          variant="ghost"
                          size="sm"
                          className="w-full justify-start text-left text-xs font-semibold rounded-lg hover:bg-primary/10 hover:text-primary truncate"
                          onClick={() => sendMessage(`I want to learn about ${topic}. What resources do you recommend?`)}
                        >
                          <BookOpen className="w-3.5 h-3.5 mr-2 text-primary flex-shrink-0" />
                          <span className="truncate">{topic}</span>
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </Card>

              {/* Chat Area */}
              <Card className="glass-card p-4 lg:col-span-3 flex flex-col h-[600px] border border-border/80">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-1">
                  {messages.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-center p-8">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 text-primary shadow-sm">
                        <Bot className="w-8 h-8" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        Learning Resources Assistant
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground font-medium max-w-sm">
                        Ask me about any topic you want to learn. I'll recommend courses, tutorials, books, and other resources tailored to your needs.
                      </p>
                    </div>
                  ) : (
                    messages.map((message, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse items-center' : ''}`}
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm ${message.role === 'user'
                            ? 'bg-primary text-primary-foreground font-bold'
                            : 'bg-muted border border-border/80 text-primary'
                          }`}>
                          {message.role === 'user' ? (
                            <User className="w-4 h-4 text-primary-foreground" />
                          ) : (
                            <Bot className="w-4 h-4 text-primary" />
                          )}
                        </div>
                        <div className={`max-w-[80%] rounded-2xl px-4 py-3 shadow-sm ${message.role === 'user'
                            ? 'bg-primary text-primary-foreground font-medium'
                            : 'bg-card border border-border/80 text-foreground font-medium'
                          }`}>
                          <p className="text-xs sm:text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
                        </div>
                      </motion.div>
                    ))
                  )}
                  {isLoading && (
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-muted border border-border/80 flex items-center justify-center text-primary">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div className="bg-card border border-border/80 rounded-2xl px-4 py-3 flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin text-primary" />
                        <span className="text-xs text-muted-foreground font-medium">Finding resources...</span>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about learning resources..."
                    disabled={isLoading}
                    className="flex-1"
                  />
                  <Button
                    onClick={() => sendMessage()}
                    disabled={isLoading || !input.trim()}
                    className="btn-primary"
                  >
                    {isLoading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ResourceChat;
