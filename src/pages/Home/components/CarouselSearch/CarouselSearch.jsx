import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import TuneIcon from '@mui/icons-material/Tune';
import { Button } from 'antd';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'; // Import the navigation styles
import 'swiper/css/pagination';
import "./CarouselSearch.scss"

// import required modules
import { Navigation } from 'swiper/modules';
import { NavLink } from 'react-router-dom';

const image1 = [
  {
    url: "./images/Bắc cực.jpg",
    name: "Bắc cực",
  },
  {
    url: "./images/bãi biển.jpg",
    name: "Bãi biển",
  },
  {
    url: "./images/cabin.jpg",
    name: "Cabin",
  },
  {
    url: "./images/Chơi golf.jpg",
    name: "Chơi golf",
  },
  {
    url: "./images/công viên quốc gia.jpg",
    name: "Công viên quốc gia",
  },
  {
    url: "./images/Đảo.jpg",
    name: "Đảo",
  },
  {
    url: "./images/hang động.jpg",
    name: "Hang động",
  },
  {
    url: "./images/hồ bơi tuyệt vời.jpg",
    name: "Hồ bơi tuyệt vời",
  },
  {
    url: "./images/khung cảnh tuyệt vời.jpg",
    name: "Khung cảnh tuyệt vời",
  },
  {
    url: "./images/lướt sóng.jpg",
    name: "Lướt sóng",
  },
  {
    url: "./images/nhà chung.jpg",
    name: "Nhà chung",
  },
  {
    url: "./images/nhà dưới lòng đất.jpg",
    name: "Nhà dưới lòng đất",
  },
  {
    url: "./images/nhà nhỏ.jpg",
    name: "Nhà nhỏ",
  },
  {
    url: "./images/nhiệt đới.jpg",
    name: "Nhiệt đới",
  },
  {
    url: "./images/Bắc cực.jpg",
    name: "Bắc cực",
  },
  {
    url: "./images/Phục vụ bữa sáng.jpg",
    name: "Phục vụ bữa sáng",
  },
  {
    url: "./images/thật ấn tượng.jpg",
    name: "Thật ấn tượng",
  },
  {
    url: "./images/thiết kế.jpg",
    name: "Thiết kế",
  },
  {
    url: "./images/ven hồ.jpg",
    name: "Ven hồ",
  },
  {
    url: "./images/thiết kế.jpg",
    name: "Thiết kế",
  },
  {
    url: "./images/bietthu.jpg",
    name: "Biệt thự",
  },
  {
    url: "./images/khucamtrai.jpg",
    name: "Khu cắm trại",
  },
  {
    url: "./images/nhakhungchua.jpg",
    name: "Nhà khung chữ A",
  },
  {
    url: "./images/laudai.jpg",
    name: "Lâu đài",
  },
];
export default function CarouselSearch() {
  return (
    <div className="container flex">

      <Swiper
        slidesPerView={8}
        spaceBetween={1}
        className="mySwiper"
        modules={[Navigation]}
        navigation={true}
      >
        {image1.map((item, index) => {
          return (
            <SwiperSlide>
              <NavLink to={"/"} key={index} className="font-medium slick-item" >
                <span className="flex flex-col items-center slick-item-img ">
                  <img src={item.url} alt="..." className="w-6 " />
                  <span className="text-xs hover:text-black">{item.name}</span>
                </span>
              </NavLink>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className=" flex items-center ml-2 ">
        <Button className="flex items-center button-filter border rounded-md text-base ">
          <TuneIcon fontSize='small' className="mr-2" />
          <span className='filter'>Bộ lọc</span>
        </Button>
      </div>
    </div>

  )
}
