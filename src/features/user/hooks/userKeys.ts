export const userKeys = {
  all: ['users'] as const,
  lists: () => [...userKeys.all, 'list'] as const,
  list: (page: number, perPage?: number) =>
    [...userKeys.lists(), { page, perPage }] as const,
  searches: () => [...userKeys.all, 'search'] as const,
  search: (name: string) => [...userKeys.searches(), name] as const,
};