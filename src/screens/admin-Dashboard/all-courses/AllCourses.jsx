import { Box, Typography } from '@mui/material'
import React from 'react'
import AllCourseslist from '../../../components/AllCourseslist'

const AllCourses = () => {
  return (
    <>
     <Box className='all-student-box d-flex  fs-1 flex-column'>
        <Box className="all-students-header d-flex justify-content-center ">
          <div>
            <Typography varient='h1' className='all-student-head fs-3 text-center  font-bold fw-bold  ' > All Courses</Typography>

          </div>
          <div>
            <span className="all-students-icon material-symbols-outlined">
              local_library
            </span>
          </div>
        </Box>
        <Box className='all-courses-content'>
          <AllCourseslist/>
        </Box>
       
        


      </Box>
    </>
  )
}

export default AllCourses