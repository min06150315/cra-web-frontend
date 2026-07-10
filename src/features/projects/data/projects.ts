import img24_1_01 from '@/assets/images/projects/th-24-1/project-24-1-donggong.avif';
import img24_1_02 from '@/assets/images/projects/th-24-1/project-24-1-intp3.avif';
import img24_2_01 from '@/assets/images/projects/th-24-2/project-24-2-crassistant.avif';
import img24_2_02 from '@/assets/images/projects/th-24-2/project-24-2-craweb.avif';
import img24_2_03 from '@/assets/images/projects/th-24-2/project-24-2-mallang.avif';
import img25_1_01 from '@/assets/images/projects/th-25-1/project-25-1-ccgo.avif';
import img25_1_02 from '@/assets/images/projects/th-25-1/project-25-1-jamiron.avif';
import img25_2_01 from '@/assets/images/projects/th-25-2/project-25-2-gold.avif';
import img25_2_02 from '@/assets/images/projects/th-25-2/project-25-2-mafia.avif';
import img_ITAXI from '@/assets/images/projects/main/itaxi.avif';
import img_HSAFARI from '@/assets/images/projects/main/hsafari.avif';
import img_TIMETABLE from '@/assets/images/projects/main/timetable.avif';

export interface Project {
  id: number;
  term: string;
  title: string;
  description: string;
  stack: string[];
  image: string;
  github?: string;
}

export const PROJECT_DATA: Project[] = [
  {
    id: 1,
    term: '22-2',
    title: 'I-TAXI',
    description:
      '한동인의 No.1 교통 애플리케이션입니다. 많은 CRA 동아리원들의 노력으로 완성되었으며, 택시팟과 KTX팟 모집에 널리 사용되었습니다.',
    stack: ['Flutter', 'Firebase', 'GCP', 'AWS', 'Spring Boot'],
    image: img_ITAXI,
    github: 'https://github.com/I-Taxi',
  },
  {
    id: 2,
    term: '20-1',
    title: 'H-Safari',
    description:
      '한동인들의 중고거래 플랫폼을 제공하는 서비스입니다. 20-1학기 신입 방학 프로젝트로 시작되었으며, 교내에서 중고 물품 거래에 활용되었습니다',
    stack: ['Flutter', 'Node.js', 'Firebase'],
    image: img_HSAFARI,
    github: 'https://github.com/...',
  },
  {
    id: 3,
    term: '18-2',
    title: '대학 시간',
    description:
      'Histime 재개발 프로젝트입니다! 재학생 중 천명이 넘게 사용하고 있으며, 재정비하여 2주차부터 서비스를 시작하려고 합니다.',
    stack: ['Vue', 'Node.js', 'Express', 'MySQL'],
    image: img_TIMETABLE,
    github: 'https://github.com/cra16/histime',
  },
  {
    id: 5,
    term: '24-1',
    title: '동공 확장2',
    description:
      '한동대 내 공연 동아리의 티켓 예매를 돕는 웹서비스입니다. 23-1학기 방학 때 진행되었던 프로젝트를 이어받아 제작되었습니다.',
    stack: ['React', 'Node.js'],
    image: img24_1_01,
    github: 'https://github.com/...',
  },
  {
    id: 5,
    term: '24-1',
    title: 'Lazy Raccoon',
    description:
      '발전기 고장으로 인한 난방 문제를 해결하는 퍼즐 어드벤쳐 게임. Unreal Engine을 통해 2D/3D hybrid game을 개발하고 있습니다. 라쿤이 마을의 발전기 고장으로 인한 난방 문제를 해결하기 위해 여러 미니 게임을 하는 퍼즐 어드벤쳐 게임입니다.',
    stack: ['Unreal Engine'],
    image: img24_1_02,
    github: 'https://github.com/...',
  },
  {
    id: 6,
    term: '24-2',
    title: 'Coding Roadmap Assistant',
    description:
      'AI 기반의 코딩 보조 도우미 서비스입니다. OpenAI API를 활용하여 사용자에게 도움을 제시합니다. 현재 VSCode Marketplace에 출시한 상태이고 Extension으로 사용 가능 합니다.',
    stack: ['OpenAI SDK', 'VS Code Extension API', 'TypeScript', 'React'],
    image: img24_2_01,
    github: 'https://github.com/...',
  },
  {
    id: 7,
    term: '24-2',
    title: 'CRA 웹페이지',
    description:
      'CRA의 새로운 페이지를 제작하는 웹 개발 프로젝트입니다. 동아리의 소개와 CRA 회원들만의 소통 공간 제공합니다. 25-1 학기에 출시를 목표로 하고 있습니다.',
    stack: ['React', 'Spring Boot', 'MySQL', 'AWS'],
    image: img24_2_02,
    github: 'https://github.com/...',
  },
  {
    id: 8,
    term: '24-2',
    title: '말랑 타격대',
    description:
      '자원을 모아 건물을 짓고, 유닛을 생산해 전략적으로 상대 본진을 파괴하는 실시간 전략 게임입니다. 중세기사 컨셉을 가진 RTS (Real-Time-Strategy)입니다.  1 대 1이 가능한 멀티플레이어 게임입니다.',
    stack: ['Unity', 'Photon Server'],
    image: img24_2_03,
    github: 'https://github.com/...',
  },
  {
    id: 9,
    term: '25-1',
    title: 'CCGO',
    description:
      '팀 CC를 비롯한 모든 공동체 내에서 친목 도모 활성화를 위한 서비스 앱입니다. CC 미션을 자동으로 제공해주며, 서로의 CC미션 진행 현황 파악이 가능합니다.',
    stack: ['React Native', 'Spring Boot', 'MySQL'],
    image: img25_1_01,
    github: 'https://github.com/...',
  },
  {
    id: 10,
    term: '25-1',
    title: 'Jamiron',
    description:
      'AI 기반의 강의자료 정리 프로그램 입니다. 자료들을 분석해서 강의별로 폴더를 만들어 정리합니다.',
    stack: ['Python', 'PyQt5', 'FastAPI'],
    image: img25_1_02,
    github: 'https://github.com/...',
  },
  {
    id: 11,
    term: '25-2',
    title: '알고리즘 기반 주식 자동 매매 시스템',
    description:
      '사용자를 대신하여 비트코인을 자동으로 매매해주는 서비스입니다. 매매 현황, 거래 내역, 시스템 로그를 웹 페이지에서 확인할 수 있습니다.',
    stack: ['React', 'FastAPI', 'PostgreSQL'],
    image: img25_2_01,
    github: 'https://github.com/...',
  },
  {
    id: 12,
    term: '25-2',
    title: 'Mafia game AI',
    description:
      '부분 관측 마르코프 결정 과정 환경에서 강화학습과 모방학습을 시현할 수 있는 환경을 마련하였습니다. 간단한 연구 질문을 설정하여 연구를 진행하고 스스로 논문을 작성하는 경험을 할 수 있었습니다.',
    stack: ['PyTorch', 'Gymnasium', 'PettingZoo', 'SuperSuit', 'TensorBoard'],
    image: img25_2_02,
    github: 'https://github.com/...',
  },
];
