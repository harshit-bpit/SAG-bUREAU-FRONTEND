import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { apiClient } from '@/lib/api-client'
import { CHANGE_APPLICATION_STATUS_TO_PENDING_ROUTE, CHANGE_APPLICATION_STATUS_TO_UNVERIFIED_ROUTE, CHANGE_APPLICATION_STATUS_TO_VERIFIED_ROUTE } from '@/utils/constants'
import { Check, HelpCircle, Loader2, X } from 'lucide-react'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const AcceptRejectApplication = ({applicationId}) => {

  const[isLoading,setIsLoading] = useState(false)

  const handleVerify = async() =>{
    try {
      setIsLoading(true)
      const response = await apiClient.post(CHANGE_APPLICATION_STATUS_TO_VERIFIED_ROUTE,{applicationId: applicationId},{withCredentials: true})

      toast.success(response.data)
      setIsLoading(false)

    } catch (error) {
      console.error(error)
      toast.error(error.response.data)
      setIsLoading(false)
    }
  }

  const handleUnVerify = async()=>{
    try {
      setIsLoading(true)
      const response = await apiClient.post(CHANGE_APPLICATION_STATUS_TO_UNVERIFIED_ROUTE,{applicationId: applicationId},{withCredentials: true})

      toast.success(response.data)
      setIsLoading(false)

    } catch (error) {
      console.error(error)
      toast.error(error.response.data)
      setIsLoading(false)
    }
  }

  const handleUpdate = async ()=>{
    try {
      setIsLoading(true)
      const response = await apiClient.post(CHANGE_APPLICATION_STATUS_TO_PENDING_ROUTE,{applicationId: applicationId},{withCredentials: true})

      toast.success(response.data)
      setIsLoading(false)

    } catch (error) {
      console.error(error)
      toast.error(error.response.data)
      setIsLoading(false)
    }
  }
  return (
      <Card className="mt-6">
      <CardHeader>
        <CardTitle>Application Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white" onClick={handleVerify}>
            {!isLoading ? <div className='flex gap-2 items-center'>
            <Check className="w-4 h-4 mr-2" />
            Accept Application
            </div> : <div><Loader2 className='animate-spin' /></div>}
          </Button>
          <Button className="w-full bg-red-600 hover:bg-red-700 text-white" onClick={handleUnVerify}>
          {!isLoading ? <div className='flex gap-2 items-center'>
            <X className="w-4 h-4 mr-2" />
            Reject Application
            </div> : <div><Loader2 className='animate-spin' /></div>}
          </Button>
          <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white" onClick={handleUpdate}>
          {!isLoading ? <div className='flex gap-2 items-center'>
            <HelpCircle className="w-4 h-4 mr-2" />
            Request Update Application
            </div> : <div><Loader2 className='animate-spin' /></div>}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default AcceptRejectApplication