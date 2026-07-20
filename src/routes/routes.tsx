import type { RouteObject } from 'react-router-dom';
import { MainLayout } from '@/components/common/MainLayout';
import { NotFoundPage } from '@/features/main/pages/NotFoundPage';

export const routes = [
  {
    path: '/',
    element: <MainLayout />,
    errorElement: (
      <MainLayout>
        <NotFoundPage />
      </MainLayout>
    ),
    children: [
      {
        index: true,
        lazy: async () => ({
          Component: (await import('@/features/home/pages/HomePage')).HomePage,
        }),
      },
      {
        path: 'recruit',
        lazy: async () => ({
          Component: (await import('@/features/recruit/pages/RecruitPage')).RecruitPage,
        }),
      },
      {
        path: 'project',
        lazy: async () => ({
          Component: (await import('@/features/projects/pages/ProjectPage')).ProjectPage,
        }),
      },
      {
        path: 'login',
        lazy: async () => ({
          Component: (await import('@/features/auth/pages/LoginPage')).LoginPage,
        }),
      },
      {
        path: 'signup',
        lazy: async () => ({
          Component: (await import('@/features/auth/pages/SignUpPage')).SignUpPage,
        }),
      },
      {
        path: 'profile',
        lazy: async () => ({
          Component: (await import('@/features/user/pages/ProfilePage')).ProfilePage
        })
      },
      {
        path: 'community',
        lazy: async () => ({
          Component: (await import('@/features/community/layout/CommunityLayout'))
            .CommunityLayout,
        }),
        children: [
          // 1) /community (대시보드 홈)
          {
            index: true,
            lazy: async () => ({
              Component: (
                await import('@/features/community/pages/CommunityDashboardPage')
              ).CommunityDashboardPage,
            }),
          },
          // 2) /community/board/create (글쓰기 페이지 - 카테고리 상관없이 통합 글쓰기 폼 활용)
          {
            path: 'board/create',
            lazy: async () => ({
              Component: (await import('@/features/board/pages/BoardCreatePage'))
                .BoardCreatePage,
            }),
          },
          // 3) /community/board/update/:id (글 수정하기 페이지)
          {
            path: 'board/update/:id',
            lazy: async () => ({
              Component: (await import('@/features/board/pages/BoardUpdatePage'))
                .BoardUpdatePage,
            }),
          },
          // 4) /community/:category (각 게시판 리스트: notice | blog | qna)
          {
            path: ':category',
            lazy: async () => ({
              Component: (await import('@/features/board/pages/BoardListPage'))
                .BoardListPage,
            }),
          },
          // 5) /community/:category/:id (게시물 상세 페이지)
          {
            path: ':category/:id',
            lazy: async () => ({
              Component: (await import('@/features/board/pages/BoardDetailPage'))
                .BoardDetailPage,
            }),
          },
        ],
      },
    ],
  },
  {
    path: '/coming-soon',
    lazy: async () => ({
      Component: (await import('@/features/main/pages/ComingSoonPage')).ComingSoonPage,
    }),
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
] satisfies RouteObject[];
