'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Instagram, Twitter, Cpu, Send, PlusCircle, Trash2, Edit, BarChart } from "lucide-react"
import Link from 'next/link'

export default function Dashboard() {
  const [generatedContent, setGeneratedContent] = useState('')
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedPlatform, setSelectedPlatform] = useState('instagram')

  const handleGenerate = () => {
    setGeneratedContent("This is a sample AI-generated post for your business. It's tailored to your inputs, preferences, and current trends on " + (selectedPlatform === 'instagram' ? 'Instagram' : 'X (Twitter)') + ".")
  }

  const handleSchedule = () => {
    alert("Post scheduled for " + selectedDate?.toDateString() + " on " + (selectedPlatform === 'instagram' ? 'Instagram' : 'X (Twitter)'))
  }

  return (
    <div className="mx-0 p-4 bg-gray-900 min-h-screen text-blue-100 ">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-300">EchoAI: Content Generator & Scheduler</h1>
        <div className="flex items-center space-x-4">
          <Link href="/analytics">
            <Button variant="outline" className="bg-gray-800 text-blue-300 border-blue-500">
              <BarChart className="mr-2 h-4 w-4" /> Analytics
            </Button>
          </Link>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="User" />
            <AvatarFallback>EA</AvatarFallback>
          </Avatar>
        </div>
      </header>
      
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="md:col-span-2 bg-gray-800 border-blue-500">
          <CardHeader>
            <CardTitle className="text-blue-300">Create Content</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <Select onValueChange={(value) => setSelectedPlatform(value)}>
                <SelectTrigger className="bg-gray-700 border-blue-500 text-blue-100">
                  <SelectValue placeholder="Select Platform" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-blue-500 text-blue-100">
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="twitter">X (Twitter)</SelectItem>
                </SelectContent>
              </Select>
              <Input placeholder="Business Name" className="bg-gray-700 border-blue-500 text-blue-100" />
              <Textarea placeholder="Business Description" className="bg-gray-700 border-blue-500 text-blue-100" />
              <Select>
                <SelectTrigger className="bg-gray-700 border-blue-500 text-blue-100">
                  <SelectValue placeholder="Content Type" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-blue-500 text-blue-100">
                  <SelectItem value="promotional">Promotional</SelectItem>
                  <SelectItem value="informative">Informative</SelectItem>
                  <SelectItem value="engaging">Engaging</SelectItem>
                </SelectContent>
              </Select>
              <Button onClick={handleGenerate} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Generate Content <Cpu className="ml-2 h-4 w-4" />
              </Button>
            </form>
            <Textarea 
              value={generatedContent} 
              onChange={(e) => setGeneratedContent(e.target.value)}
              placeholder="AI-generated content will appear here"
              className="mt-4 h-40 bg-gray-700 border-blue-500 text-blue-100"
            />
            <div className="mt-4 flex justify-between">
              <Button variant="outline" className="bg-gray-700 text-blue-300 border-blue-500">
                <Edit className="mr-2 h-4 w-4" /> Edit
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={handleSchedule}>
                Schedule Post <Send className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-blue-500">
          <CardHeader>
            <CardTitle className="text-blue-300">Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border-blue-500 bg-gray-700 text-blue-100"
            />
            <Select className="mt-4">
              <SelectTrigger className="bg-gray-700 border-blue-500 text-blue-100">
                <SelectValue placeholder="Select Time" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-blue-500 text-blue-100">
                <SelectItem value="9am">9:00 AM</SelectItem>
                <SelectItem value="12pm">12:00 PM</SelectItem>
                <SelectItem value="3pm">3:00 PM</SelectItem>
                <SelectItem value="6pm">6:00 PM</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6 bg-gray-800 border-blue-500">
        <CardHeader>
          <CardTitle className="text-blue-300">Scheduled Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="upcoming">
            <TabsList className="grid w-full grid-cols-2 bg-gray-700">
              <TabsTrigger value="upcoming" className="data-[state=active]:bg-blue-600">Upcoming</TabsTrigger>
              <TabsTrigger value="past" className="data-[state=active]:bg-blue-600">Past</TabsTrigger>
            </TabsList>
            <TabsContent value="upcoming" className="space-y-4">
              <div className="flex items-center justify-between p-2 bg-gray-700 rounded-md">
                <div className="flex items-center space-x-2">
                  <Instagram className="text-pink-400" />
                  <span>Product showcase post</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="bg-blue-900 text-blue-300">Tomorrow, 3:00 PM</Badge>
                  <Button size="icon" variant="ghost">
                    <Trash2 className="h-4 w-4 text-red-400" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-700 rounded-md">
                <div className="flex items-center space-x-2">
                  <Twitter className="text-sky-400" />
                  <span>Promotional tweet</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="bg-blue-900 text-blue-300">Next week, 9:00 AM</Badge>
                  <Button size="icon" variant="ghost">
                    <Trash2 className="h-4 w-4 text-red-400" />
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white">
        <PlusCircle className="mr-2 h-4 w-4" /> Create New Post
      </Button>
    </div>
  )
}