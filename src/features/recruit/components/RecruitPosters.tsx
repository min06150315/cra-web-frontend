interface RecruitPostersProps {
  term: string;
  currentPoster: string;
  pastPosters: string[];
}

export const RecruitPosters = ({
  term,
  currentPoster,
  pastPosters,
}: RecruitPostersProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 items-start">
      <div className="lg:col-span-7 flex flex-col">
        <h3 className="text-xl font-black mb-4 flex items-center gap-2">
          <span className="bg-black text-white px-2 py-0.5 rounded text-sm">{term}</span>{' '}
          이번 학기 모집 포스터
        </h3>
        <div className="border-4 border-black rounded-3xl overflow-hidden shadow-[10px_10px_0px_0px_#70b1f2] bg-gray-100">
          <img
            src={currentPoster}
            alt={`${term} Recruiting Poster`}
            className="w-full h-auto object-contain block"
            title=""
          />
        </div>
      </div>

      <div className="lg:col-span-5 flex flex-col">
        <h3 className="text-xl font-black mb-1">지난 리크루팅 히스토리</h3>
        <p className="text-sm font-medium text-gray-600 mb-4">
          CRA가 걸어온 지난 여정의 포스터들입니다.
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-2 gap-3 max-h-248 overflow-y-auto pr-2 scrollbar-thin">
          {pastPosters.map((poster, index) => (
            <div
              key={index}
              className="border-2 border-black rounded-xl overflow-hidden shadow-[3px_3px_0px_0px_#000] aspect-3/4 bg-gray-100"
            >
              <img
                src={poster}
                alt={`Past Poster ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
