export const tagKeys = {
  all: ['tags'] as const,
  lists: () => [...tagKeys.all, 'list'] as const,
  list: () => [...tagKeys.lists(), 'all'] as const,
  searches: () => [...tagKeys.all, 'search'] as const,
  search: (name: string) => [...tagKeys.searches(), name] as const,
  details: () => [...tagKeys.all, 'detail'] as const,
  detail: (tagId: number) => [...tagKeys.details(), tagId] as const,
};