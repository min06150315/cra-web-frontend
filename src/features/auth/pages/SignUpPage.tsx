import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { SignUpForm } from '@/features/auth/components/SignUpForm';
import { TermsStep } from '@/features/auth/components/TermsStep';

export const SignUpPage = () => {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState<'terms' | 'form'>('terms');

  useEffect(() => {
    if (!isLoading && user) {
      navigate('/', { replace: true });
    }
  }, [user, isLoading, navigate]);

  if (isLoading) return <div>로딩 중...</div>;
  if (user) return null;

  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-24">
      <div className="w-full max-w-2xl flex flex-col py-6">
        {step === 'terms' ? <TermsStep onNext={() => setStep('form')} /> : <SignUpForm />}
      </div>
    </section>
  );
};
