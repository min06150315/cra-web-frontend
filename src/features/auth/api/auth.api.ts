import { supabase } from '@/lib/supabase';
import type {
  LoginPayload,
  LoginResponse,
  SignUpPayload,
  SignUpResponse,
} from '@/features/auth/types/auth.types';

export const authAPI = {
  // 로그인 API
  login: async (data: LoginPayload): Promise<LoginResponse> => {
    const { data: authData, error } = await supabase.auth.signInWithPassword({
      email: data.username.includes('@') ? data.username : `${data.username}@example.com`,
      password: data.password,
    });

    if (error || !authData.user || !authData.session) {
      throw new Error(error?.message || '로그인에 실패했습니다.');
    }

    const metadata = authData.user.user_metadata;

    return {
      resUserDetailDto: {
        name: metadata.name || '',
        email: authData.user.email || '',
        studentId: Number(metadata.studentId) || 0,
        term: metadata.term || '',
        githubId: metadata.githubId || '',
        imgUrl: metadata.imgUrl || '',
        greetingMessage: metadata.greetingMessage || '',
      },
      resTokenDto: {
        userId: authData.user.id,
        accessToken: authData.session.access_token,
        refreshToken: authData.session.refresh_token || '',
      },
    };
  },

  // 구글 로그인 API
  loginWithGoogle: async (): Promise<void> => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
        queryParams: {
          access_type: 'offline',
          prompt: 'select_account',
        },
      },
    });

    if (error) {
      throw new Error(error.message || '구글 로그인 중 오류가 발생했습니다.');
    }
  },

  // 회원가입 API
  signUp: async (data: SignUpPayload): Promise<SignUpResponse> => {
    const { data: authData, error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          username: data.username,
          name: data.name,
          githubId: data.githubId,
          studentId: data.studentId,
          term: data.term,
          imgUrl: '',
          greetingMessage: '안녕하세요!',
        },
      },
    });

    if (error || !authData.user) {
      throw new Error(error?.message || '회원가입에 실패했습니다.');
    }

    const metadata = authData.user.user_metadata;

    return {
      id: authData.user.id,
      username: metadata.username || '',
      email: authData.user.email || '',
      name: metadata.name || '',
      githubId: metadata.githubId || '',
      studentNumber: Number(metadata.studentId) || 0,
      term: metadata.term || '',
    };
  },

  // 로그아웃 API
  logOut: async (): Promise<void> => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw new Error(error.message);
    }
  },
};
