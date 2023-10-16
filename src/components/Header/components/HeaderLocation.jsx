import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { roomService } from '../../../services/Room';

export default function HeaderLocation() {


  const [roomLocation, setRoomLocation] = useState([]);

  const fetchRoomByLocaiton = async () => {

    const result = await roomService.fetchRoomByLocationApi();
    setRoomLocation(result.data.content)
  }
  useEffect(() => {
    fetchRoomByLocaiton();
  }, []);


  return (

    <div className='hover:bg-gray-300 rounded-full h-full flex flex-wrap justify-center items-center'>
      <Autocomplete
        id="country-select-demo"
        sx={{ width: 300 }}
        options={roomLocation}
        autoHighlight
        getOptionLabel={(option) => option.tenViTri}
        renderOption={(props, option) => (
          <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
            <img
              loading="lazy"
              width="40"
              src={option.hinhAnh}
              alt=""
            />
            {option.tenViTri}, {option.tinhThanh}, {option.quocGia}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Địa Điểm"
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password', // Tắt tính năng autocomplete và autofill
            }}
          />
        )}
      />
    </div>
  )
}
