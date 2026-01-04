"use client";
import { useAppSelector } from '@/lib/hooks';
import { fetchData } from '@/service/get';
import React, { useEffect } from 'react'

export default function MyOrdersPage() {
    const { token } = useAppSelector((store) => store.token);
    useEffect(() => {
        if (!token) return;
    
        const getMyOrders = async () => {
          try {
            const response = await fetchData(
              `${process.env.NEXT_PUBLIC_URL}/client-orders/for-client`,
              {
                token,
              }
            );
            console.log(response);
          } catch (error) {
            console.error(error);
          }
        };
    
        getMyOrders();
      }, [token]);
  return (
    <div>my-orders</div>
  )
}
