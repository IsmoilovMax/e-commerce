"use client"

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { loginSchema, registerSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import favicon from '../../favicon.ico'

const SingUpPage = () => {
    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: { email: "", password: "", fullName: "" }
    })

    function onSubmit(values: z.infer<typeof loginSchema>) {
        console.log(values)
    }

    return (
        <Card className='w-1/3 p-4'>
            <h1 className='text-xl font-bold'>Sign In</h1>
            <p className='text-sm text-muted-foreground'>
                Welcome back! Please sign in to your account
              
            </p>
           
            <Separator className='my-1' />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem className='space-y-1'>
                                <Label>Email</Label>
                                <FormControl>
                                    <Input placeholder='email@gmail.com' {...field} />
                                </FormControl>
                                <FormMessage className='text-xs text-red-500' />
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
                                    <Input placeholder='****' type='password' {...field} />
                                </FormControl>
                                <FormMessage className='text-xs text-red-500' />
                            </FormItem>
                        )}
                    />
                    <Button type='submit' className='cursor-pointer'>Sumbit</Button>
                </form>
            </Form>

            <div className='mt-4'>
                <div className='text-sm text-muted-foreground'>
                    Don&apos;t have an account?{' '}
                    <Button asChild variant={'link'} className='p-0'>
                        <Link href={'/sign-up'}>Sign up</Link>
                    </Button>
                </div>
            </div>
        </Card>
    )
}

export default SingUpPage
