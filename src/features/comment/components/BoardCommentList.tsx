import type { CommentWithAuthor } from '../types/comment.types';
import { BoardCommentItem } from './BoardCommentItem';

interface BoardCommentListProps {
  comments: CommentWithAuthor[];
  currentUserId?: string;
  onUpdate: (commentId: number, content: string) => void;
  onDelete: (commentId: number) => void;
}

export const BoardCommentList = ({
  comments,
  currentUserId,
  onUpdate,
  onDelete,
}: BoardCommentListProps) => {
  return (
    <div className="space-y-4 divide-y-2 divide-dashed divide-slate-100">
      {comments.map((comment) => (
        <BoardCommentItem
          key={comment.id}
          comment={comment}
          currentUserId={currentUserId}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}

      {comments.length === 0 && (
        <div className="p-8 text-center text-slate-400 font-bold text-xs md:text-sm">
          아직 작성된 댓글이 없습니다. 첫 의견을 남겨보세요!
        </div>
      )}
    </div>
  );
};
