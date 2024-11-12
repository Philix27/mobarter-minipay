'use client';
import { CoreLayoutWrapper } from '@/components';
import { ReactNode } from 'react';

export default function CoreLayout(props: { children: ReactNode }) {
  return <CoreLayoutWrapper hideBottomNav>{props.children}</CoreLayoutWrapper>;
}
