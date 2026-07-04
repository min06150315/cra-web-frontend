import { Footer } from '@/components/common/Footer';
import { Header } from '@/components/common/Header';
import type { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen flex flex-col bg-main text-black">
      <Header />
      <main className="flex-1 w-full">{children || <Outlet />}</main>
      <Footer />
    </div>
  );
};
