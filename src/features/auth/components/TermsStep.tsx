import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface TermsStepProps {
  onNext: () => void;
}

export const TermsStep = ({ onNext }: TermsStepProps) => {
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="w-full bg-white border-4 border-black p-8 md:p-10 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-y-6">
      <div className="text-center">
        <span className="inline-block px-2.5 py-1 bg-primary border-2 border-black rounded text-xs font-black uppercase tracking-wider mb-3">
          STEP 01
        </span>
        <h2 className="text-2xl md:text-3xl font-black text-black tracking-tight uppercase">
          개인정보 이용 동의
        </h2>
        <p className="text-xs md:text-sm font-bold text-slate-500 mt-1">
          CRA 가입 신청을 위해 필수 약관에 동의해주세요.
        </p>
      </div>

      <div className="w-full h-64 p-5 bg-slate-50 border-2 border-black rounded-lg text-xs md:text-sm text-slate-600 font-bold overflow-y-scroll leading-relaxed">
        <p className="font-extrabold text-black mb-2 text-sm">
          CRA 컴퓨터연구회 개인정보 수집·이용 동의
        </p>
        <p className="mb-4">
          본 동아리는 원활한 동아리 서비스 운영 및 동아리원 관리를 위해 아래와 같이
          개인정보를 수집·이용하고자 합니다.
        </p>

        <div className="flex flex-col gap-y-3 mb-4">
          <div className="p-3 bg-white border-2 border-black rounded-lg">
            <strong className="text-black block mb-1">1. 수집 및 이용 목적</strong>
            <p>
              동아리 회원 식별 및 가입 의사 확인, 기수별 인적사항 관리, 동아리 프로젝트
              협업 권한 관리(GitHub), 공지사항 및 활동 안내 전달
            </p>
          </div>

          <div className="p-3 bg-white border-2 border-black rounded-lg">
            <strong className="text-black block mb-1">2. 수집하는 개인정보 항목</strong>
            <p>아이디, 비밀번호, 이름, 이메일, GitHub 유저네임, 학번, 동아리 기수</p>
          </div>

          <div className="p-3 bg-white border-2 border-black rounded-lg">
            <strong className="text-black block mb-1">
              3. 개인정보의 보유 및 이용 기간
            </strong>
            <p className="text-black font-black underline">
              동아리 탈퇴 시 귀하의 개인정보는 지체 없이 파기합니다.
            </p>
          </div>
        </div>

        <p>
          귀하는 본 개인정보 수집·이용 동의에 거부할 권리가 있습니다. 단, 동의 거부 시
          동아리 웹 서비스 가입 및 활동이 제한될 수 있습니다.
        </p>
      </div>

      <div className="flex items-center gap-x-3 py-2 cursor-pointer">
        <input
          type="checkbox"
          id="agree-checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="w-5 h-5 accent-primary border-2 border-black rounded cursor-pointer"
        />
        <label
          htmlFor="agree-checkbox"
          className="text-sm md:text-base font-black text-black cursor-pointer"
        >
          위 개인정보 수집 및 이용에 동의합니다.{' '}
          <span className="text-red-500">(필수)</span>
        </label>
      </div>

      <div className="grid grid-cols-2 gap-x-4 mt-2">
        <button
          type="button"
          onClick={() => navigate('/login')}
          className="py-4 border-2 border-black bg-white hover:bg-slate-100 rounded-lg text-sm md:text-base font-black text-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 cursor-pointer"
        >
          이전으로
        </button>

        <button
          type="button"
          disabled={!agreed}
          onClick={onNext}
          className={`py-4 border-2 border-black rounded-lg text-sm md:text-base font-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 cursor-pointer ${
            agreed
              ? 'bg-primary text-black hover:bg-primary-hover hover:text-white'
              : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none translate-x-1 translate-y-1'
          }`}
        >
          다음 단계로
        </button>
      </div>
    </div>
  );
};
