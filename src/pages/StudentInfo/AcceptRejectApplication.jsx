import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Check, HelpCircle, X } from 'lucide-react'
import React from 'react'

const AcceptRejectApplication = () => {
  return (
      <Card className="mt-6">
      <CardHeader>
        <CardTitle>Application Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
            <Check className="w-4 h-4 mr-2" />
            Accept Application
          </Button>
          <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
            <X className="w-4 h-4 mr-2" />
            Reject Application
          </Button>
          <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">
            <HelpCircle className="w-4 h-4 mr-2" />
            Request Update Application
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default AcceptRejectApplication