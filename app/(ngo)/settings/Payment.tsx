import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const Payment = () => {
  return (
    <div>
      <h3 className="font-bold text-xl">Update Bank Account Details</h3>
      <div className="bg-white">
        <div className="flex gap-5">
    <div className="grid w-1/2 items-center mt-4 mb-5">
      <Label htmlFor="number">Account number</Label>
      <Input type="" id="number" placeholder="6543245678" />
    </div>
    <div className="grid w-1/2 items-center mt-4 mb-5">
      <Label htmlFor="text">Account Name</Label>
      <Input type="" id="text" placeholder="marina" />
        </div>
    </div>
    <div className="flex gap-5">
    <div className="grid w-1/2 items-center mt-4 mb-5">
      <Label htmlFor="text">Select bank</Label>
      <Input type="" id="text" placeholder="*****" />
    </div>
    <div className="grid w-1/2 items-center mt-4 mb-5">
      <Label htmlFor="text">Send OTP to your email</Label>
      <Input type="" id="text" placeholder="54 marina" />
        </div>
    </div>
    <Button size="lg" className="bg-secondary text-white text-[16px] font-semibold hover:opacity-70 w-32 py-6">
        Update
        </Button>
          </div>
    </div>
  )
}

export default Payment