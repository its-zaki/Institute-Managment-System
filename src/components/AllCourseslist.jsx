import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';

const AllCourseslist = () => {
    return (
        <>
            <Box className="all-courses-list  gap-5    rounded ">
                <div>
                    <div className='d-flex'>
                        <span className="m-4 mx-3 text-primary material-symbols-outlined">
                            local_library
                        </span>
                        <Typography varient='h4' className='all-student-head fs-5  font-bold fw-bold  ' > Web-Development</Typography>
                    </div>

                </div>
                <div>
                    <div className='d-flex'>
                        <span className="m-4 mx-3 text-primary material-symbols-outlined">
                            school
                        </span>
                        <Typography varient='h4' className='all-student-head fs-5  font-bold fw-bold  ' > Teacher: Sir Abdullah</Typography>
                    </div>
                </div>
                <div>
                    <div className='d-flex'>
                        <span className="m-4 mx-3 text-primary material-symbols-outlined">
                            calendar_month
                        </span>
                        <Typography varient='h4' className='all-student-head fs-5  font-bold fw-bold  ' > Days: MWF</Typography>
                    </div>
                </div>
                <div className='mx-3'>

                    {/* <Button type='submit' variant="contained">Check Details</Button> */}
                    <Button variant="contained" endIcon={<span class="material-symbols-outlined">
                        open_in_new
                    </span>}>
                        Details
                    </Button>

                </div>


            </Box>
        </>
    )
}

export default AllCourseslist