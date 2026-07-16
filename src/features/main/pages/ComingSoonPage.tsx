import { useNavigate } from 'react-router-dom';

export const ComingSoonPage = () => {
  const navigate = useNavigate();

  return (
    <section className="flex min-h-screen items-center justify-center bg-primary px-6 py-24">
      <div className="w-full max-w-lg flex flex-col items-center text-center">
        <div className="flex items-center gap-x-2 mb-6">
          <span className="w-4 h-4 rounded-full bg-point-yellow border-2 border-black animate-ping" />
          <span className="px-3.5 py-1.5 bg-point-yellow text-black border-2 border-black rounded-lg text-xs md:text-sm font-black uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            COMING SOON
          </span>
        </div>

        <div className="w-full bg-white border-4 border-black p-8 md:p-10 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center gap-y-5 mb-8">
          <div className="w-20 h-20 bg-color-point-yellow border-4 border-black rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-4xl">
            🚧
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-black tracking-tight uppercase mt-2">
            새로운 기능이
            <br />곧 찾아옵니다!
          </h2>

          <div className="w-full h-1 bg-black my-1" />

          <p className="text-sm md:text-base font-bold text-slate-600 leading-relaxed">
            동아리원들을 위한 특별한 서비스를 준비하고 있습니다.
            <br />더 멋진 모습으로 찾아뵐 테니 조금만 기다려 주세요!
          </p>
        </div>

        <button
          onClick={() => navigate('/')}
          className="w-full py-4 border-2 border-black bg-white hover:bg-color-point-yellow rounded-lg text-sm md:text-base font-black text-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] cursor-pointer"
        >
          메인 화면으로 가기
        </button>
      </div>
    </section>
  );
};
