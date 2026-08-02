import { Link } from 'react-router-dom';
import { useUsers } from '@/features/user/hooks/useUser';
import { ShieldAlert, User as UserIcon, ChevronRight } from 'lucide-react';

export const UserListPage = () => {
  const { data: users, isLoading, isError } = useUsers();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <span className="font-bold text-slate-500">유저 목록 불러오는 중...</span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <span className="font-bold text-red-500">유저 목록을 불러오지 못했습니다.</span>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6">
      <div className="flex justify-between items-center border-b-4 border-black pb-4">
        <div>
          <h1 className="text-2xl font-black text-black">동아리 회원 목록</h1>
          <p className="text-sm font-bold text-slate-500 mt-1">
            총 {users?.length ?? 0}명의 회원이 등록되어 있습니다.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {users?.map((user) => (
          <Link
            key={user.id}
            to={`/users/${user.id}`}
            className="group relative bg-white border-2 border-black rounded-xl p-5 shadow-[4px_4px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#000] transition-all flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="shrink-0 w-12 h-12 rounded-lg border-2 border-black overflow-hidden bg-slate-100 flex items-center justify-center">
                {user.imageUrl ? (
                  <img
                    src={user.imageUrl}
                    alt={user.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <UserIcon className="w-6 h-6 text-slate-400" />
                )}
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-black text-base text-black truncate group-hover:text-primary-hover">
                    {user.name}
                  </span>

                  <span
                    className={`inline-flex items-center gap-1 text-[11px] font-black px-2 py-0.5 rounded-md border border-black ${
                      user.role === 'admin'
                        ? 'bg-amber-300 text-black'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {user.role === 'admin' && <ShieldAlert size={11} />}
                    {user.role === 'admin' ? '어드민' : '일반'}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mt-1">
                  <span>{user.studentId}학번</span>
                  <span>•</span>
                  <span>{user.term}기</span>
                  {user.githubId && (
                    <>
                      <span>•</span>
                      <span className="truncate">@{user.githubId}</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            <ChevronRight className="shrink-0 w-5 h-5 text-black group-hover:translate-x-1 transition-transform" />
          </Link>
        ))}
      </div>
    </div>
  );
};
