import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  createComment,
  updateComment,
  deleteComment,
} from '@/features/comment/api/comment.api';
import type { ReqCreateCommentDto, ReqUpdateCommentDto } from '@/features/comment/types';
import { boardKeys } from '@/features/board/hooks/boardKeys';

// 댓글 생성 훅
export const useCreateCommentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ boardId, dto }: { boardId: number; dto: ReqCreateCommentDto }) =>
      createComment(boardId, dto),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: boardKeys.detail(variables.boardId) });
    },
  });
};

// 댓글 수정 훅
export const useUpdateCommentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ commentId, dto }: { commentId: number; dto: ReqUpdateCommentDto }) =>
      updateComment(commentId, dto),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: boardKeys.details() });
    },
  });
};

// 댓글 삭제 훅
export const useDeleteCommentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (commentId: number) => deleteComment(commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: boardKeys.details() });
    },
  });
};
