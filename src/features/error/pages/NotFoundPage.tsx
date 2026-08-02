import { useNavigate } from 'react-router-dom';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <section className="flex min-h-screen items-center justify-center bg-primary px-6 py-24">
      <div className="w-full max-w-md flex flex-col items-center text-center">
        <div className="relative mb-8">
          <div className="px-8 py-4 bg-point-yellow border-4 border-black rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -rotate-3">
            <h1 className="text-6xl md:text-7xl font-black text-black tracking-tight">
              404
            </h1>
          </div>

          <div className="absolute -bottom-2 right-12 w-4 h-4 bg-point-yellow border-r-4 border-b-4 border-black rotate-45" />
        </div>

        <div className="w-full bg-white border-4 border-black p-8 md:p-10 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-y-5 mb-8">
          <h2 className="text-xl md:text-2xl font-black text-black uppercase">
            길을 잃으신 것 같아요!
          </h2>

          <div className="w-full h-1 bg-black my-1" />

          <p className="text-sm md:text-base font-bold text-slate-600 leading-relaxed">
            요청하신 페이지가 삭제되었거나,
            <br />
            주소가 잘못 입력되었을 수 있습니다.
          </p>
        </div>

        <div className="flex gap-x-4 w-full">
          <button
            onClick={() => navigate(-1)}
            className="flex-1 py-4 border-2 border-black bg-white hover:bg-slate-100 rounded-lg text-sm md:text-base font-black text-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 cursor-pointer"
          >
            이전으로
          </button>

          <button
            onClick={() => navigate('/')}
            className="flex-1 py-4 border-2 border-black bg-white hover:bg-point-yellow rounded-lg text-sm md:text-base font-black text-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 cursor-pointer"
          >
            홈으로 이동
          </button>
        </div>
      </div>
    </section>
  );
};
