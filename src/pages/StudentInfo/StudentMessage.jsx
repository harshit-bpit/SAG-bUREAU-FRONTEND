import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import React, { useState } from "react";

const StudentMessage = () => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    console.log("Sending message:", message);
    setMessage("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Message Student</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Textarea
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="min-h-[150px]"
          />
          <Button  className="w-full hover:bg-blue-500 bg-blue-500" onClick={handleSendMessage}>
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentMessage;
