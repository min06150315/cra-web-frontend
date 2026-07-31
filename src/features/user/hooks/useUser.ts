import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  updateUserImage,
  updateUserInfo,
  updateUserPassword,
  deleteUser,
} from '@/features/user/api/user.api';
import type { ReqUpdateUserDto, ReqUpdateUserPasswordDto } from '@/features/user/types';
import { userKeys } from './userKeys';

// 유저 프로필 사진 변경
export const useUpdateUserImageMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (imgUrl: string) => updateUserImage(imgUrl),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userKeys.all });
    },
  });
};

// 유저 정보 수정
export const useUpdateUserInfoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (dto: ReqUpdateUserDto) => updateUserInfo(dto),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userKeys.all });
    },
  });
};

// 유저 비밀번호 변경
export const useUpdateUserPasswordMutation = () => {
  return useMutation({
    mutationFn: (dto: ReqUpdateUserPasswordDto) => updateUserPassword(dto),
  });
};

// 유저 탈퇴
export const useDeleteUserMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteUser(),
    onSuccess: () => {
      queryClient.clear();
    },
  });
};
