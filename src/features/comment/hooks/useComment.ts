import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getCommentsByBoardId, createComment, deleteComment } from '../api/comment.api';
import type { CreateCommentDto } from '../types/comment.types';

// 게시물의 댓글 목록 조회 훅
export const useComments = (boardId: number | undefined) => {
  return useQuery({
    queryKey: ['comments', boardId],
    queryFn: () => getCommentsByBoardId(boardId!),
    enabled: !!boardId,
  });
};

// 댓글 작성 훅
export const useCreateComment = (boardId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (dto: CreateCommentDto) => createComment(dto),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments', boardId] });
    },
  });
};

// 댓글 삭제 훅
export const useDeleteComment = (boardId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (commentId: number) => deleteComment(commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments', boardId] });
    },
  });
};
