import { Box, Typography } from '@mui/material'
import React from 'react'
import svg from '../assets/images/6.jpg'

const Student = () => {
  return (
    <>
      <Box className="all-student-list      gap-5    rounded ">
        <div className='d-flex '>
          <img className='student-pic m-2 mx-4' src={svg} alt="dp" />
        <Typography varient='h4' className='all-student-head fs-5  font-bold fw-bold  ' >Muhammad Zaki</Typography>
        </div>
      </Box>
    </>
  )
}

export default Student