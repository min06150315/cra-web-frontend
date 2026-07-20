import type { User } from '@/features/auth/types/user.types';

export type Category = 'NOTICE' | 'BLOG' | 'QNA';

export interface Board {
  id: number;
  title: string;
  content: string;
  category: Category;
  // view: number;
  // fileUrl: string | null;
  // imageUrls: string[];
  created_at: string;
  user_id: string;
}

export interface CreateBoardDto {
  title: string;
  content: string;
  category: Category;
  user_id: string;
  // fileUrl: string | null;
  // imageUrls: string[];
}

export interface BoardWithAuthor extends Omit<Board, 'user_id'> {
  author: User;
}
