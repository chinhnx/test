import React from "react";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ open, onClose, children }) => {
  return (
    <>
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: open ? '#00000073' : 'transparent' }}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 right-0 h-full bg-white z-50 shadow-xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "70vw", minWidth: 400, maxWidth: "100vw" }}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <div className="text-xl font-semibold">Đơn hàng</div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-700 text-2xl"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div className="flex-1 flex overflow-auto">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
