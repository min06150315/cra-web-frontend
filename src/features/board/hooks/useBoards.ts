import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import type {
  ReqBoardPinDto,
  ReqCreateBoardDto,
  ReqGetBoardListParams,
  ReqSearchBoardListParams,
} from '@/features/board/types';
import {
  deleteBoard,
  getBoard,
  increaseBoardView,
  getBoardList,
  searchBoard,
  createBoard,
  updateBoard,
  setBoardLike,
  createBoardPin,
  deleteBoardPin,
  getBoardPinList,
  getAllBoardPins,
} from '@/features/board/api/board.api';
import { boardKeys } from './boardKeys';

// Board 상세 조회 훅
export const useBoardDetailQuery = (boardId: number) => {
  return useQuery({
    queryKey: boardKeys.detail(boardId),
    queryFn: () => getBoard(boardId),
    enabled: Boolean(boardId),
  });
};

// Board 리스트 조회 훅
export const useBoardListQuery = (params: ReqGetBoardListParams) => {
  return useQuery({
    queryKey: boardKeys.list(params),
    queryFn: () => getBoardList(params),
  });
};

// Board 검색 훅
export const useSearchBoardQuery = (params: ReqSearchBoardListParams) => {
  return useQuery({
    queryKey: boardKeys.search(params),
    queryFn: () => searchBoard(params),
    enabled: Boolean(params.keyword),
  });
};

// 카테고리별 BoardPin 조회
export const useBoardPinListQuery = (category: number) => {
  return useQuery({
    queryKey: boardKeys.pinList(category),
    queryFn: () => getBoardPinList(category),
    enabled: category !== undefined && category !== null,
  });
};

// 모든 BoardPin 조회
export const useAllBoardPinsQuery = () => {
  return useQuery({
    queryKey: boardKeys.pins(),
    queryFn: () => getAllBoardPins(),
  });
};

// Board 생성 훅
export const useCreateBoardMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ dto, file }: { dto: ReqCreateBoardDto; file?: File }) =>
      createBoard(dto, file),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: boardKeys.lists() });
    },
  });
};

// Board 수정 훅
export const useUpdateBoardMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      boardId,
      dto,
      file,
    }: {
      boardId: number;
      dto: ReqCreateBoardDto;
      file?: File;
    }) => updateBoard(boardId, dto, file),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: boardKeys.lists() });
      queryClient.invalidateQueries({ queryKey: boardKeys.detail(variables.boardId) });
    },
  });
};

// Board 삭제 훅
export const useDeleteBoardMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (boardId: number) => deleteBoard(boardId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: boardKeys.lists() });
    },
  });
};

// Board 조회수 증가 훅
export const useIncreaseBoardViewMutation = () => {
  return useMutation({
    mutationFn: (boardId: number) => increaseBoardView(boardId),
  });
};

// Board 좋아요/취소 훅
export const useSetBoardLikeMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ boardId, isLike }: { boardId: number; isLike: boolean }) =>
      setBoardLike(boardId, isLike),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: boardKeys.detail(variables.boardId) });
    },
  });
};

// BoardPin 생성
export const useCreateBoardPinMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (dto: ReqBoardPinDto) => createBoardPin(dto),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: boardKeys.pins() });
    },
  });
};

// BoardPin 삭제
export const useDeleteBoardPinMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (pinId: number) => deleteBoardPin(pinId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: boardKeys.pins() });
    },
  });
};
