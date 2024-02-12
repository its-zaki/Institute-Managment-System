import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../../screens/login/Login'
import AdminDashboard from '../../screens/admin-Dashboard/AdminDashboard'
import Addmission from '../../screens/admission/Admission'
import Student from '../../screens/student-Dashboard/StudentDashboard'
import SingleCourse from "../../screens/single course/SingleCourse";
const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="admin-dashboard/*" element={<AdminDashboard />} />
        <Route path="admission" element={<Addmission/>} />
        <Route path="student" element={<Student/>} />
        <Route path="single-course" element={<SingleCourse/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterConfig;
