import type { UserRole } from "@/features/user/types/common.types";
import type { BaseEntity } from "@/types/common.types";


// 백엔드 User 도메인 엔티티 대응
export interface User extends BaseEntity {
  username: string;
  name: string;
  email: string;
  githubId: string;
  roles: UserRole[];
  studentId: string;
  term: string;
  greetingMessage?: string;
  imgUrl?: string;
  lastLoginAt?: string;
}

// 타 도메인(Board, Comment 등)에서 공통으로 재사용하는 유저 상세 정보 타입
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