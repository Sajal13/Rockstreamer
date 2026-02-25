'use client';

import Button from "@/components/base/Button";
import { useState } from "react";

const Region = () => {
  const [region, setRegion] = useState('US')
  return (
    <select className="appearance-none">
      <option>value</option>
      <option>value</option>
      <option>value</option>
      <option>value</option>
    </select>
  )
}

export default Region;