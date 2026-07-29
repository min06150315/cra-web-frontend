import type { Category } from '@/features/board/types/common.types';
import type { ResTagDto } from '@/features/tag/types';
import type { ResUserDetailDto } from '@/features/user/types';
import type { BaseEntity } from '@/types/common.types';

export interface Board extends BaseEntity {
  title: string;
  content: string;
  category: Category;
  likeCount?: number;
  view?: number;
  imageUrls?: string[];
  fileUrl?: string;
  commentCount?: number;
  resUserDetailDto: ResUserDetailDto;
  tags: ResTagDto[];
  viewerLiked?: boolean;
  isPined?: boolean;
}

export interface BoardPin extends BaseEntity {
  boardId: number;
  category: Category;
  pinedAt: string;
}
