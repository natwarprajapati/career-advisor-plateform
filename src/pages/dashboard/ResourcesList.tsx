import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { BookOpen, ExternalLink, Trash2, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@/contexts/UserContext';
import { supabase } from '@/integrations/supabase/client';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { ResourcesListSkeleton } from '@/components/dashboard';
import { Button, Card, EmptyState } from '@/ui';
import { useToast } from '@/hooks/use-toast';

interface Resource {
  id: string;
  topic: string;
  title: string;
  url: string | null;
  description: string | null;
  enrolled_at: string;
}

const ResourcesList = () => {
  const { userProfile, isLoading } = useUser();
  const navigate = useNavigate();
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (!isLoading && !userProfile) {
      navigate('/?getStarted=true', { replace: true, state: { fromDashboard: true } });
    }
  }, [userProfile, isLoading, navigate]);

  const fetchResources = useCallback(async () => {
    if (!userProfile) return;

    try {
      const { data, error } = await supabase
        .from('resources')
        .select('*')
        .eq('user_profile_id', userProfile.id)
        .order('enrolled_at', { ascending: false });

      if (error) throw error;
      setResources(data || []);
    } catch {
      // Silent error fallback
    } finally {
      setLoading(false);
    }
  }, [userProfile]);

  useEffect(() => {
    if (userProfile) {
      fetchResources();
    }
  }, [userProfile, fetchResources]);

  const deleteResource = async (id: string) => {
    try {
      const { error } = await supabase.from('resources').delete().eq('id', id);
      if (error) throw error;
      setResources((prev) => prev.filter((r) => r.id !== id));
      toast({ title: 'Resource removed successfully' });
    } catch (error) {
      toast({ title: 'Failed to remove resource', variant: 'destructive' });
    }
  };

  // Group resources by topic
  const groupedResources = resources.reduce((acc, resource) => {
    if (!acc[resource.topic]) {
      acc[resource.topic] = [];
    }
    acc[resource.topic].push(resource);
    return acc;
  }, {} as Record<string, Resource[]>);

  if (isLoading || loading) {
    return <ResourcesListSkeleton />;
  }

  return (
    <>
      <Helmet>
        <title>Learning Resources - Dashboard</title>
      </Helmet>

      <DashboardLayout>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">Learning Resources</h1>
            <p className="text-muted-foreground text-sm">Curated courses and learning paths you have saved</p>
          </div>
          <Button variant="primary" onClick={() => navigate('/resources')} leftIcon={<BookOpen className="w-4 h-4" />}>
            Explore More
          </Button>
        </div>

        {resources.length === 0 ? (
          <EmptyState
            icon={<BookOpen className="w-8 h-8 text-emerald-500" />}
            title="No Learning Resources Saved"
            description="Explore AI-recommended learning paths and specialized resources tailored to bridge your target skill gaps."
            actionLabel="Find Resources"
            actionIcon={<BookOpen className="w-4 h-4" />}
            onAction={() => navigate('/resources')}
          />
        ) : (
          <div className="space-y-8">
            {Object.entries(groupedResources).map(([topic, topicResources]) => (
              <motion.div
                key={topic}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <h2 className="text-lg font-bold text-foreground capitalize">{topic}</h2>
                  <span className="text-xs text-muted-foreground font-mono">({topicResources.length})</span>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {topicResources.map((resource, index) => (
                    <motion.div
                      key={resource.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Card
                        variant="glass"
                        hover="lift"
                        className="p-5 flex flex-col justify-between group h-full"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center">
                              <BookOpen className="w-5 h-5" />
                            </div>
                            <div className="flex items-center gap-1">
                              {resource.url && (
                                <a
                                  href={resource.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-2 text-muted-foreground hover:text-emerald-500 rounded-lg hover:bg-emerald-500/10 transition-colors"
                                >
                                  <ExternalLink className="w-4 h-4" />
                                </a>
                              )}
                              <button
                                onClick={() => deleteResource(resource.id)}
                                className="p-2 text-muted-foreground hover:text-rose-500 rounded-lg hover:bg-rose-500/10 transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                          <h3 className="font-bold text-foreground mb-1.5 line-clamp-2">{resource.title}</h3>
                          {resource.description && (
                            <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                              {resource.description}
                            </p>
                          )}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground pt-3 border-t border-border/40">
                          <Calendar className="w-3.5 h-3.5" />
                          Enrolled: {new Date(resource.enrolled_at).toLocaleDateString()}
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </DashboardLayout>
    </>
  );
};

export default ResourcesList;
