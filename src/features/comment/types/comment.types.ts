import type { User } from '@/features/auth/types/user.types';

export interface Comment {
  id: number;
  board_id: number;
  user_id: string;
  content: string;
  created_at: string;
  updated_at: string;
}

export interface CommentWithAuthor extends Omit<Comment, 'user_id'> {
  author: User;
}

export interface CreateCommentDto {
  boardId: number;
  userId: string;
  content: string;
}
