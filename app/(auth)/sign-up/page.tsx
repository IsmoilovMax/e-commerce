import { Card } from '@/components/ui/card'
import { registerSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const SignUp = () => {
    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            email: "",
            fullName: "",
            password: ""
        }
    })

    function onSubmit(values: z.infer<typeof registerSchema>) {
        console.log(values)
    }

    return (
       <Card className='w-1/2 p-4'>
            <h1 className='text-xl font-bold'>Sign Up</h1>
       </Card>

    )
}

export default SignUp
