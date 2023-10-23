import React, { useState } from 'react'
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import "./BookingRoom.scss"
import moment from 'moment';

export default function BookingRoom() {
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });
  const [showDateRangePicker, setShowDateRangePicker] = useState(false);

  const handleSelect = (ranges) => {
    setSelectionRange(ranges.selection);
  };

  const handleReceiveRoom = () => {
    setShowDateRangePicker(true)
    // Thay đổi `minDate` để vô hiệu hóa các ngày đã trôi qua
    const today = new Date();
    setSelectionRange({
      startDate: today,
      endDate: today,
      key: 'selection',
    });
  };
  return (
    <>
      <div className="flex flex-col border border-solid border-gray-400 rounded-md">
        <div className="flex w-full border-b border-solid border-gray-400">
          <div onClick={handleReceiveRoom} className="border-r border-solid border-gray-400 rounded-tl-md w-full p-2 cursor-pointer hover:bg-gray-100">
            <button className="text-xs uppercase font-semibold">
              Nhận phòng
            </button>
            <div className="m-1">{moment(selectionRange.startDate).format('DD-MM-YYYY')}</div>
          </div>
          <div onClick={handleReceiveRoom} className="rounded-tr-md w-full p-2 cursor-pointer hover:bg-gray-100">
            <button className="text-xs uppercase font-semibold">
              Trả phòng
            </button>
            <div className="m-1">{moment(selectionRange.endDate).format('DD-MM-YYYY')}</div>
          </div>
        </div>
        <div className="p-2">
          <div className="uppercase text-xs font-semibold">
            Khách
          </div>
          <div className="flex justify-between items-center m-1">
            <button
              className="w-8 h-8 bg-gray-300 hover:bg-red-400 duration-200 rounded-xl text-white cursor-pointer"
              disabled
            >
              -
            </button>
            <div>0 khách</div>
            <button className="w-8 h-8 bg-gray-300 hover:bg-red-400 duration-200 rounded-xl text-white cursor-pointer">
              +
            </button>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="w-full py-3 mt-3 rounded-lg text-white text-lg font-semibold btn-bookroom"
      >
        Đặt phòng
      </button>
      <div className="text-center font-normal text-gray-400 my-2">
        <span>Bạn vẫn chưa bị trừ tiền</span>
      </div>
      <div className="border-b py-2">
        <div className="flex justify-between py-1 text-base">
          <div className="underline text-gray-600">
            $ 0 x 0 đêm
          </div>
          <div>
            <span>0</span> $
          </div>
        </div>
        <div className="flex justify-between py-1 text-base">
          <div className="underline text-gray-600">
            Phí dịch vụ
          </div>
          <div>
            <span>0</span> $
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center text-lg font-semibold pt-3">
        <div>Tổng trước thuế</div>
        <div>0 $</div>
      </div>
      {showDateRangePicker && (
        <div className='absolute top-0 right-0 border shadow-xl p-2 bg-white rounded-xl'>
          <div className='flex justify-between items-center p-3'>
            <div>
              <div>
                <div className="text-2xl font-semibold text-gray-800">0 đêm</div>
                <div className="text-gray-400">{moment(selectionRange.startDate).format('DD-MM-YYYY')} đến {moment(selectionRange.endDate).format('DD-MM-YYYY')}</div>
              </div>
            </div>
            <button onClick={() => setShowDateRangePicker(false)} className="bg-gray-100 text-red-600 hover:bg-red-100 duration-200 px-2 py-3 rounded-2xl">Close</button>
          </div>
          <div className="date-range-picker">
            <DateRangePicker
              ranges={[selectionRange]}
              onChange={handleSelect}
              minDate={new Date()}
            />
          </div>
        </div>
      )}
    </>


  )
}
