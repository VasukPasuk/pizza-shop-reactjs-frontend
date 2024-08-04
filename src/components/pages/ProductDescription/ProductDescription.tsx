import {Link, useParams} from "react-router-dom";
import './style.scss';
import {useGetPizzaWithQuery} from "../../../redux/services/pizzaApi.ts";
import ProductDescriptionBox from "./Presentational/ProductDescriptionBox.tsx";
import ProductReviewsBox from "./Presentational/ProductReviewsBox.tsx";


const ErrorComponent = () => (
  <div className="product_description__error-container">
    Error...
  </div>
);

const LoadingComponent = () => (
  <div className="product_description__loading-container">
    Loading...
  </div>
);

function ProductDescription() {
  const {name} = useParams()
  const {data, error, isLoading} = useGetPizzaWithQuery({
    name: name as string,
    category: true,
    additional_options: true
  });

  if (error || !data) {
    return <ErrorComponent/>
  }
  if (isLoading) {
    return <LoadingComponent/>
  }

  const {category, additional_options, ...pizza} = data;

  if (!category || !additional_options) {
    return <ErrorComponent/>
  }

  return (
    <section id="product_description">
      <UpperBar/>
      <div className="product_description__content-box">
        <ProductDescriptionBox
          pizza={pizza}
          category={category}
          additionals={additional_options}
        />
        <ProductReviewsBox
          pizza_name={pizza.name}
        />
      </div>
    </section>
  )
}

export default ProductDescription

function UpperBar() {
  return (
    <div className="product_description__upper-bar">
      <Link to="/shop">
        Return to shop
      </Link>
      <div className="product_description__upper-bar__buttons-group">
        <button>
          Add to cart
        </button>
        <button>
          Add to favourites
        </button>
      </div>
    </div>
  )
}

