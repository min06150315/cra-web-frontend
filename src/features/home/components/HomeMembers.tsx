import ActivityIMG01 from '@/assets/images/home/activity-networking.avif';
import ActivityIMG02 from '@/assets/images/home/activity-study.avif';
import ActivityIMG03 from '@/assets/images/home/activity-zoom.avif';

export const HomeMembers = () => {
  return (
    <section className="w-full bg-[#111] py-20 md:py-32 px-6 border-b-4 border-black text-white">
      <div className="mx-auto max-w-5xl flex flex-col gap-y-24 md:gap-y-36">
        <div className="group flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          <div className="w-full md:w-1/2 aspect-4/3 overflow-hidden rounded-none border-4 border-black shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] group-hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
            <img
              src={ActivityIMG01}
              alt="CRA 큰모임"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center bg-zinc-900 border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_#70b1f2] group-hover:shadow-[12px_12px_0px_0px_#70b1f2] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-black text-primary mb-4 tracking-tight uppercase">
              탄탄하고 끈끈한 네트워크
            </h3>
            <p className="text-sm md:text-base font-medium leading-relaxed md:leading-loose text-justify text-gray-200">
              현재 재학생 약 50명, 졸업생 약 200명으로 구성 되어 있으며, 매년 재학생과
              졸업생 모두가 모이는 ‘큰모임’이 진행됩니다. 재학생들은 대기업, 공기업,
              스타트업, 실리콘 밸리, 대학원 등 다양한 직군에 계시는 졸업생 선배님들로부터
              많은 도움을 받을 수 있습니다.
            </p>
          </div>
        </div>

        <div className="group flex flex-col md:flex-row-reverse gap-8 md:gap-16 items-center">
          <div className="w-full md:w-1/2 aspect-4/3 overflow-hidden rounded-none border-4 border-black shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] group-hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
            <img
              src={ActivityIMG02}
              alt="CRA 개발 세션"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center bg-zinc-900 border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_#ffde4d] group-hover:shadow-[12px_12px_0px_0px_#ffde4d] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-black text-point-yellow mb-4 tracking-tight uppercase">
              함께 성장하기에 좋은 환경
            </h3>
            <p className="text-sm md:text-base font-medium leading-relaxed md:leading-loose text-justify text-gray-200">
              선의의 경쟁을 통해 좋은 자극을 받을 수 있는 동료들이 기다리고 있습니다.
              24시간 이용 가능한 동방에서 모르는 것이 있으면 서로 물어보거나 토론을 하기도
              합니다. 단순히 혼자서 공부하는 것이 아닌, ‘질문하고 토론하라!’ 하브루타
              공부법으로 더욱 심도있게 탐구하고 토론합니다.
            </p>
          </div>
        </div>

        <div className="group flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          <div className="w-full md:w-1/2 aspect-4/3 overflow-hidden rounded-none border-4 border-black shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] group-hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
            <img
              src={ActivityIMG03}
              alt="CRA 온라인 미팅"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center bg-zinc-900 border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_#ff65a3] group-hover:shadow-[12px_12px_0px_0px_#ff65a3] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-black text-point-pink mb-4 tracking-tight uppercase">
              개발, 진심으로 합니다
            </h3>
            <p className="text-sm md:text-base font-medium leading-relaxed md:leading-loose text-justify text-gray-200">
              신입회원은 방학 프로젝트를 진행하게 됩니다. 선배의 가이드와 함께 지식을
              공부하고 실제로 프로젝트를 기획하며 개발합니다. 더 나아가, 실제로 개발의
              결과물을 바탕으로 서비스를 출시할 수도 있습니다. 현재 서비스 중인 프로젝트에
              투입되어 서비스 유지보수 및 유저와 소통하는 방법을 학부생으로서 경험하게
              됩니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
