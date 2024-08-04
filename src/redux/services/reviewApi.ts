import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {TReviewPaginationQueryConfig} from "../../typing/types.tsx";
import {IReview} from "../../typing/interfaces.tsx";


export const reviewApi = createApi({
  reducerPath: 'reviewApi',
  baseQuery: fetchBaseQuery({baseUrl: `${import.meta.env.VITE_SERVER_URL}/api/`}),
  endpoints: (builder) => ({
    getPizzaReviews: builder.query<{items: IReview[], total: number}, TReviewPaginationQueryConfig>({
      query: ({withlength = true, page = 1, order = "asc", limit = 5, pizza_name, user = false}) => {
        return `review/?user=${user}&withlength=${withlength}&page=${page}&order=${order}&limit=${limit}${pizza_name ? `&pizza_name=${pizza_name}` : ''}`;
      },
    }),
  }),
})

export const {useLazyGetPizzaReviewsQuery} = reviewApi