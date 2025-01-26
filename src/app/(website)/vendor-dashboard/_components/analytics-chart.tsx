"use client";

import { useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChartContainer } from "@/components/ui/chart";

// Define the structure of a data item
interface DataItem {
  name: string;
  value: number;
  color: string;
}

// Define valid month keys
type MonthKey = "Nov" | "Dec" | "Jan";

// Month data object with proper typing
const monthData: Record<MonthKey, DataItem[]> = {
  Nov: [
    { name: "Sales", value: 65, color: "rgb(19,34,83)" },
    { name: "Pending", value: 15, color: "#DBB0E4" },
    { name: "Distribute", value: 20, color: "#7ABFFF" },
  ],
  Dec: [
    { name: "Sales", value: 50, color: "rgb(19,34,83)" },
    { name: "Pending", value: 25, color: "#DBB0E4" },
    { name: "Distribute", value: 25, color: "#7ABFFF" },
  ],
  Jan: [
    { name: "Sales", value: 70, color: "rgb(19,34,83)" },
    { name: "Pending", value: 20, color: "#DBB0E4" },
    { name: "Distribute", value: 10, color: "#7ABFFF" },
  ],
};

export default function AnalyticsChart() {
  // State with a typed key
  const [month, setMonth] = useState<MonthKey>("Nov");

  // Get data for the selected month
  const data = monthData[month];

  return (
    <Card className="w-full col-span-2">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7">
        <CardTitle className="text-gradient text-[28px] font-semibold">Analytics</CardTitle>
        <Select defaultValue={month} onValueChange={(value) => setMonth(value as MonthKey)}>
          <SelectTrigger className="w-[90px] bg-primary text-white focus:ring-0">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="  text-[12px] rounded-[8px]">
            <SelectItem value="Nov">Nov 24</SelectItem>
            <SelectItem value="Dec">Dec 24</SelectItem>
            <SelectItem value="Jan">Jan 25</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex flex-col items-center">
        

<ChartContainer config={{}} className="relative h-[218px] w-[222px]">
  <>
    <PieChart width={222} height={218}>
      <Pie
        data={data}
        cx={111}
        cy={109}
        innerRadius={60}
        outerRadius={80}
        dataKey="value"
        startAngle={90}
        endAngle={450}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
    </PieChart>
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <span className="text-4xl font-bold">{data[0]?.value}%</span>
      <span className="text-sm text-muted-foreground">Total sales</span>
    </div>
  </>
</ChartContainer>

        <div className="mt-4 flex justify-center gap-4">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm">{item.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
