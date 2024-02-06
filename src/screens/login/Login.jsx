import { Box, TextField, Button, Typography } from '@mui/material'
import logo from '../../assets/images/logo.svg'
import React, { useRef } from 'react'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login = () => {
  // usestate 
  const [showPassword, setShowPassword] = React.useState(false);
  // useref 
  const EmailRef = useRef()
  const PasswordRef = useRef()

  // login func
  const Login =(e)=>{
    e.preventDefault()
    console.log(EmailRef.current.value);
    console.log(PasswordRef.current.value);

  }
  // show pass 
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  // show pass end


  return (

    <Box className='login-box d-flex justify-content-center  '>
      <form onSubmit={Login} sx={{ height: '50%' }} className='login-form d-flex flex-column justify-content-center  w-25 gap-5 shadow p-3 mb-5  rounded  '>
        <Box className="header d-flex justify-content-center ">
        <div>
            <span className="login-icon material-symbols-outlined">
              school
            </span>
          </div>
          <div>
            <Typography varient='h1' className='login-head fs-3 text-center m-1  mt-3 font-bold fw-bold  ' sx={{ marginRight: '30px' }}> SMIT</Typography>

          </div>
         </Box>
        
        <TextField id="email" label="Email" variant="outlined"  inputRef={EmailRef}/>


        <FormControl sx={{  width: '100%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password" inputRef={PasswordRef}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <Button type='submit' variant="contained">Login</Button>

      </form>


    </Box >
  )
}

export default Login