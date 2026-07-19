import { useParams } from 'react-router-dom';
import { BoardListHeader } from '@/features/board/components/BoardListHeader';
import { BoardListContainer } from '@/features/board/components/BoardListContainer';
import type { BoardItem } from '@/features/board/components/BoardListItem';

const CATEGORY_MAP: Record<string, { title: string; desc: string; emoji: string }> = {
  notice: {
    title: '공지사항',
    desc: '동아리의 공식 소식과 학사 정보를 확인하세요.',
    emoji: '📢',
  },
  blog: {
    title: '기술 블로그',
    desc: '부원들이 공부하고 삽질하며 기록한 지식 저장소입니다.',
    emoji: '💻',
  },
  qna: {
    title: '질문답변 (Q&A)',
    desc: '개발하다 막힌 부분을 질문하고 함께 집단지성으로 해결합니다.',
    emoji: '❓',
  },
};

export const BoardListPage = () => {
  const { category = 'notice' } = useParams<{ category: string }>();
  const currentCategory = CATEGORY_MAP[category] || CATEGORY_MAP.notice;

  const mockBoards: BoardItem[] = [
    {
      id: 1,
      title: `${currentCategory.title} 첫 번째 테스트 게시물입니다. 단일 primary 컬러 조합 적용.`,
      author: '민경빈',
      created_at: '2026.07.16',
      views: 42,
      commentCount: 3,
    },
    {
      id: 2,
      title: '네오브루탈리즘의 굵은 테두리가 부담스러울 땐 2px 선과 투톤 분할이 답이다',
      author: '선배님',
      created_at: '2026.07.15',
      views: 128,
      commentCount: 5,
    },
    {
      id: 3,
      title: '배포 후 라우팅 깨짐 현상 관련 해결 공유글 (정제된 미디움 브루탈 버전)',
      author: 'CRA_Dev',
      created_at: '2026.07.12',
      views: 89,
    },
  ];

  return (
    <div className="space-y-5">
      <BoardListHeader
        title={currentCategory.title}
        desc={currentCategory.desc}
        emoji={currentCategory.emoji}
      />

      <BoardListContainer boards={mockBoards} category={category} />
    </div>
  );
};
