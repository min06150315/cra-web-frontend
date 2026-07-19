interface BoardDetailContentProps {
  content: string;
}

export const BoardDetailContent = ({ content }: BoardDetailContentProps) => {
  return (
    <article className="bg-white border-2 border-black p-6 md:p-8 rounded-2xl shadow-[4px_4px_0px_0px_#000] min-h-[300px] text-sm md:text-base text-black font-medium leading-relaxed whitespace-pre-wrap break-all">
      {content}
    </article>
  );
};
