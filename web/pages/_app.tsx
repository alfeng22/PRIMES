// pages/_app.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import "@/styles/globals.css";
import { useState } from 'react';

export default function App({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
