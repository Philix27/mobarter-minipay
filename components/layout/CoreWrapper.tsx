'use client';
import { BottomNav, Drawer } from '@/components';
import { AppStores, use3Wagmi, useWallet } from '@/lib';
import { useRouter } from 'next/navigation';
import React, { ReactNode, useEffect } from 'react';
import { DisableZoom } from './DissableZoom';

export function CoreLayoutWrapper(props: { children: ReactNode; hideBottomNav?: boolean }) {
  const store = AppStores.useSettingsStore();

  useEffect(() => {
    document.addEventListener('gesturestart', function (e) {
      e.preventDefault();
      // special hack to prevent zoom-to-tabs gesture in safari
      document.body.style.zoom = '0.99';
    });

    document.addEventListener('gesturechange', function (e) {
      e.preventDefault();
      // special hack to prevent zoom-to-tabs gesture in safari
      document.body.style.zoom = '0.99';
    });

    document.addEventListener('gestureend', function (e) {
      e.preventDefault();
      // special hack to prevent zoom-to-tabs gesture in safari
      document.body.style.zoom = '0.99';
    });

    return () => {};
  }, []);

  return (
    <div
      className="h-screen bg-background overflow-y-auto  no-scrollbar"
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      <div className="min-h-[calc(100vh-250px)] mt-[50px]  no-scrollbar">
        <DisableZoom />
        {props.children}
        {props.hideBottomNav || <BottomNav />}
        {store.drawerIsOpen && <Drawer />}
      </div>
    </div>
  );
}
