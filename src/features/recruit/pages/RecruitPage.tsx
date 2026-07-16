import { RECRUIT_DATA } from '@/features/recruit/data/recruit';
import { RecruitBanner } from '@/features/recruit/components/RecruitBanner';
import { RecruitPosters } from '@/features/recruit/components/RecruitPosters';
import { RecruitTalents } from '@/features/recruit/components/RecruitTalents';
import { RecruitSchedule } from '@/features/recruit/components/RecruitSchedule';

export const RecruitPage = () => {
  const {
    year,
    term,
    isRecruiting,
    applyLink,
    currentPoster,
    pastPosters,
    idealTalents,
    schedule,
  } = RECRUIT_DATA;

  return (
    <section className="min-h-screen bg-white text-black py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <RecruitBanner
          year={year}
          term={term}
          isRecruiting={isRecruiting}
          applyLink={applyLink}
        />

        <RecruitPosters
          term={term}
          currentPoster={currentPoster}
          pastPosters={pastPosters}
        />

        <RecruitTalents talents={idealTalents} />

        <RecruitSchedule schedule={schedule} />
      </div>
    </section>
  );
};
