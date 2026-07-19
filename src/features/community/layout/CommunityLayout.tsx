import { Outlet, Link, useLocation, useParams } from 'react-router-dom';
import { LayoutDashboard, Megaphone, BookOpen, HelpCircle } from 'lucide-react';

export const CommunityLayout = () => {
  const { pathname } = useLocation();
  const { category } = useParams<{ category?: string }>();

  const getActiveMenu = () => {
    if (pathname === '/community') return 'dashboard';
    if (category === 'notice') return 'notice';
    if (category === 'blog') return 'blog';
    if (category === 'qna') return 'qna';
    return '';
  };

  const activeMenu = getActiveMenu();

  const menuItems = [
    { id: 'dashboard', label: '커뮤니티 홈', path: '/community', icon: LayoutDashboard },
    { id: 'notice', label: '공지사항', path: '/community/notice', icon: Megaphone },
    { id: 'blog', label: '기술 블로그', path: '/community/blog', icon: BookOpen },
    { id: 'qna', label: '질문답변 (Q&A)', path: '/community/qna', icon: HelpCircle },
  ];

  return (
    <div className="bg-[#f4f4f5] min-h-screen font-sans antialiased text-black">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row gap-6 md:gap-8">
        <aside className="w-full md:w-64 shrink-0">
          <div className="hidden md:flex flex-col gap-y-3 bg-white border-2 border-black p-5 rounded-2xl shadow-[4px_4px_0px_0px_#000] sticky top-8">
            <h3 className="text-xs font-black text-black mb-1 uppercase tracking-wider border-b-2 border-black pb-2">
              Menu 📂
            </h3>

            <nav className="flex flex-col gap-y-2.5">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeMenu === item.id;
                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    className={`flex items-center gap-3 px-3.5 py-2.5 border-2 border-black rounded-xl text-sm font-bold transition-all cursor-pointer
                      ${
                        isActive
                          ? 'bg-primary text-black shadow-[2px_2px_0px_0px_#000] -translate-x-0.5 -translate-y-0.5 hover:bg-primary-hover'
                          : 'bg-white text-slate-700 hover:bg-primary hover:text-black shadow-none hover:shadow-[2px_2px_0px_0px_#000] hover:-translate-x-0.5 hover:-translate-y-0.5'
                      }`}
                  >
                    <Icon size={16} strokeWidth={2.5} className="text-black" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex md:hidden overflow-x-auto pb-3 gap-x-2 no-scrollbar">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeMenu === item.id;
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`flex items-center shrink-0 gap-2 px-4 py-2.5 border-2 border-black rounded-xl text-xs font-bold transition-all whitespace-nowrap
                    ${
                      isActive
                        ? 'bg-primary text-black shadow-[2px_2px_0px_0px_#000]'
                        : 'bg-white text-slate-700 shadow-none'
                    }`}
                >
                  <Icon size={14} strokeWidth={2.5} />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </aside>

        <main className="flex-1 min-w-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
