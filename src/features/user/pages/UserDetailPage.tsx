import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  useUserDetail,
  useUpdateUserRole,
  useDeleteUser,
} from '@/features/user/hooks/useUser';
import { Shield, User as UserIcon, ArrowLeft, Trash2, Check } from 'lucide-react';

export const UserDetailPage = () => {
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();

  const { data: user, isLoading, isError } = useUserDetail(userId);
  const { mutate: updateRole, isPending: isUpdatingRole } = useUpdateUserRole(userId!);
  const { mutate: deleteUser, isPending: isDeleting } = useDeleteUser();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <span className="font-bold text-slate-500">유저 정보 불러오는 중...</span>
      </div>
    );
  }

  if (isError || !user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
        <span className="font-bold text-red-500">유저 정보를 찾을 수 없습니다.</span>
        <button
          onClick={() => navigate('/users')}
          className="px-4 py-2 bg-black text-white rounded-lg font-bold text-sm"
        >
          목록으로 돌아가기
        </button>
      </div>
    );
  }

  const handleToggleRole = () => {
    const nextRole = user.role === 'admin' ? 'user' : 'admin';
    if (confirm(`'${user.name}' 회원의 권한을 [${nextRole}] (으)로 변경하시겠습니까?`)) {
      updateRole({ role: nextRole });
    }
  };

  const handleDeleteUser = () => {
    if (
      confirm(
        `정말로 '${user.name}' 회원을 삭제하시겠습니까? 이 작업은 복구할 수 없습니다.`,
      )
    ) {
      deleteUser({ userId: user.id! });
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6 space-y-6">
      <Link
        to="/users"
        className="inline-flex items-center gap-2 font-black text-sm text-black hover:underline"
      >
        <ArrowLeft size={16} strokeWidth={3} />
        유저 목록으로
      </Link>

      <div className="bg-white border-2 border-black rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_#000] space-y-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left border-b-2 border-slate-100 pb-6">
          <div className="w-24 h-24 rounded-2xl border-2 border-black overflow-hidden bg-slate-100 shrink-0 shadow-[2px_2px_0px_0px_#000]">
            {user.imageUrl ? (
              <img
                src={user.imageUrl}
                alt={user.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <UserIcon className="w-12 h-12 text-slate-400" />
              </div>
            )}
          </div>

          <div className="space-y-2 flex-1">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <h2 className="text-2xl font-black text-black">{user.name}</h2>
              <span
                className={`text-xs font-black px-2.5 py-1 rounded-md border-2 border-black ${
                  user.role === 'admin'
                    ? 'bg-amber-300 text-black'
                    : 'bg-slate-100 text-slate-700'
                }`}
              >
                {user.role === 'admin' ? '어드민' : '일반 회원'}
              </span>
            </div>

            <p className="text-sm font-bold text-slate-600">
              {user.studentId}학번 / {user.term}기
            </p>

            {user.githubId && (
              <a
                href={`https://github.com/${user.githubId}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-black text-slate-700 hover:text-black hover:underline mt-1"
              >
                <Trash2 size={14} />@{user.githubId}
              </a>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">
            나의 한마디
          </h3>
          <div className="p-4 bg-slate-50 border-2 border-black rounded-xl font-bold text-slate-800 leading-relaxed">
            {user.greetingMessage || '등록된 한마디가 없습니다.'}
          </div>
        </div>

        <div className="pt-4 border-t-2 border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleToggleRole}
            disabled={isUpdatingRole}
            className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 border-2 border-black px-4 py-2.5 rounded-xl font-black text-xs text-black transition-all shadow-[2px_2px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0px_0px_0px_0px_#000]"
          >
            <Shield size={14} />
            {user.role === 'admin' ? '일반 회원으로 변경' : '어드민으로 변경'}
          </button>

          <button
            onClick={handleDeleteUser}
            disabled={isDeleting}
            className="flex items-center gap-2 bg-red-100 hover:bg-red-200 text-red-600 border-2 border-black px-4 py-2.5 rounded-xl font-black text-xs transition-all shadow-[2px_2px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0px_0px_0px_0px_#000]"
          >
            <Trash2 size={14} />
            회원 삭제
          </button>
        </div>
      </div>
    </div>
  );
};
