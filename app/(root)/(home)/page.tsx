import { Card, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Filter } from 'lucide-react'
import React from 'react'

const HomePage = () => {
  return (
    <>
      <div className='flex justify-betweeny items-center'>
        <h1 className='text-xl'>Prod</h1>
        <Filter size={14} className='ml-1' />
      </div>
      <Separator className='my-3' />
      <div
        className='grid grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-3
          gap-4
        '>
        <Card>
          <CardTitle className='text-center'>Title</CardTitle>
        </Card>

        {/* <Pagination/>  */}
      </div>
    </>
  )
}

export default HomePage
