import { useParams } from 'react-router-dom';
import { BoardForm, type BoardFormData } from '@/features/board/components/BoardForm';
import { useBoardDetail, useUpdateBoard } from '@/features/board/hooks/useBoard';
import type { CreateBoardDto } from '@/features/board/types/board.types';
import { Edit3 } from 'lucide-react';

export const BoardUpdatePage = () => {
  const { id } = useParams<{ id: string }>();
  const boardId = Number(id);

  const { data: board, isLoading: isFetching } = useBoardDetail(boardId);
  const { mutate, isPending: isUpdating } = useUpdateBoard(boardId);

  const handleSubmit = (data: BoardFormData) => {
    if (!board) return;

    const updatedPayload: Partial<CreateBoardDto> = {
      title: data.title,
      content: data.content,
      category: data.category,
    };

    mutate(updatedPayload, {
      onSuccess: () => {
        alert('게시글이 성공적으로 수정되었습니다.');
      },
      onError: (error) => {
        console.error('수정 실패:', error);
        alert('게시글 수정에 실패했습니다.');
      },
    });
  };

  if (isFetching) {
    return (
      <div className="flex justify-center items-center min-h-75 text-black font-black text-sm">
        기존 게시글을 불러오는 중... 🔄
      </div>
    );
  }

  if (!board) {
    return (
      <div className="flex justify-center items-center min-h-75 text-black font-black text-sm">
        게시글을 찾을 수 없습니다. ❌
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-1 py-4">
      <div className="bg-white border-2 border-black rounded-2xl p-6 md:p-10 shadow-[4px_4px_0px_0px_#000]">
        <div className="mb-8 text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-black uppercase flex items-center justify-center md:justify-start gap-2">
            <Edit3 size={24} strokeWidth={2.5} className="text-black" />
            게시물 수정 🛠️
          </h3>
          <p className="text-slate-600 font-bold text-xs mt-2">
            수정 사항을 꼼꼼하게 점검하고 올바르게 반영해 주세요.
          </p>
        </div>

        <BoardForm initialData={board} onSubmit={handleSubmit} isLoading={isUpdating} />
      </div>
    </div>
  );
};
