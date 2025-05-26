import React, { useState } from 'react';

const orders = [
  {
    channel: '0.1 Trực tiếp',
    customer: 'Nguyễn Văn Hồng',
    contract: 'DO.TTKD100/M03/2400067763',
    insurance: 'BH Vật chất xe',
    insuranceType: 'BH Vật chất xe mở rộng',
    status: 'Báo giá',
    phone: '097****368',
    start: '2024-03-21 18:18',
    end: '2025-03-21 18:18',
  },
  {
    channel: '0.1 Trực tiếp',
    customer: 'Nguyễn Văn Hồng',
    contract: 'DO.TTKD100/M03/2400067763',
    insurance: 'BH Vật chất xe',
    insuranceType: 'BH Vật chất xe mở rộng',
    status: 'Chờ duyệt',
    phone: '097****368',
    start: '2024-03-21 18:18',
    end: '2025-03-21 18:18',
  },
  {
    channel: '0.1 Trực tiếp',
    customer: 'Nguyễn Văn Hồng',
    contract: 'DO.TTKD100/M03/2400067763',
    insurance: 'BH Vật chất xe',
    insuranceType: 'BH Vật chất xe mở rộng',
    status: 'Hoàn thành',
    phone: '097****368',
    start: '2024-03-21 18:18',
    end: '2025-03-21 18:18',
  },
  {
    channel: '0.1 Trực tiếp',
    customer: 'Nguyễn Văn Hồng',
    contract: 'DO.TTKD100/M03/2400067763',
    insurance: 'BH Vật chất xe',
    insuranceType: 'BH Vật chất xe mở rộng',
    status: 'Chờ duyệt',
    phone: '097****368',
    start: '2024-03-21 18:18',
    end: '2025-03-21 18:18',
  },
  {
    channel: '0.1 Trực tiếp',
    customer: 'Nguyễn Văn Hồng',
    contract: 'DO.TTKD100/M03/2400067763',
    insurance: 'BH Vật chất xe',
    insuranceType: 'BH Vật chất xe mở rộng',
    status: 'Hoàn thành',
    phone: '097****368',
    start: '2024-03-21 18:18',
    end: '2025-03-21 18:18',
  },
  {
    channel: '0.1 Trực tiếp',
    customer: 'Trần Nguyễn Minh Khôi',
    contract: 'DO.TTKD100/M03/2400067763',
    insurance: 'BH Vật chất xe',
    insuranceType: 'BH Vật chất xe mở rộng',
    status: 'Báo giá',
    phone: '097****368',
    start: '2024-03-21 18:18',
    end: '2025-03-21 18:18',
  },
];

const statusColor = {
  'Báo giá': 'bg-[#25A55E] text-white',
  'Chờ duyệt': 'bg-[#F6A609]/20 text-[#937512]',
  'Hoàn thành': 'bg-[#E5E7EB] text-[#22292f]',
};

const tabs = [
  { label: 'Tất cả', color: 'text-[#22292f]', font: 'font-semibold' },
  { label: 'Báo giá', color: 'text-[#218739]', font: 'font-medium' },
  { label: 'Hoàn thành', color: 'text-[#666]', font: 'font-medium' },
  { label: 'Chờ duyệt', color: 'text-[#A47A1F]', font: 'font-medium' },
];

const OrderList: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="bg-[#f7f8fa] min-h-screen p-0">
      <h2 className="text-2xl font-bold mb-[10px]">Danh sách đơn hàng</h2>
      <div className="p-0 flex ">
        <div className="bg-white rounded-2xl shadow-[0_2px_5px_0_rgba(0,0,0,0.05)] px-8 pt-6 pb-0 w-full">
          <div className="flex items-center mb-6 gap-4">
            <div className="flex gap-2">
              {tabs.map((tab, idx) => (
                <button
                  key={tab.label}
                  className={`h-[32px] px-[16px] rounded-[6px] text-[17px] transition-all duration-150 outline-none border-none ${tab.color} ${tab.font} ${activeTab === idx ? 'bg-[#0000000F]' : 'bg-transparent'} ${activeTab === idx ? 'font-semibold' : ''} hover:bg-[#0000000F]`}
                  style={{ minWidth: 47 }}
                  onClick={() => setActiveTab(idx)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="flex-1 flex justify-end">
              <input
                type="text"
                placeholder="Tìm kiếm tên khách hàng, số điện thoại, hợp đồng ..."
                className="border border-[#E5E7EB] rounded-lg px-4 py-2 w-96 focus:outline-none focus:ring-2 focus:ring-[#25A55E] text-sm bg-white placeholder:text-gray-400"
              />
            </div>
          </div>
          <div className="overflow-x-auto rounded-2xl px-2">
            <table className="min-w-full">
              <thead>
                <tr className="text-left text-[#22292f] text-[15px] font-bold border-b border-[#F0F0F0]">
                  <th className="px-3 py-[10px]">Kênh</th>
                  <th className="px-3 py-[10px]">Tên khách hàng</th>
                  <th className="px-3 py-[10px]">Hợp đồng</th>
                  <th className="px-3 py-[10px]">Loại bảo hiểm</th>
                  <th className="px-3 py-[10px]">Trạng thái</th>
                  <th className="px-3 py-[10px]">Số điện thoại</th>
                  <th className="px-3 py-[10px]">Ngày bắt đầu</th>
                  <th className="px-3 py-[10px]">Ngày kết thúc</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o, i) => (
                  <tr key={i} className="border-b border-[#F0F0F0] text-[15px]">
                    <td className="px-3 py-[10px] whitespace-nowrap">{o.channel}</td>
                    <td className="px-3 py-[10px] whitespace-nowrap text-[#2196F3] cursor-pointer hover:underline">{o.customer}</td>
                    <td className="px-3 py-[10px] whitespace-nowrap">{o.contract}</td>
                    <td className="px-3 py-[10px] whitespace-nowrap">
                      <span className="inline-block bg-[#25A55E] text-white text-[13px] px-2 py-1 rounded mr-1">{o.insurance}</span>
                      <span className="inline-block bg-[#25A55E] text-white text-[13px] px-2 py-1 rounded">{o.insuranceType}</span>
                    </td>
                    <td className="px-3 py-[10px] whitespace-nowrap">
                      <span className={`inline-block px-2 py-1 rounded text-[13px] font-medium ${statusColor[o.status as keyof typeof statusColor]}`}>{o.status}</span>
                    </td>
                    <td className="px-3 py-[10px] whitespace-nowrap">{o.phone}</td>
                    <td className="px-3 py-[10px] whitespace-nowrap">{o.start}</td>
                    <td className="px-3 py-[10px] whitespace-nowrap">{o.end}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between mt-4 px-2 pb-4">
            <span className="text-sm text-gray-500">Tổng 50 trang</span>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 flex items-center justify-center rounded border border-[#E5E7EB] bg-white text-gray-500 hover:bg-gray-100">&lt;</button>
              {[1, 2, 3, 4, 5].map((n) => (
                <button key={n} className={`w-8 h-8 flex items-center justify-center rounded border ${n === 1 ? 'border-[#25A55E] text-[#25A55E] bg-[#F5F6FA]' : 'border-[#E5E7EB] text-gray-700 bg-white'} font-medium`}>{n}</button>
              ))}
              <span className="text-gray-400 px-1">...</span>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-[#E5E7EB] bg-white text-gray-700 font-medium">50</button>
              <button className="w-8 h-8 flex items-center justify-center rounded border border-[#E5E7EB] bg-white text-gray-500 hover:bg-gray-100">&gt;</button>
              <span className="ml-4 text-sm text-gray-500">1 / 50</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList; 