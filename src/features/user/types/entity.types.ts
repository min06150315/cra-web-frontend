import type { UserRole } from "@/features/user/types/common.types";
import type { BaseEntity } from "@/types/common.types";

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
