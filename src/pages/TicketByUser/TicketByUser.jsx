import React from 'react'
import KitchenIcon from '@mui/icons-material/Kitchen';
import { NavLink } from 'react-router-dom';

export default function TicketByUser() {
  return (
    <div className='container mx-auto px-10'>
      <div className="h-28"></div>
      <div>
        <h1 className="text-3xl font-semibold pb-4 border-b">Phòng Đã Đặt</h1>
        <div className='flex'>
          <div className='flex flex-col mt-4 md:px-10 lg:w-2/3'>
            <div className='border mb-4 rounded-lg hover:shadow-xl duration-200 flex cursor-pointer'>
              <div>
                <img src="https://airbnb.cybersoft.edu.vn/public/images/room/1658134435797_put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg" alt="https://airbnb.cybersoft.edu.vn/public/images/room/1658134435797_put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg" className="h-full rounded-l-lg"></img>
              </div>
              <div className='px-4 py-2  w-full'>
                <div className='flex justify-between items-center md:border-b pb-2'>
                  <div class="text-center md:text-left">
                    <h3 class="font-semibold text-xl md:text-xl uppercase">Khách Sạn Hồng Hào</h3>
                    <span class="text-gray-600 text-xs md:text-sm md:ml-2">
                      <span>16-10-2023 -&gt;</span>
                      <span>16-10-2023</span>
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-sm md:text-xl">0
                      <span className="font-medium text-gray-600 text-xs md:text-sm">$/0 ngày</span>
                    </span>
                  </div>
                </div>
                <div className='hidden md:block'>
                  <h3 className="font-semibold text-sm md:text-lg text-gray-800">Tiện ích</h3>
                  <div className='flex items-center'>
                    <div className='flex items-center p-3'>
                      <div>
                        <KitchenIcon className='icon-kitchen-user' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='hidden md:block md:w-1/3'>
            <div className='w-full sticky top-32 border mt-4 rounded-lg shadow-lg p-4'>
              <h3 className="font-semibold text-2xl mb-3">Khám phá các địa điểm thú vị</h3>
              <p className="text-gray-600 text-base">Đã đến lúc phủi bụi hành lý và bắt đầu chuẩn bị cho chuyến phiêu lưu tiếp theo của bạn rồi</p>
              <NavLink className="inline-block w-auto my-4 border border-black font-semibold hover:bg-gray-200 duration-200 px-5 py-3 rounded-lg" to="/">Bắt đầu tìm kiếm</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
