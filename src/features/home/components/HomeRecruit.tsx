import { Link } from 'react-router-dom';

export const HomeRecruit = () => {
  return (
    <section className="relative w-full min-h-[650px] md:min-h-[750px] overflow-hidden">
      <img
        src="/cra/capstone-cra.jpg"
        alt="리크루팅 배경"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-slate-900/80 md:bg-[#1e2f47]/85 backdrop-blur-[1px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 md:py-24 flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-12 drop-shadow-sm">
          이런 사람과 함께하고 싶어요 🧐
        </h2>

        <div className="w-full max-w-xl rounded-2xl p-6 md:p-8 mb-12">
          <div className="space-y-4 text-base md:text-lg text-gray-100 font-medium">
            <p className="transition-all duration-200 hover:text-white">
              <span className="font-bold">도전 의식</span>이 있는 사람
            </p>
            <p className="transition-all duration-200 hover:text-white">
              <span className="font-bold">함께 성장하고 싶은</span> 사람
            </p>
            <p className="transition-all duration-200 hover:text-white">
              <span className="font-bold">배우는 데 두려움이 없는</span> 사람
            </p>
            <p className="transition-all duration-200 hover:text-white">
              많은 것을 <span className="font-bold">배우고</span>, 많은 것을{' '}
              <span className="font-bold">나눠줄</span> 사람
            </p>
            <p className="leading-relaxed">
              <span className="text-white font-bold">새내기</span>부터 고학번까지{' '}
              <span className="text-white font-bold">개발자, 디자이너</span> 모두
              환영합니다.
            </p>
          </div>
        </div>
        <Link
          to="/recruit"
          className="w-40 text-center px-8 py-4 bg-primary hover:bg-primary-hover text-white font-extrabold text-lg rounded-xl shadow-xl shadow-black/20 transform hover:-translate-y-1 active:translate-y-0 transition-all duration-300 tracking-wide"
        >
          지원하기!
        </Link>
      </div>
    </section>
  );
};
