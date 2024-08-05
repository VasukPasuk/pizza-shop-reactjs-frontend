import {useEffect, useState} from 'react';
import './style.scss';
import Pagination from '../../ui/Pagination/Pagination.tsx';
import ShopCard from '../../ui/ShopCard/ShopCard.tsx';
import ToolbarPanel from '../../ui/ToolbarPanel/ToolbarPanel.tsx';
import CategoriesTabPanel from "../../ui/CategoriesTabPanel/CategoriesTabPanel.tsx";
import {useLazyGetManyPizzaQuery} from "../../../redux/services/pizzaApi.ts";
import {IPizza} from "../../../typing/interfaces.tsx";

const categories: string[] = ['All', 'Seafood', 'Vegetarian', 'Meat', 'Spicy'];

function ShopPage() {
  const [currentCategory, setCurrentCategory] = useState<string>("All")
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(26)
  const [pizzas, setPizzas] = useState<IPizza[]>([])
  const [getMany, {data, error, isLoading, isError, isUninitialized}] = useLazyGetManyPizzaQuery();

  useEffect(() => {
    getMany({category: currentCategory.toLowerCase(), limit: 8, order: "desc", page: 1, withlength: true})
  }, [currentCategory, getMany])
  useEffect(() => {
    if (!data || !data.items) return
    setPizzas(_ => data.items)
    setTotalPages(_ => data.total)
  }, [data])

  if (!data || isError) {
    return (
      <div>
        Error
      </div>
    )
  }

  return (
    <div id="shop-page__container">
      <ToolbarPanel/>
      <CategoriesTabPanel
        categories={categories}
        currentCategory={currentCategory}
        setCategoryFn={setCurrentCategory}
      />
      <div className="product-shop-cards__section">
        {pizzas.map((pizza) => (
          <ShopCard
            category={pizza.category_name}
            image={pizza.image}
            name={pizza.name}
            discount={pizza.discount}
            popular={pizza.popular}
            key={pizza.name}
          />
        ))}
      </div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} total={totalPages}/>
    </div>
  );
}

export default ShopPage;
