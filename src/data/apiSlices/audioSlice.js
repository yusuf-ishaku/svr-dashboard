import { appApi } from "./api";
const audioApiSlice = appApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAudios: builder.query({
      query: () => ({
        url: "/api/v1/audio",
        method: "GET",
      }),
      providesTags: ["Audio"],
    }),
    addNewAudio: builder.mutation({
      query: (data) => ({
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
        url: "/api/v1/audio",
        method: "POST",
        body: data.uploadData,
      }),
      invalidatesTags: ["Audio"],
    }),
    deleteAudio: builder.mutation({
      query: (id) => ({
        url: `/api/v1/audio/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Audio"]
    }),
  }),
});

export const { useGetAllAudiosQuery, useAddNewAudioMutation, useDeleteAudioMutation } = audioApiSlice;