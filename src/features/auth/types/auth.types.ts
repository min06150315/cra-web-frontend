// 로그인 요청 Payload (프론트 -> 백엔드)
export interface LoginPayload {
  username: string; // 로그인 아이디
  password: string; // 비밀번호
}


// 회원가입 요청 Payload (프론트 -> 백엔드)
export interface SignUpPayload {
  username: string;
  password: string;
  email: string;
  name: string;
  githubId: string;
  studentId: number;
  term: string;
  code: string; // 인증 코드
}

// 회원가입 성공 시 백엔드에서 내려주는 응답 데이터
export interface SignUpResponse {
  id: number;
  username: string;
  email: string;
  name: string;
  githubId: string;
  studentNumber: number; // 레거시 명세의 studentNumber 유지
  term: string;
}

// 토큰
export interface TokenDto {
  userId: number;
  accessToken: string;
  refreshToken: string;
}

// 로그인 하면 내려오는 유저 세부 정보
export interface UserDetailDto {
  name: string;
  email: string;
  studentId: number;
  term: string;
  githubId: string;
  imgUrl: string;
  greetingMessage: string;
}

// 최종 로그인 응답 데이터
export interface LoginResponse {
  resUserDetailDto: UserDetailDto;
  resTokenDto: TokenDto;
}
