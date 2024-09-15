import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ZoomIn, ZoomOut, RotateCw, MessageSquare, Check, Flag, HelpCircle, AlertTriangle, Send, Badge, CheckCircle } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import StudentMessage from './StudentMessage'
import AcceptRejectApplication from './AcceptRejectApplication'
import AiAssistant from './AiAssistant'


const initialStudents = [
  { id: 1, name: "Rahul Sharma", applicationNumber: "APP001", course: "Computer Science", college: "University of Kashmir", status: "verified" ,path:"https://imgv2-1-f.scribdassets.com/img/document/454386504/original/1be334165f/1723373579?v=1" },
  { id: 2, name: "Priya Patel", applicationNumber: "APP002", course: "Electrical Engineering", college: "Jammu University", status: "pending" ,path:"https://imgv2-1-f.scribdassets.com/img/document/454386504/original/1be334165f/1723373579?v=1" },
  { id: 3, name: "Amit Kumar", applicationNumber: "APP003", course: "Mechanical Engineering", college: "Islamic University of Science and Technology", status: "flagged" , path:"https://imgv2-1-f.scribdassets.com/img/document/454386504/original/1be334165f/1723373579?v=1" },
  { id: 4, name: "Sneha Gupta", applicationNumber: "APP004", course: "Civil Engineering", college: "Cluster University of Jammu", status: "verified" , path:"https://imgv2-1-f.scribdassets.com/img/document/454386504/original/1be334165f/1723373579?v=1" },
  { id: 5, name: "Vikram Singh", applicationNumber: "APP005", course: "Chemical Engineering", college: "Baba Ghulam Shah Badshah University", status: "pending", path:"https://imgv2-1-f.scribdassets.com/img/document/454386504/original/1be334165f/1723373579?v=1"  },
]

