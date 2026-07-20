import { useState } from 'react';
import type { CommentWithAuthor } from '../types/comment.types';
import { formatDateDot } from '@/utils/date';
import { Trash2, Edit2, X, Check } from 'lucide-react';

interface BoardCommentItemProps {
  comment: CommentWithAuthor;
  currentUserId?: string;
  onUpdate: (commentId: number, content: string) => void;
  onDelete: (commentId: number) => void;
}

export const BoardCommentItem = ({
  comment,
  currentUserId,
  onUpdate,
  onDelete,
}: BoardCommentItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(comment.content);

  const isAuthor = currentUserId === comment.author?.id;

  const handleUpdateSubmit = () => {
    if (!editContent.trim()) return;
    onUpdate(comment.id, editContent);
    setIsEditing(false);
  };

  return (
    <div className="pt-4 first:pt-0 space-y-1.5 animate-fade-in">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-black text-black bg-slate-100 px-1.5 py-0.5 border border-black rounded-md等">
            {comment.author?.name}
          </span>
          <span className="text-[10px] font-bold text-slate-400">
            {formatDateDot(comment.created_at)}
          </span>
        </div>

        {isAuthor && (
          <div className="flex items-center gap-1 text-slate-400">
            {isEditing ? (
              <>
                <button
                  onClick={handleUpdateSubmit}
                  className="hover:text-green-600 p-0.5 cursor-pointer"
                >
                  <Check size={14} strokeWidth={3} />
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="hover:text-red-500 p-0.5 cursor-pointer"
                >
                  <X size={14} strokeWidth={3} />
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setIsEditing(true)}
                  className="hover:text-blue-600 p-0.5 cursor-pointer"
                >
                  <Edit2 size={13} strokeWidth={2.5} />
                </button>
                <button
                  onClick={() => onDelete(comment.id)}
                  className="hover:text-red-500 p-0.5 cursor-pointer"
                >
                  <Trash2 size={13} strokeWidth={2.5} />
                </button>
              </>
            )}
          </div>
        )}
      </div>

      {isEditing ? (
        <div className="mt-1 flex gap-2">
          <input
            type="text"
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            className="w-full px-3 py-1.5 border-2 border-black rounded-lg text-xs font-bold"
          />
        </div>
      ) : (
        <p className="text-sm font-bold text-slate-800 break-all pl-0.5">
          {comment.content}
        </p>
      )}
    </div>
  );
};
