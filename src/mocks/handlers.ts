import { http, HttpResponse } from 'msw';
import type { Board } from '@/features/board/types/board.types';

let MOCK_BOARDS: Board[] = [
  {
    id: 1,
    title: '게시물테스트1',
    content: '내용테스트1',
    category: 'NOTICE',
    created_at: new Date(),
  },
  {
    id: 2,
    title: '게시물테스트2',
    content: '내용테스트2',
    category: 'ACADEMIC',
    created_at: new Date(),
  },
  {
    id: 3,
    title: '게시물테스트3',
    content: '내용테스트3',
    category: 'NOTICE',
    created_at: new Date(),
  },
  {
    id: 4,
    title: '게시물테스트4',
    content: '내용테스트4',
    category: 'ACADEMIC',
    created_at: new Date(),
  },
  {
    id: 5,
    title: '게시물테스트5',
    content: '내용테스트5',
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

  http.get('/board/view/:id', ({ params }) => {
    const { id } = params;
    const board = MOCK_BOARDS.find((b) => b.id === Number(id));

    if (!board) {
      return new HttpResponse(JSON.stringify({ message: 'Not Found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    return HttpResponse.json(board);
  }),

  http.post('/board', async ({ request }) => {
    const newPost = (await request.json()) as Partial<Board>;

    const createdPost: Board = {
      id:
        MOCK_BOARDS.length > 0
          ? Math.max(...MOCK_BOARDS.map((b) => b.id as number)) + 1
          : 1,
      title: newPost.title || '제목 없음',
      content: newPost.content || '내용 없음',
      category: newPost.category || 'NOTICE',
      created_at: new Date(),
    };

    MOCK_BOARDS.push(createdPost);

    return HttpResponse.json(createdPost, { status: 201 });
  }),

  http.put('/board/:id', async ({ params, request }) => {
    const { id } = params;
    const updateData = (await request.json()) as Partial<Board>;

    const boardIndex = MOCK_BOARDS.findIndex((b) => b.id === Number(id));

    if (boardIndex === -1) {
      return new HttpResponse(JSON.stringify({ message: 'Not Found' }), { status: 404 });
    }

    MOCK_BOARDS[boardIndex] = {
      ...MOCK_BOARDS[boardIndex],
      ...updateData,
    };

    return HttpResponse.json(MOCK_BOARDS[boardIndex]);
  }),

  http.delete('/board/:id', ({ params }) => {
    const { id } = params;

    const exists = MOCK_BOARDS.some((b) => b.id === Number(id));

    if (!exists) {
      return new HttpResponse(JSON.stringify({ message: 'Not Found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    MOCK_BOARDS = MOCK_BOARDS.filter((b) => b.id !== Number(id));

    return new HttpResponse(null, { status: 204 });
  }),
];
