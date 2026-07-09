import MainBannerIMG from '@/assets/images/home/hero-main-cra.avif';

export const HomeHeroBanner = () => {
  return (
    <section className="relative w-screen h-screen overflow-hidden">
      <img
        src={MainBannerIMG}
        alt="전체 화면 배경 이미지"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight text-center">
          Computer Research Association
        </h1>
        <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl">
          한동대학교 전산 연구회 동아리
        </p>
      </div>
    </section>
  );
};
