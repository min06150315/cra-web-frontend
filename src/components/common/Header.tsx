import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';
import CRA_LOGO from '/cra/new-cra-logo.avif';

export const Header = () => {
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

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full bg-main transform transition-transform duration-300 border-b border-gray-200 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="mx-auto flex max-w-7xl h-18 items-center justify-between px-4 sm:px-6">
        {/* 1. 로고 영역 */}
        <Link to="/" className="flex items-center cursor-pointer shrink-0">
          <img src={CRA_LOGO} alt="CRA LOGO" className="h-9 w-auto object-contain" />
        </Link>

        <div className="flex items-center gap-x-6 md:gap-x-10">
          <nav className="flex items-center gap-x-6 md:gap-x-8 text-[13px] md:text-base font-semibold tracking-wide antialiased">
            <Link
              to="/project"
              className="cursor-pointer transition-colors duration-200 hover:text-gray-400"
            >
              프로젝트
            </Link>
            <Link
              to="/notice"
              className="cursor-pointer transition-colors duration-200 hover:text-gray-400"
            >
              커뮤니티
            </Link>
            <Link
              to="/recruit"
              className="cursor-pointer transition-colors duration-200 hover:text-gray-400"
            >
              리크루팅
            </Link>
          </nav>

          <Link
            to="/login"
            className="cursor-pointer text-gray-400 transition-colors duration-200 hover:text-gray-900 flex items-center justify-center p-1"
            aria-label="로그인"
          >
            <User className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.8} />
          </Link>
        </div>
      </div>
    </header>
  );
};
