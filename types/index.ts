import React from "react";

export interface ChildProps {
    children: React.ReactNode
}

export interface IProduct {
    _id: string
    title: string
    description: string
    price: number
    image: string
    category: string
    createdAt: string
    updatedAt: string
}

export interface ReturnActionType {
    user: IUser
    checkoutUrl: string
    failure: string
    isNext: boolean
    status: number
    products: IProduct[]
    product: IProduct
    customers: IUser[]
    orders: IOrder[]
    transaction: ITransaction[]
    statistics: {
        totalOrders: number
        totalTransactions: number
        totalFavourites: number
    }
}

export interface IUser {
    _id: string
    email: string
    fullName: string
    password: string
    role: string
    orderCount: number
    totalPrice: number
    avatar: string
    avatarKey: string
    isDeleted: boolean
    favorites: IProduct[]
    deletedAt: Date
}

export interface IOrder {
    _id: string
    user: IUser
    product: IProduct
    price: number
    status: string
    updatedAt: string
    createdAt: string
}

export interface ITransaction {
    _id: string
    id: string
    user: IUser
    product: IProduct
    state: number
    status: string
    amount: number
    create_time: number
    perform_time: number
    cancel_time: number
    reason: number
    provider: string
}