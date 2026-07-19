import { Link } from 'react-router-dom';
import { MessageSquare, Eye } from 'lucide-react';

export interface BoardItem {
  id: number;
  title: string;
  author: string;
  created_at: string;
  views: number;
  commentCount?: number;
}

interface BoardListItemProps {
  board: BoardItem;
  category: string;
}

export const BoardListItem = ({ board, category }: BoardListItemProps) => {
  return (
    <div className="p-4 sm:p-5 hover:bg-slate-100/70 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <Link
            to={`/community/${category}/${board.id}`}
            className="text-base font-bold text-black hover:text-primary-hover hover:underline decoration-2 leading-snug break-all"
          >
            {board.title}
          </Link>

          {board.commentCount !== undefined && board.commentCount > 0 && (
            <span className="shrink-0 flex items-center bg-primary px-2 py-0.5 border-2 border-black rounded-md text-[11px] font-black shadow-[1px_1px_0px_0px_#000]">
              <MessageSquare size={11} strokeWidth={2.5} className="mr-1" />
              {board.commentCount}
            </span>
          )}
        </div>

        <div className="flex items-center gap-x-2.5 gap-y-1 flex-wrap text-xs font-bold text-slate-500">
          <span className="text-black font-black bg-slate-100 px-1.5 py-0.5 border border-black rounded-md">
            {board.author}
          </span>
          <span className="w-1 h-1 bg-black rounded-full" />
          <span>{board.created_at}</span>
          <span className="w-1 h-1 bg-black rounded-full" />
          <span className="flex items-center gap-1">
            <Eye size={12} strokeWidth={2.5} />
            조회 {board.views}
          </span>
        </div>
      </div>
    </div>
  );
};
