import { http, HttpResponse } from 'msw';
import type { Board } from '@/features/board/types/board.types';

const MOCK_BOARDS: Board[] = [
  {
    id: 1,
    title: '상병 6호봉',
    content: '집가고 싶다',
    category: 'NOTICE',
    created_at: new Date(),
  },
  {
    id: 2,
    title: 'KCTC 훈련',
    content: '하기 싫어',
    category: 'ACADEMIC',
    created_at: new Date(),
  },
];

export const handlers = [
  http.get('/board/:category', ({ params }) => {
    const { category } = params;
    const filtered = MOCK_BOARDS.filter((b) => b.category === category);

    return HttpResponse.json(filtered);
  }),

  http.get('/board/:id', ({ params }) => {
    const { id } = params;
    const board = MOCK_BOARDS.find((b) => b.id === Number(id));

    if (!board) {
      return new HttpResponse(null, { status: 404 });
    }
    return HttpResponse.json(board);
  }),
];
