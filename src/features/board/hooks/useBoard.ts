import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { boardApi } from '@/features/board/api/board.api';
import type { Board } from '@/features/board/types/board.types';

// 1. 카테고리별 게시물 목록을 가져오는 훅
export function useBoards(category: string) {
  return useQuery<Board[]>({
    queryKey: ['boards', category],
    queryFn: () => boardApi.getBoards(category),
  });
}

// 2. 특정 게시물 하나를 상세 조회하는 훅
export function useBoardDetail(id: number) {
  return useQuery<Board>({
    queryKey: ['board', id],
    queryFn: () => boardApi.getBoardById(id),
    enabled: !!id,
  });
}

// 3. 새 글을 등록하는 훅
export function useCreateBoard() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Board) => boardApi.createBoard(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['boards'] });
    },
  });
}

// 4. 기존 글을 수정하는 훅
export function useUpdateBoard(id: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Board) => boardApi.updateBoard(id, data),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['boards'] });
      queryClient.invalidateQueries({ queryKey: ['board', id] });

    },
  });
}

// 5. 글을 삭제하는 훅
export function useDeleteBoard() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => boardApi.deleteBoard(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['boards'] });
    },
  });
}
