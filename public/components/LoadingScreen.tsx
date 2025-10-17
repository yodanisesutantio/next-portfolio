"use client";

import React, { useState } from "react";
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

const LoadingScreen = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [isRiveLoaded, setIsRiveLoaded] = useState(false);

  const { RiveComponent, rive } = useRive({
    src: "loading-animation.riv",
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
    onLoop: () => {
      if (!isRiveLoaded) {
        setTimeout(() => {
          setIsRiveLoaded(true);
          onLoadComplete();
        }, 400);
      }
    },
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="w-36 h-36">
        <RiveComponent />
      </div>
    </div>
  );
};

export default LoadingScreen;
