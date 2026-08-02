import { Link } from 'react-router-dom';
import CRACapStoneIMG from '@/assets/images/home/capstone-cra.avif';

export const HomeRecruit = () => {
  return (
    <section className="relative w-full min-h-162.5 md:min-h-187.5 overflow-hidden border-b-4 border-black bg-slate-950">
      <img
        src={CRACapStoneIMG}
        alt="리크루팅 배경"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-slate-900/80 md:bg-[#1e2f47]/85 backdrop-blur-[1px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 md:py-24 flex flex-col items-center justify-center text-center">
        <h2 className="inline-block text-3xl md:text-5xl font-black tracking-tight text-black bg-white border-4 border-black px-6 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-12">
          이런 사람과 함께하고 싶어요 🧐
        </h2>

        <div className="w-full max-w-xl bg-white border-4 border-black p-6 md:p-10 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] mb-12">
          <div className="space-y-5 text-base md:text-xl text-black font-extrabold text-left">
            <p className="flex items-center gap-x-3 border-b-2 border-black pb-2">
              <span className="bg-blue-50 border-2 border-black px-2 py-0.5 text-sm">
                01
              </span>
              <span>
                <span className="bg-primary/30 px-1.5 py-0.5 border border-black transform -rotate-1 inline-block">
                  도전 의식
                </span>
                이 있는 사람
              </span>
            </p>
            <p className="flex items-center gap-x-3 border-b-2 border-black pb-2">
              <span className="bg-blue-50 border-2 border-black px-2 py-0.5 text-sm">
                02
              </span>
              <span>
                <span className="bg-primary/30 px-1.5 py-0.5 border border-black transform rotate-1 inline-block">
                  함께 성장하고 싶은
                </span>{' '}
                사람
              </span>
            </p>
            <p className="flex items-center gap-x-3 border-b-2 border-black pb-2">
              <span className="bg-blue-50 border-2 border-black px-2 py-0.5 text-sm">
                03
              </span>
              <span>
                <span className="bg-primary/30 px-1.5 py-0.5 border border-black transform -rotate-1 inline-block">
                  배우는 데 두려움이 없는
                </span>{' '}
                사람
              </span>
            </p>
            <p className="flex items-center gap-x-3 border-b-2 border-black pb-2">
              <span className="bg-blue-50 border-2 border-black px-2 py-0.5 text-sm">
                04
              </span>
              <span className="bg-primary/30 px-1.5 py-0.5 border border-black transform -rotate-1 inline-block">
                많은 것을 배우고
              </span>
              나눠줄 사람
            </p>
            <p className="leading-relaxed bg-black text-white p-4 border-2 border-black text-center text-sm md:text-base mt-4">
              새내기부터 고학번까지 <br className="md:hidden" />
              <span className="text-primary font-black">개발자, 디자이너</span> 모두
              환영합니다!
            </p>
          </div>
        </div>

        <Link
          to="/recruit"
          className="w-48 text-center px-8 py-5 bg-primary hover:bg-primary-hover text-black hover:text-white font-black text-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 tracking-wide uppercase"
        >
          지원하기!
        </Link>
      </div>
    </section>
  );
};
