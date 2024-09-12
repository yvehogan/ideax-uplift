import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const MyAccount = () => {
  return (
    <div>
      <h3 className="font-bold text-xl">General Information</h3>
      <div className="bg-white">
            <div className="grid w-full items-center gap-1.5">
    </div>
    <div className="grid w-full items-center mt-4 mb-5">
      <Label htmlFor="text">Organization Name</Label>
      <Input type="" id="text" placeholder="name" />
    </div>
    <div className="grid w-full items-center mt-4 mb-5">
      <Label htmlFor="text">Address</Label>
      <Input type="" id="text" placeholder="54 marina" />
    </div>
    <div className="grid w-full items-center mt-4 mb-5">
      <Label htmlFor="number">phone number</Label>
      <Input type="" id="number" placeholder="+2345678654" />
    </div>
    <Button size="lg" className="bg-secondary text-white text-[16px] font-semibold hover:opacity-70 w-32 py-6">
        Update
        </Button>
          </div>
    </div>
  )
}

export default MyAccount