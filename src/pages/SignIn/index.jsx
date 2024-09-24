import React, { useState } from 'react'
import { LockIcon, UserIcon, MailIcon, KeyIcon, ShieldIcon, BookOpenIcon, GraduationCapIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import toast from 'react-hot-toast'
import { apiClient } from '@/lib/api-client'
import { SIGNIN_ROUTE } from '@/utils/constants'
import useAuthStore from '@/store'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
  const [formData, setFormData] = useState({
    userId: '',
    username: '',
    email: '',
    password: ''
  })
  const {setIsLoggedIn, isLoggedIn} = useAuthStore();

  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const response = await apiClient.post(SIGNIN_ROUTE,{UserId : formData.userId, Password : formData.password, Username : formData.username, EmailID:formData.email},{withCredentials : true})
      setIsLoggedIn(true);
      console.log(response);
      navigate('/dashboard')
      console.log(response);
      // toast.success(response.data);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data)
    }
  }

  return (
    <div className="mt-20 bg-gray-100 flex  flex-col-reverse lg:flex-row items-center lg:items-stretch justify-center p-4">
      <Card className="w-full   mt-8 lg:mt-0 lg:mr-8 border-l-4 border-blue-900 flex flex-col justify-between">
        <div className="p-8">
          <div className="flex items-center justify-center lg:justify-start mb-6">
            <ShieldIcon className="w-16 h-16 text-blue-900 mr-4" />
            <div>
              <h1 className="text-3xl font-bold text-blue-900">SAG Bureau</h1>
              <p className="text-lg text-gray-600">Student Authentication Gateway</p>
            </div>
          </div>
          <div className="space-y-6 text-left">
            <div className="flex items-center">
              <BookOpenIcon className="w-6 h-6 text-blue-700 mr-3 flex-shrink-0" />
              <span className="text-gray-700">Ensuring academic integrity across educational institutions</span>
            </div>
            <div className="flex items-center">
              <GraduationCapIcon className="w-6 h-6 text-blue-700 mr-3 flex-shrink-0" />
              <span className="text-gray-700">Verifying and validating student credentials with precision</span>
            </div>
            <div className="flex items-center">
              <ShieldIcon className="w-6 h-6 text-blue-700 mr-3 flex-shrink-0" />
              <span className="text-gray-700">Protecting and upholding national educational standards</span>
            </div>
          </div>
        </div>
        <div className="p-8 bg-blue-50 text-center lg:text-left">
          <p className="text-sm text-gray-600">
            Authorized access only. For assistance, please contact the IT department.
          </p>
        </div>
      </Card>
      <Card className="w-full border-t-4  border-blue-900 flex flex-col justify-between  overflow-hidden">
        <form onSubmit={handleSubmit}>
          <CardHeader className="space-y-1 bg-blue-50">
            <CardTitle className="text-2xl font-bold text-center text-blue-900">Official Sign In</CardTitle>
            <CardDescription className="text-center text-gray-600">
              Authorized personnel only
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            <div className="space-y-2">
              <Label htmlFor="userId" className="text-blue-900">User ID</Label>
              <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-900" size={18} />
                <Input 
                  id="userId" 
                  name="userId"
                  type="text" 
                  placeholder="Enter your User ID" 
                  className="pl-10 border-gray-300" 
                  value={formData.userId}
                  onChange={handleInputChange}
                />
              </div>
              <p className="text-sm text-gray-500">Demo: 1234567890</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="username" className="text-blue-900">Username</Label>
              <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-900" size={18} />
                <Input 
                  id="username" 
                  name="username"
                  type="text" 
                  placeholder="Enter your username" 
                  className="pl-10 border-gray-300" 
                  value={formData.username}
                  onChange={handleInputChange}
                />
              </div>
              <p className="text-sm text-gray-500">Demo: Demo</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-blue-900">Email ID</Label>
              <div className="relative">
                <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-900" size={18} />
                <Input 
                  id="email" 
                  name="email"
                  type="email" 
                  placeholder="Enter your email" 
                  className="pl-10 border-gray-300" 
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <p className="text-sm text-gray-500">Demo: user@example.com</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-blue-900">Password</Label>
              <div className="relative">
                <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-900" size={18} />
                <Input 
                  id="password" 
                  name="password"
                  type="password" 
                  placeholder="Enter your password" 
                  className="pl-10 border-gray-300" 
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              <p className="text-sm text-gray-500">Demo: 123456</p>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 mt-auto">
            <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800">Sign In</Button>
            
          </CardFooter>
        </form>
      </Card>
      
    </div>
  )
}

export default SignIn