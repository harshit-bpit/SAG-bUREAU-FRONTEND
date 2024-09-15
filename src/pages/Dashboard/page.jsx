import React from 'react'
import {  FileText} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const Dashboard = () => {
  return (
      <main className="flex-1 p-6 container mx-auto">
      <h2 className="text-4xl font-bold mb-4">Dashboard</h2>

      {/* Clickable Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        {[
          { title: "Total Applied", value: 5666, color: "bg-blue-100 text-blue-800" },
          { title: "Pending Applications", value: 3210, color: "bg-yellow-100 text-yellow-800" },
          { title: "Total Verified", value: 2456, color: "bg-green-100 text-green-800" },
          { title: "Verified Today", value: 50, color: "bg-green-100 text-green-800" },
          { title: "Document Rejected", value: 3, color: "bg-red-100 text-red-800" },
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
              { action: "Verified", document: "Income Certificate", student: "Alice Johnson", time: "10 minutes ago" },
              { action: "Flagged", document: "Address Proof", student: "Bob Smith", time: "1 hour ago" },
              { action: "Approved", document: "Academic Transcript", student: "Charlie Brown", time: "2 hours ago" },
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