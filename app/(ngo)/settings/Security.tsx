import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const Security = () => {
  return (
    <div>
      <h3 className="font-bold text-xl">Password Information</h3>
      <div className="bg-white">
        <div className="flex gap-5">
    <div className="grid w-1/2 items-center mt-4 mb-5">
      <Label htmlFor="text">current password</Label>
      <Input type="" id="text" placeholder="*****" />
    </div>
    <div className="grid w-1/2 items-center mt-4 mb-5">
      <Label htmlFor="text">New password</Label>
      <Input type="" id="text" placeholder="54 marina" />
        </div>
    </div>
    <div className="grid w-1/2 items-center mt-4 mb-5 pr-3">
      <Label htmlFor="number">Confirm new password</Label>
      <Input type="" id="number" placeholder="+2345678654" />
    </div>
    <p className="text-[#111928] font-medium mb-2">Password requirements:</p>
      <p>Ensure that these requirements are met:</p>
    <ul className="text-[#6B7280] pl-5 mb-4">
      <li>At least 10 characters (and up to 100 characters)</li>
      <li>At least one lowercase character</li>
      <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
    </ul>
    <Button size="lg" className="bg-secondary text-white text-[16px] font-semibold hover:opacity-70 w-32 py-6">
        Update
        </Button>
          </div>
    </div>
  )
}

export default Security