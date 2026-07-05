export const HomeAbout = () => {
  return (
    <section className="w-full py-20 md:py-32 px-6">
      <div className="mx-auto max-w-4xl text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-x-3 gap-y-2 mb-6 justify-center md:justify-start">
          <span className="text-2xl md:text-3xl">👩‍💻👨‍💻</span>
          <h3 className="text-xl md:text-2xl font-extrabold tracking-wider uppercase">
            Computer Research Association
          </h3>
        </div>

        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-10 leading-tight">
          1995년부터 이어온 <br className="md:hidden" />
          <span className="text-primary-hover">‘배워서 남 주자’</span>의 실천.
        </h2>

        <p className="text-base md:text-xl font-normal leading-relaxed md:leading-loose tracking-wide text-justify">
          1995년 창립된 CRA는 한동대학교 전산 교육과정에 기초하여 한 분야에 국한되지 않는
          신기술을 공부하고 프로젝트와 세미나 등의 활동을 가지는 동아리입니다. 이렇게
          습득한 지식과 기술을 실천하기 위해 교내 인트라넷 커뮤니티, 택시 공유, 배달
          애플리케이션 등을 직접 개발하고 운영하고 있습니다.
        </p>

        <p className="text-base md:text-xl font-normal leading-relaxed md:leading-loose tracking-wide text-justify mt-6">
          방학 중 동아리원들은 팀 단위로 프로젝트를 진행하여 학기 중 수업 시간에서 접해볼
          수 없었던 것들을 배우고 실제로 서비스해보는 기회를 가집니다. 또 매년 ‘큰모임’을
          통해 선배들과 정기적인 교류활동을 가지며 든든한 네트워크를 이어가고 있습니다.
        </p>
      </div>
    </section>
  );
};
