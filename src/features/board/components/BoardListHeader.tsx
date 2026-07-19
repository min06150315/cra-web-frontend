import { Link } from 'react-router-dom';
import { PenSquare } from 'lucide-react';

interface BoardListHeaderProps {
  title: string;
  desc: string;
  emoji: string;
}

export const BoardListHeader = ({ title, desc, emoji }: BoardListHeaderProps) => {
  return (
    <div className="bg-white border-2 border-black p-5 rounded-2xl shadow-[4px_4px_0px_0px_#000] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 border-2 border-black rounded-lg font-black text-xs text-black bg-primary">
            {emoji} {title}
          </span>
        </div>
        <p className="text-slate-600 font-bold text-xs md:text-sm mt-2.5">{desc}</p>
      </div>

      <Link
        to="/community/board/create"
        className="self-start sm:self-center flex items-center gap-1.5 px-4 py-2 border-2 border-black rounded-xl bg-black text-xs md:text-sm font-bold text-white transition-all hover:bg-white hover:text-black shadow-[2px_2px_0px_0px_#334155] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
      >
        <PenSquare size={14} strokeWidth={2.5} />
        글쓰기 ✏️
      </Link>
    </div>
  );
};
