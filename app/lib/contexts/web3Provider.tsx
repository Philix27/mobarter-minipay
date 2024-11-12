'use client';

import { celo, celoAlfajores,  } from '@wagmi/core/chains';
import { createConfig, http, injected } from '@wagmi/core';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useState } from 'react';
import { httpBatchLink, loggerLink } from '@trpc/client';
import superjson from 'superjson';
import { trpc } from '../app';
import { WalletProvider } from './WalletContext';
// import { Alfajores, Baklava, Celo } from '@celo/rainbowkit-celo/chains'



const configX = createConfig({
  chains: [celoAlfajores, celo, ],
  transports: {
    [celoAlfajores.id]: http(),
    [celo.id]: http(),
  },
  ssr: true,
  connectors: [ injected()],
});

export function Web3Providers(props: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({}));
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        loggerLink({
          enabled: (opts) =>
            (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') ||
            (opts.direction === 'down' && opts.result instanceof Error),
        }),
        httpBatchLink({
          url: `${process.env.NEXT_PUBLIC_TRPC_REQUEST_URL}/api/trpc`,
        }),
      ],
      transformer: superjson,
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <WagmiProvider config={configX}>
        <QueryClientProvider client={queryClient}>
          <WalletProvider>

{props.children}

          </WalletProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </trpc.Provider>
  );
}
