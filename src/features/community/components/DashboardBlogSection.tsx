import { Link } from 'react-router-dom';
import { BookOpen, ArrowUpRight } from 'lucide-react';
import { formatDateDot, formatRelative } from '@/utils/date';

interface BlogItem {
  id: number;
  title: string;
  created_at: string;
}

interface DashboardBlogSectionProps {
  blogs: BlogItem[];
}

export const DashboardBlogSection = ({ blogs }: DashboardBlogSectionProps) => {
  return (
    <section className="bg-white border-2 border-black rounded-2xl p-5 md:p-6 shadow-[4px_4px_0px_0px_#000] flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-base font-black text-black flex items-center gap-2">
            <BookOpen size={20} strokeWidth={2.5} className="text-black" />
            기술 블로그
          </h3>
          <Link
            to="/community/blog"
            className="p-2 bg-white hover:bg-primary-hover border-2 border-black rounded-xl transition-all shadow-[2px_2px_0px_0px_#000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
            aria-label="기술 블로그 바로가기"
          >
            <ArrowUpRight size={16} strokeWidth={2.5} className="text-black" />
          </Link>
        </div>

        <div className="divide-y divide-dashed divide-slate-100">
          {blogs.map((item) => (
            <div
              key={item.id}
              className="py-3.5 first:pt-0 last:pb-0 flex justify-between gap-4"
            >
              <Link
                to={`/community/blog/${item.id}`}
                className="text-sm font-bold text-slate-800 hover:text-primary-hover hover:underline decoration-2 truncate"
              >
                {item.title}
              </Link>
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
