import { Link } from 'react-router-dom';
import CRA_LOGO from '/cra/new-cra-logo.png';

export const Footer = () => {
  return (
    // bg-main(흰색) 배경, 기본 텍스트 text-base
    <footer className="text-base font-medium border-t border-gray-200 text-gray-600">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 pb-10 border-b border-gray-200">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={CRA_LOGO} alt="CRA LOGO" className="h-10 w-auto object-contain" />
              <div className="w-px h-4 bg-gray-300" />

              <Link
                to="https://github.com/Computer-Research-Association"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-gray-50 hover:bg-gray-100 rounded-full border border-gray-200 transition-colors text-gray-700 hover:text-black"
                title="GitHub"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </Link>

              <Link
                to="https://www.instagram.com/cra_handong/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-gray-50 hover:bg-gray-100 rounded-full border border-gray-200 transition-colors text-gray-700 hover:text-pink-600"
                title="Instagram"
              >
                <svg
                  className="w-5 h-5 fill-none stroke-current stroke-2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </Link>

              <Link
                to="https://youtube.com/@crahandong9622"
                target="_blank"
                rel="noreferrer"
                // w-9 h-9으로 버튼 크기 확대
                className="w-9 h-9 flex items-center justify-center bg-gray-50 hover:bg-gray-100 rounded-full border border-gray-200 transition-colors text-gray-700 hover:text-red-600"
                title="YouTube"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
            </div>

            <div className="space-y-2">
              <p>포항시 북구 한동로 558, 한동대학교 학생회관 206호</p>
              <p>
                <strong className="font-semibold mr-1 text-zinc-900">이메일</strong>{' '}
                contact@cra.com
              </p>
              <p>
                <strong className="font-semibold mr-1 text-zinc-900">회장</strong>{' '}
                010-1234-5678
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 tracking-wide text-gray-500 text-sm">
          <p>Copyright © 2026 CRA. All rights reserved.</p>

          <p className="font-medium text-gray-400">
            DEVELOPED BY <span className="text-primary-hover font-bold">CRA</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
