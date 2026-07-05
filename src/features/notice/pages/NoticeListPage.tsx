import { useBoards } from '@/features/board/hooks/useBoard';
import { Link } from 'react-router-dom'; // Link 컴포넌트 추가

export const NoticeListPage = () => {
  const { data: boards, isLoading, error } = useBoards('NOTICE');

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px] text-gray-500 font-medium">
        목록을 불러오는 중입니다...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[400px] text-red-500 font-medium">
        데이터를 불러오는 중 에러가 발생했습니다.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-end pb-4 mb-6 border-b border-gray-200">
        <div>
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            📢 공지사항
          </h2>
          <span className="text-xs text-gray-500 mt-1 block">
            총 {boards?.length || 0}개의 게시물
          </span>
        </div>

        <Link
          to="/board/create"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-sm"
        >
          글쓰기
        </Link>
      </div>

      {/* 게시물 목록 */}
      {!boards || boards.length === 0 ? (
        <div className="text-center py-20 text-gray-400 border border-dashed border-gray-200 rounded-lg bg-gray-50/50">
          등록된 공지사항이 없습니다.
        </div>
      ) : (
        <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
          <table className="w-full text-sm text-left text-gray-600 border-collapse">
            <thead className="bg-gray-100 text-gray-700 font-semibold text-xs uppercase tracking-wider border-b border-gray-200">
              <tr>
                <th className="py-3 px-4 w-20 text-center">번호</th>
                <th className="py-3 px-4">제목</th>
                <th className="py-3 px-4 w-32 text-center">작성일</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {boards?.map((board) => (
                <tr key={board.id} className="hover:bg-gray-50/80 transition-colors">
                  <td className="py-3.5 px-4 text-center text-gray-400 font-medium">
                    {board.id}
                  </td>
                  <td className="py-3.5 px-4 text-gray-800 font-medium hover:underline cursor-pointer">
                    <Link to={`/notice/${board.id}`}>{board.title}</Link>
                  </td>
                  <td className="py-3.5 px-4 text-center text-gray-500 text-xs">
                    {board.created_at
                      ? new Date(board.created_at).toLocaleDateString()
                      : '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
