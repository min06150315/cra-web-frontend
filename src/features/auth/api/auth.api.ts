import { publicClient, privateClient } from '@/api/client';
import type {
  LoginPayload,
  LoginResponse,
  SignUpPayload,
  SignUpResponse,
} from '@/features/auth/types/auth.types';

export const authAPI = {
  // 로그인 API
  login: async (data: LoginPayload): Promise<LoginResponse> => {
    const response = await publicClient.post<LoginResponse>('/auth/login', data);
    return response.data;
  },

  // 회원가입 API
  signUp: async (data: SignUpPayload): Promise<SignUpResponse> => {
    const response = await publicClient.post<SignUpResponse>('/auth/signup', data);
    return response.data;
  },

  // 로그아웃 API
  logOut: async (): Promise<void> => {
    await privateClient.post('/auth/logout');
  },
};
