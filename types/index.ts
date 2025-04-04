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
    user: any
    checkoutUrl: string
    failure: string
    isNext: boolean
    status: number
    products: any
    product: any
    customer: any
    orders: any
    transaction: any
    statistics: {
        totalOrders: number
        totalTransactions: number
        totalFavourites: number
    }
}