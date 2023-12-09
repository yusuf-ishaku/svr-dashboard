import { appApi } from "./api";

export const userApiSlice = appApi.injectEndpoints({
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (data) => ({
                url: "/api/v1/auth/login",
                method: 'POST',
                body: data,
                
            }),
            invalidatesTags: ["User"]
        })
    })
})

export const { useLoginUserMutation } = userApiSlice;