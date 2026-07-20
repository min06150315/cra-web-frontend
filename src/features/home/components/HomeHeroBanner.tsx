import MainBannerIMG from '@/assets/images/home/hero-main-cra.avif';

export const HomeHeroBanner = () => {
  return (
    <section className="relative w-screen h-[calc(100dvh-4.5rem)] overflow-hidden border-b-4 border-black bg-white">
      <img
        src={MainBannerIMG}
        alt="전체 화면 배경 이미지"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center px-4">
        <div className="bg-white border-4 border-black p-6 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-3xl transform -rotate-1 hover:rotate-0 transition-transform duration-200">
          <h1 className="text-3xl md:text-6xl font-black mb-4 tracking-tight text-black uppercase leading-tight">
            Computer Research Association
          </h1>
          <p className="inline-block bg-primary border-2 border-black px-4 py-2 text-sm md:text-lg font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            한동대학교 전산 연구회 동아리 (CRA)
          </p>
        </div>
      </div>
    </section>
  );
};
