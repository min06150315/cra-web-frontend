interface MascotBannerProps {
  imageSrc?: string;
}

export const MascotBanner = ({ imageSrc }: MascotBannerProps) => {
  return (
    <div className="relative bg-[#E2F1FF] border-2 border-black rounded-2xl h-40 md:h-44 shadow-[4px_4px_0px_0px_#000] flex items-center px-6 md:px-12 overflow-hidden group">
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:20px_20px]" />

      <div className="z-10 flex flex-col items-start max-w-[60%] md:max-w-[65%]">
        <h3 className="text-lg md:text-2xl font-black text-black leading-snug break-keep">
          "기록하고, 질문하며, 함께 증명해 나가는 공간"
        </h3>
        <p className="text-slate-800 text-xs md:text-sm font-bold mt-2 leading-relaxed break-keep">
          CRA의 모든 지식과 성장이 시작되는 곳입니다.
        </p>
      </div>

      <div className="absolute bottom-[-10px] right-2 md:right-6 w-36 sm:w-44 md:w-52 h-[110%] flex items-end justify-center pointer-events-none">
        <img
          src={imageSrc}
          alt="CRA 마스코트 크라"
          className="w-full h-full object-contain object-bottom transform group-hover:scale-105 group-hover:-rotate-1 transition-transform duration-300 filter drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]"
        />
      </div>
    </div>
  );
};
