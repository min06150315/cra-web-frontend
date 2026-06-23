import { Footer } from '@/components/common/Footer';
import { Header } from '@/components/common/Header';
import type { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-6 md:py-12">
        {children || <Outlet />}
      </main>
      <Footer />
    </div>
  );
};
