import React from 'react';
import './style.scss';
import {Link} from "react-router-dom";

interface ICategoriesTabPanelProps {
  setCategoryFn: React.SetStateAction<any>
  categories: string[]
  currentCategory: string
}

function CategoriesTabPanel(props: ICategoriesTabPanelProps) {
  const {categories, setCategoryFn, currentCategory} = props;
  return (
    <div className="category-tabs-bar">
      {categories.map((category) => (
        <Link
          to={`?category=${category.toLowerCase()}`}
          className="pill-tab-category"
          key={category}
          data-active-link={currentCategory === category}
          onClick={() => setCategoryFn(prevState => category)}
        >
          {category}
        </Link>
      ))}
    </div>
  )
}

export default CategoriesTabPanel;