"use client"


import OverViewCard from './overViewCard'

export default function DashboardOverview() {

  // This could come from an API or database
  const metrics = [
    {
      title: "Total Earnings",
      amount: 300000.0,
      icon :"/assets/img/Icon1.png",
    },
    {
      title: "Total Order",
      amount: 60000.0,
      icon :"/assets/img/Icon4.png",
    },
    {
      title: "Total Provider",
      amount: 4000.0,
      icon :"/assets/img/Icon3.png",
    },
    {
      title: "Total Admin Fees",
      amount: 900000.0,
      icon :"/assets/img/Icon2.png",
    },
  ]

  return (
    <div className="flex   gap-[30px]">
      {metrics.map((metric) => (
        <OverViewCard 
        key={metric.title}
        title={metric.title}
        icon={metric.icon}
        amount={metric.amount}
        className=""
       />


      ))}
    
    </div>
  )
}

