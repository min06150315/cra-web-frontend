import { UserPlus, Hourglass } from 'lucide-react';

interface RecruitBannerProps {
  year: string;
  term: string;
  isRecruiting: boolean;
  applyLink: string;
}

export const RecruitBanner = ({
  year,
  term,
  isRecruiting,
  applyLink,
}: RecruitBannerProps) => {
  return (
    <div className="text-center mb-16">
      <span className="bg-primary border-2 border-black text-black text-sm font-black px-4 py-1.5 rounded-full uppercase tracking-widest inline-block mb-4 shadow-[2px_2px_0px_0px_#000]">
        Recruiting {year}
      </span>
      <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8 uppercase leading-tight">
        CRA {term}기 <br className="md:hidden" /> 동아리원 모집
      </h2>

      <div className="max-w-3xl mx-auto">
        {isRecruiting ? (
          <div className="bg-primary border-4 border-black p-6 rounded-3xl shadow-[8px_8px_0px_0px_#000] flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-left">
              <div className="bg-white border-2 border-black w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                <UserPlus size={20} strokeWidth={3} className="text-black" />
              </div>
              <div>
                <h3 className="font-black text-lg text-black">
                  {term} 기수 동아리원을 모집합니다!
                </h3>
                <p className="text-sm font-medium text-black/80">
                  새로운 도전을 함께할 여러분을 기다리고 있어요.
                </p>
              </div>
            </div>
            <a
              href={applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-8 py-3.5 bg-black text-white font-black rounded-2xl hover:bg-white hover:text-black border-2 border-black shadow-[4px_4px_0px_0px_#fff] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all cursor-pointer inline-block text-center"
            >
              지금 지원하기
            </a>
          </div>
        ) : (
          <div className="bg-[#fee2e2] border-4 border-black p-6 rounded-3xl shadow-[8px_8px_0px_0px_#000] flex items-center gap-4 text-left">
            <div className="bg-white border-2 border-black w-10 h-10 rounded-full flex items-center justify-center shrink-0">
              <Hourglass size={20} strokeWidth={3} className="text-black" />
            </div>
            <div>
              <h3 className="font-black text-lg text-black">
                지금은 모집 기간이 아닙니다.
              </h3>
              <p className="text-sm font-medium text-gray-700">
                다음 리크루팅 기간에 찾아와 주세요!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
