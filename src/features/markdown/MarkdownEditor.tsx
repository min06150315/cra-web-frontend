import { useRef } from 'react';
import { Editor } from '@toast-ui/react-editor';
import { uploadImage } from '@/lib/supabase';
import '@toast-ui/editor/dist/toastui-editor.css';

interface MarkdownEditorProps {
  initialValue?: string;
  onSave: (markdown: string) => void;
  buttonText?: string;
  isLoading?: boolean;
}

export const MarkdownEditor = ({
  initialValue = '',
  onSave,
  buttonText = '포스트 등록',
  isLoading = false,
}: MarkdownEditorProps) => {
  const editorRef = useRef<Editor>(null);

  const handleSubmit = () => {
    if (!editorRef.current) return;
    const markdownContent = editorRef.current.getInstance().getMarkdown();
    onSave(markdownContent);
  };

  const handleImageUpload = async (
    blob: Blob | File,
    callback: (url: string, altText: string) => void,
  ) => {
    try {
      const imageUrl = await uploadImage(blob as File, 'content');
      callback(imageUrl, 'image_content');
    } catch (error) {
      console.error('이미지 삽입 에러:', error);
      alert('이미지를 업로드하지 못했습니다.');
    }
  };

  return (
    <div className="space-y-5 animate-fade-in">
      <div className="bg-white border-2 border-black rounded-2xl p-2 shadow-[4px_4px_0px_0px_#000] overflow-hidden custom-toast-editor">
        <Editor
          ref={editorRef}
          initialValue={initialValue || ' '}
          previewStyle="vertical"
          height="550px"
          initialEditType="markdown"
          useCommandShortcut={true}
          toolbarItems={[
            ['heading', 'bold', 'italic', 'strike'],
            ['hr', 'quote'],
            ['ul', 'ol', 'task', 'indent', 'outdent'],
            ['table', 'image', 'link'],
            ['code', 'codeblock'],
          ]}
          hooks={{
            addImageBlobHook: handleImageUpload,
          }}
        />
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="px-8 py-3 bg-primary text-black border-2 border-black rounded-xl hover:-translate-x-0,5 hover:-translate-y-0,5 hover:shadow-[6px_6px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_#000] transition-all font-black text-sm md:text-base shadow-[4px_4px_0px_0px_#000] disabled:opacity-50"
        >
          {isLoading ? '⏳ 처리 중...' : buttonText}
        </button>
      </div>
    </div>
  );
};
