import { HISTORY_DATA } from '@/features/home/data/histories';

const HighlightText = ({ text }: { text: string }) => {
  const parts = text.split('#');
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong
            key={i}
            className="inline-block bg-primary text-black border border-black px-1.5 py-0.5 font-black mx-0.5 transform rotate-1"
          >
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
};

export const HomeHistory = () => {
  return (
    <section className="w-full py-20 md:py-32 px-6 bg-white border-b-4 border-black">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center md:text-left">
          <h2 className="inline-block text-3xl md:text-5xl font-black tracking-tight mb-4 bg-black text-white px-6 py-2 transform -rotate-1 border-2 border-black shadow-[4px_4px_0px_0px_#70b1f2]">
            HISTORY
          </h2>
          <p className="text-sm md:text-lg tracking-wide font-bold mt-4 text-black">
            CRA가 걸어온 혁신과 열정의 시간들입니다.
          </p>
        </div>

        <div className="relative border-l-4 border-black ml-4 md:ml-6 pl-8 md:pl-12 space-y-12 md:space-y-16">
          {HISTORY_DATA.map((item, index) => (
            <div key={index} className="relative group">
              <div className="absolute -left-10 md:-left-14.5 top-1.5 bg-white border-[3px] border-black w-5 h-5 z-10 transition-transform duration-200 group-hover:scale-125 group-hover:bg-primary" />

              <div className="bg-white border-3 border-black p-5 md:p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] transition-all duration-150">
                <div className="flex flex-col md:flex-row md:items-baseline md:gap-x-6 mb-4">
                  <span className="inline-block text-2xl md:text-3xl font-black tracking-tight bg-black text-white px-3 py-0.5 transform -rotate-1">
                    {item.year}년
                  </span>
                  <h3 className="text-lg md:text-xl font-extrabold text-black mt-2 md:mt-0 leading-snug">
                    <HighlightText text={item.title} />
                  </h3>
                </div>

                <ul className="space-y-3 text-sm md:text-base leading-relaxed font-bold text-gray-800">
                  {item.content.map((text, cIndex) => (
                    <li key={cIndex} className="flex items-start gap-x-2">
                      <span className="text-black font-black select-none">•</span>
                      <span>
                        <HighlightText text={text}></HighlightText>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
