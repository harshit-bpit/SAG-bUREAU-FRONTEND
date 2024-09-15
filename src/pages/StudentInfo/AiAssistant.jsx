import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { AlertTriangle, Check, MessageSquare } from 'lucide-react'
import React from 'react'

const AiAssistant = () => {
  return (
      <Card>
      <CardHeader>
        <CardTitle>AI-Assisted Verification</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[200px] w-full rounded-md border p-4">
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
              <p className="text-sm">Potential mismatch detected in the date of birth between the application and the uploaded certificate.</p>
            </div>
            <div className="flex items-start space-x-2">
              <Check className="h-5 w-5 text-green-500 mt-0.5" />
              <p className="text-sm">The document appears to be an authentic high school certificate based on the format and seal.</p>
            </div>
            <div className="flex items-start space-x-2">
              <MessageSquare className="h-5 w-5 text-blue-500 mt-0.5" />
              <p className="text-sm">Suggestion: Cross-verify the date of birth with other submitted documents.</p>
            </div>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

export default AiAssistant