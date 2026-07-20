import { supabase } from '@/lib/supabase';
import type {
  Board,
  BoardWithAuthor,
  CreateBoardDto,
} from '@/features/board/types/board.types';

// [Read] 게시글 전체 목록 조회
export const getBoards = async (): Promise<Board[]> => {
  const { data, error } = await supabase
    .from('boards')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data as Board[];
};

// [Read] ID에 해당하는 단일 게시글 상세 조회
export const getBoardById = async (id: number): Promise<BoardWithAuthor> => {
  const { data, error } = await supabase
    .from('boards')
    .select(
      `
      id,
      title,
      content,
      category,
      created_at,
      view,
      file_url,
      
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
    .eq('id', id)
    .maybeSingle();

  if (error) throw error;
  return data as unknown as BoardWithAuthor;
};

// [Read] 카테고리별 게시글 목록 조회
export const getBoardsByCategory = async (
  category: string,
): Promise<BoardWithAuthor[]> => {
  const { data, error } = await supabase
    .from('boards')
    .select(
      `
      id,
      title,
      content,
      category,
      created_at,
      view,
      file_url,
      
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
    .eq('category', category)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data as unknown as BoardWithAuthor[];
};

// [Create] 게시글 작성
export const createBoard = async (dto: CreateBoardDto): Promise<void> => {
  const { error } = await supabase.from('boards').insert([
    {
      title: dto.title,
      content: dto.content,
      category: dto.category,
      user_id: dto.user_id,
    },
  ]);

  if (error) throw error;
};

// [Update] 게시글 수정
export const updateBoard = async (
  id: number,
  dto: Partial<CreateBoardDto>,
): Promise<void> => {
  const { error } = await supabase
    .from('boards')
    .update({
      title: dto.title,
      content: dto.content,
      category: dto.category,
    })
    .eq('id', id);

  if (error) throw error;
};

// [Delete] 게시글 삭제
export const deleteBoard = async (id: number): Promise<void> => {
  const { error } = await supabase.from('boards').delete().eq('id', id);

  if (error) throw error;
};