export default function StudentInfo() {
  const [zoomLevel, setZoomLevel] = useState(100)
  const [rotation, setRotation] = useState(0)
  const [documents,setDocuments] = useState(initialStudents)

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 10, 200))
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 10, 50))
  const handleRotate = () => setRotation(prev => (prev + 90) % 360)
  
  const updateDocumentStatus = (id, stat) => {
    setDocuments(documents.map(document => 
      document.id === id ? { ...document, status: stat } : document
    ))
  }



  return (
    <div className="container mx-auto p-6 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Student Profile: Manya Sharma</h1>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-2/3">
          <Tabs defaultValue="personal" className="w-full mb-10 border px-3 py-3 rounded-xl ">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5  grid-rows-3 h-32 lg:h-14 ">
              <TabsTrigger value="personal" >Personal Details</TabsTrigger>
              <TabsTrigger value="college">College Details</TabsTrigger>
              <TabsTrigger value="academic">Academic Details</TabsTrigger>
              <TabsTrigger value="address">Address Details</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>
            <TabsContent value="personal">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name (as per Aadhar Card)</Label>
                      <Input id="name" value="Manya Sharma" readOnly />
                    </div>
                    <div>
                      <Label htmlFor="fathersName">Father's Name</Label>
                      <Input id="fathersName" value="Rajesh Sharma" readOnly />
                    </div>
                    <div>
                      <Label htmlFor="dob">Date of Birth</Label>
                      <Input id="dob" value="1998-05-15" readOnly />
                    </div>
                    <div>
                      <Label htmlFor="gender">Gender</Label>
                      <Input id="gender" value="Female" readOnly />
                    </div>
                    <div>
                      <Label htmlFor="reservedCategory">Reserved Category</Label>
                      <Input id="reservedCategory" value="OBC" readOnly />
                    </div>
                    <div>
                      <Label htmlFor="email">Email ID</Label>
                      <Input id="email" value="manya.sharma@gmail.com" readOnly />
                    </div>
                    <div>
                      <Label htmlFor="familyIncome">Total Family Income (Annually)</Label>
                      <Input id="familyIncome" value="₹500,000" readOnly />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="college">
              <Card>
                <CardHeader>
                  <CardTitle>College Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="collegeName">College Name</Label>
                      <Input id="collegeName" value="XYZ Engineering College" readOnly />
                    </div>
                    <div>
                      <Label htmlFor="collegeAddress">College Address</Label>
                      <Input id="collegeAddress" value="123 College St, City, State, 12345" readOnly />
                    </div>
                    <div>
                      <Label htmlFor="collegeEmail">Official College Email</Label>
                      <Input id="collegeEmail" value="info@xyzcollege.edu" readOnly />
                    </div>
                    <div>
                      <Label htmlFor="enrollNumber">Enrollment Number</Label>
                      <Input id="enrollNumber" value="EN12345678" readOnly />
                    </div>
                    <div>
                      <Label htmlFor="institutionCode">Institution Code</Label>
                      <Input id="institutionCode" value="IC9876" readOnly />
                    </div>
                    <div>
                      <Label htmlFor="collegeBankAccount">College Bank Account Name</Label>
                      <Input id="collegeBankAccount" value="XYZ College Account" readOnly />
                    </div>
                    <div>
                      <Label htmlFor="ifscCode">IFSC Code</Label>
                      <Input id="ifscCode" value="ABCD0001234" readOnly />
                    </div>
                    <div>
                      <Label htmlFor="bankAddress">Bank Address</Label>
                      <Input id="bankAddress" value="456 Bank St, City, State, 54321" readOnly />
                    </div>
                    <div>
                      <Label htmlFor="courseOpted">Course Opted</Label>
                      <Input id="courseOpted" value="B.Tech in Computer Science" readOnly />
                    </div>
                    <div>
                      <Label htmlFor="courseDuration">Duration of Course (in years)</Label>
                      <Input id="courseDuration" value="4" readOnly />
                    </div>
                    <div>
                      <Label htmlFor="feesPerYear">Fees per Year</Label>
                      <Input id="feesPerYear" value="₹100,000" readOnly />
                    </div>
                    <div>
                      <Label htmlFor="totalFees">Total Fees of the Course</Label>
                      <Input id="totalFees" value="₹400,000" readOnly />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="academic">
              <Card>
                <CardHeader>
                  <CardTitle>Academic Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Exam Passed</TableHead>
                        <TableHead>Board/University</TableHead>
                        <TableHead>Total Marks</TableHead>
                        <TableHead>Marks Obtained</TableHead>
                        <TableHead>Percentage</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>10th</TableCell>
                        <TableCell>State Board</TableCell>
                        <TableCell>500</TableCell>
                        <TableCell>450</TableCell>
                        <TableCell>90%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>12th</TableCell>
                        <TableCell>State Board</TableCell>
                        <TableCell>500</TableCell>
                        <TableCell>425</TableCell>
                        <TableCell>85%</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="address">
              <Card>
                <CardHeader>
                  <CardTitle>Address Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="permanentAddress">Permanent Address</Label>
                    <Textarea id="permanentAddress" value="789 Residential St, City, State, 67890" readOnly />
                  </div>
                  <div>
                    <Label htmlFor="correspondenceAddress">Correspondence Address</Label>
                    <Textarea id="correspondenceAddress" value="101 Hostel Rd, College Campus, City, State, 12345" readOnly />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="documents">
            <Card>
                <CardHeader>
                  <CardTitle> Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {documents.map((doc, index) => (
                      <li key={index} className="flex items-center justify-between border-b pb-2">
                        <span>{doc.name}</span>
                        <div className="flex items-center space-x-2">
                          <div className={`p-1 px-3 rounded-3xl border ${doc.status === "verified" ? "bg-green-400 " : doc.status === "pending" ? "bg-yellow-400" : "bg-red-400"}`}>
                            {doc.status}
                          </div>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline">View</Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl h-[80vh]">
                              <DialogHeader>
                                <DialogTitle>{doc.name}</DialogTitle>
                              </DialogHeader>
                              <div className="relative h-full">
                                <div className="absolute top-2 right-2 flex space-x-2 z-10">
                                  <Button variant="outline" size="icon" onClick={handleZoomIn}>
                                    <ZoomIn className="h-4 w-4" />
                                  </Button>
                                  <Button variant="outline" size="icon" onClick={handleZoomOut}>
                                    <ZoomOut className="h-4 w-4" />
                                  </Button>
                                  <Button variant="outline" size="icon" onClick={handleRotate}>
                                    <RotateCw className="h-4 w-4" />
                                  </Button>
                                </div>
                                <ScrollArea className="h-[calc(80vh-8rem)] w-full" >
                                  <div 
                                    className="w-full h-[calc(80vh-8rem)] flex items-center justify-center"
                                    style={{
                                      transform: `scale(${zoomLevel / 100}) rotate(${rotation}deg)`,
                                      transition: 'transform 0.3s ease'
                                    }}
                                  >
                                    <img 
                                      src={doc.path} 
                                      alt={doc.name}
                                      // className="max-w-full h-auto "
                                      style={{ transformOrigin: 'center center' }}
                                    />
                                  </div>
                                  
                                </ScrollArea>
                              </div>
                              <div className=" flex justify-between">
                                <Button variant="outline" className="w-full mr-2 bg-green-400 hover:bg-green-400" onClick={()=> {
                                  updateDocumentStatus(doc.id, "verified")
                                  console.log(documents);
                                  }}>
                                  <CheckCircle className="mr-2 h-4 w-4" /> Verify
                                </Button>
                                <Button variant="outline" className="w-full mr-2 bg-red-400 hover:bg-red-400" onClick={()=> updateDocumentStatus(doc.id, "flagged")}>
                                  <AlertTriangle className="mr-2 h-4 w-4" /> Flag
                                </Button>
                                <Button variant="outline" className="w-full bg-yellow-400 hover:bg-yellow-400 " onClick={()=> updateDocumentStatus(doc.id, "pending")}>
                                  <HelpCircle className="mr-2 h-4 w-4" /> Request Info
                                </Button>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
        </div>
        <div className="w-full lg:w-1/3 space-y-6">

          <AiAssistant />
          <StudentMessage />
          
        </div>
      </div>
      <AcceptRejectApplication />
    </div>
  )
}