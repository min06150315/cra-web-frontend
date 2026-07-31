import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import type { ReqFindUsernameDto } from '@/features/account/types';
import type { UserRole } from '@/features/user/types';
import {
  checkUsernameDuplication,
  requestEmailVerification,
  verifyEmailVerificationCode,
  findUsername,
  sendPasswordChangeEmail,
  generateSignupCode,
  getUserList,
  searchUserByName,
  addUserRole,
  removeUserRole,
  activateDormantAccount,
  deleteUserByAdmin,
} from '@/features/account/api/account.api';
import { userKeys } from '@/features/user/hooks/userKeys';

// 유저 리스트 페이지 조회 훅
export const useUserListQuery = (page: number, perPage?: number) => {
  return useQuery({
    queryKey: userKeys.list(page, perPage),
    queryFn: () => getUserList(page, perPage),
  });
};

// 유저 이름 검색 훅
export const useUserSearchQuery = (name: string) => {
  return useQuery({
    queryKey: userKeys.search(name),
    queryFn: () => searchUserByName(name),
    enabled: Boolean(name),
  });
};

// 유저 아이디 중복 확인 훅
export const useCheckUsernameMutation = () => {
  return useMutation({
    mutationFn: (username: string) => checkUsernameDuplication(username),
  });
};

// 이메일 인증 요청 훅
export const useRequestEmailVerificationMutation = () => {
  return useMutation({
    mutationFn: (email: string) => requestEmailVerification(email),
  });
};

// 이메일 인증 코드 검증 훅
export const useVerifyEmailCodeMutation = () => {
  return useMutation({
    mutationFn: ({ email, code }: { email: string; code: string }) =>
      verifyEmailVerificationCode(email, code),
  });
};

// 아이디 찾기 훅
export const useFindUsernameMutation = () => {
  return useMutation({
    mutationFn: (dto: ReqFindUsernameDto) => findUsername(dto),
  });
};

// 패스워드 변경 이메일 전송 훅
export const useSendPasswordChangeEmailMutation = () => {
  return useMutation({
    mutationFn: (email: string) => sendPasswordChangeEmail(email),
  });
};

// 가입 코드 생성 훅
export const useGenerateSignupCodeMutation = () => {
  return useMutation({
    mutationFn: (length: number) => generateSignupCode(length),
  });
};

// 유저 권한 추가 훅
export const useAddUserRoleMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ userId, authOption }: { userId: number; authOption: UserRole }) =>
      addUserRole(userId, authOption),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userKeys.all });
    },
  });
};

// 유저 권한 삭제 훅
export const useRemoveUserRoleMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ userId, authOption }: { userId: number; authOption: UserRole }) =>
      removeUserRole(userId, authOption),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userKeys.all });
    },
  });
};

// 휴면 계정 활성화 훅
export const useActivateDormantAccountMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userId: number) => activateDormantAccount(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userKeys.all });
    },
  });
};

// 유저 강제 삭제 훅
export const useDeleteUserByAdminMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userId: number) => deleteUserByAdmin(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userKeys.all });
    },
  });
};
