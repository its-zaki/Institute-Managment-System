import React from 'react'
import PersistentDrawerLeft from '../../components/drawer'
import { Navigate, Route, Routes } from 'react-router-dom'
import AddCourse from '../admin-Dashboard/add-course/AddCourse'
import AllStudents from '../admin-Dashboard/all-students/AllStudents'
import AllCourses from '../admin-Dashboard/all-courses/AllCourses'
import { Button } from 'bootstrap'
import { Box } from '@mui/material'

const AdminDashboard = () => {
  return (
    <>
      <PersistentDrawerLeft screens={
        <Box>
          {/* <Box>
            <Button onClick={Navigate('/')}>Add Course</Button>
            <Button onClick={Navigate('/allstudent')}>All Student</Button>
            <Button onClick={Navigate('/allcourses')}>All Course</Button>


          </Box> */}

          <Routes>
            <Route path='/' element={<AddCourse />} />
            <Route path='/allstudent' element={<AllStudents />} />
            <Route path='/allcourses' element={<AllCourses />} />

          </Routes>
        </Box>
      } />


    </>


  )
}

export default AdminDashboard