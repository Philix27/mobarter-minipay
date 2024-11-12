'use client';
import { Navbar, Spinner, TextH } from '@/components';
import React from 'react';
import QuickActions from './QuickActions';
import { IoNotifications } from 'react-icons/io5';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { AirtimeData } from '../dash-airtime/data';

const Transactions = dynamic(() => import('./transactions'), { loading: () => <Spinner /> });

export default function DashboardScreen() {
  const router = useRouter();
  return (
    <>
      <Navbar
        title={'Mobarter'}
        icon={IoNotifications}
        onIconClick={() => {
          router.push('/notifications');
        }}
      />
      <div className="px-6 py-2 mt-8 mb-8">
        <div className="pb-2 mx-2">
          <p className="text-foreground font-bold text-[28px]">{AirtimeData['Nigeria'].symbol}300.00</p>
          {/* <p className="text-foreground bg-purple-300">{AirtimeData['Nigeria'].symbol}300.00</p> */}
        </div>
        <QuickActions />
        <Transactions />
      </div>
    </>
  );
}
