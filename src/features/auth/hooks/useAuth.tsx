import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signup, login, reissueToken, logout } from '@/features/auth/api/auth.api';
import type {
  ReqSignupDto,
  ReqLoginDto,
  ReqReissueTokenDto,
} from '@/features/auth/types';

// 회원가입 훅
export const useSignupMutation = () => {
  return useMutation({
    mutationFn: (dto: ReqSignupDto) => signup(dto),
  });
};

// 로그인 훅
export const useLoginMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (dto: ReqLoginDto) => login(dto),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
};

// 액세스 토큰 재발급 훅
export const useReissueTokenMutation = () => {
  return useMutation({
    mutationFn: (dto: ReqReissueTokenDto) => reissueToken(dto),
  });
};

// 로그아웃 훅
export const useLogoutMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => logout(),
    onSuccess: () => {
      queryClient.clear();
    },
  });
};
