import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

type MainLayoutProps = {
  children: React.ReactNode;
  onAddOrder?: () => void;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children, onAddOrder }) => (
  <div className="flex min-h-screen bg-[#f7f8fa]">
    <Sidebar />
    <div className="flex-1 flex flex-col">
      <Header onAddOrder={onAddOrder} />
      <main className="flex-1 p-8 overflow-auto">{children}</main>
    </div>
  </div>
);

export default MainLayout; 