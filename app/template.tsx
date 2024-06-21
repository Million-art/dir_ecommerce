'use client'
import { useEffect, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center align-middle">
      {isLoading ? (
        <span className="loading loading-spinner text-primary w-16 h-16"></span>
      ) : (
        children
      )}
    </div>
  );
}
