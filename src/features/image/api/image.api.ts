import { privateClient } from '@/api/client';

// 이미지 업로드 (인증 O)
export const uploadImage = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append('image', file);

  const { data } = await privateClient.post<string>('/api/images/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return data;
};
