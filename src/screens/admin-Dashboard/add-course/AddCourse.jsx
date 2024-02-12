import { Box, TextField, Button, Typography, InputLabel, Select, MenuItem, FormControl } from '@mui/material'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom';

const AddCourse = () => {

  // select input 
  const handleChange = (event) => {
    setCourses(event.target.value);
  };
  return (
    <>
    <Box className='add-course-box d-flex justify-content-center  '>
      <form  sx={{ height: '50%' }} className='add-course-form d-flex flex-column justify-content-center  w-50 gap-5 shadow p-3   rounded  '>
        <Box className="header d-flex justify-content-center ">
          <div>
            <Typography varient='h1' className='add-course-head fs-2 text-center m-1  mt-0 font-bold fw-bold  ' sx={{ marginRight: '30px' }}> Add Course</Typography>

          </div>
        <div>
            <span className="add-course-icon material-symbols-outlined">
              library_add
            </span>
          </div>
         </Box>
        <>
        {/* addteacher input  */}
        <FormControl className='add-course-input' >
            <InputLabel id="demo-simple-select-label">Add Course Teacher</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={courses}
              label="Courses"
              onChange={handleChange}
            >
              <MenuItem value={10}>Sir Abdullah</MenuItem>
              <MenuItem value={20}>Sir Ghous</MenuItem>
              <MenuItem value={30}>Sir Kashif</MenuItem>
            </Select>
          </FormControl>

              {/* add timing input  */}

              <FormControl className='add-course-input'>
            <InputLabel id="demo-simple-select-label">Add Course Days</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={courses}
              label="Courses"
              onChange={handleChange}
            >
              <MenuItem value={10}>MWF</MenuItem>
              <MenuItem value={20}>TTS</MenuItem>
            </Select>
          </FormControl>
              
              {/* add course input  */}
              <FormControl className='add-course-input'>
            <InputLabel id="demo-simple-select-label">Add Course </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={courses}
              label="Courses"
              onChange={handleChange}
            >
              <MenuItem value={10}>Web Development</MenuItem>
              <MenuItem value={20}>Web Design</MenuItem>
              <MenuItem value={30}>AI Chatbot</MenuItem>
              <MenuItem value={30}>English Learning</MenuItem>
            </Select>
          </FormControl>
        
        </>
        {/* <TextField id="email" label="Add Course Teacher" variant="outlined"   required/>
        <TextField id="email" label="Add Course Days" variant="outlined"   required/>
        <TextField id="email" label="Add Course " variant="outlined"   required/> */}

        <Button type='submit' variant="contained" className='fw-bold fs-5'>Add Course</Button>

      </form>



    </Box >
    </>
  )
}

export default AddCourse