import { Calendar } from 'lucide-react';

interface ScheduleItem {
  step: string;
  title: string;
  date: string;
}

interface RecruitScheduleProps {
  schedule: ScheduleItem[];
}

export const RecruitSchedule = ({ schedule }: RecruitScheduleProps) => {
  return (
    <div className="bg-gray-50 border-4 border-black rounded-3xl p-8 md:p-12 shadow-[12px_12px_0px_0px_#000]">
      <div className="mb-10 text-center md:text-left">
        <h3 className="text-2xl md:text-3xl font-black uppercase flex items-center justify-center md:justify-start gap-3">
          <Calendar size={28} strokeWidth={3} className="text-[#70b1f2]" />
          리크루팅 일정
        </h3>
        <p className="text-gray-600 font-medium text-sm mt-2">
          일정은 원활한 진행을 위해 변경될 수 있으며, 변동 사항은 미리 공지됩니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {schedule.map((item) => (
          <div
            key={item.step}
            className="bg-white border-2 border-black p-6 rounded-2xl shadow-[4px_4px_0px_0px_#000]"
          >
            <div className="mb-4">
              <span className="text-xs font-black bg-[#70b1f2] text-black px-2 py-0.5 rounded border border-black">
                STEP {item.step}
              </span>
            </div>

            <h4 className="text-[17px] font-black mb-2 text-black">{item.title}</h4>
            <p className="text-gray-700 text-[15px] font-medium leading-relaxed">
              {item.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
