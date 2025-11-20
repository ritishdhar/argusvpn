import React from 'react';
import { Logo } from './icons/Logo';

const Preloader = () => {
  return (
    <div
      id="preloader"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      <div className="flex items-center space-x-2 animate-pulse">
        <Logo className="h-8 w-auto" />
        <span className="font-headline text-2xl font-bold text-white">Argus VPN</span>
      </div>
    </div>
  );
};

export default Preloader;
