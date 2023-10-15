import { Button } from "antd";
import React from "react";
import TuneIcon from "@mui/icons-material/Tune";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { AiFillStar } from "react-icons/ai";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import "./RoomByCity.scss";

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
];

export default function RoomByCity() {
  return (
    <div className="container mx-auto">
      <div className="h-28"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex flex-wrap justify-between items-center py-5 ml-4">
            <span className="font-semibold">Hơn 1.000 chổ ở</span>
            <div className=" flex items-center ml-2 ">
              <Button className="flex items-center button-filter border rounded-md text-base ">
                <TuneIcon fontSize="small" className="mr-2" />
                <span className="filter">Bộ lọc</span>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ml-4">
            <Link href="" className="roomLink">
              <Swiper
                slidesPerView={1}
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="roomByCity"
              >
                {imagesRoom.map((element, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <img src={element.url} alt="..." className="w-" />
                    </SwiperSlide>
                  );
                })}
                <button className="absolute top-3 right-3 z-30">
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    className="icon-heart"
                  >
                    <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z" />
                  </svg>
                </button>
              </Swiper>
              <div>
                <p className="flex justify-between mt-2">
                  <span className="font-bold">Khách Sạn Hồng Hào</span>
                  <span className="flex justify-between items-center">
                    <span className="star-icon mr-1">
                      <AiFillStar />
                    </span>{" "}
                    9.14
                  </span>
                </p>
                <p className="text-gray-500">9966 km</p>
                <p className="text-gray-500">Ngày 22 - Ngày 9 tháng 5</p>
                <p className="mt-1">
                  <span className="font-bold">$278</span> đêm
                </p>
              </div>
            </Link>
            <Link href="" className="roomLink">
              <Swiper
                slidesPerView={1}
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="roomByCity"
              >
                {imagesRoom.map((element, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <img src={element.url} alt="..." className="w-" />
                    </SwiperSlide>
                  );
                })}
                <button className="absolute top-3 right-3 z-30">
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    className="icon-heart"
                  >
                    <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z" />
                  </svg>
                </button>
              </Swiper>
              <div>
                <p className="flex justify-between mt-2">
                  <span className="font-bold">Khách Sạn Hồng Hào</span>
                  <span className="flex justify-between items-center">
                    <span className="star-icon mr-1">
                      <AiFillStar />
                    </span>{" "}
                    9.14
                  </span>
                </p>
                <p className="text-gray-500">9966 km</p>
                <p className="text-gray-500">Ngày 22 - Ngày 9 tháng 5</p>
                <p className="mt-1">
                  <span className="font-bold">$278</span> đêm
                </p>
              </div>
            </Link>
            <Link href="" className="roomLink">
              <Swiper
                slidesPerView={1}
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="roomByCity"
              >
                {imagesRoom.map((element, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <img src={element.url} alt="..." className="w-" />
                    </SwiperSlide>
                  );
                })}
                <button className="absolute top-3 right-3 z-30">
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    className="icon-heart"
                  >
                    <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z" />
                  </svg>
                </button>
              </Swiper>
              <div>
                <p className="flex justify-between mt-2">
                  <span className="font-bold">Khách Sạn Hồng Hào</span>
                  <span className="flex justify-between items-center">
                    <span className="star-icon mr-1">
                      <AiFillStar />
                    </span>{" "}
                    9.14
                  </span>
                </p>
                <p className="text-gray-500">9966 km</p>
                <p className="text-gray-500">Ngày 22 - Ngày 9 tháng 5</p>
                <p className="mt-1">
                  <span className="font-bold">$278</span> đêm
                </p>
              </div>
            </Link>
            <Link href="" className="roomLink">
              <Swiper
                slidesPerView={1}
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="roomByCity"
              >
                {imagesRoom.map((element, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <img src={element.url} alt="..." className="w-" />
                    </SwiperSlide>
                  );
                })}
                <button className="absolute top-3 right-3 z-30">
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    className="icon-heart"
                  >
                    <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z" />
                  </svg>
                </button>
              </Swiper>
              <div>
                <p className="flex justify-between mt-2">
                  <span className="font-bold">Khách Sạn Hồng Hào</span>
                  <span className="flex justify-between items-center">
                    <span className="star-icon mr-1">
                      <AiFillStar />
                    </span>{" "}
                    9.14
                  </span>
                </p>
                <p className="text-gray-500">9966 km</p>
                <p className="text-gray-500">Ngày 22 - Ngày 9 tháng 5</p>
                <p className="mt-1">
                  <span className="font-bold">$278</span> đêm
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="h-screen w-full hidden md:block sticky top-28">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15739732.907271802!2d96.86701116987972!3d15.607230160501059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31157a4d736a1e5f%3A0xb03bb0c9e2fe62be!2zVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1661359870280!5m2!1svi!2s"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: "0px" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
