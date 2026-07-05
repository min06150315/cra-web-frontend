import { useParams, Link, useNavigate } from 'react-router-dom';
import { useBoardDetail, useDeleteBoard } from '@/features/board/hooks/useBoard'; // 단건 조회용 훅이 있다고 가정

export const NoticeDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: board, isLoading, error } = useBoardDetail(Number(id));
  const { mutate: deleteBoard } = useDeleteBoard();
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px] text-gray-500 font-medium">
        게시글을 불러오는 중입니다...
      </div>
    );
  }

  if (error || !board) {
    return (
      <div className="flex justify-center items-center min-h-[400px] text-red-500 font-medium">
        게시글을 찾을 수 없거나 에러가 발생했습니다.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link
          to="/notice"
          className="inline-flex items-center text-sm text-gray-500 hover:text-gray-800 transition-colors font-medium"
        >
          ← 목록으로 돌아가기
        </Link>
      </div>

      <article className="border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden">
        <header className="bg-gray-50/70 p-6 border-b border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 rounded">
              {board.category === 'NOTICE' ? '공지사항' : '학사안내'}
            </span>
            <span className="text-xs text-gray-400 font-medium">No. {board.id}</span>
          </div>

          <h1 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight mb-3">
            {board.title}
          </h1>

          <div className="text-xs text-gray-500 font-medium">
            <span>작성일: </span>
            <span>
              {board.created_at ? new Date(board.created_at).toLocaleDateString() : '-'}
            </span>
          </div>
        </header>

        <div className="p-6 min-h-[250px] text-gray-800 text-sm md:text-base leading-relaxed whitespace-pre-wrap">
          {board.content}
        </div>

        <footer className="px-6 py-4 bg-gray-50/30 border-t border-gray-100 flex justify-end gap-2">
          <Link
            to={`/board/update/${board.id}`}
            className="px-3.5 py-1.5 text-xs font-medium text-gray-600 bg-white border border-gray-300 rounded hover:bg-gray-50 active:bg-gray-100 transition-colors"
          >
            수정
          </Link>
          <button
            onClick={() => {
              if (confirm('정말 삭제하시겠습니까?')) {
                deleteBoard(Number(id), {
                  onSuccess: () => {
                    alert('성공적으로 삭제되었습니다.');
                    navigate(`/${board.category}`);
                  },
                  onError: (error) => {
                    alert('삭제에 실패했습니다. 다시 시도해 주세요.');
                    console.error(error);
                  },
                });
              }
            }}
            className="px-3.5 py-1.5 text-xs font-medium text-red-600 bg-white border border-red-200 rounded hover:bg-red-50 active:bg-red-100 transition-colors"
          >
            삭제
          </button>
        </footer>
      </article>
    </div>
  );
};
