import { MascotBanner } from '@/features/community/components/MascotBanner';
import { DashboardNoticeSection } from '@/features/community/components/DashboardNoticeSection';
import { DashboardBlogSection } from '@/features/community/components/DashboardBlogSection';
import { DashboardQnaSection } from '@/features/community/components/DashboardQnaSection';
import { useBoardsByCategory } from '@/features/board/hooks/useBoard';
import IMG_CRANG from '@/assets/images/mascot/mascot-crang.avif';

export const CommunityDashboardPage = () => {
  const { data: notices = [], isLoading: isNoticeLoading } =
    useBoardsByCategory('NOTICE');
  const { data: blogs = [], isLoading: isBlogLoading } = useBoardsByCategory('BLOG');
  const { data: qnas = [], isLoading: isQnaLoading } = useBoardsByCategory('QNA');

  const isAllLoading = isNoticeLoading || isBlogLoading || isQnaLoading;

  const latestNotices = [...notices]
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, 2);

  const latestBlogs = [...blogs]
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, 3);

  const latestQnas = [...qnas]
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, 3);

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

      {isAllLoading ? (
        <div className="bg-white border-2 border-black rounded-2xl shadow-[4px_4px_0px_0px_#000] p-16 text-center font-black text-sm text-black">
          ⏳ 대시보드 실시간 데이터를 불러오는 중...
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          <DashboardNoticeSection notices={latestNotices} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DashboardBlogSection blogs={latestBlogs} />
            <DashboardQnaSection qnas={latestQnas} />
          </div>
        </div>
      )}
    </div>
  );
};
