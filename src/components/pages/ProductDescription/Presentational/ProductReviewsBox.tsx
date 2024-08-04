import {useEffect, useState} from "react";
import {useLazyGetPizzaReviewsQuery} from "../../../../redux/services/reviewApi.ts";
import {IReview} from "../../../../typing/interfaces.tsx";
import Review from "../../../ui/Review/Review.tsx";


interface IProductReviewsBox {
  pizza_name: string
}

function ProductReviewsBox(props: IProductReviewsBox) {
  const {pizza_name} = props;
  const [reviews, setReviews] = useState<IReview[]>([])
  const [getReviews, {data, isError}] = useLazyGetPizzaReviewsQuery();

  useEffect(() => {
    getReviews({withlength: true, page: 1, order: "asc", limit: 5, pizza_name: pizza_name, user: true})
  }, []);
  useEffect(() => {
    if (!data) return
    setReviews(prev => data.items)
  }, [data])

  if (!data) {
    return (
      <div>
        Error
      </div>
    )
  }

  return (
    <div className="product_description__reviews-box">
      <section className="product_description__reviews-box__upper-bar">
        <div className="product_description__reviews-box__upper-bar__label">
          Reviews
        </div>
        <div className="product_description__reviews-box__upper-bar__buttons-group">
          <div>
            Latest
          </div>
          <div>
            Popular
          </div>
        </div>
      </section>
      <section className="product_description__reviews-box__create-comment-form">
            <textarea name="" id="" rows={6} inputMode={"email"}>

            </textarea>
        <ul className="product_description__reviews-box__create-comment-form__buttons">
          <li>
            Post review
          </li>
          <li>
            Clear
          </li>
        </ul>
      </section>
      <section className="product_description__reviews-box__comments-container">
        {!reviews.length && (
          <div className="no-comments-wrapper">
            No comments
          </div>
        )}
        {reviews.map((review) => (
          <Review review={review} key={review.id}/>
        ))}
      </section>
    </div>
  )
}

export default ProductReviewsBox