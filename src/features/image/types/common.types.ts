export const S3ImageCategory = {
  BOARD: 'BOARD',
  USER: 'USER',
  PROJECT: 'PROJECT',
  GALLERY: 'GALLERY',
  ITEM: 'ITEM',
  DELETED: 'DELETED',
} as const;

export type S3ImageCategory = (typeof S3ImageCategory)[keyof typeof S3ImageCategory];
