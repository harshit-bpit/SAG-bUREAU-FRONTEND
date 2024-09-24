import React, { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ZoomIn, ZoomOut, RotateCw, MessageSquare, Check, Flag, HelpCircle, AlertTriangle, Send, Badge, CheckCircle, Loader2 } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import StudentMessage from './StudentMessage'
import AcceptRejectApplication from './AcceptRejectApplication'
import AiAssistant from './AiAssistant'
import { apiClient } from '@/lib/api-client'
import { GET_STUDENT_INFO_BY_ID_ROUTE, HOST } from '@/utils/constants'
import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast'




export default function StudentInfo() {
  const [zoomLevel, setZoomLevel] = useState(100)
  const [rotation, setRotation] = useState(0)
  const [documents,setDocuments] = useState([])
  const { studentId } = useParams();
  const [studentData, setStudentData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isData, setIsData] = useState(false);



  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 10, 200))
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 10, 50))
  const handleRotate = () => setRotation(prev => (prev + 90) % 360)
  
  const updateDocumentStatus = (id, stat) => {
    setDocuments(documents.map(document => 
      document.id === id ? { ...document, status: stat } : document
    ))
  }

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await apiClient.get(`${GET_STUDENT_INFO_BY_ID_ROUTE}/${studentId}`,{withCredentials: true});
        setStudentData(response.data.userinfo);
        
        const {
          photograph,
          signature,
          aadharCard,
          tenthCertificate,
          twelfthCertificate,
          casteCertificate,
          incomeCertificate,
          domicileCertificate,
          disabilityCertificate
        } = response.data.userinfo;

        console.log( photograph,
          signature,
          aadharCard,
          tenthCertificate,
          twelfthCertificate,
          casteCertificate,
          incomeCertificate,
          domicileCertificate,
          disabilityCertificate);

        setDocuments([
          {id:1, name: 'Photograph', path: photograph , status:"pending" },
          {id:2, name: 'Signature', path: signature, status:"pending" },
          {id:3, name: 'Aadhar Card', path: aadharCard, status:"pending" },
          {id:4, name: 'Tenth Certificate', path: tenthCertificate, status:"pending" },
          {id:5, name: 'Twelfth Certificate', path: twelfthCertificate, status:"pending" },
          {id:6, name: 'Caste Certificate', path: casteCertificate, status:"pending" },
          {id:7, name: 'Income Certificate', path: incomeCertificate, status:"pending" },
          {id:8, name: 'Domicile Certificate', path: domicileCertificate, status:"pending" },
          {id:9, name: 'Disability Certificate', path: disabilityCertificate , status:"pending"}
        ])
        console.log(response.data.userinfo);
        setIsData(true)
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        toast.error("Error fetching student details.");
        setIsLoading(false);
      }
    };
    fetchStudentData();
  }, [studentId, studentData.applicationStatus]);

  if(isLoading) return <div className='w-full min-h-52 flex items-center justify-center'> <Loader2  className='text-blue-900 animate-spin' size={50}/></div>
  if(!isData) return <div className='w-full min-h-52 flex items-center justify-center'> No Such Student Found</div>

  return (
    <div className="container mx-auto p-6 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Student Profile: {studentData.name}</h1>
      <div className={`ml-5 w-fit rounded-lg text-white  py-2 px-4 ${studentData.applicationStatus === "Verified" ? "bg-green-500" : studentData.applicationStatus === "Pending" ? "bg-yellow-500" : "bg-red-500"}`}>
        Status : {studentData.applicationStatus}
      </div>
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
                      <Input id="name" value={studentData.name} readOnly />
                    </div>
                    <div>
                      <Label htmlFor="fathersName">Father's Name</Label>
                      <Input id="fathersName" value={studentData.fatherName} readOnly />
                    </div>
                    <div>
                      <Label htmlFor="dob">Date of Birth</Label>
                      <Input id="dob" value={studentData.dob} readOnly />
                    </div>
                    <div>
                      <Label htmlFor="gender">Gender</Label>
                      <Input id="gender" value={studentData.gender} readOnly />
                    </div>
                    <div>
                      <Label htmlFor="reservedCategory">Reserved Category</Label>
                      <Input id="reservedCategory" value={studentData.category} readOnly />
                    </div>
                    <div>
                      <Label htmlFor="email">Email ID</Label>
                      <Input id="email" value={studentData.emailId} readOnly />
                    </div>
                    <div>
                      <Label htmlFor="familyIncome">Total Family Income (Annually)</Label>
                      <Input id="familyIncome" value={studentData.familyIncome} readOnly />
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
                      <Input id="collegeName" value={studentData.collegeName} readOnly />
                    </div>
                    <div>
                      <Label htmlFor="collegeAddress">College Address</Label>
                      <Input id="collegeAddress" value={studentData.collegeAddress} readOnly />
                    </div>
                    <div>
                      <Label htmlFor="collegeEmail">Official College Email</Label>
                      <Input id="collegeEmail" value={studentData.collegeEmailID} readOnly />
                    </div>
                    <div>
                      <Label htmlFor="enrollNumber">Enrollment Number</Label>
                      <Input id="enrollNumber" value={studentData.enrollmentNumber} readOnly />
                    </div>
                    <div>
                      <Label htmlFor="institutionCode">Institution Code</Label>
                      <Input id="institutionCode" value={studentData.institutionCode} readOnly />
                    </div>
                    <div>
                      <Label htmlFor="courseOpted">Course Opted</Label>
                      <Input id="courseOpted" value={studentData.courseName} readOnly />
                    </div>
                    <div>
                      <Label htmlFor="courseDuration">Duration of Course (in years)</Label>
                      <Input id="courseDuration" value={studentData.courseDuration} readOnly />
                    </div>
                    <div>
                      <Label htmlFor="feesPerYear">Fees per Year</Label>
                      <Input id="feesPerYear" value={studentData.feesPerSem} readOnly />
                    </div>
                    <div>
                      <Label htmlFor="totalFees">Total Fees of the Course</Label>
                      <Input id="totalFees" value={studentData.totalFees} readOnly />
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
                        <TableHead>Passing Year</TableHead>
                        <TableHead>Total Marks</TableHead>
                        <TableHead>Marks Obtained</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {studentData.academicRecords.map((record, index)=> 
                        <TableRow key={index}>
                        <TableCell>{record.exam}</TableCell>
                        <TableCell>{record.board}</TableCell>
                        <TableCell>{record.yearOfPass}</TableCell>
                        <TableCell>{record.totalMarks}</TableCell>
                        <TableCell>{record.marksObtained}</TableCell>
                      </TableRow>
                      )}
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
                    <Label htmlFor="permanentAddress">Address</Label>
                    <Textarea id="permanentAddress" value={studentData.address} readOnly />
                  </div>
                  <div>
                    <Label htmlFor="correspondenceAddress"> City</Label>
                    <Textarea id="correspondenceAddress" value={studentData.city} readOnly />
                  </div>
                  <div>
                    <Label htmlFor="correspondenceAddress"> State</Label>
                    <Textarea id="correspondenceAddress" value={studentData.state} readOnly />
                  </div>
                  <div>
                    <Label htmlFor="correspondenceAddress"> PinCode</Label>
                    <Textarea id="correspondenceAddress" value={studentData.pinCode} readOnly />
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
      <AcceptRejectApplication applicationId={studentData.applicationId} />
    </div>
  )
}