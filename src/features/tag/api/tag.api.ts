import { publicClient } from '@/api/client';
import type { ReqCreateTagDto, ReqUpdateTagDto, ResTagDto } from '@/features/tag/types';

// 전체 태그 조회 (인증 X)
export const getTagList = async (): Promise<ResTagDto[]> => {
  const { data } = await publicClient.get<ResTagDto[]>('/api/tags');
  return data;
};

// 태그 이름으로 연관 콘텐츠 검색 (인증 X)
export const searchContentByTag = async (name: string): Promise<Record<string, any>> => {
  const { data } = await publicClient.get<Record<string, any>>(`/api/tags/search`, {
    params: { name },
  });
  return data;
};

// 단일 태그 조회 (인증 X)
export const getTagDetail = async (tagId: number): Promise<ResTagDto> => {
  const { data } = await publicClient.get<ResTagDto>(`/api/tags/${tagId}`);
  return data;
};

// 태그 생성 (인증 O)
export const createTag = async (dto: ReqCreateTagDto): Promise<ResTagDto> => {
  const { data } = await publicClient.post<ResTagDto>('/api/tags', dto);
  return data;
};

// 태그 수정 (인증 O)
export const updateTag = async (
  tagId: number,
  dto: ReqUpdateTagDto,
): Promise<ResTagDto> => {
  const { data } = await publicClient.put<ResTagDto>(`/api/tags/${tagId}`, dto);
  return data;
};

// 태그 삭제 (인증 O)
export const deleteTag = async (tagId: number): Promise<void> => {
  await publicClient.delete(`/api/tags/${tagId}`);
};
