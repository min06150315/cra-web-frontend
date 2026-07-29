import type { ResUserDetailDto } from '@/features/user/types';
import { ItemCategory } from './common.types';

export interface ResCreateItemDto {
  id: number;
  name: string;
  description: string;
  imageUrl?: string;
  itemCategory: ItemCategory | number;
  isBorrowed: boolean;
  createdAt: string;
}

export interface ResDetailItemDto {
  id: number;
  name: string;
  description: string;
  itemCategory: ItemCategory | number;
  imageUrl?: string;
  isBorrowed: boolean;
  createdAt: string;
  updatedAt?: string;
}

// ResDetailItemDto를 상속하여 어드민용 대여자 상세 정보를 포함하는 구조
export interface ResAdminDetailItemDto extends ResDetailItemDto {
  resUserDetailDto: ResUserDetailDto;
}

export interface ResListItemDto {
  id: number;
  name: string;
  description: string;
  imageUrl?: string;
  isBorrowed: boolean;
  itemCategory: ItemCategory | number;
  createdAt: string;
  updatedAt?: string;
}

export interface ResPageItemDto {
  resListItemDtos: ResListItemDto[];
  totalPages: number;
}

export interface ResUpdateItemDto {
  id: number;
  name: string;
  description: string;
  itemCategory: ItemCategory | number;
  imageUrl?: string;
  isBorrowed: boolean;
  createdAt: string;
  updatedAt?: string;
}