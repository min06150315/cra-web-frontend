import type { UserRole } from "@/features/user/types/common.types";
import type { ResUserDetailDto } from "@/features/user/types/entity.types";


export interface ResUserAdminDetailDto extends ResUserDetailDto {
  userId: number;
  roles: UserRole[]; // 👈 배열로 단순화
}

export interface ResPageUserDto {
  resUserAdminDetailDtos: ResUserAdminDetailDto[];
  totalPages: number;
}