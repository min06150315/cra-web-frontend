import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '@/lib/queryClient.ts';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './styles/global.css';
import AppRouter from '@/routes/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient} >
    <AppRouter />
    <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>,
);
