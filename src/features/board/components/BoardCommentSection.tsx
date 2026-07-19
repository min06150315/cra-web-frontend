import { useState } from 'react';
import { Send } from 'lucide-react';

export interface CommentItem {
  id: number;
  author: string;
  content: string;
  created_at: string;
}

interface BoardCommentSectionProps {
  comments: CommentItem[];
  onAddComment: (content: string) => void;
}

export const BoardCommentSection = ({
  comments,
  onAddComment,
}: BoardCommentSectionProps) => {
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    onAddComment(newComment);
    setNewComment('');
  };

  return (
    <div className="bg-white border-2 border-black p-5 md:p-6 rounded-2xl shadow-[4px_4px_0px_0px_#000] space-y-6">
      <h3 className="text-base md:text-lg font-black text-black">
        댓글 ({comments.length})
      </h3>

      {/* 댓글 리스트 */}
      <div className="space-y-4 divide-y-2 divide-dashed divide-slate-100">
        {comments.map((comment, index) => (
          <div key={comment.id} className={`pt-4 first:pt-0 space-y-1.5`}>
            <div className="flex items-center gap-2">
              <span className="text-xs font-black text-black bg-slate-100 px-1.5 py-0.5 border border-black rounded-md">
                {comment.author}
              </span>
              <span className="text-[10px] font-bold text-slate-400">
                {comment.created_at}
              </span>
            </div>
            <p className="text-sm font-bold text-slate-800 break-all pl-0.5">
              {comment.content}
            </p>
          </div>
        ))}

        {comments.length === 0 && (
          <div className="p-8 text-center text-slate-400 font-bold text-xs md:text-sm">
            아직 작성된 댓글이 없습니다. 첫 의견을 남겨보세요!
          </div>
        )}
      </div>

      {/* 댓글 작성 폼 */}
      <form onSubmit={handleSubmit} className="relative mt-4 flex items-center gap-2">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="따뜻한 댓글을 남겨주세요 💬"
          className="w-full px-4 py-3 border-2 border-black rounded-xl text-xs md:text-sm font-bold text-black bg-white placeholder-slate-400 focus:outline-none shadow-[2px_2px_0px_0px_#000]"
        />
        <button
          type="submit"
          className="shrink-0 flex items-center justify-center p-3 border-2 border-black rounded-xl bg-primary text-black transition-all hover:bg-black hover:text-white shadow-[2px_2px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
          aria-label="댓글 등록"
        >
          <Send size={16} strokeWidth={2.5} />
        </button>
      </form>
    </div>
  );
};
