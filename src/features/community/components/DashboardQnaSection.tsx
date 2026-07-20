import { Link } from 'react-router-dom';
import { HelpCircle, ArrowUpRight, MessageSquare } from 'lucide-react';
import { formatRelative } from '@/utils/date';

interface QnaItem {
  id: number;
  title: string;
  created_at: string;
  commentCount?: number;
}

interface DashboardQnaSectionProps {
  qnas: QnaItem[];
}

export const DashboardQnaSection = ({ qnas }: DashboardQnaSectionProps) => {
  return (
    <section className="bg-white border-2 border-black rounded-2xl p-5 md:p-6 shadow-[4px_4px_0px_0px_#000] flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-base font-black text-black flex items-center gap-2">
            <HelpCircle size={20} strokeWidth={2.5} className="text-black" />
            질문답변 (Q&A)
          </h3>
          <Link
            to="/community/qna"
            className="p-2 bg-white hover:bg-primary-hover border-2 border-black rounded-xl transition-all shadow-[2px_2px_0px_0px_#000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
            aria-label="Q&A 바로가기"
          >
            <ArrowUpRight size={16} strokeWidth={2.5} className="text-black" />
          </Link>
        </div>

        <div className="divide-y divide-dashed divide-slate-100">
          {qnas.map((item) => (
            <div
              key={item.id}
              className="py-3.5 first:pt-0 last:pb-0 flex justify-between gap-4 items-center"
            >
              <div className="flex items-center gap-2 min-w-0">
                <Link
                  to={`/community/qna/${item.id}`}
                  className="text-sm font-bold text-slate-800 hover:text-primary-hover hover:underline decoration-2 truncate"
                >
                  {item.title}
                </Link>
                {item.commentCount !== undefined && item.commentCount > 0 && (
                  <span className="shrink-0 flex items-center gap-1 bg-primary px-1.5 py-0.5 border-2 border-black rounded text-[10px] font-black shadow-[1px_1px_0px_0px_#000]">
                    <MessageSquare size={10} strokeWidth={2.5} />
                    {item.commentCount}
                  </span>
                )}
              </div>
              <span className="shrink-0 text-xs font-bold text-slate-400">
                {formatRelative(item.created_at)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
