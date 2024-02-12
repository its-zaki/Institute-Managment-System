import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Studentlist } from '../../../components/studentlist'
import { getData } from '../../../config/firebase/Firebase-Methods'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../../config/firebase/firebase-config';
const AllStudents = () => {

  // useState 
  const [students , setStudents] = useState([])

  // get data 
  // getData('user')
  async function getStudents() {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      const data = doc.data()
      students.push({docId: doc.id, ...data})
      // setStudents([...students])
      console.log(`${doc.id} => ${data}`);
    });
  }
  console.log(students);
  getStudents()

  return (
    <>
      <Box className='all-student-box d-flex  fs-1 flex-column'>
        <Box className="all-students-header d-flex justify-content-center ">
          <div>
            <Typography varient='h1' className='all-student-head fs-3 text-center  font-bold fw-bold  ' > All Students</Typography>

          </div>
          <div>
            <span className="all-students-icon material-symbols-outlined">
              groups_2
            </span>
          </div>
        </Box>
        <Box className="all-students-header2 d-flex justify-content-around ">
          <div>
            <Typography varient='h4' className='all-student-head2 fs-5 text-center  font-bold fw-bold  ' > Profile Image</Typography>

          </div>
          <div>
            <Typography varient='h4' className='all-student-head2 fs-5 text-center  font-bold fw-bold  ' > Name</Typography>

          </div>
          <div>
            <Typography varient='h4' className='all-student-head2 fs-5 text-center  font-bold fw-bold  ' > Course</Typography>

          </div>
          <div>
            <Typography varient='h4' className='all-student-head2 fs-5 text-center  font-bold fw-bold  ' > Days</Typography>

          </div>
          <div>
            <Typography varient='h4' className='all-student-head2 fs-5 text-center  font-bold fw-bold  ' > Delete</Typography>

          </div>
        </Box>
        <Box className='all-student-content'>
          {/* <Studentlist /> */}
          {students.length >= 0 ? students.map((item, index)=>{    
            // console.log(item);   
           return  <Studentlist  key={index} profilePic={item.imgUrl} studentName={item.firstName} course={item.course} /> 
          }) : <h1>No Studnet</h1> }


        </Box>


      </Box>
    </>
  )
}

export default AllStudents