import { useMutation } from '@tanstack/react-query';
import { uploadImage } from '@/features/image/api/image.api';

// 이미지 업로드 훅
export const useUploadImageMutation = () => {
  return useMutation({
    mutationFn: (file: File) => uploadImage(file),
  });
};
