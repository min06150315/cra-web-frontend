import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/atom-one-dark.css';

interface MarkdownViewerProps {
  content: string;
}

export const MarkdownViewer = ({ content }: MarkdownViewerProps) => {
  return (
    <div
      className="prose max-w-none text-black leading-relaxed text-sm md:text-base mb-10 md:mb-16 wrap-break-word
                 prose-headings:font-black prose-headings:text-black
                 prose-p:text-slate-800 prose-p:font-medium
                 prose-strong:font-black prose-strong:text-black
                 prose-pre:p-3 md:prose-pre:p-4 prose-pre:bg-slate-900 prose-pre:border-2 prose-pre:border-black prose-pre:rounded-xl prose-pre:shadow-[3px_3px_0px_0px_#000]
                 prose-code:text-rose-600 prose-code:font-bold"
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          img: ({ src, alt }) => {
            return (
              <span className="block my-6 w-full">
                <img
                  src={src}
                  alt={alt || '게시글 이미지'}
                  className="w-full h-auto max-h-150 object-contain rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_#000]"
                  loading="lazy"
                />
              </span>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
