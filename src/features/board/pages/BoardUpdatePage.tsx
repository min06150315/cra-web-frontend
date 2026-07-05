import { useParams, useNavigate } from 'react-router-dom';
import { BoardForm, type BoardFormData } from '@/features/board/components/BoardForm';
import { useBoardDetail, useUpdateBoard } from '@/features/board/hooks/useBoard';
import type { Board } from '@/features/board/types/board.types';

export const BoardUpdatePage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const { data: board, isLoading: isFetching } = useBoardDetail(Number(id));
  const { mutate, isPending: isUpdating } = useUpdateBoard(Number(id));

  const handleSubmit = (data: BoardFormData) => {
    if (!board) return;

    const updatedPayload: Board = {
      ...board,
      title: data.title,
      content: data.content,
      category: data.category,
    };

    mutate(updatedPayload, {
      onSuccess: () => {
        alert('게시글이 성공적으로 수정되었습니다.');
        navigate(`/${data.category}/${board.id}`);
      },
      onError: (error) => {
        console.error('수정 실패:', error);
        alert('게시글 수정에 실패했습니다.');
      },
    });
  };

  if (isFetching) return <div>기존 게시글을 불러오는 중...</div>;
  if (!board) return <div>게시글을 찾을 수 없습니다.</div>;

  return (
    <div>
      <h1>게시물 수정</h1>
      {board && (
        <BoardForm initialData={board} onSubmit={handleSubmit} isLoading={isUpdating} />
      )}
    </div>
  );
};
