import React, { useState } from 'react'
import MainLayout from './components/MainLayout'
import OrderList from './components/OrderList'
import Drawer from './components/Drawer'

const steps = [
  { label: 'Tính phí' },
  { label: 'Người thụ hưởng' },
  { label: 'Thông tin xe' },
];

const DrawerContent = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedType, setSelectedType] = useState('tnds');
  return (
    <div className="flex flex-1 h-full relative">

      <div className="p-6 pr-3 overflow-y-auto border-r border-gray-100 bg-white" style={{ flexBasis: '65%', maxWidth: '65%' }}>
        <div className="flex items-center mb-6 relative">
          {steps.map((step, idx) => (
            <React.Fragment key={step.label}>
              <button
                className="flex flex-col items-center flex-1 min-w-0 bg-transparent border-none outline-none cursor-pointer"
                onClick={() => setCurrentStep(idx)}
                type="button"
              >
                <div className="flex items-center gap-2 w-full justify-center pb-3">
                  <span className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${currentStep === idx ? 'bg-[#25A55E] text-white' : 'bg-[#F2F2F2] text-[#BDBDBD]'}`}>{idx + 1}</span>
                  <span className={`text-base ${currentStep === idx ? 'text-[#22292f] font-semibold' : 'text-[#BDBDBD] font-normal'}`}>{step.label}</span>
                </div>
              </button>
              {idx < steps.length - 1 && (
                <span className="text-[#E0E0E0] text-xl select-none">&gt;</span>
              )}
            </React.Fragment>
          ))}

          <div className="absolute left-0 right-0 bottom-0 h-[3px] bg-[#F2F2F2] rounded-full pointer-events-none" />

          <div
            className="absolute bottom-0 h-[3px] bg-[#25A55E] rounded-full transition-all duration-300 pointer-events-none"
            style={{
              left: `calc((100% / ${steps.length}) * ${currentStep})`,
              width: `calc(100% / ${steps.length})`,
            }}
          />
        </div>

        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="bg-white rounded-[8px] border border-[#D9D9D9] p-2 pl-4 flex flex-col justify-center min-h-[63px]">
            <div className="text-xs text-[#828282] font-medium leading-tight">Biển kiểm soát</div>
            <div className="font-bold text-xl leading-tight mt-1">37A 54356</div>
          </div>
          <div className="bg-white rounded-[8px] border border-[#D9D9D9] p-2 pl-4 flex flex-col justify-center min-h-[63px]">
            <div className="text-xs text-[#828282] font-medium leading-tight">Giá tham khảo</div>
            <div className="font-bold text-xl leading-tight mt-1">280 Triệu</div>
          </div>
          <div className="bg-white rounded-[8px] border border-[#D9D9D9] p-2 pl-4 flex flex-col justify-center min-h-[63px]">
            <div className="text-xs text-[#828282] font-medium leading-tight">Số chỗ ngồi</div>
            <div className="font-bold text-xl leading-tight mt-1">5 Chỗ</div>
          </div>
        </div>

        <div className="mb-4">
          <div className="font-medium mb-2">Loại bảo hiểm</div>
          <div className="flex gap-4 w-full">
            <label
              className={`flex items-center justify-between gap-3 cursor-pointer px-6 py-4 rounded-xl border transition-all duration-150 w-full ${selectedType === 'tnds' ? 'border-[#1A3477] bg-white' : 'border-[#E5E7EB] bg-[#F9FAFB]'} hover:border-[#25A55E]`}
              style={{ minHeight: 56 }}
            >
              <span className="flex items-center gap-2">
                <i className={`fa-solid fa-shield-halved text-xl ${selectedType === 'tnds' ? 'text-[#1A3477]' : 'text-gray-400'}`}></i>
                <span className={`font-medium ${selectedType === 'tnds' ? 'text-[#1A3477]' : 'text-gray-500'}`}>BH TNDS bắt buộc</span>
              </span>
              <span className={`w-5 h-5 flex items-center justify-center rounded-full border-2 ${selectedType === 'tnds' ? 'border-[#1A3477]' : 'border-[#E5E7EB]'} bg-white`}>
                {selectedType === 'tnds' && <span className="w-2.5 h-2.5 rounded-full bg-[#1A3477] block"></span>}
              </span>
              <input type="radio" name="type" className="hidden" checked={selectedType === 'tnds'} onChange={() => setSelectedType('tnds')} />
            </label>
            <label
              className={`flex items-center justify-between gap-3 cursor-pointer px-6 py-4 rounded-xl border transition-all duration-150 w-full ${selectedType === 'vcx' ? 'border-[#1A3477] bg-white' : 'border-[#E5E7EB] bg-[#F9FAFB]'} hover:border-[#25A55E]`}
              style={{ minHeight: 56 }}
            >
              <span className="flex items-center gap-2">
                <i className={`fa-solid fa-car text-xl ${selectedType === 'vcx' ? 'text-[#1A3477]' : 'text-gray-400'}`}></i>
                <span className={`font-medium ${selectedType === 'vcx' ? 'text-[#1A3477]' : 'text-gray-500'}`}>BH Vật chất xe</span>
              </span>
              <span className={`w-5 h-5 flex items-center justify-center rounded-full border-2 ${selectedType === 'vcx' ? 'border-[#1A3477]' : 'border-[#E5E7EB]'} bg-white`}>
                {selectedType === 'vcx' && <span className="w-2.5 h-2.5 rounded-full bg-[#1A3477] block"></span>}
              </span>
              <input type="radio" name="type" className="hidden" checked={selectedType === 'vcx'} onChange={() => setSelectedType('vcx')} />
            </label>
          </div>
        </div>

        <div className="mb-4 bg-white rounded-[8px] border border-[#D9D9D9] p-5">
          <div className="flex items-center mb-4">
            <div className="font-bold text-[20px] mr-6">Thời hạn bảo hiểm</div>
            <div className="flex gap-2">
              {['1 năm', '1,5 năm', '2 năm', '2,5 năm', '3 năm'].map((t, i) => (
                <button key={i} className={`px-5 py-2 rounded-[6px] border text-[16px] font-medium transition-all duration-150 ${i === 0 ? 'bg-[#25A55E] text-white border-[#25A55E]' : 'bg-white text-gray-700 border-[#D9D9D9]'} hover:border-[#25A55E]`}>{t}</button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="font-semibold text-[16px] mb-2">Bắt đầu</div>
              <div className="relative">
                <input type="datetime-local" className="border border-[#D9D9D9] rounded-[6px] px-4 py-3 text-[16px] w-full focus:outline-none focus:ring-2 focus:ring-[#25A55E]" defaultValue="2024-05-12T07:49" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                  <i className="fa-regular fa-calendar"></i>
                </span>
              </div>
            </div>
            <div>
              <div className="font-semibold text-[16px] mb-2">Kết thúc</div>
              <div className="relative">
                <input type="datetime-local" className="border border-[#D9D9D9] rounded-[6px] px-4 py-3 text-[16px] w-full focus:outline-none focus:ring-2 focus:ring-[#25A55E]" defaultValue="2025-05-11T07:49" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                  <i className="fa-regular fa-calendar"></i>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4 bg-white  ">
          <div className="flex items-center gap-3 mb-3">
            <span className="relative inline-block w-10 h-6 align-middle select-none">
              <input type="checkbox" defaultChecked className="peer absolute w-10 h-6 opacity-0 z-10 cursor-pointer" />
              <span className="block rounded-full h-6 w-10 bg-gray-300 peer-checked:bg-[#25A55E] transition-colors"></span>
              <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-transform peer-checked:translate-x-4"></span>
            </span>
            <span className="font-semibold text-[16px]">Bảo hiểm bắt buộc TNDS của chủ xe</span>
          </div>
          <div className="flex border-b border-dashed border-[#D9D9D9] pb-2 gap-6">
            <div className="flex-1 flex flex-col gap-0.5">
              <div className="flex justify-between items-center">
                <span className="font-medium text-[16px]">Về người</span>
                <span className="font-bold text-[16px] text-right">150,000,000 đ</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="font-medium text-[16px]">Về tài sản</span>
                <span className="font-bold text-[16px] text-right">150,000,000 đ</span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-end">
              <div className="bg-[#F4F4F6] rounded-[10px] px-7 py-3 min-w-[180px] flex flex-col items-end">
                <span className="text-gray-500 text-[15px] font-medium">Phí bảo hiểm</span>
                <span className="text-[22px] font-bold text-[#222]">480,700 đ</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <span className="relative inline-block w-10 h-6 align-middle select-none">
            <input type="checkbox" className="peer absolute w-10 h-6 opacity-0 z-10 cursor-pointer" />
            <span className="block rounded-full h-6 w-10 bg-gray-300 peer-checked:bg-[#25A55E] transition-colors"></span>
            <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-transform peer-checked:translate-x-4"></span>
          </span>
          <span className="font-semibold text-[16px]">Bảo hiểm tai nạn lái xe và người ngồi trên xe</span>
        </div>

        <div className="mb-4">
          <button className="w-full flex items-center gap-2 px-4 py-2 rounded-lg border border-dashed border-[#F6A609] bg-[#FFFBEA] text-[#F6A609]">
            <i className="fa-solid fa-gift"></i>
            Chọn chương trình khuyến mãi
          </button>
        </div>

        <div className="flex justify-between mt-8 mb-24 px-1">
          <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 text-lg"><i className="fa-solid fa-chevron-left"></i></button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 text-lg"><i className="fa-solid fa-chevron-right"></i></button>
        </div>

        <div className="absolute left-0 right-0 bottom-0 border-t border-gray-200 bg-white px-0 py-4 flex justify-end gap-3 z-10 pr-6">
          <button className="px-5 py-2 rounded-lg border border-[#25A55E] text-[#25A55E] font-semibold bg-white">Lưu đơn nháp</button>
          <button className="px-5 py-2 rounded-lg border border-gray-200 text-gray-400 font-semibold bg-gray-100 cursor-not-allowed" disabled>Cấp đơn</button>
        </div>
      </div>

      <div className="p-0 flex justify-end items-start h-full" style={{ flexBasis: '30%', maxWidth: '30%' }}>
        <div className="bg-[#F7F8FA] rounded-[10px] p-5 w-full">
          <div className="font-bold text-[17px] mb-4 text-[#222]">Bản tóm tắt</div>
          <div className="mb-4">
            <div className="font-bold text-[15px] mb-2 text-[#222]">Thông tin xe</div>
            <div className="mb-1 flex text-[14px] justify-between"><span className="w-[120px] text-[#828282]">Tên xe</span><span className="text-[#222] text-right flex-1">Mitsubishi Attrage 2024</span></div>
            <div className="mb-1 flex text-[14px] justify-between"><span className="w-[120px] text-[#828282]">Giá trị xe</span><span className="text-[#222] text-right flex-1">500,000,000 đ</span></div>
            <div className="mb-1 flex text-[14px] justify-between"><span className="w-[120px] text-[#828282]">Mục đích sử dụng</span><span className="text-[#222] text-right flex-1">Không kinh doanh vận tải</span></div>
            <div className="mb-1 flex text-[14px] justify-between"><span className="w-[120px] text-[#828282]">Số khung</span><span className="text-[#222] text-right flex-1">MALBB51CBBM-225729</span></div>
            <div className="mb-1 flex text-[14px] justify-between"><span className="w-[120px] text-[#828282]">Số máy</span><span className="text-[#222] text-right flex-1">RNYYD4A2E6CD48448</span></div>
            <div className="mb-1 flex text-[14px] justify-between"><span className="w-[120px] text-[#828282]">Biển số xe</span><span className="text-[#222] text-right flex-1">37A54357T</span></div>
          </div>
          <div className="mb-4">
            <div className="font-bold text-[15px] mb-2 text-[#222]">Người thụ hưởng</div>
            <div className="mb-1 flex text-[14px] justify-between"><span className="w-[120px] text-[#828282]">Tên người thụ hưởng</span><span className="text-[#222] text-right flex-1">Nguyễn Thành Danh</span></div>
            <div className="mb-1 flex text-[14px] justify-between"><span className="w-[120px] text-[#828282]">Địa chỉ</span><span className="text-[#222] text-right flex-1">132 Dương Bá Trạc, Quận 8, HCM</span></div>
            <div className="mb-1 flex text-[14px] justify-between"><span className="w-[120px] text-[#828282]">Số điện thoại</span><span className="text-[#222] text-right flex-1">097****368</span></div>
            <div className="mb-1 flex text-[14px] justify-between"><span className="w-[120px] text-[#828282]">Người thụ hưởng</span><span className="text-[#222] text-right flex-1">Chủ xe</span></div>
            <div className="mb-1 flex text-[14px] justify-between"><span className="w-[120px] text-[#828282]">Xuất hóa đơn</span><span className="text-[#222] text-right flex-1">Không</span></div>
          </div>
          <div>
            <div className="font-bold text-[15px] mb-2 text-[#222]">Thông tin bảo hiểm</div>
            <div className="mb-1 flex text-[14px] justify-between"><span className="w-[120px] text-[#828282]">Thời hạn bảo hiểm</span><span className="text-[#222] text-right flex-1">12/05/2024 07:49 - 12/05/2025 07:49 (1 năm)</span></div>
            <div className="mb-1 flex text-[14px] justify-between"><span className="w-[120px] text-[#828282]">Bảo hiểm TNDS bắt buộc</span><span className="text-[#25A55E] font-semibold text-right flex-1">576,840 đ</span></div>
            <div className="mb-1 flex text-[14px] justify-between"><span className="w-[120px] text-[#828282]">Bảo hiểm tai nạn lái xe và người ngồi trên xe</span><span className="text-[#25A55E] font-semibold text-right flex-1">50,000 đ</span></div>
            <div className="mt-2 flex text-[15px] justify-between"><span className="w-[120px] text-[#222] font-bold">Tổng phí bảo hiểm</span><span className="text-[#25A55E] font-bold text-[17px] text-right flex-1">626,840 đ</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  return (
    <MainLayout onAddOrder={() => setDrawerOpen(true)}>
      <OrderList />
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <DrawerContent />
      </Drawer>
    </MainLayout>
  )
}

export default App