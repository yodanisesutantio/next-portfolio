"use client";

import Footer from "@/public/components/Footer";
import LoadingScreen from "@/public/components/LoadingScreen";
import Navbar from "@/public/components/Navbar";
import { Suspense, useEffect, useState } from "react";

export default function ClientRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isRiveReady, setIsRiveReady] = useState(false);

  const handleLoadComplete = () => {
    setIsRiveReady(true);
  };

  useEffect(() => {
    if (isRiveReady) {
      setTimeout(() => setIsLoading(false), 200);
    }
  }, [isRiveReady]);

  return (
    <main className="w-full h-dvh flex flex-col bg-[#010400]">
      {isLoading ? (
        <LoadingScreen onLoadComplete={handleLoadComplete} />
      ) : (
        <Suspense fallback={<LoadingScreen onLoadComplete={() => {}} />}>
          <Navbar />
          {children}
          <Footer />
        </Suspense>
      )}
    </main>
  );
}
