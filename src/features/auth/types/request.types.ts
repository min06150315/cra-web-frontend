export interface ReqSignupDto {
  username: string;
  password: string;
  email: string;
  name: string;
  githubId: string;
  studentId: string;
  term: string;
  code: string;
}

export interface ReqLoginDto {
  username: string;
  password: string;
}

export interface ReqReissueTokenDto {
  refreshToken: string;
}