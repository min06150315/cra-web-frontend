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
  category: z.enum(['NOTICE', 'ACADEMIC'], {
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
      category: (initialData?.category as 'NOTICE' | 'ACADEMIC') || 'NOTICE',
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl p-6 mx-auto my-8 border border-gray-200 rounded-lg bg-gray-50/50 shadow-sm"
    >
      <div className="mb-4">
        <label className="block mb-1 text-sm font-semibold text-gray-700">카테고리</label>
        <select
          {...register('category')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-sm"
        >
          <option value="NOTICE">공지사항</option>
          <option value="ACADEMIC">학사안내</option>
        </select>
        {errors.category && (
          <p className="mt-1 text-xs text-red-500">{errors.category.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-sm font-semibold text-gray-700">제목</label>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          {...register('title')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
        {errors.title && (
          <p className="mt-1 text-xs text-red-500">{errors.title.message}</p>
        )}
      </div>

      <div className="mb-6">
        <label className="block mb-1 text-sm font-semibold text-gray-700">내용</label>
        <textarea
          placeholder="내용을 입력하세요"
          {...register('content')}
          rows={8}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
        />
        {errors.content && (
          <p className="mt-1 text-xs text-red-500">{errors.content.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={`w-full py-2.5 rounded-md text-sm font-medium text-white transition-colors
        ${
          isLoading
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
        }`}
      >
        {isLoading ? '저장 중...' : initialData ? '수정하기' : '작성하기'}
      </button>
    </form>
  );
};
