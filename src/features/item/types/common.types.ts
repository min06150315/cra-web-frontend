export const ItemCategory = {
  BOOK: 0,
} as const;

export type ItemCategory = (typeof ItemCategory)[keyof typeof ItemCategory];