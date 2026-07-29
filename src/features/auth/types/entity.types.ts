import type { BaseEntity } from "@/types/common.types";

export interface RefreshToken extends BaseEntity {
  userId: number;
  refreshToken: string;
}
