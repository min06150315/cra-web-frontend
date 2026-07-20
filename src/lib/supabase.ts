import imageCompression from 'browser-image-compression';
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
);

export const uploadImage = async (file: File, location: string): Promise<string> => {
  const options = {
    maxSizeMB: 0.8,
    maxWidthOrHeight: 1200,
    useWebWorker: true,
    fileType: 'image/webp',
  };

  try {
    const compressedFile = await imageCompression(file, options);
    const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.webp`;
    const filePath = `${location}/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('board-assets')
      .upload(filePath, compressedFile);

    if (uploadError) throw new Error('업로드 실패');

    const { data } = supabase.storage.from('board-assets').getPublicUrl(filePath);
    return data.publicUrl;
  } catch (error) {
    console.error(error);
    throw new Error('이미지 업로드 중 오류 발생');
  }
};
