import { Link } from 'react-router-dom';
import { Megaphone, ArrowUpRight } from 'lucide-react';

interface NoticeItem {
  id: number;
  title: string;
  created_at: string;
}

interface DashboardNoticeSectionProps {
  notices: NoticeItem[];
}

export const DashboardNoticeSection = ({ notices }: DashboardNoticeSectionProps) => {
  return (
    <section className="bg-white border-2 border-black rounded-2xl p-5 md:p-6 shadow-[4px_4px_0px_0px_#000]">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-base md:text-lg font-black text-black flex items-center gap-2">
          <Megaphone size={20} strokeWidth={2.5} className="text-black" />
          공지사항
        </h3>
        <Link
          to="/community/notice"
          className="p-2 bg-white hover:bg-primary-hover border-2 border-black rounded-xl transition-all shadow-[2px_2px_0px_0px_#000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
          aria-label="공지사항 게시판 바로가기"
        >
          <ArrowUpRight size={16} strokeWidth={2.5} className="text-black" />
        </Link>
      </div>

      <div className="divide-y-2 divide-dashed divide-slate-100">
        {notices.map((item) => (
          <div
            key={item.id}
            className="py-3.5 first:pt-0 last:pb-0 flex flex-col sm:flex-row justify-between gap-2"
          >
            <Link
              to={`/community/notice/${item.id}`}
              className="text-sm md:text-base font-bold text-black hover:text-primary-hover hover:underline decoration-2 leading-snug"
            >
              {item.title}
            </Link>
            <span className="shrink-0 text-xs font-bold text-slate-500 self-start sm:self-center">
              {item.created_at}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
