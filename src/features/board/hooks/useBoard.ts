import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import {
  getBoards,
  getBoardById,
  getBoardsByCategory,
  createBoard,
  updateBoard,
  deleteBoard,
} from '@/features/board/api/board.api';
import type {
  Board,
  CreateBoardDto,
  Category,
  BoardWithAuthor,
} from '@/features/board/types/board.types';

// 전체 게시글 목록 조회 훅
export const useBoards = () => {
  return useQuery<Board[]>({
    queryKey: ['boards'],
    queryFn: getBoards,
  });
};

// ID별 단일 게시글 상세 조회 훅
export const useBoardDetail = (boardId: number | undefined) => {
  return useQuery<BoardWithAuthor, Error>({
    queryKey: ['boards', boardId],
    queryFn: () => getBoardById(boardId!),
    enabled: !!boardId,
    retry: false,
  });
};

// 카테고리별 게시글 목록 조회 훅
export const useBoardsByCategory = (category: Category | undefined) => {
  return useQuery<BoardWithAuthor[]>({
    queryKey: ['boards', 'category', category],
    queryFn: () => getBoardsByCategory(category!),
    enabled: !!category,
  });
};

// 게시글 생성 훅
export const useCreateBoard = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (dto: CreateBoardDto) => createBoard(dto),
    onSuccess: (_, { category }) => {
      queryClient.invalidateQueries({ queryKey: ['boards'] });
      navigate(`/community/${category.toLowerCase()}`);
    },
  });
};

// 게시글 수정 훅
export const useUpdateBoard = (boardId: number) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (dto: Partial<CreateBoardDto>) => updateBoard(boardId, dto),
    onSuccess: (_, { category }) => {
      queryClient.invalidateQueries({ queryKey: ['boards'] });
      queryClient.invalidateQueries({ queryKey: ['boards', boardId] });
      navigate(`/community/${category?.toLowerCase()}/${boardId}`);
    },
  });
};

// 게시글 삭제 훅
export const useDeleteBoard = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ boardId }: { boardId: number; category: Category }) =>
      deleteBoard(boardId),
    onSuccess: (_, { boardId, category }) => {
      queryClient.invalidateQueries({ queryKey: ['boards'] });
      queryClient.removeQueries({ queryKey: ['boards', boardId] });

      // TODO: 게시글 삭제 모달 구현
      alert('게시글이 삭제되었습니다.');
      navigate(`/community/${category.toLowerCase()}`);
    },
  });
};
