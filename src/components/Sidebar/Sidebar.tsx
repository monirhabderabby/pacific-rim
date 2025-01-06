'use client'

import { Slider } from "@/components/ui/slider"
import { useState } from "react"
const Sidebar = () => {
    const [priceRange, setPriceRange] = useState([0, 789])
  return (
    <aside className="space-y-8 bg-green-100 p-5 ">
    <div className="rounded-lg bg-gray-50 p-6">
      <h2 className="mb-4 text-lg font-semibold text-green-800">Filter by Price</h2>
      <Slider
        defaultValue={priceRange}
        max={789}
        min={0}
        step={1}
        onValueChange={setPriceRange}
        className="mb-4"
      />
      <div className="flex justify-between gap-4">
        <input
          type="number"
          value={priceRange[0]}
          className="w-24 rounded border p-2 text-sm"
          readOnly
        />
        <input
          type="number"
          value={priceRange[1]}
          className="w-24 rounded border p-2 text-sm"
          readOnly
        />
      </div>
    </div>

    <div>
      <h2 className="mb-4 text-lg font-semibold text-green-800 ">Shop by Flowers</h2>
      <ul className="space-y-2">
        {['Indica', 'Sativa', 'Hybrid'].map((category) => (
          <li key={category}>
            <button className="text-gray-600 hover:text-green-800">{category}</button>
          </li>
        ))}
      </ul>
    </div>

    <div>
      <h2 className="mb-4 text-lg font-semibold text-green-800 ">Categories</h2>
      <ul className="space-y-2">
        {[
          'Flower',
          'Topicals',
          'Apprel',
          'Edibles',
          'Vape Products',
          'Concentrations'
        ].map((category) => (
          <li key={category}>
            <button className="text-gray-600 hover:text-green-800">{category}</button>
          </li>
        ))}
      </ul>
    </div>
  </aside>
  )
}

export default Sidebar