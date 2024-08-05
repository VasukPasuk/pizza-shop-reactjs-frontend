import React, {useState} from 'react';
import './style.scss';
import {SortOrder} from "../../../../typing/types.tsx";

interface IFields {
  name: string
  description: string
  category_name: string
  discount: string
  rating: string
  average_cooking_speed: string
}

const FIELDS = {
  rating: "Rating",
  average_cooking_speed: "Average cooking speed",
  category_name: "Category",
  description: "Description",
  discount: "Discount",
  name: "Name"
}

function SortContainer() {
  const [currentField, setCurrentField] = useState<keyof IFields | undefined>(undefined)
  const [currentOrder, setCurrentOrder] = useState<SortOrder>("desc")

  return (
    <ul className="sort-container">
      {Object.entries(FIELDS).map(([key, value]) => (
        <li data-active={currentField === key} onClick={() => setCurrentField(key as keyof IFields)} key={key}>
          {value}
        </li>
      ))}
    </ul>
  )
}

export default SortContainer