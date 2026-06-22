const Home = () => <div className="p-8">메인 대시보드 페이지</div>;
const NotFound = () => (
  <div className="p-8 text-red-500">404 - 페이지를 찾을 수 없습니다.</div>
);

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
