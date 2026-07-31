import { publicClient, privateClient } from '@/api/client';
import type {
  ReqCreateBoardDto,
  ReqUpdateBoardDto,
  ReqBoardPinDto,
  ResCreateBoardDto,
  ResDetailBoardDto,
  ResLikedBoardDto,
  ResPageBoardDto,
  ResSearchPageBoardDto,
  ResBoardPinDto,
  ReqGetBoardListParams,
  ReqSearchBoardListParams,
} from '@/features/board/types';

// Board 삭제 (인증 O)
export const deleteBoard = async (boardId: number): Promise<void> => {
  await privateClient.delete(`/api/board/${boardId}`);
};

// Board 상세 조회 (인증 X)
export const getBoard = async (boardId: number): Promise<ResDetailBoardDto> => {
  const { data } = await publicClient.get<ResDetailBoardDto>(`/api/board/${boardId}`);
  return data;
};

// Board 조회수 증가 (인증 X)
export const increaseBoardView = async (boardId: number): Promise<void> => {
  await publicClient.post(`/api/board/view/${boardId}`);
};

// Board 페이지 조회 (인증 X)
export const getBoardList = async ({
  category,
  page,
  perPage = 0,
  orderBy = 0,
  isASC = true,
}: ReqGetBoardListParams): Promise<ResPageBoardDto> => {
  const { data } = await publicClient.get<ResPageBoardDto>(
    `/api/board/${category}/page/${page}`,
    {
      params: { perPage, orderBy, isASC },
    },
  );
  return data;
};

// Board 검색 (인증 X)
export const searchBoard = async (
  params: ReqSearchBoardListParams,
): Promise<ResSearchPageBoardDto> => {
  const { data } = await publicClient.get<ResSearchPageBoardDto>('/api/board/search', {
    params,
  });
  return data;
};

// Board 생성 (인증 O)
export const createBoard = async (
  dto: ReqCreateBoardDto,
  file?: File,
): Promise<ResCreateBoardDto> => {
  const formData = new FormData();

  formData.append('board', new Blob([JSON.stringify(dto)], { type: 'application/json' }));

  if (file) {
    formData.append('file', file);
  }

  const { data } = await privateClient.post<ResCreateBoardDto>('/api/board', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return data;
};

// Board 수정 (인증 O)
export const updateBoard = async (
  boardId: number,
  dto: ReqUpdateBoardDto,
  file?: File,
): Promise<ResDetailBoardDto> => {
  const formData = new FormData();

  formData.append('board', new Blob([JSON.stringify(dto)], { type: 'application/json' }));

  if (file) {
    formData.append('file', file);
  }

  const { data } = await privateClient.put<ResDetailBoardDto>(
    `/api/board/${boardId}`,
    formData,
    {
      headers: { 'Content-Type': 'multipart/form-data' },
    },
  );

  return data;
};

// Board 좋아요 / 취소 (인증 O)
export const setBoardLike = async (
  boardId: number,
  isLike: boolean,
): Promise<ResLikedBoardDto> => {
  const { data } = await privateClient.post<ResLikedBoardDto>(
    `/api/board/like/${boardId}`,
    null,
    { params: { isLike } },
  );
  return data;
};

// BoardPin 생성 (인증 O)
export const createBoardPin = async (dto: ReqBoardPinDto): Promise<ResBoardPinDto> => {
  const { data } = await privateClient.post<ResBoardPinDto>('/api/admin/board/pin', dto);
  return data;
};

// BoardPin 삭제 (인증 O)
export const deleteBoardPin = async (pinId: number): Promise<void> => {
  await privateClient.delete(`/api/admin/board/pin/${pinId}`);
};

// 카테고리별 BoardPin 조회 (인증 X)
export const getBoardPinList = async (category: number): Promise<ResBoardPinDto[]> => {
  const { data } = await publicClient.get<ResBoardPinDto[]>(
    `/api/admin/board/pin/${category}`,
  );
  return data;
};

// 모든 BoardPin 조회 (인증 X)
export const getAllBoardPins = async (): Promise<ResBoardPinDto[]> => {
  const { data } = await publicClient.get<ResBoardPinDto[]>('/api/admin/board/pin');
  return data;
};
