import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { authAPI } from '@/features/auth/api/auth.api';

const loginSchema = z.object({
  username: z.string().min(1, '아이디를 입력해주세요.'),
  password: z.string().min(1, '비밀번호를 입력해주세요.'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: 'onTouched',
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setServerError(null);

    try {
      const response = await authAPI.login(data);
      const { accessToken, refreshToken } = response.resTokenDto;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      navigate('/');
    } catch (error: any) {
      console.error('로그인 실패:', error);
      setServerError('아이디 또는 비밀번호를 다시 확인해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    // TODO: 구글 로그인 연동 기능
    navigate('/coming-soon');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-y-6 bg-white border-4 border-black p-8 md:p-10 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
    >
      {/* 폼 타이틀 */}
      <div className="flex flex-col gap-y-1 text-center">
        <h2 className="text-2xl md:text-3xl font-black text-black tracking-tight uppercase">
          동아리원 로그인
        </h2>
        <p className="text-xs md:text-sm font-bold text-slate-500">
          서비스 이용을 위해 아이디와 비밀번호를 입력해주세요.
        </p>
      </div>

      {/* 아이디 필드 */}
      <div className="flex flex-col gap-y-2">
        <label className="text-xs md:text-sm font-black text-black">아이디</label>
        <input
          type="text"
          {...register('username')}
          placeholder="아이디를 입력하세요"
          className="w-full px-4 py-3.5 bg-white border-2 border-black rounded-lg text-sm md:text-base text-black font-bold placeholder-slate-400 focus:outline-none focus:bg-blue-50/40 transition-colors"
        />
        {errors.username && (
          <p className="text-xs md:text-sm text-red-600 font-extrabold pl-0.5">
            ⚠ {errors.username.message}
          </p>
        )}
      </div>

      {/* 비밀번호 필드 */}
      <div className="flex flex-col gap-y-2">
        <label className="text-xs md:text-sm font-black text-black">비밀번호</label>
        <input
          type="password"
          {...register('password')}
          placeholder="비밀번호를 입력하세요"
          className="w-full px-4 py-3.5 bg-white border-2 border-black rounded-lg text-sm md:text-base text-black font-bold placeholder-slate-400 focus:outline-none focus:bg-blue-50/40 transition-colors"
        />
        {errors.password && (
          <p className="text-xs md:text-sm text-red-600 font-extrabold pl-0.5">
            ⚠ {errors.password.message}
          </p>
        )}
      </div>

      {/* 서버 에러 메시지 */}
      {serverError && (
        <div className="p-3.5 bg-red-50 border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <p className="text-xs md:text-sm text-red-600 text-center font-black">
            {serverError}
          </p>
        </div>
      )}

      {/* 로그인 버튼*/}
      <div className="flex flex-col gap-y-3.5 mt-2">
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-4 border-2 border-black rounded-lg text-sm md:text-base font-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] cursor-pointer ${
            isLoading
              ? 'bg-slate-300 text-black cursor-not-allowed shadow-none translate-x-1 translate-y-1'
              : 'bg-primary text-black hover:bg-primary-hover hover:text-white'
          }`}
        >
          {isLoading ? '로그인 중...' : '로그인'}
        </button>

        {/* 구글 로그인 버튼 */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full py-4 flex items-center justify-center gap-x-2.5 bg-white border-2 border-black hover:bg-slate-100 rounded-lg text-sm md:text-base font-black text-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] cursor-pointer"
        >
          <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Google로 로그인 하기
        </button>
      </div>
    </form>
  );
};
