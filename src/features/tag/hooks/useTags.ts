import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getTagList,
  searchContentByTag,
  getTagDetail,
  createTag,
  updateTag,
  deleteTag,
} from '@/features/tag/api/tag.api';
import type { ReqCreateTagDto, ReqUpdateTagDto } from '@/features/tag/types';
import { tagKeys } from './tagKeys';

// 전체 태그 조회
export const useTagListQuery = () => {
  return useQuery({
    queryKey: tagKeys.list(),
    queryFn: getTagList,
  });
};

// 태그 이름으로 연관 콘텐츠 검색
export const useContentSearchByTagQuery = (name: string) => {
  return useQuery({
    queryKey: tagKeys.search(name),
    queryFn: () => searchContentByTag(name),
    enabled: Boolean(name),
  });
};

// 단일 태그 조회
export const useTagDetailQuery = (tagId: number) => {
  return useQuery({
    queryKey: tagKeys.detail(tagId),
    queryFn: () => getTagDetail(tagId),
    enabled: Boolean(tagId),
  });
};

// 태그 생성
export const useCreateTagMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (dto: ReqCreateTagDto) => createTag(dto),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: tagKeys.lists() });
    },
  });
};

// 태그 수정
export const useUpdateTagMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ tagId, dto }: { tagId: number; dto: ReqUpdateTagDto }) =>
      updateTag(tagId, dto),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: tagKeys.lists() });
      queryClient.invalidateQueries({ queryKey: tagKeys.detail(variables.tagId) });
    },
  });
};

// 태그 삭제
export const useDeleteTagMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (tagId: number) => deleteTag(tagId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: tagKeys.lists() });
    },
  });
};
