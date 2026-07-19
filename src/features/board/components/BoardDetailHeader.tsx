import { Eye, MessageSquare } from 'lucide-react';

interface BoardDetailHeaderProps {
  categoryTitle: string;
  categoryEmoji: string;
  title: string;
  author: string;
  createdAt: string;
  views: number;
  commentCount: number;
}

export const BoardDetailHeader = ({
  categoryTitle,
  categoryEmoji,
  title,
  author,
  createdAt,
  views,
  commentCount,
}: BoardDetailHeaderProps) => {
  return (
    <div className="bg-white border-2 border-black p-6 rounded-2xl shadow-[4px_4px_0px_0px_#000] space-y-4">
      <div>
        <span className="px-2.5 py-0.5 border-2 border-black rounded-lg font-black text-xs text-black bg-primary">
          {categoryEmoji} {categoryTitle}
        </span>
      </div>

      <h1 className="text-xl md:text-3xl font-black text-black leading-snug break-all">
        {title}
      </h1>

      <div className="flex items-center gap-x-3 gap-y-1 flex-wrap text-xs font-bold text-slate-500 pt-2 border-t-2 border-dashed border-slate-100">
        <span className="text-black font-black bg-slate-100 px-1.5 py-0.5 border border-black rounded-md">
          {author}
        </span>
        <span className="w-1 h-1 bg-black rounded-full" />
        <span>{createdAt}</span>
        <span className="w-1 h-1 bg-black rounded-full" />
        <span className="flex items-center gap-1">
          <Eye size={12} strokeWidth={2.5} />
          조회 {views}
        </span>
        <span className="w-1 h-1 bg-black rounded-full" />
        <span className="flex items-center gap-1 text-black">
          <MessageSquare size={12} strokeWidth={2.5} />
          댓글 {commentCount}
        </span>
      </div>
    </div>
  );
};
