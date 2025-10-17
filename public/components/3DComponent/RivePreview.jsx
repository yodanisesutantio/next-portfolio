/* eslint-disable no-unused-vars */
import React from 'react';
import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';

const RivePreview = () => {
  const { RiveComponent, rive } = useRive({
    src: '/loading-animation.riv', // Update this path to your .riv file
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  return (
    <div className="w-full h-screen flex items-center justify-center bg-none">
      <div className="w-96 h-96 border border-gray-300 rounded-lg shadow-lg bg-none">
        <RiveComponent />
      </div>
      <div className="fixed bottom-4 left-4 bg-white p-4 rounded-lg shadow">
        <p>Animation Status: {rive?.isPlaying ? 'Playing' : 'Stopped'}</p>
      </div>
    </div>
  );
};

export default RivePreview;