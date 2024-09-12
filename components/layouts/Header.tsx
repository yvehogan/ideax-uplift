"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

const Header = () => {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    try {
      toast.success('Logged out successfully')
      router.push('/')
    } catch (error) {
      toast.error('Error logging out')
    }
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/find-matches', label: 'Find Matches' },
    { href: '/ngo-and-projects', label: 'NGO and Projects' },
    { href: '/contact-us', label: 'Contact Us' },
    { href: '/resources', label: 'Resources' },
  ]

  return (
    <div className="bg-secondary rounded-full h-16 flex justify-between items-center px-16">
      <Image src="/images/logo.png" alt='Logo' width={100} height={42}
        className="object-contain object-center"
      />
      <ul className="flex gap-5 text-white text-lg">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link 
              href={link.href}
              className={`relative pb-1 ${pathname === link.href ? 'text-white font-bold' : ''}`}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
              )}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex gap-5">
          <Button 
            size="lg" 
            className="bg-white text-textBlack text-[16px] font-semibold hover:bg-white hover:opacity-70"
            asChild
          >
            <Link href='/auth/login'>Login</Link>
          </Button>
        <Button asChild size="lg" className="bg-primary text-textBlack text-[16px] font-semibold hover:bg-primary hover:opacity-70">
          <Link href="/auth/register">Register as an NGO</Link>
        </Button>
      </div>
    </div>
  )
}

export default Header
