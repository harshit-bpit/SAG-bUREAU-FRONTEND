import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Book, CheckCircle, XCircle, Clock, Moon, Info, Loader2 } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { GET_ALL_UNVERIFIED_ROUTE } from "@/utils/constants"
import { apiClient } from "@/lib/api-client"
import toast from "react-hot-toast"



export default function DisqualifiedStudent() {
  const [searchTerm, setSearchTerm] = useState("")
  const [students, setStudents] = useState([])
  const[isLoading,setIsLoading] = useState(true)

  




    const navigate = useNavigate()

    const getStudentData = async ()=> {
      setIsLoading(true)
      try {
        const response = await apiClient.get(GET_ALL_UNVERIFIED_ROUTE,{withCredentials : true})
        if(response.status === 204){
          setStudents([]);
        }else{
          setStudents(response.data.userinfo);
        }

        setIsLoading(false)
      } catch (error) {
        console.log(error);
        toast.error(error.response.data)
        navigate('/')
        setIsLoading(false)
      }
    }

    useEffect(() => {
      getStudentData()
    }, [])

    const filteredStudents = students.filter(student =>
      student.StudentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.MobileNumber.toString().includes(searchTerm.toLowerCase()) ||
      student.DOB.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.EmailID.toLowerCase().includes(searchTerm.toLowerCase())
    )
  return (
    <div className="flex flex-col ">
     

      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-4xl font-bold  mb-8">Students DisQualified</h1>
        {!isLoading ? <div className="bg-white rounded-lg shadow-md p-6">
          <Input
            type="text"
            placeholder="Search by name, application number, Email"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-4"
          />
          {students.length !== 0 ? <Table className="bg-red-50">
            <TableHeader >
            <TableRow >
              <TableHead className="w-[250px]">Student Name</TableHead>
              <TableHead >Application Number</TableHead>
              <TableHead>Date of Birth</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Email ID</TableHead>
              <TableHead>Mobile Number</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredStudents.map((student) => (
              <TableRow
                key={student.id}
                onClick={() => navigate(`/student/${student.id}`)}
                className="cursor-pointer hover:bg-indigo-50 transition-colors"
              >
                <TableCell className="font-medium">{student.StudentName}</TableCell>
                <TableCell className=" font-bold text-blue-500">{student.ApplicationID}</TableCell>
                <TableCell>{student.DOB}</TableCell>
                <TableCell>{student.Gender}</TableCell>
                <TableCell>{student.EmailID}</TableCell>
                <TableCell>{student.MobileNumber}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table> : <div>No Student is Pending </div>}
        </div> : <div className="w-full min-h-48 flex items-center justify-center "><Loader2 className="animate-spin text-blue-500" size={50} /></div>}
      </main>
    </div>
  )
}
