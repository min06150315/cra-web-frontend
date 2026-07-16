import MainBannerIMG from '@/assets/images/home/hero-main-cra.avif';

export const HomeHeroBanner = () => {
  return (
    // 1. 전체 높이를 '전체 화면(100dvh) - 헤더 높이(h-18 = 4.5rem = 72px)'로 정확히 계산합니다.
    // 2. 헤더 밑에서 바로 시작하도록 상단 마진(mt-18)을 주어 자연스럽게 밀어냅니다.
    <section className="relative w-screen h-[calc(100dvh-4.5rem)] overflow-hidden border-b-4 border-black bg-white">
      <img
        src={MainBannerIMG}
        alt="전체 화면 배경 이미지"
        className="w-full h-full object-cover"
      />

      {/* 내부 콘텐츠도 줄어든 영역에 맞춰 딱 맞게 중앙에 정렬됩니다. */}
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
