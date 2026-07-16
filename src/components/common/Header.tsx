import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';
import CRALogoIMG from '@/assets/images/logos/logo-blue.avif';

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
              to="/notice"
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

          <Link
            to="/login"
            className="group cursor-pointer text-black transition-all duration-200 border-2 border-black bg-white hover:bg-primary p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
            aria-label="로그인"
          >
            <User className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </header>
  );
};
