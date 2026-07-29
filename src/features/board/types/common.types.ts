export const Category = {
  NOTICE: 0,
  ACADEMIC: 1,
} as const;

export type Category = (typeof Category)[keyof typeof Category];

export const BoardOrderBy = {
  DATA: 0,
  LIKECOUNT: 1,
} as const;

export type BoardOrderBy = (typeof BoardOrderBy)[keyof typeof BoardOrderBy];
