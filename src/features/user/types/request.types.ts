export interface ReqUpdateUserDto {
  id: number;
  name?: string;
  email?: string;
  studentId?: string;
  term?: string;
  githubId?: string;
  greetingMessage?: string;
}

export interface ReqUpdateUserPasswordDto {
  code: string;
  password: string;
}
