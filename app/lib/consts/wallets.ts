import { Chain } from 'viem';
import { config } from './config';
// import { Valora } from '../ess/celoWallets.sample';

export function getWalletConnectors(chains: Chain[]) {
  const connectorConfig = {
    chains,
    projectId: config.walletConnectProjectId,
  };

  return [
    // Valora(connectorConfig),
    // CeloTerminal(connectorConfig),
    // CeloWallet(connectorConfig),
  ];
}
