import type { ResUserDetailDto } from '@/features/user/types';
import { Category } from './common.types';
import type { ResListCommentDto } from '@/features/comment/types';
import type { ResTagDto } from '@/features/tag/types';

export interface ResLikedBoardDto {
  liked: boolean;
  likes: number;
}

export interface ResBoardPinDto {
  id: number;
  boardId: number;
  category: Category;
  pinedAt: string;
}

export interface ResListBoardDto {
  id: number;
  title: string;
  content: string;
  category: Category;
  likeCount: number;
  view: number;
  createdAt: string;
  updatedAt: string;
  commentCount: number;
  resUserDetailDto: ResUserDetailDto;
  tags: ResTagDto[];
}

export interface ResCreateBoardDto {
  id: number;
  title: string;
  content: string;
  category: Category;
  imageUrls: string[];
  createdAt: string;
  resUserDetailDto: ResUserDetailDto;
  tags: ResTagDto[];
}

export interface ResUpdateBoardDto {
  id: number;
  deleted: boolean;
  title: string;
  content: string;
  imageUrls: string[];
  createdAt: string;
  updatedAt: string;
  resUserDetailDto: ResUserDetailDto;
  tags: ResTagDto[];
}

export interface ResDetailBoardDto {
  id: number;
  title: string;
  content: string;
  category: Category;
  likeCount: number;
  view: number;
  imageUrls: string[];
  fileUrl?: string;
  createdAt: string;
  updatedAt: string;
  resUserDetailDto: ResUserDetailDto;
  viewerLiked: boolean;
  pidId?: number;
  isPined: boolean;
  resListCommentDto: ResListCommentDto[];
  tags: ResTagDto[];
}

export interface ResPageBoardDto {
  resListBoardDtos: ResListBoardDto[];
  resBoardPinDtos: ResListBoardDto[];
  totalPages: number;
}

export interface ResSearchPageBoardDto {
  resListBoardDtos: ResListBoardDto[];
  totalPages: number;
  totalBoards: number;
}
