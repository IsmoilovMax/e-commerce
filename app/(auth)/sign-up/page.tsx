"use client"

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { registerSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'



const SignUp = () => {

    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            fullName: "", email: "", password: ""
        }
    })

    function onSubmit(values: z.infer<typeof registerSchema>) {
        const { email, fullName, password } = values

        console.log("email:", { email })
        console.log("fullName:", { fullName })
        console.log("password:", { password })


    }

    return (
        <Card className='w-1/3 p-4'>
            <h1 className='text-xl font-bold'>Sign Up</h1>
            <p className='text-sm text-muted-foreground'>
                Welcome to our platform! Please sign up to create account
            </p>
            <Separator className='my-1' />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-3'
                >
                    <FormField
                        control={form.control}
                        name='fullName'
                        render={({ field }) => (
                            <FormItem className='space-y-0'>
                                <Label>Full Name</Label>
                                <FormControl>
                                    <Input
                                        placeholder='Max....' {...field}
                                    />
                                </FormControl>
                                <FormMessage
                                    className='text-xs text-red-500' />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem className='space-y-0'>
                                <Label>Email</Label>
                                <FormControl>
                                    <Input
                                        placeholder='example@gmail.com'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage
                                    className='text-xs text-red-500'
                                />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='password'
                        render={({ field }) => (
                            <FormItem className='space-y-0'>
                                <Label>Password</Label>
                                <FormControl>
                                    <Input placeholder='****'
                                        type='password' {...field} />
                                </FormControl>
                                <FormMessage
                                    className='text-xs text-red-500'
                                />
                            </FormItem>

                        )}
                    />
                    <Button type='submit' className='cursor-pointer'>Submit</Button>

                </form>
            </Form>
            <div className='mt-4'>
                <div className='text-sm text-muted-foreground'>
                    Already have an account?{' '}
                    <Button asChild variant={'link'}
                        className='p-0'>
                        <Link href={'/sign-in'}>Sign in </Link>
                    </Button>
                </div>
            </div>
        </Card>
    )
}

export default SignUp
