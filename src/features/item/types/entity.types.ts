import type { BaseEntity } from '@/types/common.types';
import { ItemCategory } from './common.types';

export interface Item extends BaseEntity {
  name: string;
  description: string;
  imageUrl?: string;
  isBorrowed: boolean;
  itemCategory: ItemCategory;
  userId?: number;
}