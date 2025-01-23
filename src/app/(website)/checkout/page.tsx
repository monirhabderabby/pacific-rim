
import React from 'react'
import OrderForm from "./_components/OrderForm"
import { PageHeader } from '@/components/shared/sections/page-header'


const page = () => {
  return (
    <div>
      <PageHeader
      title='Checkout'
      items={[
        {
          label : "Home",
          href : '/'
        },
        {
          label : "Checkout",
          href : ''
        }
      ]}
      />
      <OrderForm/>
    </div>
  )
}

export default page