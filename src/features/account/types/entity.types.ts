import type { BaseEntity } from '@/types/common.types';
import type { ManageTokenCategory } from './common.types';

export interface ManageToken extends BaseEntity {
  code: string;
  manageTokenCategory: ManageTokenCategory;
  expireDate: string;
  userId?: number;
}
