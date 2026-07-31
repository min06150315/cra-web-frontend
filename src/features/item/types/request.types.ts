import { ItemCategory } from './common.types';

export interface ReqCreateItemDto {
  name: string;
  description: string;
  itemCategory: ItemCategory | number;
  imageUrl?: string;
}

export interface ReqUpdateItemDto {
  name?: string;
  description?: string;
  itemCategory?: ItemCategory | number;
  imageUrl?: string;
  isBorrowed?: boolean;
}

export interface ReqGetItemListParams {
  category: ItemCategory;
  page: number;
  perPage?: number;
  isASC?: boolean;
}

export interface ReqUpdateItemStatusParams {
  itemId: number;
  valid: boolean;
  username: string;
}