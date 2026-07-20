import { useParams } from 'react-router-dom';
import { BoardListHeader } from '@/features/board/components/BoardListHeader';
import { BoardListContainer } from '@/features/board/components/BoardListContainer';
import { useBoardsByCategory } from '@/features/board/hooks/useBoard';
import type { Category } from '@/features/board/types/board.types';

const CATEGORY_MAP: Record<
  string,
  { title: string; desc: string; emoji: string; dbCategory: Category }
> = {
  notice: {
    title: '공지사항',
    desc: '동아리의 공식 소식과 학사 정보를 확인하세요.',
    emoji: '📢',
    dbCategory: 'NOTICE',
  },
  blog: {
    title: '기술 블로그',
    desc: '부원들이 공부하고 삽질하며 기록한 지식 저장소입니다.',
    emoji: '💻',
    dbCategory: 'BLOG',
  },
  qna: {
    title: '질문답변 (Q&A)',
    desc: '개발하다 막힌 부분을 질문하고 함께 집단지성으로 해결합니다.',
    emoji: '❓',
    dbCategory: 'QNA',
  },
};

export const BoardListPage = () => {
  const { category = 'notice' } = useParams<{ category: string }>();
  const currentCategory = CATEGORY_MAP[category] || CATEGORY_MAP.notice;

  const { data: boards = [], isLoading } = useBoardsByCategory(
    currentCategory.dbCategory,
  );

  return (
    <div className="space-y-5">
      <BoardListHeader
        title={currentCategory.title}
        desc={currentCategory.desc}
        emoji={currentCategory.emoji}
      />

      {!isLoading && (
        <div className="flex items-center gap-x-2 px-1">
          <span className="text-sm md:text-base font-black text-black">전체 글</span>
          <span className="bg-primary text-black text-xs md:text-sm font-black px-2.5 py-0.5 border-2 border-black rounded-full shadow-[2px_2px_0px_0px_#000]">
            {boards.length}개
          </span>
        </div>
      )}

      {isLoading ? (
        <div className="bg-white border-2 border-black rounded-2xl shadow-[4px_4px_0px_0px_#000] p-16 text-center font-bold text-sm">
          ⏳ 게시물을 불러오는 중입니다...
        </div>
      ) : (
        <BoardListContainer boards={boards} category={category} />
      )}
    </div>
  );
};
