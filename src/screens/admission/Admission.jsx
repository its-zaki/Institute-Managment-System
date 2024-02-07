import { Box, TextField, Button, Typography, InputLabel, Select, MenuItem } from '@mui/material'
import logo from '../../assets/images/logo.svg'
import React, { useRef, useState } from 'react'
import FormControl from '@mui/material/FormControl';
import { Link } from 'react-router-dom';

const Admission = () => {
  // useState 
  const [courses, setCourses] = useState()
  // useRef
  const EmailRef = useRef()
  const PasswordRef = useRef()
  // form func 
  const Admission = (e) => {
    e.preventDefault()
    console.log(EmailRef.current.value);
    console.log(PasswordRef.current.value);

  }
  // select input 
  const handleChange = (event) => {
    setCourses(event.target.value);
  };


  return (
    
    <Box className='admission-box d-flex justify-content-center  '>
      <form onSubmit={Admission} sx={{ height: '100%' }} className='addmission-form d-flex flex-column justify-content-center   gap-5 shadow p-3 mb-5  rounded'>
        <Box className="header d-flex justify-content-center ">
          <div>
            <span className="icon material-symbols-outlined">
              school
            </span>
          </div>
          <div>
            <Typography varient='h1' className=' fs-3 text-white text-center m-2 mt-4 font-bold fw-bold  ' sx={{ marginRight: '30px' }}> SMIT ADMISSION FORM</Typography>

          </div>

        </Box>
        <Box className="d-flex justify-content-between">
          <TextField className='add-input' id="First-Name" label="First-Name" variant="filled" inputRef={EmailRef} required />
          <TextField className='add-input ' id="Last-Name" label="Last-Name" variant="filled" inputRef={PasswordRef} required />
        </Box>



        <Box className="d-flex justify-content-between">
          <TextField className='add-input' id="email" label="Email" variant="filled" inputRef={EmailRef} required />
          <TextField className='add-input ' id="email" label="Password" variant="filled" inputRef={PasswordRef} required />
        </Box>


        <Box className="d-flex justify-content-between">
          <FormControl className='add-input'>
            <InputLabel id="demo-simple-select-label">Courses</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={courses}
              label="Courses"
              onChange={handleChange}
            >
              <MenuItem value={10}>Web Development</MenuItem>
              <MenuItem value={20}>Web Design</MenuItem>
              <MenuItem value={30}>AI Chatbot</MenuItem>
              <MenuItem value={30}>English</MenuItem>
            </Select>
          </FormControl>
          {/* second select input  */}
          <FormControl className='add-input'>
            <InputLabel id="demo-simple-select-label">Courses</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={courses}
              label="Courses"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
            </Select>
          </FormControl>

        </Box>
        <Box> <TextField className="address-inp" id="Address" label="Address" variant="filled" inputRef={PasswordRef} required />
        </Box>
        <Button type='submit' variant="contained" className='fw-bold fs-5' >Register</Button>
        <p className='para text-center'><span ><Link className='para-content' to='/'>Already Have An Account?</Link></span> in SMIT</p>


      </form>


    </Box >
  )
}

export default Admission