import type {
  ReqGetBoardListParams,
  ReqSearchBoardListParams,
} from '@/features/board/types';

export const boardKeys = {
  all: ['boards'] as const,
  lists: () => [...boardKeys.all, 'list'] as const,
  list: (params: ReqGetBoardListParams) => [...boardKeys.lists(), params] as const,
  searches: () => [...boardKeys.all, 'search'] as const,
  search: (params: ReqSearchBoardListParams) =>
    [...boardKeys.searches(), params] as const,
  details: () => [...boardKeys.all, 'detail'] as const,
  detail: (boardId: number) => [...boardKeys.details(), boardId] as const,
  pins: () => [...boardKeys.all, 'pins'] as const,
  pinList: (category: number) => [...boardKeys.pins(), 'category', category] as const,
};
