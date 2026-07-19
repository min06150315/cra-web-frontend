import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { BoardDetailHeader } from '@/features/board/components/BoardDetailHeader';
import { BoardDetailContent } from '@/features/board/components/BoardDetailContent';
import {
  BoardCommentSection,
  type CommentItem,
} from '@/features/board/components/BoardCommentSection';

const CATEGORY_MAP: Record<string, { title: string; emoji: string }> = {
  notice: { title: '공지사항', emoji: '📢' },
  blog: { title: '기술 블로그', emoji: '💻' },
  qna: { title: '질문답변 (Q&A)', emoji: '❓' },
};

export const BoardDetailPage = () => {
  const { category = 'notice', id } = useParams<{ category: string; id: string }>();
  const currentCategory = CATEGORY_MAP[category] || CATEGORY_MAP.notice;

  const [post] = useState({
    id: Number(id),
    title: '네오브루탈리즘의 굵은 테두리가 부담스러울 땐 2px 선과 투톤 분할이 답이다',
    content: `안녕하세요, 부원 여러분! 요즘 프론트엔드 트렌드 중 하나인 네오브루탈리즘(Neo-Brutalisim) UI를 커스텀하면서 느낀 점을 공유합니다.\n\n기존의 4px 이상의 너무 두꺼운 블랙 보더는 컴포넌트가 과하게 무거워 보이고 텍스트 가독성을 해칠 수 있습니다. 이럴 때는 보더 두께를 2px로 반감시키고, 단일 Primary 컬러 베이스에 파스텔톤이나 연한 슬레이트 투톤 분할을 적용하면 훨씬 정제되면서도 힙한 느낌을 살릴 수 있습니다.\n\n우리 동아리 허브 커뮤니티에도 이 규칙을 적용해 보았으니 코드 확인해 보세요!`,
    author: '선배님',
    created_at: '2026.07.15',
    views: 128,
  });

  // Mock Comments State
  const [comments, setComments] = useState<CommentItem[]>([
    {
      id: 1,
      author: '민경빈',
      content: '와 대박 꿀팁이네요! 바로 프로젝트에 적용해보겠습니다.',
      created_at: '2026.07.15',
    },
    {
      id: 2,
      author: 'CRA_Dev',
      content: '2px 보더에 격자 무늬 배경 스펙 조합도 엄청 예쁘더라구요.',
      created_at: '2026.07.16',
    },
  ]);

  // 댓글 등록 핸들러
  const handleAddComment = (content: string) => {
    const newCommentObj: CommentItem = {
      id: Date.now(),
      author: '민경빈', // 추후 로그인된 유저 세션 정보 매핑
      content,
      created_at: '2026.07.19',
    };
    setComments([...comments, newCommentObj]);
  };

  return (
    <div className="space-y-5 animate-fade-in">
      {/* 뒤로가기 액션 바 */}
      <div className="flex items-center">
        <Link
          to={`/community/board/${category}`}
          className="flex items-center gap-1 text-xs font-black text-slate-600 hover:text-black transition-colors"
        >
          <ArrowLeft size={14} strokeWidth={3} />
          목록으로 돌아가기
        </Link>
      </div>

      {/* 1. 상단 상세 헤더 */}
      <BoardDetailHeader
        categoryTitle={currentCategory.title}
        categoryEmoji={currentCategory.emoji}
        title={post.title}
        author={post.author}
        createdAt={post.created_at}
        views={post.views}
        commentCount={comments.length}
      />

      {/* 2. 본문 내용 */}
      <BoardDetailContent content={post.content} />

      {/* 3. 하단 댓글 컴포넌트 */}
      <BoardCommentSection comments={comments} onAddComment={handleAddComment} />
    </div>
  );
};
