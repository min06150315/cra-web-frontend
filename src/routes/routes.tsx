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
          Component: (await import('@/features/main/pages/RecruitPage')).RecruitPage,
        }),
      },
      {
        path: 'project',
        lazy: async () => ({
          Component: (await import('@/features/projects/pages/ProjectPage'))
            .ProjectPage,
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
        path: 'notice',
        children: [
          {
            index: true,
            lazy: async () => ({
              Component: (await import('@/features/notice/pages/NoticeListPage'))
                .NoticeListPage,
            }),
          },
          {
            path: ':id',
            lazy: async () => ({
              Component: (await import('@/features/notice/pages/NoticeDetailPage'))
                .NoticeDetailPage,
            }),
          },
        ],
      },
      {
        path: 'board',
        children: [
          {
            index: true,
            lazy: async () => ({
              Component: (await import('@/features/board/pages/BoardListPage'))
                .BoardListPage,
            }),
          },
          {
            path: 'create',
            lazy: async () => ({
              Component: (await import('@/features/board/pages/BoardCreatePage'))
                .BoardCreatePage,
            }),
          },
          {
            path: 'update/:id',
            lazy: async () => ({
              Component: (await import('@/features/board/pages/BoardUpdatePage'))
                .BoardUpdatePage,
            }),
          },
        ],
      },
    ],
  },
] satisfies RouteObject[];
