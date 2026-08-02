import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send } from 'lucide-react';
import { BoardCommentList } from './BoardCommentList';
import { useComments, useCreateComment, useDeleteComment } from '../hooks/useComments';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { supabase } from '@/lib/supabase';

interface BoardCommentSectionProps {
  boardId: number;
}

export const BoardCommentSection = ({ boardId }: BoardCommentSectionProps) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [newComment, setNewComment] = useState('');

  const { data: comments = [], isLoading } = useComments(boardId);
  const createCommentMutation = useCreateComment(boardId);
  const deleteCommentMutation = useDeleteComment(boardId);

  const handleInputFocus = () => {
    if (!user) {
      alert('로그인이 필요한 서비스입니다. 로그인 페이지로 이동합니다.');
      navigate('/login');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return handleInputFocus();
    if (!newComment.trim()) return;

    createCommentMutation.mutate({
      boardId,
      userId: user.id,
      content: newComment.trim(),
    });
    setNewComment('');
  };

  const handleUpdateComment = async (commentId: number, content: string) => {
    const { error } = await supabase
      .from('comments')
      .update({ content, updated_at: new Date() })
      .eq('id', commentId);

    if (error) alert('댓글 수정 실패: ' + error.message);
    else createCommentMutation.reset();
  };

  const handleDeleteComment = (commentId: number) => {
    if (window.confirm('댓글을 삭제하시겠습니까?')) {
      deleteCommentMutation.mutate(commentId);
    }
  };

  if (isLoading)
    return (
      <div className="text-xs font-bold text-slate-400 animate-pulse">
        💬 댓글 불러오는 중...
      </div>
    );

  return (
    <div className="bg-white border-2 border-black p-5 md:p-6 rounded-2xl shadow-[4px_4px_0px_0px_#000] space-y-6">
      <h3 className="text-base md:text-lg font-black text-black">
        댓글 ({comments.length})
      </h3>

      <BoardCommentList
        comments={comments}
        currentUserId={user?.id}
        onUpdate={handleUpdateComment}
        onDelete={handleDeleteComment}
      />

      <form onSubmit={handleSubmit} className="relative mt-4 flex items-center gap-2">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          onFocus={handleInputFocus}
          placeholder={
            user ? '따뜻한 댓글을 남겨주세요 💬' : '로그인 후 댓글 작성이 가능합니다.'
          }
          className="w-full px-4 py-3 border-2 border-black rounded-xl text-xs md:text-sm font-bold text-black bg-white placeholder-slate-400 focus:outline-none shadow-[2px_2px_0px_0px_#000]"
        />
        <button
          type="submit"
          disabled={createCommentMutation.isPending}
          className="shrink-0 flex items-center justify-center p-3 border-2 border-black rounded-xl bg-primary text-black transition-all hover:bg-black hover:text-white shadow-[2px_2px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none disabled:opacity-50"
          aria-label="댓글 등록"
        >
          <Send size={16} strokeWidth={2.5} />
        </button>
      </form>
    </div>
  );
};
