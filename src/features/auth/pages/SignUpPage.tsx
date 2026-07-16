import { useState } from 'react';
import { TermsStep } from '@/features/auth/components/TermsStep';
import { SignUpForm } from '@/features/auth/components/SignUpForm';

export const SignUpPage = () => {
  const [step, setStep] = useState<'terms' | 'form'>('terms');

  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-24">
      <div className="w-full max-w-2xl flex flex-col py-6">
        {step === 'terms' ? (
          <TermsStep onNext={() => setStep('form')} />
        ) : (
          <SignUpForm />
        )}
      </div>
    </section>
  );
};
