'use client';

import React from 'react';
import { Spinner } from '../components';

export default function LoadingPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <Spinner />
    </div>
  );
}
