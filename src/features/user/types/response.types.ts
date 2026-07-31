import type { UserRole } from '@/features/user/types/common.types';

export interface ResUpdateUserDto {
  name: string;
  email: string;
  studentId: string;
  term: string;
  githubId: string;
  deleted: boolean;
  greetingMessage?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ResUserDetailDto {
  id: number;
  name: string;
  email: string;
  studentId: string;
  term: string;
  githubId: string;
  greetingMessage?: string;
  imgUrl?: string;
}

export interface ResUserAdminDetailDto extends ResUserDetailDto {
  userId: number;
  roles: UserRole[];
}

export interface ResPageUserDto {
  resUserAdminDetailDtos: ResUserAdminDetailDto[];
  totalPages: number;
}
