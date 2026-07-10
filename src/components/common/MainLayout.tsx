import { Footer } from '@/components/common/Footer';
import { Header } from '@/components/common/Header';
import { useEffect, type PropsWithChildren } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';

export const MainLayout = ({ children }: PropsWithChildren) => {
  // 콘솔 창 꾸미기
  // useEffect(() => {
  //   window.console.log(
  //     '%c Welcome to CRA',
  //     'color: #00cfff; font-size: 3rem; font-family: "Pretendard Bold", BlinkMacSystemFont, Roboto, "Droid Sans", "Helvetica Neue", "Apple SD Gothic Neo", "sans-serif", sans-serif; font-weight: 700; text-shadow: 1px 2px 3px #a0e0f3;',
  //   );
  // }, []);

  return (
    <div className="min-h-screen flex flex-col bg-main text-black">
      <Header />
      <main className="flex-1 w-full pt-18">{children || <Outlet />}</main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};
