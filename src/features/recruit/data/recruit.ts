import POSTER_26_1 from '@/assets/images/posters/poster-26-1.avif';
import POSTER_25_2 from '@/assets/images/posters/poster-25-2.avif';
import POSTER_25_1 from '@/assets/images/posters/poster-25-1.avif';
import POSTER_24_2 from '@/assets/images/posters/poster-24-2.avif';
import POSTER_24_1 from '@/assets/images/posters/poster-24-1.avif';
import POSTER_23_2 from '@/assets/images/posters/poster-23-2.avif';
import POSTER_22_2 from '@/assets/images/posters/poster-22-2.avif';
import POSTER_22_1 from '@/assets/images/posters/poster-22-1.avif';
import POSTER_21_2 from '@/assets/images/posters/poster-21-2.avif';
import POSTER_21_1 from '@/assets/images/posters/poster-21-1.avif';
import POSTER_20_2 from '@/assets/images/posters/poster-20-2.avif';
import POSTER_19_2 from '@/assets/images/posters/poster-19-2.avif';

export const RECRUIT_DATA = {
  // 기본 기수 및 학기 정보
  year: '2026',
  term: '26-1',

  // 현재 모집 상태 제어
  // true: "지원하기" 활성화 배너 노출 / false: "모집 기간이 아닙니다" 노출
  isRecruiting: true,
  applyLink: 'https://forms.gle/your-apply-link', // 구글 폼 등의 지원서 링크

  // 현재 모집 포스터 이미지
  currentPoster: POSTER_26_1,

  // 지난 모집 포스터 이미지
  pastPosters: [
    POSTER_25_2,
    POSTER_25_1,
    POSTER_24_2,
    POSTER_24_1,
    POSTER_23_2,
    POSTER_22_2,
    POSTER_22_1,
    POSTER_21_2,
    POSTER_21_1,
    POSTER_20_2,
    POSTER_19_2,
  ],

  // 일정
  schedule: [
    {
      step: '01',
      title: '서류 접수',
      date: '2026.2.23(월) ~ 2026.3.10(화)',
    },
    {
      step: '02',
      title: '면접 일정 안내',
      date: '2026.3.11(수)',
    },
    {
      step: '03',
      title: '코딩 테스트 및 면접',
      date: '2026.3.9(월) ~ 2026.3.16(월)',
    },
    {
      step: '04',
      title: '최종합격 발표',
      date: '2026.3.17(화)',
    },
  ],

  // 인재상
  idealTalents: [
    {
      num: '01',
      title: '협력과 성장',
      desc: '다른 사람과 협력하며 공동의 목표를 이루고 서로 배우고 발전하며 함께 성장하고 싶은 사람',
    },
    {
      num: '02',
      title: '도전과 용기',
      desc: '어떤 문제든 두려움 없이 극복하려는 의지를 가지고 새로운 기회를 탐구하는 용기와 도전 의식을 지닌 사람',
    },
    {
      num: '03',
      title: '주도성과 배움',
      desc: '익숙하지 않은 새로운 지식을 접할 때도 적극적으로 받아들이고 실수를 통해 성장하며 자신의 능력을 확장하려고 노력하는 사람',
    },
    {
      num: '04',
      title: '기여와 책임감',
      desc: '자신이 맡은 일을 끝까지 책임지고 완수하며 팀과 조직을 위해 기여하고자 하는 책임감이 강한 사람',
    },
  ],
};
