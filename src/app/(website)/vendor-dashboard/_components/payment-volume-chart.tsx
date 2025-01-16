"use client"

import { useState } from "react"
import { Line, LineChart, XAxis, YAxis, CartesianGrid } from "recharts"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface DataPoint {
  month: string
  volume: number
}

type YearData = Record<string, DataPoint[]>

// Generate random data for different years
const generateYearData = (): DataPoint[] => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return months.map(month => ({
    month,
    volume: Math.round((20 + Math.random() * 40) * 100) / 100
  }))
}

// Create data for multiple years
const yearData: YearData = {
  "2022": generateYearData(),
  "2023": generateYearData(),
  "2024": generateYearData(),
  "2025": generateYearData()
}

export default function PaymentVolumeChart() {
  const [selectedYear, setSelectedYear] = useState<string>("2025")

  return (
    <Card className="w-full col-span-4">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className=" text-[#494949] text-[28px] font-semibold">Total Payment Volume</CardTitle>
        <Select
          value={selectedYear}
          onValueChange={setSelectedYear}
        >
          <SelectTrigger className="w-[80px] rounded-[8px] bg-[#15803d] text-white focus:ring-0">
            <SelectValue>{selectedYear}</SelectValue>
          </SelectTrigger>
          <SelectContent className="text-[12px]">
            <SelectItem value="2022">2022</SelectItem>
            <SelectItem value="2023">2023</SelectItem>
            <SelectItem value="2024">2024</SelectItem>
            <SelectItem value="2025">2025</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent >
        <ChartContainer
          config={{
            volume: {
              label: "Volume",
              color: "hsl(142, 76%, 36%)", // Green color matching the image
            },
          }}
          className="h-[350px] w-full"
        >
          <LineChart
            data={yearData[selectedYear]}
            margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
          
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fill: '#666' }}
            />
            <YAxis
              className="pl-5"
              tickLine={false}
              axisLine={false}
              tick={{ fill: '#666' }}
              tickFormatter={(value: number) => `${value.toFixed(2)}`}
              ticks={[0, 20, 40, 60, 80, 100]} // Specify custom tick values
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line
              type="monotone"
              dataKey="volume"
              stroke="var(--color-volume)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

