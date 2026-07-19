import { MascotBanner } from '@/features/community/components/MascotBanner';
import { DashboardNoticeSection } from '@/features/community/components/DashboardNoticeSection';
import { DashboardBlogSection } from '@/features/community/components/DashboardBlogSection';
import { DashboardQnaSection } from '@/features/community/components/DashboardQnaSection';
import IMG_CRANG from '@/assets/images/mascot/mascot-crang.avif';

export const CommunityDashboardPage = () => {
  const mockNotices = [
    {
      id: 1,
      title: '📢 [필독] 2026학년도 2학기 동아리 리크루팅 안내',
      created_at: '2026-07-16',
    },
    {
      id: 2,
      title: '🎓 [학사] 수강신청 전 필수 이수과목 체크 가이드',
      created_at: '2026-07-14',
    },
  ];

  const mockBlogs = [
    { id: 10, title: 'React 19 Server Actions 완벽 정리하기', created_at: '2026-07-15' },
    {
      id: 11,
      title: 'Supabase Row Level Security(RLS) 적용 가이드',
      created_at: '2026-07-12',
    },
    {
      id: 12,
      title: 'Tailwind CSS로 힙한 물리 버튼 UI 구현법',
      created_at: '2026-07-10',
    },
  ];

  const mockQnas = [
    {
      id: 20,
      title: 'Next.js 15 배포 시 미들웨어 무한 루프 도는 원인?',
      created_at: '2026-07-16',
      commentCount: 3,
    },
    {
      id: 21,
      title: 'TypeScript에서 Omit 사용 시 제네릭 타입 에러 질문',
      created_at: '2026-07-14',
      commentCount: 1,
    },
    {
      id: 22,
      title: 'yarn berry 환경에서 eslint 로더 깨지는 문제 해결',
      created_at: '2026-07-11',
      commentCount: 0,
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-white border-2 border-black rounded-2xl p-6 md:p-8 shadow-[4px_4px_0px_0px_#000]">
        <h2 className="text-xl md:text-2xl font-black text-black flex items-center gap-3">
          CRA COMMUNITY
        </h2>
        <p className="text-slate-600 font-bold text-xs md:text-sm mt-2 leading-relaxed">
          CRA 부원들이 자유롭게 기술을 정리하고, 개발 질문을 던지며, 소통하는 통합
          커뮤니티 허브입니다.
        </p>
      </div>

      <MascotBanner imageSrc={IMG_CRANG} />

      <div className="flex flex-col gap-6">
        <DashboardNoticeSection notices={mockNotices} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DashboardBlogSection blogs={mockBlogs} />
          <DashboardQnaSection qnas={mockQnas} />
        </div>
      </div>
    </div>
  );
};
