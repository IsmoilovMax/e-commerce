import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { User } from 'lucide-react'
import { ModeToggle } from '../ui/modeToggle'

const Navbar = () => {
  return (
    <div
      className='flex h-16 bg-secondary border-b 
      fixed inset-0 z-50'
    >
      <div
        className='container max-w-6xl flex 
        items-center justify-between h-full mx-auto'
      > 
        <div className='text-center'>
        <p>SMART</p>
        <h1>BEMS Logo</h1>
        </div>
        <div className='flex items-center gap-2'>
          <ModeToggle />
          <Button asChild size={"icon"}>
            <Link href={'/sign-in'}>
              <User />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
