import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Edit3, Trash2 } from 'lucide-react';
import { useBoardDetail, useDeleteBoard } from '@/features/board/hooks/useBoard';
import { useComments } from '@/features/comment/hooks/useComment';
import { BoardDetailHeader } from '@/features/board/components/BoardDetailHeader';
import { BoardDetailContent } from '@/features/board/components/BoardDetailContent';
import { BoardCommentSection } from '@/features/comment/components/BoardCommentSection';
import { formatDateLong } from '@/utils/date';
import { useAuth } from '@/features/auth/hooks/useAuth';

const CATEGORY_MAP: Record<string, { title: string; emoji: string }> = {
  notice: { title: '공지사항', emoji: '📢' },
  blog: { title: '기술 블로그', emoji: '💻' },
  qna: { title: '질문답변 (Q&A)', emoji: '❓' },
};

export const BoardDetailPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { category = 'notice', id } = useParams<{ category: string; id: string }>();
  const currentCategory = CATEGORY_MAP[category] || CATEGORY_MAP.notice;

  const postId = id ? Number(id) : undefined;

  const { data: post, isLoading: isPostLoading, isError, error } = useBoardDetail(postId);
  const { data: comments = [] } = useComments(postId);
  const { mutate: deleteBoard, isPending: isDeleting } = useDeleteBoard();

  const isAuthor = user && post?.author && user.id === post.author.id;

  const handleDeletePost = () => {
    if (!post || !postId) return;

    if (window.confirm('정말로 이 게시글을 삭제하시겠습니까?')) {
      deleteBoard({
        boardId: postId,
        category: post.category,
      });
    }
  };

  if (isPostLoading) {
    return (
      <div className="p-10 text-center font-black text-blue-600 animate-pulse">
        ⏳ 게시글을 안전하게 불러오는 중입니다...
      </div>
    );
  }

  if (isError || !post || !postId) {
    return (
      <div className="p-6 bg-red-50 border-2 border-red-500 rounded-2xl text-red-700 m-4">
        <p className="font-black mb-2">💥 게시글을 불러오지 못했습니다.</p>
        <p className="text-xs font-mono">
          {(error as Error)?.message || '존재하지 않는 게시글 ID입니다.'}
        </p>
        <Link
          to={`/community/${category}`}
          className="mt-4 inline-block text-xs font-black underline"
        >
          목록으로 돌아가기
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-5 animate-fade-in">
      <div className="flex items-center">
        <Link
          to={`/community/${category}`}
          className="flex items-center gap-1 text-xs font-black text-slate-600 hover:text-black transition-colors"
        >
          <ArrowLeft size={14} strokeWidth={3} />
          목록으로 돌아가기
        </Link>
      </div>

      <BoardDetailHeader
        categoryTitle={currentCategory.title}
        categoryEmoji={currentCategory.emoji}
        title={post.title}
        author={post.author?.name || '알 수 없음'}
        createdAt={formatDateLong(post.created_at)}
        views={0}
        commentCount={comments.length}
      />

      <BoardDetailContent content={post.content} />

      {isAuthor && (
        <div className="flex justify-end gap-x-3 pt-2">
          <button
            onClick={() => navigate(`/community/board/update/${postId}`)}
            disabled={isDeleting}
            className="px-4 py-2.5 border-2 border-black rounded-xl text-xs md:text-sm font-black bg-white text-black transition-all flex items-center gap-2 cursor-pointer shadow-[3px_3px_0px_0px_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 disabled:opacity-50"
          >
            <Edit3 size={14} strokeWidth={3} />
            수정하기
          </button>

          <button
            onClick={handleDeletePost}
            disabled={isDeleting}
            className={`px-4 py-2.5 border-2 border-black rounded-xl text-xs md:text-sm font-black transition-all flex items-center gap-2 cursor-pointer shadow-[3px_3px_0px_0px_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 ${
              isDeleting ? 'bg-slate-300' : 'bg-red-500 text-white'
            }`}
          >
            <Trash2 size={14} strokeWidth={3} />
            {isDeleting ? '삭제 중...' : '삭제하기'}
          </button>
        </div>
      )}

      <BoardCommentSection boardId={postId} />
    </div>
  );
};
