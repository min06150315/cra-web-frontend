import { supabase } from '@/lib/supabase';
import type { CommentWithAuthor, CreateCommentDto } from '../types/comment.types';

export const getCommentsByBoardId = async (
  boardId: number,
): Promise<CommentWithAuthor[]> => {
  const { data, error } = await supabase
    .from('comments')
    .select(
      `
      id,
      board_id,
      content,
      created_at,
      updated_at,
      author: user_id (
        id,
        name,
        studentId,
        term,
        githubId,
        imageUrl,
        greetingMessage
      )
    `,
    )
    .eq('board_id', boardId)
    .order('created_at', { ascending: true });

  if (error) {
    console.error('댓글 조회 에러:', error.message);
    throw error;
  }

  return data as unknown as CommentWithAuthor[];
};

// 2. 댓글 등록
export const createComment = async (dto: CreateCommentDto): Promise<void> => {
  const { error } = await supabase.from('comments').insert({
    board_id: dto.boardId,
    user_id: dto.userId,
    content: dto.content,
  });

  if (error) {
    console.error('댓글 등록 에러:', error.message);
    throw error;
  }
};

// 3. 댓글 삭제
export const deleteComment = async (commentId: number): Promise<void> => {
  const { error } = await supabase.from('comments').delete().eq('id', commentId);

  if (error) {
    console.error('댓글 삭제 에러:', error.message);
    throw error;
  }
};
