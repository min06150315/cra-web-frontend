export interface ReqCreateCommentDto {
  parentCommentId?: number;
  content: string;
}

export interface ReqUpdateCommentDto {
  deleted?: boolean;
  content: string;
}
