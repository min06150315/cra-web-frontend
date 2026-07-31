import { publicClient, privateClient } from '@/api/client';
import type { ReqFindUsernameDto, ResCodeDto } from '@/features/account/types';
import type {
  ResPageUserDto,
  ResUserAdminDetailDto,
  UserRole,
} from '@/features/user/types';

// 유저 아이디 중복 확인 (인증 X)
export const checkUsernameDuplication = async (username: string): Promise<void> => {
  await publicClient.get('/api/account/valid/username', {
    params: { username },
  });
};

// 이메일 인증 요청 (인증 X)
export const requestEmailVerification = async (email: string): Promise<void> => {
  await publicClient.post('/api/account/valid/email-request', null, {
    params: { email },
  });
};

// 이메일 인증 코드 검증 (인증 X)
export const verifyEmailVerificationCode = async (
  email: string,
  code: string,
): Promise<void> => {
  await publicClient.post('/api/account/valid/email-code', null, {
    params: { email, code },
  });
};

// 아이디 찾기 (인증 X)
export const findUsername = async (dto: ReqFindUsernameDto): Promise<ResPageUserDto> => {
  const { data } = await publicClient.post<ResPageUserDto>(
    '/api/account/find/username',
    dto,
  );
  return data;
};

// 패스워드 변경 이메일 전송 (인증 X)
export const sendPasswordChangeEmail = async (email: string): Promise<void> => {
  await publicClient.post('/api/account/password-change', null, {
    params: { email },
  });
};

// 가입 코드 생성 (인증 O)
export const generateSignupCode = async (length: number): Promise<ResCodeDto[]> => {
  const { data } = await privateClient.post<ResCodeDto[]>(
    '/api/admin/account/code/signup',
    {
      params: { length },
    },
  );
  return data;
};

// 유저 리스트 조회 (인증 O)
export const getUserList = async (
  page: number,
  perPage?: number,
): Promise<ResPageUserDto> => {
  const { data } = await privateClient.get<ResPageUserDto>(
    `/api/admin/account/users/page/${page}`,
    {
      params: { perPage },
    },
  );
  return data;
};

// 유저 검색 (인증 O)
export const searchUserByName = async (
  name: string = '',
): Promise<ResUserAdminDetailDto[]> => {
  const { data } = await privateClient.get<ResUserAdminDetailDto[]>(
    '/api/admin/account/users/search',
    {
      params: { name },
    },
  );
  return data;
};

// 유저 권한 추가 (인증 O)
export const addUserRole = async (
  userId: number,
  authOption: UserRole,
): Promise<void> => {
  await privateClient.put<void>(`/api/admin/account/users/auth`, null, {
    params: { userId, authOption },
  });
};

// 유저 권한 삭제 (인증 O)
export const removeUserRole = async (
  userId: number,
  authOption: UserRole,
): Promise<void> => {
  await privateClient.delete<void>(`/api/admin/account/users/auth`, {
    params: { userId, authOption },
  });
};

// 휴면 계정 활성화 (인증 O)
export const activateDormantAccount = async (userId: number): Promise<void> => {
  await privateClient.put<void>(`/api/admin/account/users/active`, null, {
    params: { userId },
  });
};

// 유저 강제 삭제 (인증 O)
export const deleteUserByAdmin = async (userId: number): Promise<void> => {
  await privateClient.delete<void>(`/api/admin/account/users/${userId}`);
};
