import { useState } from "react"
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
import { Book, CheckCircle, XCircle, Clock, Moon, Info } from "lucide-react"
import { useNavigate } from "react-router-dom"

const students = [
  { id: 1, name: "Manya Sharma", applicationNumber: "APP001", course: "Computer Science", college: "XYZ College of Engineering" },
  { id: 2, name: "Priya Patel", applicationNumber: "APP002", course: "Electrical Engineering", college: "Jammu University" },
  { id: 3, name: "Amit Kumar", applicationNumber: "APP003", course: "Mechanical Engineering", college: "Islamic University of Science and Technology" },
  { id: 4, name: "Sneha Gupta", applicationNumber: "APP004", course: "Civil Engineering", college: "Cluster University of Jammu" },
  { id: 5, name: "Vikram Singh", applicationNumber: "APP005", course: "Chemical Engineering", college: "Baba Ghulam Shah Badshah University" },
]

export default function PendingStudent() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.applicationNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.college.toLowerCase().includes(searchTerm.toLowerCase())
  )

    const navigate = useNavigate()
  return (
    <div className="flex flex-col ">
     

      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-4xl font-bold  mb-8">Students Pending</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <Input
            type="text"
            placeholder="Search by name, application number, course, or college"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-4"
          />
          <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">Student Name</TableHead>
              <TableHead>Application Number</TableHead>
              <TableHead>College Name</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredStudents.map((student) => (
              <TableRow
                key={student.id}
                onClick={() => navigate('/student')}
                className="cursor-pointer hover:bg-indigo-50 transition-colors"
              >
                <TableCell className="font-medium">{student.name}</TableCell>
                <TableCell>{student.applicationNumber}</TableCell>
                <TableCell>{student.college}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
      </main>
    </div>
  )
}