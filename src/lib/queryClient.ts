import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      if (query.meta?.errorMessage) {
        console.error(query.meta.errorMessage);
      } else {
        alert(`데이터 로드 실패: ${error.message}`);
        console.error(error);
      }
    },
  }),

  mutationCache: new MutationCache({
    onError: (error) => {
      alert(`요청 처리 중 오류가 발생했습니다: ${error.message}`);
    },
  }),

  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,

      gcTime: 1000 * 60 * 60 * 24,

      retry: 2,

      refetchOnWindowFocus: true,
    },
    mutations: {
      retry: 0,
    },
  },
});

export default queryClient;