import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getItemList,
  getItemDetail,
  createItem,
  updateItem,
  getAdminItemDetail,
  deleteItem,
  updateItemStatus,
} from '@/features/item/api/item.api';
import type {
  ReqCreateItemDto,
  ReqUpdateItemDto,
  ReqGetItemListParams,
  ReqUpdateItemStatusParams,
} from '@/features/item/types';
import { itemKeys } from './itemKeys';

// 아이템 페이지 목록 조회
export const useItemListQuery = (params: ReqGetItemListParams) => {
  return useQuery({
    queryKey: itemKeys.list(params),
    queryFn: () => getItemList(params),
  });
};

// 아이템 상세 조회
export const useItemDetailQuery = (itemId: number) => {
  return useQuery({
    queryKey: itemKeys.detail(itemId),
    queryFn: () => getItemDetail(itemId),
    enabled: Boolean(itemId),
  });
};

// 어드민용 아이템 상세 조회
export const useAdminItemDetailQuery = (itemId: number) => {
  return useQuery({
    queryKey: itemKeys.adminDetail(itemId),
    queryFn: () => getAdminItemDetail(itemId),
    enabled: Boolean(itemId),
  });
};

// 아이템 생성
export const useCreateItemMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (dto: ReqCreateItemDto) => createItem(dto),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: itemKeys.lists() });
    },
  });
};

// 아이템 수정
export const useUpdateItemMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ itemId, dto }: { itemId: number; dto: ReqUpdateItemDto }) =>
      updateItem(itemId, dto),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: itemKeys.lists() });
      queryClient.invalidateQueries({ queryKey: itemKeys.detail(variables.itemId) });
      queryClient.invalidateQueries({ queryKey: itemKeys.adminDetail(variables.itemId) });
    },
  });
};

// 아이템 삭제
export const useDeleteItemMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (itemId: number) => deleteItem(itemId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: itemKeys.lists() });
    },
  });
};

// 아이템 대여 상태 변경
export const useUpdateItemStatusMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: ReqUpdateItemStatusParams) => updateItemStatus(params),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: itemKeys.lists() });
      queryClient.invalidateQueries({ queryKey: itemKeys.detail(variables.itemId) });
      queryClient.invalidateQueries({ queryKey: itemKeys.adminDetail(variables.itemId) });
    },
  });
};
