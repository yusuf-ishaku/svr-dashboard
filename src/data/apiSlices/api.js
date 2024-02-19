import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const appApi = createApi({
    reducerPath: "appApi",
    baseQuery: fetchBaseQuery({
            baseUrl: "https://supervibesrecords.onrender.com"
    }),
    tagTypes: ["User", "Audio", "Videos", "Tickets"],
    endpoints: (builder) => ({}),
})