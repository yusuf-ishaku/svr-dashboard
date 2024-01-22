import { appApi } from "./api";

const audioApiSlice = appApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllAudios: builder.query({
            query: () => ({
                url: "/api/v1/audio",
                method: "GET"
            })
        })
    })
});

export const { useGetAllAudiosQuery } = audioApiSlice;