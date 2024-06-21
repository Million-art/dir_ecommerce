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
    <>
        {isLoading ? (
    <div className="  flex justify-center items-center mt-[30%] align-middle">
        <span className="loading loading-spinner text-cyan-700 w-16 h-16"></span>
        </div>
      ) : (
        children
      )}
    </>
  );
}
