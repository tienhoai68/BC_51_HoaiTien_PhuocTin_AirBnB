import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { roomService } from '../../../services/Room';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

export default function HeaderLocation() {
  const navigate = useNavigate();
  const userState = useSelector((state) => state.userReducer);
  const [roomLocation, setRoomLocation] = useState([]);
  const [selectedLocationId, setSelectedLocationId] = useState(null);

  const fetchRoomByLocaiton = async () => {
    const result = await roomService.fetchRoomByLocationApi();
    setRoomLocation(result.data.content)
  }
  const handleLocationChange = (_, value) => {
    if (value) {
      setSelectedLocationId(value.id);
    } else {
      setSelectedLocationId(null);
    }
  };
  useEffect(() => {
    fetchRoomByLocaiton();
  }, []);

  const handleSearchClick = () => {
    if (selectedLocationId && userState) {
      navigate(`/room-by-city/${selectedLocationId}`);
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div className="hover:bg-gray-300 rounded-full h-full flex flex-wrap justify-center items-center">
        <Autocomplete
          id="country-select-demo"
          sx={{ width: 300 }}
          options={roomLocation}
          autoHighlight
          getOptionLabel={(option) => option.tenViTri}
          renderOption={(props, option) => (
            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
              <img loading="lazy" width="40" src={option.hinhAnh} alt="..." />
              {option.tenViTri}, {option.tinhThanh}, {option.quocGia}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Địa Điểm"
              inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password',
              }}
            />
          )}
          onChange={handleLocationChange}
        />
      </div>
      <div className="hidden sm:block py-2 px-5 hover:bg-gray-300 rounded-full overflow-hidden h-full">
        <label htmlFor="checkInDate" className="block text-sm font-medium text-gray-900 dark:text-gray-300">Nhận phòng</label>
        <input name="checkIn" type="date" id="checkInDate" className="bg-transparent outline-none" placeholder="Thêm ngày" />
      </div>
      <div className="hidden sm:block py-2 px-5 hover:bg-gray-300 rounded-full overflow-hidden h-full">
        <label htmlFor="checkOutDate" className="block text-sm font-medium text-gray-900 dark:text-gray-300">Trả phòng</label>
        <input name="checkOut" type="date" id="checkOutDate" className="bg-transparent outline-none" placeholder="Thêm ngày" />
      </div>
      <div className="hidden sm:block py-2 pl-7 pr-5 hover:bg-gray-300 rounded-full overflow-hidden h-full">
        <label htmlFor="guest" className="block text-sm font-medium text-gray-900 dark:text-gray-300">Khách</label>
        <input name="guest" type="number" id="guest" className="bg-transparent outline-none" placeholder="Thêm khách" />
      </div>
      <button onClick={handleSearchClick} className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 absolute right-0">Tìm kiếm</button>
    </>
  )
}
