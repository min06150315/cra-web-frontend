import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import { useEffect } from 'react';

const router = createBrowserRouter(routes);

export const AppRouter = () => {
  useEffect(() => {
    window.console.log(
      '%c Computer Research Association',
      'color: #00cfff; font-size: 2rem; font-family: "Pretendard Bold", BlinkMacSystemFont, Roboto, "Droid Sans", "Helvetica Neue", "Apple SD Gothic Neo", "sans-serif", sans-serif; font-weight: 700; text-shadow: 1px 2px 3px #a0e0f3;',
    );
  }, []);

  return <RouterProvider router={router} />;
};
