import React, { useEffect, useState } from 'react'
import { AiFillStar } from "react-icons/ai";
import { roomService } from '../../../../services/Room';

export default function FeedbackRoom(props) {
  const [feedBackRoom, setFeedBackRoom] = useState([])
  const fecthFeedBack = async () => {
    if (props.feedBack.id) {
      const result = await roomService.fetchCommentRoomApi(props.feedBack.id);
      setFeedBackRoom(result.data.content);
    }
  }
  useEffect(() => {
    fecthFeedBack()
  }, [props.feedBack.id])
  console.log(feedBackRoom);
  return (
    <>
      <div>
        <h2 className="font-semibold text-gray-800 text-xl pb-4 flex items-center">
          <div className="flex items-center">
            <span>
              <AiFillStar />
            </span>
          </div>
          <div className="ml-2">2 . </div>
          <div className="ml-2">62 đánh giá</div>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-4">
        <div className="flex justify-between items-center">
          <div className="w-full text-base tracking-wide text-gray-700">Mức độ sạch sẽ</div>
          <div className="w-1/2 flex justify-between items-center">
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div className="bg-gray-800 h-1 rounded-full" style={{ width: '100%' }}></div>
            </div>
            <div className="ml-4">5,0</div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-full text-base tracking-wide text-gray-700">Độ chính xác</div>
          <div className="w-1/2 flex justify-between items-center">
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div className="bg-gray-800 h-1 rounded-full" style={{ width: '100%' }}></div>
            </div>
            <div className="ml-4">5,0</div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-full text-base tracking-wide text-gray-700">Giao tiếp</div>
          <div className="w-1/2 flex justify-between items-center">
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div className="bg-gray-800 h-1 rounded-full" style={{ width: '100%' }}></div>
            </div>
            <div className="ml-4">5,0</div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-full text-base tracking-wide text-gray-700">Vị trí</div>
          <div className="w-1/2 flex justify-between items-center">
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div className="bg-gray-800 h-1 rounded-full" style={{ width: '95%' }}></div>
            </div>
            <div className="ml-4">4,9</div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-full text-base tracking-wide text-gray-700">Nhận phòng</div>
          <div className="w-1/2 flex justify-between items-center">
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div className="bg-gray-800 h-1 rounded-full" style={{ width: '100%' }}></div>
            </div>
            <div className="ml-4">5,0</div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-full text-base tracking-wide text-gray-700">Giá trị</div>
          <div className="w-1/2 flex justify-between items-center">
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div className="bg-gray-800 h-1 rounded-full" style={{ width: '100%' }}></div>
            </div>
            <div className="ml-4">5,0</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-20 gap-y-4 sm:w-4/5 mt-5">
        <div className="mb-5">
          <div className="flex items-center">
            <div>
              <img
                src="https://airbnb.cybersoft.edu.vn/public/images/avatar/1666421089440_27501037_1648794735199784_2391210347277718397_o.jpg"
                className="w-10 h-10 rounded-full overflow-hidden shadow-lg"
                alt='...'
              />
            </div>
            <div className="ml-3">
              <h4 className="font-semibold text-base tracking-wide text-gray-900">Nguyễn Lâm An</h4>
              <span className="font-normal text-sm text-gray-500">16 tháng 10 năm 2022</span>
            </div>
          </div>
          <div className="text-gray-800 tracking-wider">
            <p>.....</p>
          </div>
        </div>
        <div className="sm:col-span-2">
          <button className="border border-solid border-gray-900 hover:bg-gray-100 transition-all duration-200 rounded-md px-5 py-3 font-semibold text-base text-gray-800 tracking-wider">
            Hiển thị tất cả 120 đánh giá
          </button>
        </div>
      </div>
    </>
  )
}
