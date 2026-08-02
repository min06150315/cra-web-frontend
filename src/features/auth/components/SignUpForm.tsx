import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '@/features/auth/api/auth.api';

const signUpSchema = z
  .object({
    username: z
      .string()
      .min(4, '아이디는 최소 4글자 이상이어야 합니다.')
      .max(15, '아이디는 15글자를 넘을 수 없습니다.')
      .regex(/^[a-zA-Z0-9]+$/, '아이디는 영문 및 숫자만 사용 가능합니다.'),

    password: z
      .string()
      .min(8, '비밀번호는 최소 8글자 이상이어야 합니다.')
      .regex(
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        '영문, 숫자, 특수문자를 조합하여 입력해주세요.',
      ),

    confirmPassword: z.string().min(1, '비밀번호 확인을 입력해주세요.'),

    email: z
      .string()
      .min(1, '이메일을 입력해주세요.')
      .email('올바른 이메일 형식이 아닙니다.'),

    name: z
      .string()
      .min(2, '이름은 최소 2글자 이상이어야 합니다.')
      .regex(/^[가-힣a-zA-Z]+$/, '올바른 이름을 입력해주세요.'),

    githubId: z.string().min(1, 'GitHub 아이디를 입력해주세요.'),

    studentId: z
      .string()
      .min(1, '학번을 입력해주세요.')
      .regex(/^\d{8}$/, '올바른 8자리 숫자로만 입력해주세요.'),

    term: z.string().min(1, '기수를 입력해주세요.'),

    code: z.string().min(1, '동아리 가입 인증 코드를 입력해주세요.'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  });

type SignUpFormData = z.infer<typeof signUpSchema>;

export const SignUpForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    mode: 'onTouched',
    defaultValues: {
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      name: '',
      githubId: '',
      studentId: '',
      term: '',
      code: '',
    },
  });

  const onSubmit = async (data: SignUpFormData) => {
    setIsLoading(true);
    setServerError(null);

    const VALID_SIGNUP_CODE = import.meta.env.VITE_SIGNUP_CODE;

    if (!VALID_SIGNUP_CODE) {
      setServerError('서버 환경 변수가 설정되지 않았습니다. 운영진에게 문의하세요.');
      setIsLoading(false);
      return;
    }

    if (data.code !== VALID_SIGNUP_CODE) {
      setServerError('동아리 가입 인증 코드가 올바르지 않습니다.');
      setIsLoading(false);
      return;
    }

    try {
      const { confirmPassword, studentId, ...rest } = data;

      const signUpPayload = {
        ...rest,
        studentId: Number(studentId),
      };

      await authAPI.signUp(signUpPayload);

      alert('회원가입이 성공적으로 완료되었습니다! 로그인해 주세요.');
      navigate('/login');
    } catch (error: any) {
      console.error('회원가입 실패:', error);
      setServerError(error.message || '회원가입 처리 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full bg-white border-4 border-black p-8 md:p-10 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-y-6"
    >
      {/* 제목 */}
      <div className="text-center">
        <span className="inline-block px-2.5 py-1 bg-primary border-2 border-black rounded text-xs font-black uppercase tracking-wider mb-3">
          STEP 02
        </span>
        <h2 className="text-2xl md:text-3xl font-black text-black tracking-tight uppercase">
          동아리 회원가입
        </h2>
        <p className="text-xs md:text-sm font-bold text-slate-500 mt-1">
          CRA 서비스 이용을 위해 회원정보를 입력해주세요.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4">
        {/* 아이디 */}
        <div className="flex flex-col gap-y-1.5">
          <label className="text-xs md:text-sm font-black text-black">아이디</label>
          <input
            type="text"
            placeholder="사용할 아이디 입력"
            {...register('username')}
            className="w-full px-4 py-3 bg-white border-2 border-black rounded-lg text-sm md:text-base text-black font-bold placeholder-slate-400 focus:outline-none focus:bg-blue-50/40 transition-colors"
          />
          {errors.username && (
            <p className="text-xs md:text-sm text-red-600 font-extrabold pl-0.5">
              {errors.username.message}
            </p>
          )}
        </div>

        {/* 이름 */}
        <div className="flex flex-col gap-y-1.5">
          <label className="text-xs md:text-sm font-black text-black">이름</label>
          <input
            type="text"
            placeholder="홍길동"
            {...register('name')}
            className="w-full px-4 py-3 bg-white border-2 border-black rounded-lg text-sm md:text-base text-black font-bold placeholder-slate-400 focus:outline-none focus:bg-blue-50/40 transition-colors"
          />
          {errors.name && (
            <p className="text-xs md:text-sm text-red-600 font-extrabold pl-0.5">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* 비밀번호 */}
        <div className="flex flex-col gap-y-1.5">
          <label className="text-xs md:text-sm font-black text-black">비밀번호</label>
          <div className="relative w-full">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="영문, 숫자, 특수문자 조합 8자 이상"
              {...register('password')}
              className="w-full px-4 py-3 pr-12 bg-white border-2 border-black rounded-lg text-sm md:text-base text-black font-bold placeholder-slate-400 focus:outline-none focus:bg-blue-50/40 transition-colors"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-1 text-xs font-black bg-slate-100 border border-black rounded hover:bg-slate-200 text-black transition-colors"
            >
              {showPassword ? '숨김' : '보기'}
            </button>
          </div>
          {errors.password && (
            <p className="text-xs md:text-sm text-red-600 font-extrabold pl-0.5">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* 비밀번호 확인 */}
        <div className="flex flex-col gap-y-1.5">
          <label className="text-xs md:text-sm font-black text-black">
            비밀번호 확인
          </label>
          <div className="relative w-full">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="비밀번호 다시 입력"
              {...register('confirmPassword')}
              className="w-full px-4 py-3 pr-12 bg-white border-2 border-black rounded-lg text-sm md:text-base text-black font-bold placeholder-slate-400 focus:outline-none focus:bg-blue-50/40 transition-colors"
            />
          </div>
          {errors.confirmPassword && (
            <p className="text-xs md:text-sm text-red-600 font-extrabold pl-0.5">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* 이메일 */}
        <div className="flex flex-col gap-y-1.5 md:col-span-2">
          <label className="text-xs md:text-sm font-black text-black">이메일 주소</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            {...register('email')}
            className="w-full px-4 py-3 bg-white border-2 border-black rounded-lg text-sm md:text-base text-black font-bold placeholder-slate-400 focus:outline-none focus:bg-blue-50/40 transition-colors"
          />
          {errors.email && (
            <p className="text-xs md:text-sm text-red-600 font-extrabold pl-0.5">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* 깃허브 ID */}
        <div className="flex flex-col gap-y-1.5">
          <label className="text-xs md:text-sm font-black text-black">
            GitHub 유저네임
          </label>
          <input
            type="text"
            placeholder="github-username"
            {...register('githubId')}
            className="w-full px-4 py-3 bg-white border-2 border-black rounded-lg text-sm md:text-base text-black font-bold placeholder-slate-400 focus:outline-none focus:bg-blue-50/40 transition-colors"
          />
          {errors.githubId && (
            <p className="text-xs md:text-sm text-red-600 font-extrabold pl-0.5">
              {errors.githubId.message}
            </p>
          )}
        </div>

        {/* 학번 */}
        <div className="flex flex-col gap-y-1.5">
          <label className="text-xs md:text-sm font-black text-black">학번 (8자리)</label>
          <input
            type="text"
            inputMode="numeric"
            placeholder="ex) 22300265"
            {...register('studentId')}
            className="w-full px-4 py-3 bg-white border-2 border-black rounded-lg text-sm md:text-base text-black font-bold placeholder-slate-400 focus:outline-none focus:bg-blue-50/40 transition-colors"
          />
          {errors.studentId && (
            <p className="text-xs md:text-sm text-red-600 font-extrabold pl-0.5">
              {errors.studentId.message}
            </p>
          )}
        </div>

        {/* 기수 */}
        <div className="flex flex-col gap-y-1.5">
          <label className="text-xs md:text-sm font-black text-black">동아리 기수</label>
          <input
            type="text"
            placeholder="ex) 27-1"
            {...register('term')}
            className="w-full px-4 py-3 bg-white border-2 border-black rounded-lg text-sm md:text-base text-black font-bold placeholder-slate-400 focus:outline-none focus:bg-blue-50/40 transition-colors"
          />
          {errors.term && (
            <p className="text-xs md:text-sm text-red-600 font-extrabold pl-0.5">
              {errors.term.message}
            </p>
          )}
        </div>

        {/* 가입 인증 코드 */}
        <div className="flex flex-col gap-y-1.5">
          <label className="text-xs md:text-sm font-black text-black">
            가입 인증 코드
          </label>
          <input
            type="text"
            placeholder="운영진 배포 코드 입력"
            {...register('code')}
            className="w-full px-4 py-3 bg-white border-2 border-black rounded-lg text-sm md:text-base text-black font-bold placeholder-slate-400 focus:outline-none focus:bg-blue-50/40 transition-colors"
          />
          {errors.code && (
            <p className="text-xs md:text-sm text-red-600 font-extrabold pl-0.5">
              {errors.code.message}
            </p>
          )}
        </div>
      </div>

      {serverError && (
        <div className="p-3.5 mt-2 bg-red-50 border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <p className="text-xs md:text-sm text-red-600 text-center font-black">
            {serverError}
          </p>
        </div>
      )}

      {/* 회원가입 완료 버튼 */}
      <button
        type="submit"
        disabled={isLoading}
        className={`w-full py-4 mt-2 border-2 border-black rounded-lg text-sm md:text-base font-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 cursor-pointer ${
          isLoading
            ? 'bg-slate-300 text-black cursor-not-allowed shadow-none translate-x-1 translate-y-1'
            : 'bg-primary text-black hover:bg-primary-hover hover:text-white'
        }`}
      >
        {isLoading ? '가입 요청 중...' : '회원가입 완료'}
      </button>
    </form>
  );
};
