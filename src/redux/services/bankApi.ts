import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Bank = {
  description: string;
  age: number;
  url: string;
  bankName: string;
};

export const bankApi = createApi({
  reducerPath: "bankList",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dev.obtenmas.com/catom/api/",
  }),
  endpoints: (builder) => ({
    getList: builder.query<Bank[], null>({
      query: () => "challenge/banks",
    }),
  }),
});

export const { useGetListQuery } = bankApi;
