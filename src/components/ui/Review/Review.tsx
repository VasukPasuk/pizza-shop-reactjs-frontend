import './style.scss';
import {IReview} from "../../../typing/interfaces.tsx";

interface IReviewProps {
  review: IReview
}

function Review({review}: IReviewProps) {
  const {user} = review;

  return (
    <div className="review">
      <div className="review__head">
        <div className="review__head__left">
          <div className="review__login">
            {user?.login}
          </div>
          <div className="review__email">
            {user?.email}
          </div>
        </div>
        <div className="review__head__right">
          <div className="review__liked">
            {review.liked}
          </div>
          <div className="review__created-at">
            {review.created_at}
          </div>
        </div>
      </div>
      <div className="review__body">
        {review.text}
      </div>
      <div className="review__control">

      </div>
    </div>
  )
}

export default Review