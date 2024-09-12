import NgoHeader from '@/components/layouts/NgoHeader';
import NgoSideMenu from '@/components/layouts/NgoSideMenu';
import React, { ReactNode } from 'react';


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <NgoSideMenu />
      <div className="ml-72 flex-1 flex flex-col overflow-hidden">
        <NgoHeader />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white">
          <div className="container mx-auto px-8 mt-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;