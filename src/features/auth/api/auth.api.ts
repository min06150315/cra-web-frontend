import { publicClient, privateClient } from '@/api/client';
import type {
  ReqSignupDto,
  ReqLoginDto,
  ReqReissueTokenDto,
  ResSignupDto,
  ResLoginDto,
  ResTokenDto,
} from '@/features/auth/types';

// 회원가입 (인증 X)
export const signup = async (dto: ReqSignupDto): Promise<ResSignupDto> => {
  const { data } = await publicClient.post<ResSignupDto>('/api/auth/signup', dto);
  return data;
};

// 로그인 (인증 X)
export const login = async (dto: ReqLoginDto): Promise<ResLoginDto> => {
  const { data } = await publicClient.post<ResLoginDto>('/api/auth/login', dto);
  return data;
};

// 액세스 토큰 재발급 (인증 X)
export const reissueToken = async (dto: ReqReissueTokenDto): Promise<ResTokenDto> => {
  const { data } = await publicClient.post<ResTokenDto>('/api/auth/reissue-token', dto);
  return data;
};

// 로그아웃 (인증 O)
export const logout = async (): Promise<void> => {
  await privateClient.post('/api/auth/logout');
};
