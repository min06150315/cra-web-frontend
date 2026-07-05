import { useNavigate } from 'react-router-dom';
import { BoardForm, type BoardFormData } from '@/features/board/components/BoardForm';
import { useCreateBoard } from '@/features/board/hooks/useBoard';
import type { Board } from '@/features/board/types/board.types';

export const BoardCreatePage = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useCreateBoard();

  const handleSubmit = (data: BoardFormData) => {
    const postPayload: Board = {
      id: Date.now(), // 로컬/MSW 테스트용 임시 ID 생성
      title: data.title,
      content: data.content,
      category: data.category,
      created_at: new Date(),
    };

    mutate(postPayload, {
      onSuccess: () => {
        alert('게시글이 성공적으로 등록되었습니다.');
        navigate(`/${data.category}`);
      },
      onError: (error) => {
        console.error('등록 실패:', error);
        alert('게시글 등록에 실패했습니다.');
      },
    });
  };

  return (
    <div>
      <h1>게시물 작성</h1>
      <BoardForm onSubmit={handleSubmit} isLoading={isPending} />
    </div>
  );
};
