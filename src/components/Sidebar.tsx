import React, { useState } from 'react';
import Logo from '../assets/Logo.png';

const menu = [
  { icon: 'fa-house', label: 'Trang chủ' },
  { icon: 'fa-layer-group', label: 'Đa kênh' },
  { icon: 'fa-user-plus', label: 'Cơ hội' },
  { icon: 'fa-file-lines', label: 'Đơn hàng', regular: true },
  { icon: 'fa-gear', label: 'Thiết lập' },
];

const Sidebar: React.FC = () => {
  const [mini, setMini] = useState(false);
  return (
    <aside
      className={`bg-white min-h-screen flex flex-col justify-between border-r border-gray-200 rounded-tr-2xl rounded-br-2xl shadow-md transition-all duration-300 ${mini ? 'w-16' : 'w-[240px]'}`}
    >
      <div>
        <div className={`flex items-center ${mini ? 'justify-center' : 'justify-between'} px-4 py-8 relative`}>
          {!mini && (
            <img src={Logo} alt="VETC Logo" className="h-8 transition-all duration-300" />
          )}
          <button
            className={`p-2 rounded hover:bg-gray-100 transition absolute top-1/2 -translate-y-1/2 right-2 ${mini ? 'left-1/2 -translate-x-1/2 right-auto' : ''}`}
            onClick={() => setMini((v) => !v)}
            aria-label="Toggle sidebar"
          >
            <i className="fa-solid fa-bars text-xl text-[#00000070]"></i>
          </button>
        </div>
        <nav className="mt-2">
          <ul className="flex flex-col gap-[6px] px-2">
            {menu.map((item, idx) => (
              <li key={item.label} className="flex justify-center">
                <a
                  href="#"
                  className={`group flex items-center ${mini ? 'justify-center' : ''} gap-3 py-2 rounded-lg transition-colors w-full ${mini ? '' : 'px-2'} text-gray-700 hover:bg-[#25A55E] hover:text-white`}
                  style={mini ? { width: 44, height: 44 } : {}}
                >
                  <span
                    className={`flex items-center justify-center ${mini ? 'w-11 h-11' : 'w-6 h-6'} transition-all`}
                  >
                    <i
                      className={`fa-${item.regular ? 'regular' : 'solid'} ${item.icon} text-[18px] ${mini ? 'mx-auto' : ''} text-[#00000070] group-hover:text-white transition-colors`}
                    ></i>
                  </span>
                  {!mini && <span className="group-hover:text-white transition-colors">{item.label}</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={`px-6 py-4 border-t border-gray-100 flex items-center gap-3 transition-all duration-300 ${mini ? 'justify-center px-0' : ''}`}>
        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Avatar" className="w-8 h-8 rounded-full" />
        {!mini && <span className="text-gray-700">Phuong Nguyen</span>}
      </div>
    </aside>
  );
};

export default Sidebar; 