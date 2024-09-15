import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Bell, LogOut, Menu, X, ChevronRight, FileText, CheckCircle, Flag, LayoutDashboard } from "lucide-react";
import { Link } from "react-router-dom";


const Navbar = () => {

  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNav = () => setIsNavOpen(!isNavOpen)

  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-blue-600 text-white  p-4 flex justify-between items-center  shadow-xl">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={toggleNav}>
            <Menu className="h-6 w-6" />
          </Button>
          <Link to='/'><h1 className="text-xl font-bold">SAG Bureau</h1></Link>
        </div>
        <div className="flex items-center space-x-4">
          <Sheet>
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
          </Sheet>
          <Button variant="ghost" size="icon">
            <LogOut className="h-6 w-6" />
          </Button>
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
              { icon: LayoutDashboard, label: "Dashboard", path:"/" },
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
