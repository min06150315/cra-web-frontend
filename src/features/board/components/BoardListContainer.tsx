import type { BoardWithAuthor } from '@/features/board/types/board.types';
import { BoardListItem } from './BoardListItem';

interface BoardListContainerProps {
  boards: BoardWithAuthor[];
  category: string;
}

export const BoardListContainer = ({ boards, category }: BoardListContainerProps) => {
  return (
    <div className="bg-white border-2 border-black rounded-2xl shadow-[4px_4px_0px_0px_#000] overflow-hidden">
      <div className="divide-y-2 divide-black">
        {boards.map((board) => (
          <BoardListItem key={board.id} board={board} category={category} />
        ))}

        {boards.length === 0 && (
          <div className="p-16 text-center text-slate-500 font-bold text-sm">
            아직 등록된 게시물이 없습니다. 첫 번째 글을 남겨보세요!
          </div>
        )}
      </div>
    </div>
  );
};
