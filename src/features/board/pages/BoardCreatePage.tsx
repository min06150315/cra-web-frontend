import { useAuth } from '@/features/auth/hooks/useAuth';
import { BoardForm, type BoardFormData } from '@/features/board/components/BoardForm';
import { useCreateBoard } from '@/features/board/hooks/useBoards';
import type { CreateBoardDto } from '@/features/board/types/board.types';
import { PenSquare } from 'lucide-react';

export const BoardCreatePage = () => {
  const { user } = useAuth();
  const { mutate, isPending } = useCreateBoard();

  const handleSubmit = (data: BoardFormData) => {
    if (!user) {
      alert('로그인이 필요한 서비스입니다.');
      return;
    }

    const postPayload: CreateBoardDto = {
      title: data.title,
      content: data.content,
      category: data.category,
      user_id: user.id,
    };

    mutate(postPayload, {
      onSuccess: () => {
        alert('게시글이 성공적으로 등록되었습니다.');
      },
      onError: (error) => {
        console.error('등록 실패:', error);
        alert('게시글 등록에 실패했습니다.');
      },
    });
  };

  return (
    <div className="max-w-2xl mx-auto px-1 py-4">
      <div className="bg-white border-2 border-black rounded-2xl p-6 md:p-10 shadow-[4px_4px_0px_0px_#000]">
        <div className="mb-8 text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-black uppercase flex items-center justify-center md:justify-start gap-2">
            <PenSquare size={24} strokeWidth={2.5} className="text-black" />
            게시물 작성 ✏️
          </h3>
          <p className="text-slate-600 font-bold text-xs mt-2">
            동아리원들에게 공유할 소중한 글을 이곳에 작성해 주세요.
          </p>
        </div>

        <BoardForm onSubmit={handleSubmit} isLoading={isPending} />
      </div>
    </div>
  );
};
