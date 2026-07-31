import { BoardOrderBy, Category } from '@/features/board/types';

export interface ReqCreateBoardDto {
  title: string;
  content: string;
  category: Category;
  imageUrls?: string[];
  tagNames?: string[];
}

export interface ReqUpdateBoardDto {
  title?: string;
  content?: string;
  category?: Category;
  imageUrls?: string[];
  isChangedFile?: boolean;
  deleted?: boolean;
  tagNames?: string[];
}

export interface ReqBoardPinDto {
  boardId: number;
  category?: Category;
}

export interface ReqGetBoardListParams {
  category: Category;
  page: number;
  perPage: number;
  orderBy: BoardOrderBy;
  isASC: boolean;
}

export interface ReqSearchBoardListParams {
  page: number;
  keyword: string;
  category?: Category;
  perPage?: number;
  orderBy?: BoardOrderBy;
  isASC?: boolean;
}
