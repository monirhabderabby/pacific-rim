'use client'

import { useState } from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Define the structure of our data
interface MonthlyData {
  month: string
  value: number
}

// Define the structure of our yearly data
type YearlyData = {
  [key: string]: MonthlyData[]
}

// Sample data - in a real app this would come from an API or database
const yearlyData: YearlyData = {
  "2024": [
    { month: "Jan", value: 45 },
    { month: "Feb", value: 68 },
    { month: "Mar", value: 90 },
    { month: "Apr", value: 68 },
    { month: "May", value: 78 },
    { month: "June", value: 40 },
    { month: "July", value: 85 },
    { month: "Aug", value: 52 },
    { month: "Sep", value: 72 },
    { month: "Oct", value: 35 },
    { month: "Nov", value: 95 },
    { month: "Dec", value: 48 },
  ],
  "2023": [
    { month: "Jan", value: 55 },
    { month: "Feb", value: 72 },
    { month: "Mar", value: 85 },
    { month: "Apr", value: 65 },
    { month: "May", value: 82 },
    { month: "June", value: 45 },
    { month: "July", value: 78 },
    { month: "Aug", value: 58 },
    { month: "Sep", value: 68 },
    { month: "Oct", value: 42 },
    { month: "Nov", value: 88 },
    { month: "Dec", value: 52 },
  ],
  "2022": [
    { month: "Jan", value: 50 },
    { month: "Feb", value: 65 },
    { month: "Mar", value: 80 },
    { month: "Apr", value: 60 },
    { month: "May", value: 75 },
    { month: "June", value: 42 },
    { month: "July", value: 70 },
    { month: "Aug", value: 55 },
    { month: "Sep", value: 65 },
    { month: "Oct", value: 40 },
    { month: "Nov", value: 85 },
    { month: "Dec", value: 50 },
  ],
}

export default function OrderRangeChart(): JSX.Element {
  const [selectedYear, setSelectedYear] = useState<string>("2024")

  return (
    <Card className="mx-auto">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-[#494949] text-[28px] font-semibold">Total Order Range</CardTitle>
       
        <Select
          value={selectedYear}
          onValueChange={setSelectedYear}
        >
          <SelectTrigger className="w-[90px] rounded-[8px] bg-[#15803d] text-white focus:ring-0 border-0">
            <SelectValue>{selectedYear}</SelectValue>
          </SelectTrigger>
          <SelectContent className="text-[12px]">
            {Object.keys(yearlyData).map((year) => (
              <SelectItem key={year} value={year}>{year}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>

      <CardContent>
        <ChartContainer
          config={{
            value: {
              color: "#2A6C2D",
            },
          }}
          className="h-[400px] w-full"
        >
          <BarChart
            data={yearlyData[selectedYear]}
            margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fill: '#666' }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: '#666' }}
              tickFormatter={(value: number) => `${value}.00`}
              ticks={[0, 20, 40, 60, 80, 100]}
            />
            <ChartTooltip
              content={<ChartTooltipContent />}
              cursor={{ fill: 'transparent' }}
            />
            <Bar
              dataKey="value"
              radius={[4, 4, 0, 0]}
              maxBarSize={50}
              fill="#2A6C2D"
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

