import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {SIZE} from "../../typing/enums.tsx";
import {IAdditionalOption, IPizza, IPizzaResponse} from "../../typing/interfaces.tsx";
import {TPizzaPaginationQueryConfig, TQueriesConfig} from "../../typing/types.tsx";


export const pizzaApi = createApi({
  reducerPath: 'pizzaApi',
  baseQuery: fetchBaseQuery({baseUrl: `${import.meta.env.VITE_SERVER_URL}/api/`}),
  endpoints: (builder) => ({
    getPizzaByName: builder.query<IPizzaResponse, string>({
      query: (name) => `pizza/${name}`,
    }),

    getPizzaWithCategory: builder.query<IPizzaResponse, string>({
      query: (name) => `pizza/${name}/?category=true`,
    }),

    getPizzaWith: builder.query<IPizzaResponse, TQueriesConfig>({
      query: ({name, category = false, Review = false, additional_options = false}) => {
        return `pizza/${name}/?category=${category}&Review=${Review}&additional_options=${additional_options}`;
      },
    }),

    getAdditionalOptionsOfPizza: builder.query<IAdditionalOption, { name: string, size: SIZE }>({
      query: ({name, size}) => `pizza/${name}/additional/${size}`
    }),

    getManyPizza: builder.query<{ items: IPizza[], total: number }, TPizzaPaginationQueryConfig>({
      query: ({category = "all", limit = 8, order = "desc", page = 1, withlength = true}) => {
        return `pizza/?category=${category}&order=${order}&page=${page}&limit=${limit}&withlength=${withlength}`
      },
    }),
  }),
})

export const {useGetPizzaWithQuery, useLazyGetManyPizzaQuery} = pizzaApi