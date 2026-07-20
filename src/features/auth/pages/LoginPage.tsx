import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoginForm } from '@/features/auth/components/LoginForm';
import { useAuth } from '@/features/auth/hooks/useAuth';

export const LoginPage = () => {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && user) {
      navigate('/', { replace: true });
    }
  }, [user, isLoading, navigate]);

  if (isLoading) return <div>로딩 중...</div>;
  if (user) return null;

  return (
    <section className="flex min-h-screen items-center justify-center bg-blue-50/20 px-6 py-24">
      <div className="w-full max-w-md flex flex-col py-6">
        <LoginForm />

        <div className="relative flex py-6 items-center mt-4">
          <div className="grow border-t border-black/20"></div>
          <span className="shrink mx-4 text-slate-500 text-xs font-black uppercase tracking-widest bg-[#f4f2ed] px-2">
            OR
          </span>
          <div className="grow border-t border-black/20"></div>
        </div>

        <div className="text-center text-sm font-bold text-slate-600">
          아직 계정이 없으신가요?{' '}
          <Link
            to="/signup"
            className="inline-block font-black ml-1.5 px-3 py-1 border-2 border-black bg-primary text-black hover:bg-primary-hover hover:text-white transition-all rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
          >
            회원가입하기
          </Link>
        </div>
      </div>
    </section>
  );
};
