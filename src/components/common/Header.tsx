import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut, Settings, User } from 'lucide-react';
import { useLogoutMutation } from '@/features/auth/hooks/useAuth';
import CRALogoIMG from '@/assets/images/logos/logo-blue.avif';

export const Header = () => {
  const user = null;
  const isLoading = false;

  const navigate = useNavigate();
  const logoutMutation = useLogoutMutation();

  // 드롭다운 열림 상태
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 스크롤 내리면 헤더 사라지고, 스크롤 올리면 헤더 보이는 효과
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 처음 300px까지는 스크롤을 내려도 헤더 유지
      if (currentScrollY <= 300) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false); // 스크롤 내릴 때 숨김
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true); // 스크롤 올릴 때 보임
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // 로그아웃 핸들링
  const handleLogout = () => {
    setIsMenuOpen(false);

    logoutMutation.mutate(undefined, {
      onSuccess: () => {
        navigate('/');
      },
      onError: (error) => {
        console.error('로그아웃 중 오류가 발생했습니다:', error);
      },
    });
  };

  // 외부 영역 클릭 시 드롭다운 자동으로 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full bg-white transform transition-transform duration-300 border-b-4 border-black ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="mx-auto flex max-w-7xl h-20 items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center cursor-pointer shrink-0">
          <img src={CRALogoIMG} alt="CRA LOGO" className="h-10 w-auto object-contain" />
        </Link>

        <div className="flex items-center gap-x-6 md:gap-x-10">
          <nav className="flex items-center gap-x-6 md:gap-x-8 text-sm md:text-lg font-black tracking-tight antialiased text-black">
            <Link
              to="/project"
              className="relative cursor-pointer transition-colors duration-150 hover:text-primary"
            >
              프로젝트
            </Link>
            <Link
              to="/community"
              className="relative cursor-pointer transition-colors duration-150 hover:text-point-yellow"
            >
              커뮤니티
            </Link>
            <Link
              to="/recruit"
              className="relative cursor-pointer transition-colors duration-150 hover:text-[#ff5e8c]"
            >
              리크루팅
            </Link>
          </nav>

          {!isLoading && (
            <div className="relative" ref={dropdownRef}>
              {user ? (
                <button
                  type="button"
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  className={`group cursor-pointer text-black transition-all duration-200 border-2 border-black p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 ${
                    isMenuOpen
                      ? 'bg-primary translate-x-0.5 translate-y-0.5 shadow-none'
                      : 'bg-white hover:bg-primary'
                  }`}
                  aria-label="유저 메뉴 열기"
                >
                  <User className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
                </button>
              ) : (
                <Link
                  to="/login"
                  className="block group cursor-pointer text-black transition-all duration-200 border-2 border-black bg-white hover:bg-primary p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
                  aria-label="로그인"
                >
                  <User className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
                </Link>
              )}

              {isMenuOpen && user && (
                <div className="absolute right-0 mt-3 w-48 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col z-50 text-sm font-black text-black">
                  <div className="px-4 py-3 border-b-2 border-black bg-slate-50 text-xs text-slate-500 font-medium truncate">
                    {/* {user.email} */}
                  </div>

                  <Link
                    to="/profile"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-x-2 px-4 py-3 hover:bg-slate-100 border-b-2 border-black transition-colors"
                  >
                    <Settings className="w-4 h-4" strokeWidth={2.5} />
                    마이페이지
                  </Link>

                  <button
                    type="button"
                    onClick={handleLogout}
                    disabled={logoutMutation.isPending}
                    className="flex items-center gap-x-2 px-4 py-3 hover:bg-red-50 text-red-600 font-black transition-colors text-left cursor-pointer disabled:opacity-50"
                  >
                    <LogOut className="w-4 h-4" strokeWidth={2.5} />
                    {logoutMutation.isPending ? '로그아웃 중...' : '로그아웃'}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
