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
          Component: (await import('@/features/main/pages/HomePage')).HomePage,
        }),
      },
      {
        path: 'recruit',
        lazy: async () => ({
          Component: (await import('@/features/main/pages/RecruitPage')).RecruitPage,
        }),
      },
      {
        path: 'login',
        lazy: async () => ({
          Component: (await import('@/features/auth/pages/LoginPage')).LoginPage,
        }),
      },
      {
        path: 'register',
        lazy: async () => ({
          Component: (await import('@/features/auth/pages/RegisterPage')).RegisterPage,
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
            path: 'view/:id',
            lazy: async () => ({
              Component: (await import('@/features/notice/pages/NoticeDetailPage'))
                .NoticeDetailPage,
            }),
          },
        ],
      },
    ],
  },
] satisfies RouteObject[];
