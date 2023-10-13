import React from 'react'
import GTranslateIcon from '@mui/icons-material/GTranslate';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import { AiFillStar } from 'react-icons/ai';
import { FaAward } from 'react-icons/fa';
import imgRoom from "../../assets/img/img-room-1.jpg"


export default function RoomDetails() {
  return (
        <div> 
            <div>
                <div className='h-28'></div>
                <div className='container mx-auto px-20'>
                    <div>
                         <p className='mb-2'>
                            <button className='mr-3'> <GTranslateIcon/></button>
                            <span className='font-semibold text-xl sm:text-3xl tracking-widest leading-relaxed text-gray-900'>Khách Sạn Hồng Hào</span>
                        </p>
                        <div className='flex flex-wrap justify-between items-center'>
                            <div className='flex items-center'> 
                                <span className='flex items-center text-sm font-normal tracking-widest'> <span><AiFillStar/></span> 4</span>
                                <span className="underline text-sm font-normal tracking-widest mx-2">68 đánh giá</span>
                                <span className='text-sm font-normal tracking-widest mx-2 flex items-center'> <span className='mr-2'><FaAward/></span>  Chủ nhà siêu cấp .</span>
                                <span className="underline text-sm font-normal tracking-widest mx-2">Khu du lịch sinh thái Hồng Hào, Bến tre, Việt Nam</span>
                            </div>
                            <div className='flex flex-wrap justify-center items-center'>
                                <button className='px-2 py-1 hover:bg-gray-100 rounded-md transition-all duration-150 flex justify-center items-center font-semibold text-sm text-gray-700'>
                                    <ShareIcon/>
                                    <span className="ml-2">Chia sẻ</span>
                                </button>
                                <button className='px-2 py-1 hover:bg-gray-100 rounded-md transition-all duration-150  flex justify-center items-center font-semibold text-sm text-gray-700'>
                                    <FavoriteBorderIcon/>
                                    <span className='ml-2'>Yêu thích</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 mt-5' >
                        <div className='rounded-l-xl rounded-r-xl sm:rounded-r-none overflow-hidden'>
                            <img style={{imageRendering: 'pixelated'}} className='w-full object-contain rounded-l-xl overflow-hidden' src={imgRoom} alt=".." />
                        </div>
                        <div className='hidden sm:grid sm:grid-cols-2 gap-2 '>
                            <div>
                                <img className='w-full h-full'  src={imgRoom} alt="" />
                            </div>
                            <div className='hidden md:block rounded-tr-xl overflow-hidden'>
                                <img className='w-full h-full rounded-tr-xl overflow-hidden'  src={imgRoom} alt="" />
                            </div>
                            <div className='rounded-r-xl overflow-hidden md:rounded-none'>
                                <img className='w-full h-full'  src={imgRoom} alt="" />
                            </div>
                            <div className='hidden md:block rounded-br-xl overflow-hidden'>
                                <img  className='w-full h-full rounded-br-xl overflow-hidden' src={imgRoom} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
  )
}
