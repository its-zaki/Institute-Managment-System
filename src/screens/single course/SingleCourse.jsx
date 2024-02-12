import { Box, Typography } from '@mui/material'
import React from 'react'
import ResponsiveAppBar from '../../components/StudentAppBar'
import Student from '../../components/Student'

const SingleCourse = () => {
    return (
        <>
            <ResponsiveAppBar />
            <Box className='all-student-box d-flex  fs-1 flex-column'>
                <Box className="single-students-header d-flex justify-content-center flex-column align-items-center  ">
                    <Box sx={{display: 'flex', flexDirection: 'row'}}>

                    <div className='d-flex'>
                        <span className="m-3 fs-2   mx-3 text-primary material-symbols-outlined">
                            local_library
                        </span>
                        <Typography varient='h4' className='all-student-head fs-4  font-bold fw-bold  ' ><span className='text-primary'> COURSE:</span> Web-Development</Typography>
                    </div>
                    <div className='d-flex'>
                        <span className="m-3 mx-3 fs-1 text-primary material-symbols-outlined">
                            school
                        </span>
                        <Typography varient='h4' className='all-student-head fs-4  font-bold fw-bold  ' > <span className='text-primary'> TEACHER:</span> Sir Abdullah</Typography>
                    </div>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'row'}}>

                    <div className='d-flex'>
                        <span className="m-3 mx-3 fs-2 text-primary material-symbols-outlined">
                            calendar_month
                        </span>
                        <Typography varient='h4' className='all-student-head fs-4  font-bold fw-bold  ' > <span className='text-primary'> DAYS:</span> Mon, Wed, Fri</Typography>
                    </div>
                    <div className='d-flex'>
                        <span className="m-3 mx-3 fs-1 text-primary material-symbols-outlined">
                        groups_2
                        </span>
                        <Typography varient='h4' className='all-student-head fs-4  font-bold fw-bold  ' > <span className='text-primary'> STUDENTS :</span> 9</Typography>
                    </div>
                    </Box>
                </Box>
                <Box className='single-students-content'>
                    <Student/>
                    <Student/>
                    <Student/>
                    <Student/>
                    <Student/>
                </Box>





            </Box>
        </>
    )
}

export default SingleCourse