"use client"
import React from "react"
import {
  QueryClient,
  QueryClientProvider,
 } from '@tanstack/react-query'
 
function Product_Provider({children}:{children:React.ReactNode}) {
  const queryClient =  new QueryClient()
   
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

export default Product_Provider
