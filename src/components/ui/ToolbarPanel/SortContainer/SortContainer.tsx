import React, { useState, useEffect } from 'react';
import { SortOrder } from '../../../../typing/types.tsx';
import { useLocation, useNavigate } from 'react-router-dom';
import './style.scss';

interface IField {
  value: keyof IFields;
  label: string;
}

interface IFields {
  name: string;
  description: string;
  category_name: string;
  discount: string;
  rating: string;
  average_cooking_speed: string;
}

const fields: IField[] = [
  { value: 'rating', label: 'Rating' },
  { value: 'average_cooking_speed', label: 'Average cooking speed' },
  { value: 'category_name', label: 'Category' },
  { value: 'description', label: 'Description' },
  { value: 'discount', label: 'Discount' },
  { value: 'name', label: 'Name' },
];

const sortOrders: Record<SortOrder, string> = {
  asc: 'ASC',
  desc: 'DESC',
};

interface ISortContainerProps {
  closeModal: (state: boolean) => void;
}

const SortContainer: React.FC<ISortContainerProps> = ({ closeModal }) => {
  const [currentField, setCurrentField] = useState<keyof IFields | undefined>(undefined);
  const [currentOrder, setCurrentOrder] = useState<SortOrder>('desc');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentField) return;
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('order', currentOrder);
    searchParams.set('field', currentField);

    navigate(`../shop/?${searchParams.toString()}`);
  }, [currentField, currentOrder, location.search, navigate]);

  const handleFieldClick = (field: keyof IFields) => {
    setCurrentField(field);
    closeModal(false);
  };

  const handleOrderClick = (order: SortOrder) => {
    setCurrentOrder(order);
  };

  return (
    <ul className="sort-container">
      {fields.map((field) => (
        <li
          key={field.value}
          data-active={currentField === field.value}
          onClick={() => handleFieldClick(field.value)}
        >
          {field.label}
        </li>
      ))}
      <div data-type="separator" />
      {Object.entries(sortOrders).map(([key, value]) => (
        <li
          key={key}
          data-active={currentOrder === key}
          onClick={() => handleOrderClick(key as SortOrder)}
        >
          {value}
        </li>
      ))}
    </ul>
  );
};

export default SortContainer;
