import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { build } from "vite";

export const laravelschoolwayAPI = createApi({
    reducerPath:"api-laravel",

    baseQuery:fetchBaseQuery({
        baseUrl:""
    }),
    endpoints:(builder)=>({
        getbus:builder.query({query:()=>{"bus"}})
    })
})