import React, { useState } from 'react'
import { Bell, LogOut, Menu, X, ChevronRight, FileText, Flag, CheckCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import StudentInfo from './pages/StudentInfo/page'
import Navbar from './components/custom/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard/page'
import PendingStudent from './pages/PendingStudents/page'
import VerifiedStudent from './pages/VerifiedStudents/page'
import DisqualifiedStudent from './pages/DisqualifiedStudents/page'

export default function App() {


  return (

    <BrowserRouter>

        <div className="flex flex-col min-h-screen bg-gray-100">
          {/* Navbar */}
          <Navbar />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/student' element={<StudentInfo />} />
            <Route path='/pending' element={<PendingStudent />} />
            <Route path='/verified' element={<VerifiedStudent />} />
            <Route path='/disqualified' element={<DisqualifiedStudent />} />

          </Routes>
          
        </div>
    </BrowserRouter>
    
  )
}