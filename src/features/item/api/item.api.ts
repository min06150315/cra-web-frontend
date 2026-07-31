import { publicClient, privateClient } from '@/api/client';
import type {
  ReqCreateItemDto,
  ReqUpdateItemDto,
  ResCreateItemDto,
  ResDetailItemDto,
  ResPageItemDto,
  ResUpdateItemDto,
  ResAdminDetailItemDto,
  ReqGetItemListParams,
  ReqUpdateItemStatusParams,
} from '@/features/item/types';

// 아이템 리스트 조회 (인증 X)
export const getItemList = async ({
  category,
  page,
  perPage = 10,
  isASC = true,
}: ReqGetItemListParams): Promise<ResPageItemDto> => {
  const { data } = await publicClient.get<ResPageItemDto>(`/api/item/${category}/page`, {
    params: { page, perPage, isASC },
  });
  return data;
};

// 아이템 상세 조회 (인증 X)
export const getItemDetail = async (itemId: number): Promise<ResDetailItemDto> => {
  const { data } = await publicClient.get<ResDetailItemDto>(`/api/item/view/${itemId}`);
  return data;
};

// 아이템 생성 (인증 O)
export const createItem = async (dto: ReqCreateItemDto): Promise<ResCreateItemDto> => {
  const { data } = await privateClient.post<ResCreateItemDto>('/api/admin/item', dto);
  return data;
};

// 아이템 수정 (인증 O)
export const updateItem = async (
  itemId: number,
  dto: ReqUpdateItemDto,
): Promise<ResUpdateItemDto> => {
  const { data } = await privateClient.put<ResUpdateItemDto>(
    `/api/admin/item/${itemId}`,
    dto,
  );
  return data;
};

// 어드민용 아이템 상세 조회 (인증 O)
export const getAdminItemDetail = async (
  itemId: number,
): Promise<ResAdminDetailItemDto> => {
  const { data } = await privateClient.get<ResAdminDetailItemDto>(
    `/api/admin/item/${itemId}`,
  );
  return data;
};

// 아이템 삭제 (인증 O)
export const deleteItem = async (itemId: number): Promise<void> => {
  await privateClient.delete(`/api/admin/item/${itemId}`);
};

// 아이템 대여 상태 변경 (인증 O)
export const updateItemStatus = async ({
  itemId,
  valid,
  username,
}: ReqUpdateItemStatusParams): Promise<void> => {
  await privateClient.put(`/api/admin/item/${itemId}/status`, null, {
    params: { valid, username },
  });
};
