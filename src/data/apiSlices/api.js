import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const appApi = createApi({
    reducerPath: "appApi",
    baseQuery: fetchBaseQuery({
            baseUrl: "http://localhost:3001"
    }),
    tagTypes: ["User", "Audio", "Videos", "Tickets"],
    endpoints: (builder) => ({}),
})