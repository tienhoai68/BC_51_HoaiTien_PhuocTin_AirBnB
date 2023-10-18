import React from 'react'

export default function BookingRoom(props) {
  return (
    <div className="relative w-full">
      <div className="hidden md:flex justify-between items-center mb-4">
        <div>
          <span>$ </span>
          <span className="text-xl font-semibold">{props.roomDetail.giaTien}</span>
          <span className="text-base">/đêm</span>
        </div>
        <div>
          <span className="text-sm font-normal">
            <i className="fa fa-star"></i> 4 .
          </span>
          <span className="underline text-sm font-normal tracking-widest mx-1">
            67 đánh giá
          </span>
        </div>
      </div>
      <div className="flex flex-col border border-solid border-gray-400 rounded-md">
        <div className="flex w-full border-b border-solid border-gray-400">
          <div className="border-r border-solid border-gray-400 rounded-tl-md w-full p-2 cursor-pointer hover:bg-gray-100">
            <div className="text-xs uppercase font-semibold">
              Nhận phòng
            </div>
            <div className="m-1">14-10-2023</div>
          </div>
          <div className="rounded-tr-md w-full p-2 cursor-pointer hover:bg-gray-100">
            <div className="text-xs uppercase font-semibold">
              Trả phòng
            </div>
            <div className="m-1">14-10-2023</div>
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
            $ {props.roomDetail.giaTien} x 0 đêm
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
    </div>
  )
}
