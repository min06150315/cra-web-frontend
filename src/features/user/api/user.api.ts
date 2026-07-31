import { publicClient, privateClient } from '@/api/client';
import type {
  ReqUpdateUserDto,
  ReqUpdateUserPasswordDto,
  ResUpdateUserDto,
} from '@/features/user/types';

// 유저 프로필 사진 변경 (인증 O)
export const updateUserImage = async (imgUrl: string): Promise<ResUpdateUserDto> => {
  const { data } = await privateClient.put<ResUpdateUserDto>('/api/user/image', null, {
    params: { imgUrl },
  });
  return data;
};

// 유저 정보 수정 (인증 O)
export const updateUserInfo = async (
  dto: ReqUpdateUserDto,
): Promise<ResUpdateUserDto> => {
  const { data } = await privateClient.put<ResUpdateUserDto>('/api/user/info', dto);
  return data;
};

// 유저 비밀번호 변경 (인증코드 기반) (인증 X)
export const updateUserPassword = async (
  dto: ReqUpdateUserPasswordDto,
): Promise<ResUpdateUserDto> => {
  const { data } = await publicClient.put<ResUpdateUserDto>('/api/user/password', dto);
  return data;
};

// 유저 탈퇴 (인증 O)
export const deleteUser = async (): Promise<void> => {
  await privateClient.delete('/api/user');
};
