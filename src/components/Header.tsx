import React from 'react';

type HeaderProps = {
  onAddOrder?: () => void;
};

const Header: React.FC<HeaderProps> = ({ onAddOrder }) => (
  <header className="flex items-center justify-between bg-white h-16 px-8 border-b border-gray-200">
    <button
      className="flex items-center justify-center w-7 h-7 rounded text-xl text-gray-500 hover:bg-gray-100 transition"
      onClick={onAddOrder}
    >
      <i className="fa-solid fa-plus"></i>
    </button>
    <div className="flex items-center gap-3 ml-auto">
      <span className="font-semibold text-base text-gray-800">Trạng thái nhân viên</span>
      <button
        className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2 bg-white min-w-[140px] focus:outline-none focus:ring-2 focus:ring-[#25A55E] hover:border-[#25A55E] transition"
      >
        <i className="fa-solid fa-link text-green-500 text-base"></i>
        <span className="text-gray-800 font-medium">Sẵn sàng</span>
        <i className="fa-solid fa-chevron-down text-gray-400 text-xs ml-1"></i>
      </button>
    </div>
  </header>
);

export default Header; 