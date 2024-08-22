'use client'
import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

export const DragonHeader = () => {
  return (
    <Player src="lottie/dragon-house.json" className="w-full md:w-1/2" loop
    autoplay/>
  );
}
