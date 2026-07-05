import { client } from '@/api/client';
import type { Board } from '@/features/board/types/board.types';

export const boardApi = {
  // 1. 카테고리별 전체 게시물 목록 가져오기
  getBoards: async (category: string): Promise<Board[]> => {
    const response = await client.get<Board[]>(`/board/${category}`);
    return response.data;
  },

  // 2. ID로 게시물 하나 가져오기
  getBoardById: async (id: number): Promise<Board> => {
    const response = await client.get<Board>(`/board/view/${id}`);
    return response.data;
  },

  // 3. 새 글 저장하기
  createBoard: async (data: Board): Promise<Board> => {
    const response = await client.post<Board>('/board', data);
    return response.data;
  },

  // 4. 기존 글 수정하기
  updateBoard: async (id: number, data: Board): Promise<Board> => {
    const response = await client.put<Board>(`/board/${id}`, data);
    return response.data;
  },

  // 5. 글 삭제하기
  deleteBoard: async (id: number): Promise<void> => {
    await client.delete(`/board/${id}`);
  },
};
