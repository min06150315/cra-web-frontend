import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import type { Board } from '../types/board.types';

const boardSchema = z.object({
  title: z
    .string()
    .min(2, '제목은 최소 2글자 이상이어야 합니다.')
    .max(50, '제목은 50글자를 넘을 수 없습니다.'),
  content: z.string().min(5, '내용은 최소 5글자 이상 적어주세요.'),
  category: z.enum(['NOTICE', 'ACADEMIC', 'QNA'], {
    message: '올바른 카테고리를 선택해주세요.',
  }),
});

export type BoardFormData = z.infer<typeof boardSchema>;

interface BoardFormProps {
  initialData?: Board | null;
  onSubmit: (data: BoardFormData) => void;
  isLoading: boolean;
}

export const BoardForm = ({ initialData, onSubmit, isLoading }: BoardFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BoardFormData>({
    resolver: zodResolver(boardSchema),
    mode: 'onChange',
    defaultValues: {
      title: initialData?.title || '',
      content: initialData?.content || '',
      category: (initialData?.category as 'NOTICE' | 'ACADEMIC' | 'QNA') || 'NOTICE',
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
      <div className="flex flex-col gap-y-2">
        <label className="text-sm md:text-base font-black text-black">카테고리</label>
        <div className="relative">
          <select
            {...register('category')}
            className="w-full px-4 py-3.5 border-2 border-black rounded-xl font-bold text-black focus:outline-none focus:bg-slate-50 transition-all shadow-[3px_3px_0px_0px_#000] appearance-none cursor-pointer"
          >
            <option value="NOTICE">공지사항</option>
            <option value="ACADEMIC">학사안내</option>
            <option value="QNA">Q&A</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-black">
            <span className="text-xs">▼</span>
          </div>
        </div>
        {errors.category && (
          <p className="mt-1 text-xs font-black text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-md inline-self-start">
            ⚠️ {errors.category.message}
          </p>
        )}
      </div>

      {/* 제목 입력 */}
      <div className="flex flex-col gap-y-2">
        <label className="text-sm md:text-base font-black text-black">제목</label>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          {...register('title')}
          className="w-full px-4 py-3.5 border-2 border-black rounded-xl font-bold text-black placeholder:text-slate-400 focus:outline-none focus:bg-slate-50 transition-all shadow-[3px_3px_0px_0px_#000]"
        />
        {errors.title && (
          <p className="mt-1 text-xs font-black text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-md inline-self-start">
            ⚠️ {errors.title.message}
          </p>
        )}
      </div>

      {/* 내용 입력 */}
      <div className="flex flex-col gap-y-2">
        <label className="text-sm md:text-base font-black text-black">내용</label>
        <textarea
          placeholder="내용을 입력하세요"
          {...register('content')}
          rows={8}
          className="w-full px-4 py-3.5 border-2 border-black rounded-xl font-bold text-black placeholder:text-slate-400 focus:outline-none focus:bg-slate-50 transition-all shadow-[3px_3px_0px_0px_#000] resize-none leading-relaxed"
        />
        {errors.content && (
          <p className="mt-1 text-xs font-black text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-md inline-self-start">
            ⚠️ {errors.content.message}
          </p>
        )}
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-4 border-2 border-black rounded-xl text-base font-black transition-all flex items-center justify-center gap-2 cursor-pointer
            ${
              isLoading
                ? 'bg-slate-300 text-slate-500 cursor-not-allowed shadow-none translate-x-0.75 translate-y-0.75'
                : 'bg-primary text-black hover:bg-primary-hover hover:text-white shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1'
            }`}
        >
          {isLoading ? (
            <span className="animate-pulse">저장 중...</span>
          ) : (
            <span>{initialData ? '수정 완료하기' : '게시물 등록하기'}</span>
          )}
        </button>
      </div>
    </form>
  );
};
