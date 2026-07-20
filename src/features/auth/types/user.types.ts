export interface User {
  id?: string;
  name: string; // 이름
  studentId: number; // 학번
  term: string; // 기수
  githubId: string; // 깃허브 아이디
  imageUrl?: string; // 프로필 사진
  greetingMessage: string; // 나의 한마디
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ChangePasswordPayload {
  username: string;
  verificationCode: string;
  newPassword: string;
}
