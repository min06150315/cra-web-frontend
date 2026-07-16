interface Talent {
  num: string;
  title: string;
  desc: string;
}

interface RecruitTalentsProps {
  talents: Talent[];
}

export const RecruitTalents = ({ talents }: RecruitTalentsProps) => {
  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-2 uppercase">
          WHO WE ARE LOOKING FOR
        </h3>
        <p className="text-gray-700 font-medium">
          CRA는 기술보다 성장하려는 의지와 협동 정신을 더 가치 있게 여깁니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {talents.map((talent) => (
          <div
            key={talent.num}
            className="bg-white border-4 border-black p-8 rounded-3xl shadow-[8px_8px_0px_0px_#70b1f2] relative flex flex-col justify-between"
          >
            <div>
              <span className="absolute -top-4 left-8 bg-black text-white text-lg font-black px-4 py-1 rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_#70b1f2]">
                {talent.num}
              </span>

              <h4 className="text-xl font-black mt-4 mb-3 text-black">{talent.title}</h4>
              <p className="text-gray-800 font-medium text-base leading-relaxed">
                {talent.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
