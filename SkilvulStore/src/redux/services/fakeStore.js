import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const fakeStoreApi = createApi({
  reducerPath: "fakestore",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    products: builder.query({
      query: () => `products`,
    }),
  }),
});

export { fakeStoreApi };
export const { useProductsQuery } = fakeStoreApi;
