import { appApi } from "./api";
const audioApiSlice = appApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllVideos: builder.query({
      query: () => ({
        url: "/api/v1/video",
        method: "GET",
      }),
      providesTags: ["Videos"],
    }),
    addNewVideo: builder.mutation({
      query: (data) => ({
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
        url: "/api/v1/video",
        method: "POST",
        body: data.uploadData,
      }),
      invalidatesTags: ["Videos"],
    }),
    deleteVideo: builder.mutation({
      query: (id) => ({
        url: `/api/v1/video/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Videos"]
    }),
  }),
});

export const { useAddNewVideoMutation, useDeleteVideoMutation, useGetAllVideosQuery} = audioApiSlice;