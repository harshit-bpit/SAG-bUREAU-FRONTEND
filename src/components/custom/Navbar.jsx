import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Bell, LogOut, Menu, X, ChevronRight, FileText, CheckCircle, Flag, LayoutDashboard } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuthStore from "@/store";
import { apiClient } from "@/lib/api-client";
import { CHECKAUTH_ROUTE, LOGOUT_ROUTE } from "@/utils/constants";
import toast from "react-hot-toast";


const Navbar = () => {

  const [isNavOpen, setIsNavOpen] = useState(false)
  const {setIsLoggedIn, isLoggedIn} = useAuthStore();

  const location = useLocation()

  const toggleNav = () => setIsNavOpen(!isNavOpen)

  const navigate = useNavigate();

  const checkLogin = async() =>{
    try {
     const response = await apiClient.get(CHECKAUTH_ROUTE,{withCredentials: true}) 
     if(response.status === 200){
       setIsLoggedIn(true)
       if(location.pathname === '/') navigate('/dashboard')


     }else{
       setIsLoggedIn(false)
     }
    } catch (error) {
     toast.error('You are not logged in')
    }
 }

 
 useEffect(() => {
   checkLogin()
 }, [])
 
 const handleLogout = async() =>{

   try {
     await apiClient.post(LOGOUT_ROUTE,{},{withCredentials:true})
 
     setIsLoggedIn(false)
     navigate('/')
     toast.success("Logged out");
     
   } catch (error) {
     toast.error("error occured while logging out");
   }
 }

  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-blue-900 text-white  p-4 flex justify-between items-center  shadow-xl">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={toggleNav}>
            <Menu className="h-6 w-6" />
          </Button>
          <Link to='/dashboard'><h1 className="text-xl font-bold">SAG Bureau</h1></Link>
        </div>
        <div className="flex items-center space-x-4">
          {isLoggedIn && <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Bell className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Notifications</SheetTitle>
              </SheetHeader>
              <div className="mt-4 space-y-4">
                {[
                  { title: "New application received", time: "2 minutes ago" },
                  { title: "Document flagged for review", time: "1 hour ago" },
                  { title: "Verification completed", time: "3 hours ago" },
                ].map((notification, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b">
                    <div>
                      <p className="font-medium">{notification.title}</p>
                      <p className="text-sm text-gray-500">{notification.time}</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>}
          {!isLoggedIn ? <Link to="/" className=" hover:text-white-700 bg-white  px-4 py-2 rounded text-blue-900">Sign In</Link> : <button onClick={handleLogout} className="bg-red-600  px-4 py-2 rounded text-white">Log out</button> }
            
        </div>
      </nav>

      {/* Side Navigation Menu */}
      <Sheet open={isNavOpen} onOpenChange={setIsNavOpen}>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
          </SheetHeader>
          <nav className="mt-6 space-y-2">
            {[
              { icon: LayoutDashboard, label: "Dashboard", path:"/dashboard" },
              { icon: FileText, label: "Pending Students", path:"/pending" },
              { icon: CheckCircle, label: "Verified Students", path:"/verified" },
              { icon: Flag, label: "Disqualified Students", path:"/disqualified" },
            ].map((item, index) => (
              <Link to={item.path} key={index} variant="ghost" className="w-full flex py-2 justify-start my-1 border-b" onClick={toggleNav}>
                <item.icon className="mr-2 h-5 w-5" />
                {item.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
