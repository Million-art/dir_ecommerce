import SideBar from "@/components/admin/SideBar";
 
import React from 'react';

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex h-screen w-full">
      <SideBar />
      <div className="flex-1 overflow-y-auto">
        <div className="container mx-auto p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
