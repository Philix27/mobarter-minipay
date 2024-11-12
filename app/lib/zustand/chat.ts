import { create } from 'zustand';
import { ethers } from 'ethers';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface ISlice {
  selectedConversation?: {
    id?: string | number;
    message?: [];
    cachedConversation?: any;
    cachedMessage?: any;
    conversation?: any;
  } | null;

  // conversations?: CachedConversation<ContentTypeMetadata>;
  peerAddress?: string | null;
  balance?: string | null;
  isOnNetwork?: boolean;
  keys?: Map<string, Uint8Array>;
  newKeys?: Uint8Array | null;

  isLoggedIn?: boolean;
  web3Wallet?: string;
  signer?: ethers.JsonRpcSigner | null;
  etherKey?: string | null;
  etherWallet?: ethers.Wallet | null;
  showChat?: boolean;
  isConsent?: boolean;
  isConnectedToXmpt?: boolean;
}

export interface ISliceUpdate extends Required<ISlice> {
  update: (data: ISlice) => void;
  clear: () => void;
}

export const defaultValues: Required<ISlice> = {
  selectedConversation: null,
  balance: null,
  isOnNetwork: false,
  keys: new Map(),
  newKeys: null,
  isConsent: false,
  isLoggedIn: false,
  showChat: false,
  web3Wallet: '',
  signer: null,
  peerAddress: '',
  isConnectedToXmpt: false,
  etherKey: null,
  etherWallet: null,
};

export const useChat = create(
  persist<ISliceUpdate>(
    (set) => ({
      ...defaultValues,
      update: (data) =>
        set((state) => {
          return { ...state, ...data };
        }),
      clear: () =>
        set((state) => {
          return { ...state, ...defaultValues };
        }),
    }),
    {
      name: 'chat',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
