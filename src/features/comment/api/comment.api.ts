import { privateClient } from '@/api/client';
import type {
  ReqCreateCommentDto,
  ReqUpdateCommentDto,
  ResCreateCommentDto,
  ResUpdateCommentDto,
} from '@/features/comment/types';

// 댓글 생성 (인증 O)
export const createComment = async (
  boardId: number,
  dto: ReqCreateCommentDto,
): Promise<ResCreateCommentDto> => {
  const { data } = await privateClient.post<ResCreateCommentDto>(
    `/api/comment/${boardId}`,
    dto,
  );
  return data;
};

// 댓글 수정 (인증 O)
export const updateComment = async (
  commentId: number,
  dto: ReqUpdateCommentDto,
): Promise<ResUpdateCommentDto> => {
  const { data } = await privateClient.put<ResUpdateCommentDto>(
    `/api/comment/${commentId}`,
    dto,
  );
  return data;
};

// 댓글 삭제 (인증 O)
export const deleteComment = async (commentId: number): Promise<void> => {
  await privateClient.delete(`/api/comment/${commentId}`);
};
