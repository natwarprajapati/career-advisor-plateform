import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ArrowRight, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@/contexts/UserContext';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/ui/Input/Input';
import { Button } from '@/ui';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetStartedModal = ({ isOpen, onClose }: GetStartedModalProps) => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { loginWithPhone } = useUser();
  const { toast } = useToast();

  const validatePhone = (value: string): string | null => {
    if (!value) {
      return "Mobile number is required";
    }
    if (value.length < 10) {
      return `Enter 10 digits (${value.length}/10)`;
    }
    if (!/^[6-9]\d{9}$/.test(value)) {
      return "Enter a valid 10-digit mobile number starting with 6, 7, 8, or 9";
    }
    return null;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Digits only, max 10 digits
    const cleaned = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhone(cleaned);

    if (cleaned.length > 0) {
      if (cleaned.length === 10) {
        setError(validatePhone(cleaned));
      } else {
        // Clear full error while typing until 10 digits
        if (error && error.includes("starting with")) {
          setError(null);
        }
      }
    } else {
      setError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validatePhone(phone);
    
    if (validationError) {
      setError(validationError);
      toast({
        title: "Invalid Mobile Number",
        description: validationError,
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const { profile, isExisting } = await loginWithPhone(phone);

      if (isExisting && profile.name && profile.name !== 'User' && profile.name !== 'Candidate') {
        toast({
          title: `Welcome back, ${profile.name}! 👋`,
          description: "Your candidate profile and saved data have been restored.",
        });
      } else {
        toast({
          title: isExisting ? "Welcome back! 👋" : "Welcome to Career Navigator! 🚀",
          description: isExisting
            ? "Your candidate profile and saved data have been restored."
            : "Your candidate profile has been created. Let's start your career journey.",
        });
      }

      onClose();
      navigate('/dashboard');
    } catch {
      toast({
        title: "Session Error",
        description: "Unable to start session. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const isValidPhone = phone.length === 10 && /^[6-9]\d{9}$/.test(phone);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none"
          >
            <div className="glass-card p-6 sm:p-8 w-full max-w-md pointer-events-auto border border-border/80 shadow-2xl">
              {/* Header */}
              <div className="text-center mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.15, type: 'spring' }}
                  className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3 shadow-md"
                >
                  <Sparkles className="w-7 h-7" />
                </motion.div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight mb-1">
                  Access Career Navigator
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Enter your 10-digit mobile number to sign in or create your profile.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Mobile Number */}
                <div className="space-y-1.5">
                  <label htmlFor="modal-phone" className="block text-xs font-bold text-foreground">
                    Mobile Number
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-muted-foreground z-10 font-semibold text-xs border-r border-border pr-2">
                      <Phone className="w-3.5 h-3.5" />
                      <span>+91</span>
                    </div>
                    <Input
                      id="modal-phone"
                      type="tel"
                      inputMode="numeric"
                      maxLength={10}
                      placeholder="98765 43210"
                      value={phone}
                      onChange={handlePhoneChange}
                      error={error || undefined}
                      className="pl-16 text-sm font-semibold tracking-wider font-mono"
                      autoFocus
                    />
                    {isValidPhone && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-500 z-10">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    )}
                  </div>

                  <p className="text-[11px] text-muted-foreground flex items-center gap-1 mt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    Returning users will automatically restore their saved profile.
                  </p>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading || !isValidPhone}
                  className="w-full btn-primary flex items-center justify-center gap-2 font-bold py-3 text-sm mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                    />
                  ) : (
                    <>
                      <span>Continue to Dashboard</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default GetStartedModal;

