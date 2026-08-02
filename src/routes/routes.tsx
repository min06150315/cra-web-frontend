import type { RouteObject } from 'react-router-dom';
import { MainLayout } from '@/components/common/MainLayout';
import { NotFoundPage, ServerErrorPage } from '@/features/error/pages';

export const routes = [
  {
    path: '/',
    element: <MainLayout />,
    errorElement: (
      <MainLayout>
        <ServerErrorPage />
      </MainLayout>
    ),
    children: [
      {
        path: '*',
        element: <NotFoundPage />,
      },
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
          Component: (await import('@/features/user/pages/ProfilePage')).ProfilePage,
        }),
      },
      {
        path: 'user',
        children: [
          {
            index: true,
            lazy: async () => ({
              Component: (await import('@/features/user/pages/UserListPage'))
                .UserListPage,
            }),
          },
          {
            path: ':id',
            lazy: async () => ({
              Component: (await import('@/features/user/pages/UserDetailPage'))
                .UserDetailPage,
            }),
          },
        ],
      },
      {
        path: 'community',
        lazy: async () => ({
          Component: (await import('@/features/community/layout/CommunityLayout'))
            .CommunityLayout,
        }),
        children: [
          {
            index: true,
            lazy: async () => ({
              Component: (
                await import('@/features/community/pages/CommunityDashboardPage')
              ).CommunityDashboardPage,
            }),
          },
          {
            path: 'board/create',
            lazy: async () => ({
              Component: (await import('@/features/board/pages/BoardCreatePage'))
                .BoardCreatePage,
            }),
          },
          {
            path: 'board/update/:id',
            lazy: async () => ({
              Component: (await import('@/features/board/pages/BoardUpdatePage'))
                .BoardUpdatePage,
            }),
          },
          {
            path: ':category',
            lazy: async () => ({
              Component: (await import('@/features/board/pages/BoardListPage'))
                .BoardListPage,
            }),
          },
          {
            path: ':category/:id',
            lazy: async () => ({
              Component: (await import('@/features/board/pages/BoardDetailPage'))
                .BoardDetailPage,
            }),
          },
        ],
      },
      {
        path: 'profile',
        lazy: async () => ({
          Component: (await import('@/features/user/pages/ProfilePage')).ProfilePage,
        }),
      },
    ],
  },
] satisfies RouteObject[];
