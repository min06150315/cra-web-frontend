import type { ReqGetItemListParams } from "@/features/item/types";

export const itemKeys = {
  all: ['items'] as const,
  lists: () => [...itemKeys.all, 'list'] as const,
  list: (params: ReqGetItemListParams) => [...itemKeys.lists(), params] as const,
  details: () => [...itemKeys.all, 'detail'] as const,
  detail: (itemId: number) => [...itemKeys.details(), itemId] as const,
  adminDetails: () => [...itemKeys.all, 'admin-detail'] as const,
  adminDetail: (itemId: number) => [...itemKeys.adminDetails(), itemId] as const,
};