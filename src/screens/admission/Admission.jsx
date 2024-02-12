import { Box, TextField, Button, Typography, InputLabel, Select, MenuItem } from '@mui/material'
import logo from '../../assets/images/logo.svg'
import React, { useRef, useState } from 'react'
import FormControl from '@mui/material/FormControl';
import { Link, useNavigate } from 'react-router-dom';
import { addImageToStorage, signUpUser } from '../../config/firebase/Firebase-Methods';
import singleCourse from '../single course/SingleCourse'

import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Email } from '@mui/icons-material';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../config/firebase/firebase-config';

const Admission = () => {
  // useState 
  const [courses, setCourses] = useState()
  // const [gender, setGender] = useState()
  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')
  // const [email, setEmail] = useState('');
  // const [pass, setPass] = useState('');
  // const [address, setAddress] = useState('');
  const [img, setimg] = useState(null)
  const [url, setUrl] = useState()
  // useRef
  const FirstRef = useRef()
  const SecondRef = useRef()
  const EmailRef = useRef()
  const PasswordRef = useRef()
  const CourseRef = useRef()
  const GenderRef = useRef()
  const AddressRef = useRef()

  // use navigate 
  const navigate = useNavigate()

  const addImg = (e) => {
    // console.log(e.target.files[0]);
    const files = e.target.files;
    setimg(files)
    
  }
  let file =[]
  // form func 
  const Admission = (e) => {
    e.preventDefault()
    // console.log(FirstRef.current.value);
    // console.log(SecondRef.current.value);
    // console.log(EmailRef.current.value);
    // console.log(PasswordRef.current.value);
    // console.log(CourseRef.current.value);
    // console.log(GenderRef.current.value);
    // console.log(AddressRef.current.value);
    const FullName = FirstRef.current.value +''+ SecondRef.current.value 
    signUpUser({
      StudentName: FullName ,
      email: EmailRef.current.value,
      password: PasswordRef.current.value,
      course: CourseRef.current.value,
      gender: GenderRef.current.value,
      address: AddressRef.current.value,
      imgUrl: url
    // }).then((res) => {
    //   console.log(res);
    //   navigate('/single-course')
    // }).catch((err) => {
    //   console.log(err);
      
    })  
    //add image to db 
    const files = e.target.file;
    const storageRef = ref(storage, EmailRef.current.value);
    uploadBytes(storageRef, files).then(() => {
      getDownloadURL(storageRef).then((url) => {
        console.log(url);
        setUrl(url)
        
      }).catch((err)=>{
        console.log(err);
      })
    })
    
    navigate('/single-course')


  }
  // select input 
  const handleChange = (event) => {
    setCourses(event.target.value);
  };
  // uplaod file input 
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });


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
          <TextField className='add-input' id="First-Name" label="First-Name" variant="filled" inputRef={FirstRef} required />
          <TextField className='add-input ' id="Last-Name" label="Last-Name" variant="filled" inputRef={SecondRef} required />
        </Box>



        <Box className="d-flex justify-content-between">
          <TextField className='add-input' id="email" label="Email" variant="filled" inputRef={EmailRef} required />
          <TextField className='add-input ' id="password" label="Password" variant="filled" inputRef={PasswordRef} required />
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
              inputRef={CourseRef}
            >
              <MenuItem value='web development'>Web Development</MenuItem>
              <MenuItem value='web design'>Web Design</MenuItem>
              <MenuItem value='AI chatbot'>AI Chatbot</MenuItem>
              <MenuItem value='english'>English Learning</MenuItem>
            </Select>
          </FormControl>
          {/* second select input  */}
          <FormControl className='add-input'>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={courses}
              label="Courses"
              onChange={handleChange}
              inputRef={GenderRef}
            >
              <MenuItem value='male'>Male</MenuItem>
              <MenuItem value='female'>Female</MenuItem>
            </Select>
          </FormControl>

        </Box>
        <Box> <TextField className="address-inp add-input" id="Address" label="Address" variant="filled" inputRef={AddressRef} required />
        </Box>
        {/* <Box sx={{display: 'flex', justifyContent:'center', width:'15vw' }}> */}
        <Button sx={{ display: 'flex', justifyContent: 'center', width: '15vw', alignItems: 'center', margin: '0 auto' }} component="label" variant="contained" startIcon={<CloudUploadIcon />}>
          Upload file
          <VisuallyHiddenInput type="file" onChange={(e)=> file.push(e.target.files )} />
        </Button>
        {/* </Box> */}
        <Button type='submit' variant="contained" className='fw-bold fs-5' >Register</Button>
        <p className='para text-center'><span ><Link className='para-content' to='/'>Already Have An Account?</Link></span> In SMIT</p>


      </form>


    </Box >
  )
}

export default Admission