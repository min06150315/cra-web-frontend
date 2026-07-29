import type { ResUserDetailDto } from '@/features/user/types';

export interface ResSignupDto {
  id: number;
  username: string;
  email: string;
  name: string;
  githubId: string;
  studentId: string;
  term: string;
}

export interface ResTokenDto {
  accessToken: string;
  refreshToken: string;
}

export interface ResLoginDto {
  resUserDetailDto: ResUserDetailDto;
  resTokenDto: ResTokenDto;
}
