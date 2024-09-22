import React, { useState } from 'react'
import StudentInfo from './pages/StudentInfo/page'
import Navbar from './components/custom/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard/page'
import PendingStudent from './pages/PendingStudents/page'
import VerifiedStudent from './pages/VerifiedStudents/page'
import DisqualifiedStudent from './pages/DisqualifiedStudents/page'
import { Toaster } from 'react-hot-toast'
import SignIn from './pages/SignIn'

export default function App() {


  return (

    <BrowserRouter>
      <Toaster position="top-right" />
        <div className="flex flex-col min-h-screen bg-gray-100">
          {/* Navbar */}
          <Navbar />
          <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/student/:studentId' element={<StudentInfo />} />
            <Route path='/pending' element={<PendingStudent />} />
            <Route path='/verified' element={<VerifiedStudent />} />
            <Route path='/disqualified' element={<DisqualifiedStudent />} />

          </Routes>
          
        </div>
    </BrowserRouter>
    
  )
}