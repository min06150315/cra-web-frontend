import type { ResUserDetailDto } from "@/features/user/types";

export interface ResCreateCommentDto {
  id: number;
  boardId: number;
  userId: number;
  content: string;
  parentCommentId?: number;
  createAt: string;
}

export interface ResUpdateCommentDto {
  id: number;
  content: string;
  deleted?: boolean;
}

export interface ResListCommentDto {
  id: number;
  boardId: number;
  userId: number;
  resUserDetailDto: ResUserDetailDto;
  content: string;
  likeCount: number;
  resListCommentDto?: ResListCommentDto[];
  createAt: string;
  updatedAt?: string;
  deleted?: boolean;
}
