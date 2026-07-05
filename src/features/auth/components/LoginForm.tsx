import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { authAPI } from '@/features/auth/api/auth.api';

// Zod 스키마 정의
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

  // 로그인 제출 핸들러
  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setServerError(null);

    try {
      // API 함수 호출
      const response = await authAPI.login(data);

      // 로그인 성공하면 토큰을 로컬스토리지에 저장
      const { accessToken, refreshToken } = response.resTokenDto;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      // 로그인 성공 시 홈페이지로 이동
      navigate('/');
    } catch (error: any) {
      console.error('로그인 실패:', error);
      setServerError('아이디 또는 비밀번호를 다시 확인해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md p-8 mx-auto my-16 border rounded-2xl shadow-sm bg-white flex flex-col gap-y-4"
    >
      {/* 폼 타이틀 */}
      <div className="text-center mb-2">
        <h2 className="text-2xl font-bold">동아리원 로그인</h2>
      </div>

      {/* 아이디 필드 */}
      <div>
        <label className="block mb-1 text-xs font-semibold text-gray-600">아이디</label>
        <input
          type="text"
          {...register('username')}
          className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.username && (
          <p className="mt-1 text-xs text-red-500">{errors.username.message}</p>
        )}
      </div>

      {/* 비밀번호 필드 */}
      <div>
        <label className="block mb-1 text-xs font-semibold text-gray-600">비밀번호</label>
        <input
          type="password"
          {...register('password')}
          className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.password && (
          <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>
        )}
      </div>

      {/* 서버 에러 메시지 출력 */}
      {serverError && (
        <p className="text-sm text-red-500 text-center font-medium">{serverError}</p>
      )}

      {/* 로그인 버튼 */}
      <button
        type="submit"
        disabled={isLoading}
        className={`w-full py-2.5 rounded-md text-sm font-semibold text-white transition-colors ${
          isLoading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {isLoading ? '로그인 중...' : '로그인'}
      </button>
    </form>
  );
};
