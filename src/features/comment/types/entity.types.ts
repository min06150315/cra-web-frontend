import type { BaseEntity } from '@/types/common.types';

export interface Comment extends BaseEntity {
  board_id: number;
  userId: number;
  parentCommentId?: number;
  commentList?: Comment[];
  content: string;
  likeCount?: number;
}
