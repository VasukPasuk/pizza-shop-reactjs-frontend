import {useState} from 'react';
import {SIZE} from "../../../../typing/enums.tsx";
import {IAdditionalOption, ICategory, IPizza} from "../../../../redux/services/pizzaApi.ts";
import {AiFillHeart} from "react-icons/ai";
import {FaStar} from "react-icons/fa";
import {transformUpperCaseToLow} from "../../../../features/transformUpperCaseToLow.ts";

interface IProductDescriptionBox {
  pizza: Partial<IPizza>
  category: ICategory
  additionals: Partial<IAdditionalOption>[]
}

function ProductDescriptionBox({pizza, additionals, category}: IProductDescriptionBox) {
  const {available, description, discount, hot_stage, image, name, popular, rating} = pizza;
  const [currentSize, setCurrentSize] = useState<number>(1);
  const addOptionObject = additionals[currentSize] || undefined
  return (
    <>
      <div className="product_description__image-box">
        <div
          className="product_description__image-box__upper-bar"
        >
          <div>
            {/*<AiOutlineHeart/>*/}
            <AiFillHeart/>
          </div>
          <div>
            <FaStar/>
            <span>
            {rating}
          </span>
          </div>
        </div>
        <img loading={"lazy"} width={350} height={350} src={`${import.meta.env.VITE_SERVER_URL}/${image}`} alt=""/>
      </div>
      <div className="product_description__text-box">
        <h1>{name}</h1>
        <div className="product_description__tags-box">
          <div data-tag-type="discount" className="product_description__tag">
            - {discount} %
          </div>
          {popular && <div data-tag-type="popular" className="product_description__tag">
            Popular
					</div>}
          <div data-tag-type="hot" className="product_description__tag">
            {transformUpperCaseToLow(hot_stage)} hotness
          </div>
          <div data-tag-type="available" className="product_description__tag">
            {available ? "Available" : "Not available"}
          </div>
        </div>
        <div className="product_description__category-description-box">
          {category.description}
        </div>
        <div className="product_description__product-description-box">
          {description}
        </div>
      </div>
      {addOptionObject && <div className="product_description__tabs-box">
        {Object.values(SIZE).map((size, index) => (
          <div
            key={size}
            className="product_description__select-size-tab"
            data-active-tab={index === currentSize}
            onClick={() => setCurrentSize(index)}
          >
            {size.charAt(0) + size.slice(1).toLowerCase()}
          </div>
        ))}
	    </div>}
      {addOptionObject && <div className="product_description__size-additional-box">
        <div className="addbox__info-box">
          <span>Calories</span>
          <span>{addOptionObject.calories} Cal</span>
        </div>
        <div className="addbox__info-box">
          <span>Weight</span>
          <span>{addOptionObject.weight} gr.</span>
        </div>
        <div className="addbox__info-box">
          <span>Price</span>
          <span>{addOptionObject.price}$</span>
        </div>
      </div>}
    </>
  )
}

export default ProductDescriptionBox