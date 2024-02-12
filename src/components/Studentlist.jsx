import { Box, Typography } from '@mui/material'
import React from 'react'
// import svg from '../assets/images/6.jpg'
export const Studentlist = ({profilePic ,studentName,course}) => {
  return (
    <>
    <Box className="all-student-list d-flex  justify-content-around    gap-5    rounded ">
          <div>
            {/* <Typography varient='h4' className='all-student-head fs-5 text-center  font-bold fw-bold  ' > Add Course</Typography> */}
            <img className='student-pic' src={profilePic} alt="dp" />
          </div>
          <div>
            <Typography varient='h4' className='all-student-head fs-5 text-center  font-bold fw-bold  ' > {studentName}</Typography>

          </div>
          <div>
            <Typography varient='h4' className='all-student-head fs-5 text-center  font-bold fw-bold  ' > {course}</Typography>

          </div>
          <div>
            <Typography varient='h4' className='all-student-head fs-5 text-center  font-bold fw-bold  ' > MWF</Typography>

          </div>
          <div>
            {/* <Typography varient='h4' className='all-student-head fs-5 text-center  font-bold fw-bold  ' > icon</Typography> */}
            <span className="all-student-icon fs-2 text-center    material-symbols-outlined">
              delete
            </span>

          </div>
        </Box>
    </>
  )
}
