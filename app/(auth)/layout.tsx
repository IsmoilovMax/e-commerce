import { ChildProps } from '@/types'
import React, { FC } from 'react'


const AuthLayout: FC<ChildProps> = ({ children }) => {
  return (
      <section className='flex justify-center mt-44'>
        {children}
      </section>
  )
}

export default AuthLayout
