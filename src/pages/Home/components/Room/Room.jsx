import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { AiFillStar } from 'react-icons/ai';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./Room.scss"
import { Link } from 'react-router-dom';

const imagesRoom = [
  {
    url: "./images/img-room-1.jpg",
    name: "Bắc cực",
  },
  {
    url: "./images/img-room-2.jpg",
    name: "Bãi biển",
  },
  {
    url: "./images/img-room-3.jpg",
    name: "Cabin",
  },
]

export default function Room() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-10'>
      <Link href="" className='roomLink'>
        <Swiper
          slidesPerView={1}
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="roomSwiper"
        >
          {imagesRoom.map((element, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={element.url} alt="..." className='w-' />
              </SwiperSlide>
            )
          })}
          <button className='absolute top-3 right-3 z-30'>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" className='icon-heart'>
              <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z" />
            </svg>
          </button>
        </Swiper>
        <div>
          <p className="flex justify-between mt-2">
            <span className="font-bold">Khách Sạn Hồng Hào</span>
            <span className='flex justify-between items-center'><span className='star-icon mr-1'><AiFillStar /></span> 9.14</span>
          </p>
          <p className="text-gray-500">9966 km</p>
          <p className="text-gray-500">Ngày 22 - Ngày 9 tháng 5</p>
          <p className="mt-1"><span className="font-bold">$278</span> đêm</p>
        </div>
      </Link>
      <Link href="" className='roomLink'>
        <Swiper
          slidesPerView={1}
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="roomSwiper"
        >
          {imagesRoom.map((element, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={element.url} alt="..." className='w-' />
              </SwiperSlide>
            )
          })}
          <button className='absolute top-3 right-3 z-30'>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" className='icon-heart'>
              <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z" />
            </svg>
          </button>
        </Swiper>
        <div>
          <p className="flex justify-between mt-2">
            <span className="font-bold">Khách Sạn Hồng Hào</span>
            <span className='flex justify-between items-center'><span className='star-icon mr-1'><AiFillStar /></span> 9.14</span>
          </p>
          <p className="text-gray-500">9966 km</p>
          <p className="text-gray-500">Ngày 22 - Ngày 9 tháng 5</p>
          <p className="mt-1"><span className="font-bold">$278</span> đêm</p>
        </div>
      </Link>
      <Link href="" className='roomLink'>
        <Swiper
          slidesPerView={1}
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="roomSwiper"
        >
          {imagesRoom.map((element, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={element.url} alt="..." className='w-' />
              </SwiperSlide>
            )
          })}
          <button className='absolute top-3 right-3 z-30'>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" className='icon-heart'>
              <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z" />
            </svg>
          </button>
        </Swiper>
        <div>
          <p className="flex justify-between mt-2">
            <span className="font-bold">Khách Sạn Hồng Hào</span>
            <span className='flex justify-between items-center'><span className='star-icon mr-1'><AiFillStar /></span> 9.14</span>
          </p>
          <p className="text-gray-500">9966 km</p>
          <p className="text-gray-500">Ngày 22 - Ngày 9 tháng 5</p>
          <p className="mt-1"><span className="font-bold">$278</span> đêm</p>
        </div>
      </Link>
      <Link href="" className='roomLink'>
        <Swiper
          slidesPerView={1}
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="roomSwiper"
        >
          {imagesRoom.map((element, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={element.url} alt="..." className='w-' />
              </SwiperSlide>
            )
          })}
          <button className='absolute top-3 right-3 z-30'>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" className='icon-heart'>
              <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z" />
            </svg>
          </button>
        </Swiper>
        <div>
          <p className="flex justify-between mt-2">
            <span className="font-bold">Khách Sạn Hồng Hào</span>
            <span className='flex justify-between items-center'><span className='star-icon mr-1'><AiFillStar /></span> 9.14</span>
          </p>
          <p className="text-gray-500">9966 km</p>
          <p className="text-gray-500">Ngày 22 - Ngày 9 tháng 5</p>
          <p className="mt-1"><span className="font-bold">$278</span> đêm</p>
        </div>
      </Link>
      <Link href="" className='roomLink'>
        <Swiper
          slidesPerView={1}
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="roomSwiper"
        >
          {imagesRoom.map((element, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={element.url} alt="..." className='w-' />
              </SwiperSlide>
            )
          })}
          <button className='absolute top-3 right-3 z-30'>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" className='icon-heart'>
              <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z" />
            </svg>
          </button>
        </Swiper>
        <div>
          <p className="flex justify-between mt-2">
            <span className="font-bold">Khách Sạn Hồng Hào</span>
            <span className='flex justify-between items-center'><span className='star-icon mr-1'><AiFillStar /></span> 9.14</span>
          </p>
          <p className="text-gray-500">9966 km</p>
          <p className="text-gray-500">Ngày 22 - Ngày 9 tháng 5</p>
          <p className="mt-1"><span className="font-bold">$278</span> đêm</p>
        </div>
      </Link>
      <Link href="" className='roomLink'>
        <Swiper
          slidesPerView={1}
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="roomSwiper"
        >
          {imagesRoom.map((element, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={element.url} alt="..." className='w-' />
              </SwiperSlide>
            )
          })}
          <button className='absolute top-3 right-3 z-30'>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" className='icon-heart'>
              <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z" />
            </svg>
          </button>
        </Swiper>
        <div>
          <p className="flex justify-between mt-2">
            <span className="font-bold">Khách Sạn Hồng Hào</span>
            <span className='flex justify-between items-center'><span className='star-icon mr-1'><AiFillStar /></span> 9.14</span>
          </p>
          <p className="text-gray-500">9966 km</p>
          <p className="text-gray-500">Ngày 22 - Ngày 9 tháng 5</p>
          <p className="mt-1"><span className="font-bold">$278</span> đêm</p>
        </div>
      </Link>
      <Link href="" className='roomLink'>
        <Swiper
          slidesPerView={1}
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="roomSwiper"
        >
          {imagesRoom.map((element, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={element.url} alt="..." className='w-' />
              </SwiperSlide>
            )
          })}
          <button className='absolute top-3 right-3 z-30'>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" className='icon-heart'>
              <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z" />
            </svg>
          </button>
        </Swiper>
        <div>
          <p className="flex justify-between mt-2">
            <span className="font-bold">Khách Sạn Hồng Hào</span>
            <span className='flex justify-between items-center'><span className='star-icon mr-1'><AiFillStar /></span> 9.14</span>
          </p>
          <p className="text-gray-500">9966 km</p>
          <p className="text-gray-500">Ngày 22 - Ngày 9 tháng 5</p>
          <p className="mt-1"><span className="font-bold">$278</span> đêm</p>
        </div>
      </Link>
      <Link href="" className='roomLink'>
        <Swiper
          slidesPerView={1}
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="roomSwiper"
        >
          {imagesRoom.map((element, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={element.url} alt="..." className='w-' />
              </SwiperSlide>
            )
          })}
          <button className='absolute top-3 right-3 z-30'>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" className='icon-heart'>
              <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z" />
            </svg>
          </button>
        </Swiper>
        <div>
          <p className="flex justify-between mt-2">
            <span className="font-bold">Khách Sạn Hồng Hào</span>
            <span className='flex justify-between items-center'><span className='star-icon mr-1'><AiFillStar /></span> 9.14</span>
          </p>
          <p className="text-gray-500">9966 km</p>
          <p className="text-gray-500">Ngày 22 - Ngày 9 tháng 5</p>
          <p className="mt-1"><span className="font-bold">$278</span> đêm</p>
        </div>
      </Link>
    </div>

  )
}
