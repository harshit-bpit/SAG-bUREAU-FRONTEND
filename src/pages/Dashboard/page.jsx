import React, { useEffect, useState } from 'react'
import {  FileText} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { apiClient } from '@/lib/api-client'
import { GET_ALL_PENDING_ROUTE, GET_ALL_UNVERIFIED_ROUTE, GET_ALL_USER_ROUTE, GET_ALL_VERIFIED_ROUTE } from '@/utils/constants'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const [NumberOfApplication, setNumberOfApplication] = useState(0)
  const [NumberOfVerified, setNumberOfVerified] = useState(0)
  const [numberOfUnVerified, setNumberOfUnVerified] = useState(0)
  const [NumberOfPending, setNumberOfPending] = useState(0)

  const navigate = useNavigate()

  const AllStudent = async() => {

    try {
      const response = await apiClient.get(GET_ALL_USER_ROUTE,{withCredentials :true});


      if(response.status === 204) setNumberOfApplication(0)
      
      else setNumberOfApplication(response.data.userinfo.length)
      

    } catch (error) {
      console.error(error)
      navigate('/')
    }
  }

  const VerifiedStudent = async() => {
    try {
      const response = await apiClient.get(GET_ALL_VERIFIED_ROUTE,{withCredentials: true});

      if(response.status === 204) setNumberOfVerified(0)
        else setNumberOfVerified(response.data.userinfo.length)

    } catch (error) {
      console.error(error)
    }
  }
 
   const UnverifiedStudent = async() => {
    try {
      const response = await apiClient.get(GET_ALL_UNVERIFIED_ROUTE,{withCredentials :true});

      if(response.status === 204) setNumberOfUnVerified(0)
        else setNumberOfUnVerified(response.data.userinfo.length)

    } catch (error) {
      console.error(error)
    }
  }

  const PendingStudent = async() => {
    try {
      const response = await apiClient.get(GET_ALL_PENDING_ROUTE,{withCredentials : true});

      if(response.status === 204) setNumberOfPending(0)
        else setNumberOfPending(response.data.userinfo.length)

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    PendingStudent()
    VerifiedStudent()
    AllStudent()
    UnverifiedStudent()
  }, [])
  



  return (
      <main className="flex-1 p-6 container mx-auto">
      <h2 className="text-4xl font-bold mb-4">Dashboard</h2>

      {/* Clickable Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { title: "Total Applied", value: NumberOfApplication, color: "bg-blue-100 text-blue-800" },
          { title: "Pending Applications", value: NumberOfPending, color: "bg-yellow-100 text-yellow-800" },
          { title: "Total Verified", value: NumberOfVerified, color: "bg-green-100 text-green-800" },
          { title: "Document Rejected", value: numberOfUnVerified, color: "bg-red-100 text-red-800" },
        ].map((card, index) => (
          <Card key={index} className={`${card.color} cursor-pointer transition-transform hover:scale-105`}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
              <FileText className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

    

      {/* Recent Activities */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { action: "Verified", document: "Income Certificate", student: "abc", time: "10 minutes ago" },
              { action: "Flagged", document: "Address Proof", student: "abc", time: "1 hour ago" },
              { action: "Approved", document: "Academic Transcript", student: "abc", time: "2 hours ago" },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b">
                <div>
                  <p className="font-medium">{activity.action}: {activity.document}</p>
                  <p className="text-sm text-gray-500">Student: {activity.student}</p>
                </div>
                <p className="text-sm text-gray-500">{activity.time}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </main>
  )
}

export default Dashboard