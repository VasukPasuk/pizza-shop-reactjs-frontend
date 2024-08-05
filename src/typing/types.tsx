export type Theme = 'dark' | 'light';

export type Size = 'small' | 'medium' | 'big';

export type Flour = 'thin' | 'thick';

export type HotStage = 'low' | 'medium' | 'high';

export type OrderStatus = 'pending' | 'process' | 'fulfilled';

export type CaloriesStage = 'low' | 'medium' | 'high';

export type Role = "ADMIN" | "CUSTOMER"

export type SortOrder = 'asc' | 'desc'


export type TPaginationQueryConfig = {
  limit: number
  order: SortOrder
  page: number
}

export type TQueriesConfig = {
  name: string
  category?: boolean,
  Review?: boolean,
  additional_options?: boolean
}

export type TPizzaPaginationQueryConfig = {
  category: string
  withlength: boolean
} & TPaginationQueryConfig

export type TReviewPaginationQueryConfig = {
  pizza_name: string
  withlength: boolean
  user: boolean
} & TPaginationQueryConfig