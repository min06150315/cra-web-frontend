export interface BaseEntity {
  id: number;
  createAt: string;
  updatedAt?: string;
  deleted?: boolean;
}
