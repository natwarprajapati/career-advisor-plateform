import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { MessageSquare, Calendar, Trash2, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '@/contexts/UserContext';
import { supabase } from '@/integrations/supabase/client';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { ChatHistoryListSkeleton } from '@/components/dashboard';
import { Button, Card, EmptyState } from '@/ui';
import { useToast } from '@/hooks/use-toast';

interface ChatHistory {
  id: string;
  title: string;
  messages: unknown;
  created_at: string;
  updated_at: string;
}

const ChatHistoryList = () => {
  const { userProfile, isLoading } = useUser();
  const navigate = useNavigate();
  const [chats, setChats] = useState<ChatHistory[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (!isLoading && !userProfile) {
      navigate('/?getStarted=true', { replace: true, state: { fromDashboard: true } });
    }
  }, [userProfile, isLoading, navigate]);

  const fetchChats = useCallback(async () => {
    if (!userProfile) return;

    try {
      const { data, error } = await supabase
        .from('chat_history')
        .select('*')
        .eq('user_profile_id', userProfile.id)
        .order('updated_at', { ascending: false });

      if (error) throw error;
      setChats(data || []);
    } catch {
      // Silent error fallback
    } finally {
      setLoading(false);
    }
  }, [userProfile]);

  useEffect(() => {
    if (userProfile) {
      fetchChats();
    }
  }, [userProfile, fetchChats]);

  const deleteChat = async (id: string) => {
    try {
      const { error } = await supabase.from('chat_history').delete().eq('id', id);
      if (error) throw error;
      setChats((prev) => prev.filter((c) => c.id !== id));
      toast({ title: 'Chat deleted successfully' });
    } catch (error) {
      toast({ title: 'Failed to delete chat', variant: 'destructive' });
    }
  };

  if (isLoading || loading) {
    return <ChatHistoryListSkeleton />;
  }

  return (
    <>
      <Helmet>
        <title>Chat History - Dashboard</title>
      </Helmet>

      <DashboardLayout>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">Chat History</h1>
            <p className="text-muted-foreground text-sm">Your recorded AI career mentoring transcripts</p>
          </div>
          <Button variant="primary" onClick={() => navigate('/resources')} leftIcon={<MessageSquare className="w-4 h-4" />}>
            New Consultation
          </Button>
        </div>

        {chats.length === 0 ? (
          <EmptyState
            icon={<MessageSquare className="w-8 h-8 text-sky-500" />}
            title="No Conversation Transcripts"
            description="Consult with our AI career mentor for interview preparation, salary negotiation tips, and resume audits."
            actionLabel="Start New Chat"
            actionIcon={<MessageSquare className="w-4 h-4" />}
            onAction={() => navigate('/resources')}
          />
        ) : (
          <div className="space-y-3">
            {chats.map((chat, index) => (
              <motion.div
                key={chat.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
              >
                <Card
                  variant="glass"
                  hover="lift"
                  className="p-5 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4 flex-1 min-w-0 pr-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-500 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-foreground mb-1 truncate">{chat.title}</h3>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar className="w-3.5 h-3.5" />
                        Last Active: {new Date(chat.updated_at).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => deleteChat(chat.id)}
                      className="p-2 text-muted-foreground hover:text-rose-500 rounded-lg hover:bg-rose-500/10 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <Link
                      to={`/resources?chatId=${chat.id}`}
                      className="p-2 text-sky-500 hover:text-sky-400 rounded-lg hover:bg-sky-500/10 transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </DashboardLayout>
    </>
  );
};

export default ChatHistoryList;
