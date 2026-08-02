import { useNavigate, useRouteError, isRouteErrorResponse } from 'react-router-dom';

interface ServerErrorPageProps {
  error?: Error;
  onRetry?: () => void;
}

export const ServerErrorPage = ({ error: propError, onRetry }: ServerErrorPageProps) => {
  const navigate = useNavigate();
  const routeError = useRouteError();

  let errorMessage = '서버와의 통신 중 오류가 발생했습니다.';

  if (propError) {
    errorMessage = propError.message;
  } else if (isRouteErrorResponse(routeError)) {
    errorMessage = routeError.statusText || routeError.data?.message || errorMessage;
  } else if (routeError instanceof Error) {
    errorMessage = routeError.message;
  }

  const handleRetry = () => {
    if (onRetry) {
      onRetry();
    } else {
      window.location.reload();
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-primary px-6 py-24">
      <div className="flex w-full max-w-md flex-col items-center text-center">
        <div className="relative mb-8">
          <div className="rotate-3 rounded-xl border-4 border-black bg-point-yellow px-8 py-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h1 className="text-5xl font-black tracking-tight text-black md:text-6xl">
              Oops!
            </h1>
          </div>

          <div className="absolute -bottom-2 left-12 h-4 w-4 rotate-45 border-b-4 border-r-4 border-black bg-point-yellow" />
        </div>

        <div className="mb-8 flex w-full flex-col gap-y-5 rounded-2xl border-4 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:p-10">
          <h2 className="text-xl font-black uppercase text-black md:text-2xl">
            문제가 발생했습니다.
          </h2>

          {errorMessage && (
            <div className="mt-2 rounded-lg border-2 border-black bg-slate-100 p-3 text-left font-mono text-xs text-slate-700">
              <span className="font-bold text-red-600">[System Log]</span>
              <p className="mt-1 wrap-break-word">{errorMessage}</p>
            </div>
          )}
        </div>

        <div className="flex w-full gap-x-4">
          <button
            type="button"
            onClick={handleRetry}
            className="flex-1 cursor-pointer rounded-lg border-2 border-black bg-white py-4 text-sm font-black text-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:bg-slate-100 hover:shadow-none md:text-base"
          >
            다시 시도
          </button>

          <button
            type="button"
            onClick={() => navigate('/')}
            className="flex-1 cursor-pointer rounded-lg border-2 border-black bg-white py-4 text-sm font-black text-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:bg-point-yellow hover:shadow-none md:text-base"
          >
            홈으로 이동
          </button>
        </div>
      </div>
    </section>
  );
};
