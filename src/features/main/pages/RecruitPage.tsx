export const RecruitPage = () => {
  const coreValues = [
    {
      id: '01',
      tag: 'SYNERGY',
      title: '함께 달리는 성장의 가치',
      desc: "혼자가 아닌 '우리'로 존재할 때 더 크게 성장합니다. 동료와 맹렬히 토론하고 협력하며 공동의 목적지를 향해 기꺼이 발맞추어 갈 사람을 찾습니다.",
    },
    {
      id: '02',
      tag: 'CHALLENGE',
      title: '두려움 없는 거침없는 도전',
      desc: '실패의 리스크보다 정체의 지루함을 더 경계합니다. 어떤 복잡한 기술적 문제 앞에서도 두려움 없이 기어코 솔루션을 찾아내는 용기를 지향합니다.',
    },
    {
      id: '03',
      tag: 'ABSORPTION',
      title: '스펀지 같은 압도적 흡수력',
      desc: '낯선 지식과 트렌드 앞에서도 주눅 들지 않습니다. 수많은 시행착오와 실수를 성장의 가장 강력한 자양분으로 삼아 자신의 한계를 깨부수는 사람입니다.',
    },
    {
      id: '04',
      tag: 'OWNERSHIP',
      title: '프로덕트를 끝까지 책임지는 그릿',
      desc: '내가 작성한 코드 한 줄, 내가 배포한 서비스 하나에 깊은 애정과 오너십을 가집니다. 팀과 조직을 위해 몰입하고 끝까지 완수해내는 책임감을 믿습니다.',
    },
  ];

  const schedule = [
    { step: '01', label: '서류 접수', date: '2026.02.23 — 03.10', active: false },
    { step: '02', label: '코딩 테스트 & 면접 안내', date: '2026.03.11', active: false },
    { step: '03', label: '심층 면접', date: '2026.03.09 — 03.16', active: false },
    { step: '04', label: '최종합격 발표', date: '2026.03.17', active: true }, // 💡 포인트 그린 액센트 배치용
  ];

  return (
    <div className="w-full bg-[#ffffff] text-[#1f2937] antialiased selection:bg-[#70b1f2]/20 min-h-screen">
      {/* 1. Hero Section: 토스/카카오T 스타일의 청량하고 정갈한 헤더 */}
      <section className="relative pt-32 pb-24 px-6 flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-b from-[#edf5fd]/60 to-[#ffffff]">
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[#388bdd] font-mono text-xs md:text-sm tracking-[0.4em] uppercase mb-4 font-bold">
            2026-1 RECRUITMENT
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.2] mb-8 text-[#1f2937]">
            Next Generation, CRA.
            <br />
            우리와 함께 한동을 변화시킬
            <br />
            <span className="text-[#388bdd]">새로운 움직임</span>을 기다립니다.
          </h1>

          {/* 마감 안내 배지 */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#edf5fd] border border-[#70b1f2]/20 text-[#388bdd] text-xs md:text-sm font-semibold rounded-full tracking-wide">
            <span className="w-2 h-2 rounded-full bg-gray-400" />
            26-1학기 공식 모집 기간이 종료되었습니다
          </div>
        </div>
      </section>

      {/* 2. Core Value Section: 무보더 플랫 매트릭스 레이아웃 */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-[#388bdd] font-mono text-xs tracking-[0.3em] uppercase block mb-2 font-bold">
              Talent Alignment
            </span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#1f2937]">
              CRA가 지향하는 동료의 모습
            </h2>
          </div>
          <p className="text-[#4b5563] text-sm md:text-base max-w-xs leading-relaxed">
            우리는 완벽한 실력보다, 팀과 프로덕트를 향한 압도적인 몰입과 집요함을 가치
            있게 여깁니다.
          </p>
        </div>

        {/* 연한 블루(#edf5fd) 서페이스를 배경으로 활용하여 선 없이 면으로 쪼갠 투명한 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreValues.map((value) => (
            <div
              key={value.id}
              className="bg-[#edf5fd]/40 p-8 md:p-10 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:bg-[#edf5fd]/80 hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono font-bold text-[#388bdd] tracking-widest bg-[#70b1f2]/10 px-2.5 py-1 rounded">
                    {value.tag}
                  </span>
                  <span className="text-xl font-mono font-bold text-[#70b1f2]/30">
                    {value.id}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#1f2937] tracking-tight mb-3">
                  {value.title}
                </h3>
                <p className="text-sm md:text-base text-[#4b5563] leading-relaxed text-justify font-normal">
                  {value.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Timeline Section: 모던 로우(Row) 테이블 레이아웃 + 액센트 그린 조합 */}
      <section className="py-24 px-6 max-w-5xl mx-auto border-t border-gray-100">
        <div className="mb-16">
          <span className="text-[#388bdd] font-mono text-xs tracking-[0.3em] uppercase block mb-2 font-bold">
            Recruitment Timeline
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#1f2937]">
            선발 여정
          </h2>
        </div>

        <div className="flex flex-col border-b border-gray-100">
          {schedule.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col sm:flex-row sm:items-center justify-between py-6 md:py-8 border-t border-gray-100 transition-colors duration-200 hover:bg-[#edf5fd]/20 px-4 -mx-4 rounded-xl"
            >
              <div className="flex items-center gap-6 md:gap-12 mb-3 sm:mb-0">
                <span className="font-mono text-sm text-[#70b1f2] font-bold">
                  {item.step}
                </span>
                <h4 className="text-base md:text-lg font-bold text-[#1f2937]">
                  {item.label}
                </h4>
              </div>

              {/* 💡 액센트 컬러 매칭: 최종 합격 발표날에 #69c077 그린 적용 */}
              <p
                className={`text-sm font-mono font-semibold ${item.active ? 'text-[#69c077]' : 'text-[#4b5563]'}`}
              >
                {item.date} {item.active && '• 최종 케이스'}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Footer CTA Section: 미니멀의 극치 */}
      <section className="py-24 px-6 text-center max-w-xl mx-auto border-t border-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight text-[#1f2937]">
          CRA의 여정은 계속됩니다
        </h2>
        <p className="text-[#4b5563] text-sm md:text-base mb-8 leading-relaxed">
          공식 리크루팅 기간 외에도, 한동의 전산 문화를 리드할 열정 있는 인재들의 관심은
          언제나 환영합니다.
        </p>

        {/* 라이트 모드 닫힘 상태 디자인 */}
        <div className="inline-block px-8 py-3 bg-gray-100 text-gray-400 text-xs font-mono font-bold tracking-widest rounded-full select-none uppercase border border-gray-200">
          Closed
        </div>
      </section>
    </div>
  );
};
