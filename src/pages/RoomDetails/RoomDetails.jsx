import React from "react";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import ShareIcon from "@mui/icons-material/Share";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { AiFillStar } from "react-icons/ai";
import { FaAward } from "react-icons/fa";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import imgRoom from "../../assets/img/img-room-1.jpg";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import airCover from "../../assets/img/AirCover.png";
import "./RoomDetails.scss";

export default function RoomDetails() {
  return (
    <div>
      <div>
        <div className="h-28"></div>
        <div className="container mx-auto px-20 room-details">
          <div>
            <p className="mb-2">
              <button className="mr-3">
                {" "}
                <GTranslateIcon />
              </button>
              <span className="font-semibold text-xl sm:text-3xl tracking-widest leading-relaxed text-gray-900">
                Khách Sạn Hồng Hào
              </span>
            </p>
            <div className="flex flex-wrap justify-between items-center">
              <div className="flex items-center">
                <span className="flex items-center text-sm font-normal tracking-widest">
                  {" "}
                  <span>
                    <AiFillStar />
                  </span>{" "}
                  4
                </span>
                <span className="underline text-sm font-normal tracking-widest mx-2">
                  68 đánh giá
                </span>
                <span className="text-sm font-normal tracking-widest mx-2 flex items-center">
                  {" "}
                  <span className="mr-2">
                    <FaAward />
                  </span>{" "}
                  Chủ nhà siêu cấp .
                </span>
                <span className="underline text-sm font-normal tracking-widest mx-2">
                  Khu du lịch sinh thái Hồng Hào, Bến tre, Việt Nam
                </span>
              </div>
              <div className="flex flex-wrap justify-center items-center">
                <button className="px-2 py-1 hover:bg-gray-100 rounded-md transition-all duration-150 flex justify-center items-center font-semibold text-sm text-gray-700">
                  <ShareIcon />
                  <span className="ml-2">Chia sẻ</span>
                </button>
                <button className="px-2 py-1 hover:bg-gray-100 rounded-md transition-all duration-150  flex justify-center items-center font-semibold text-sm text-gray-700">
                  <FavoriteBorderIcon />
                  <span className="ml-2">Yêu thích</span>
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-5">
            <div className="rounded-l-xl rounded-r-xl sm:rounded-r-none overflow-hidden">
              <img
                style={{ imageRendering: "pixelated" }}
                className="w-full object-contain rounded-l-xl overflow-hidden"
                src={imgRoom}
                alt=".."
              />
            </div>
            <div className="hidden sm:grid sm:grid-cols-2 gap-2 ">
              <div>
                <img className="w-full h-full" src={imgRoom} alt="" />
              </div>
              <div className="hidden md:block rounded-tr-xl overflow-hidden">
                <img
                  className="w-full h-full rounded-tr-xl overflow-hidden"
                  src={imgRoom}
                  alt=""
                />
              </div>
              <div className="rounded-r-xl overflow-hidden md:rounded-none">
                <img className="w-full h-full" src={imgRoom} alt="" />
              </div>
              <div className="hidden md:block rounded-br-xl overflow-hidden">
                <img
                  className="w-full h-full rounded-br-xl overflow-hidden"
                  src={imgRoom}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-full flex sm:flex-row flex-col mt-10 border-b pb-5">
            <div className="w-full sm:w-1/2 lg:w-3/5">
              <div className="flex flex-wrap justify-between items-center pb-5 border-b">
                <div>
                  <h1 className="font-semibold text-lg sm:text-2xl text-gray-800">
                    Toàn bộ căn hộ. Chủ nhà Sungwon
                  </h1>
                  <span className="text-sm font-normal  tracking-widest text-gray-700">
                    <span>2 khách . </span>
                    <span className=" mx-1">2 phòng ngủ . </span>
                    <span className=" mx-1">3 phòng tắm . </span>
                  </span>
                </div>
                <div className="w-12 h-12  relative">
                  <span className="text-gray-500">
                    {" "}
                    <PersonPinIcon fontSize="large" />
                  </span>
                </div>
              </div>
              <div className="mt-5 pb-5 border-b">
                <div className="flex w-full ">
                  <div className="pt-2">
                    <span className="text-gray-500 icon-Home">
                      <MapsHomeWorkIcon />
                    </span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-800 text-base sm:text-lg">
                      Sungwon là Chủ nhà siêu cấp
                    </h3>
                    <p className="tracking-wider text-gray-500">
                      Chủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được
                      đánh giá cao và là những người cam kết mang lại quãng thời
                      gian ở tuyệt vời cho khách.
                    </p>
                  </div>
                </div>
                <div className="flex mt-5">
                  <div className="pt-2">
                    <span className="text-gray-500">
                      <LocationOnIcon />
                    </span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-800 text-base sm:text-lg">
                      Địa điểm tuyệt vời
                    </h3>
                    <p className="tracking-wider text-gray-500">
                      90% khách gần đây đã xếp hạng 5 sao cho vị trí này.
                    </p>
                  </div>
                </div>
                <div className="flex mt-5 items-center">
                  <div className="pt-2">
                    <span className="text-gray-500">
                      <EditCalendarIcon />
                    </span>
                  </div>
                  <h3 className="ml-4 font-semibold text-gray-800  text-base sm:text-lg">
                    Miễn phí hủy trong 48 giờ.
                  </h3>
                </div>
              </div>
              <div className="mt-5 pb-5 border-b">
                <h2>
                  <img className="h-7 mb-4" src={airCover} alt="..." />
                </h2>
                <p className="text-base tracking-wider text-gray-800 mb-2">
                  Mọi đặt phòng đều được bảo vệ miễn phí trong trường hợp Chủ
                  nhà hủy, thông tin nhà/phòng cho thuê không chính xác và những
                  vấn đề khác như sự cố trong quá trình nhận phòng.
                </p>
                <button className="font-semibold underline text-base text-gray-800 tracking-wider">
                  Tìm hiểu thêm
                </button>
              </div>
              <div className="mt-5 pb-5">
                <div>
                  <h2 className="font-semibold text-gray-800 text-xl pb-4">
                    Nơi này có những gì cho bạn
                  </h2>
                </div>
                <div className="grid grid-cols-2">
                  <div className="flex items-center pb-4">
                    <div>
                      <span className="icon-kitchen">
                        <LocalDiningIcon />
                      </span>
                    </div>
                    <div className="ml-4 text-base tracking-wider text-gray-800">
                      Bếp
                    </div>
                  </div>
                  <div className="flex items-center pb-4">
                    <div>
                      <span className="icon-kitchen">
                        <LocalDiningIcon />
                      </span>
                    </div>
                    <div className="ml-4 text-base tracking-wider text-gray-800">
                      Bếp
                    </div>
                  </div>
                  <div className="flex items-center pb-4">
                    <div>
                      <span className="icon-kitchen">
                        <LocalDiningIcon />
                      </span>
                    </div>
                    <div className="ml-4 text-base tracking-wider text-gray-800">
                      Bếp
                    </div>
                  </div>
                  <div className="flex items-center pb-4">
                    <div>
                      <span className="icon-kitchen">
                        <LocalDiningIcon />
                      </span>
                    </div>
                    <div className="ml-4 text-base tracking-wider text-gray-800">
                      Bếp
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <button className="border border-solid border-gray-900 hover:bg-gray-100 transition-all duration-200 rounded-md px-5 py-3 font-semibold text-base text-gray-800 tracking-wider">
                    Hiển thị tất cả 75 tiện nghi
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-2/5">
              <div className="sticky top-28">
                <div className="bg-white shadow-xl border rounded-xl p-6 w-full lg:w-5/6 mx-auto">
                  <div className="relative w-full">
                    <div className="hidden md:flex justify-between items-center mb-4">
                      <div>
                        <span>$ </span>
                        <span className="text-xl font-semibold">100000</span>
                        <span className="text-base"> đêm</span>
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
                          $ 100000 x 0 đêm
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
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 pb-5 border-b">
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
          </div>
        </div>
      </div>
    </div>
  );
}
