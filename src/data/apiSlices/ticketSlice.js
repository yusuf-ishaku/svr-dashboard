import { appApi } from "./api";

const ticketSlice = appApi.injectEndpoints({
  endpoints: (builder) => ({
    addTicket: builder.mutation({
      query: (data) => ({
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
        url: "/api/v1/ticket",
        method: "POST",
        body: data.uploadData,
      }),
    }),
    getTicket: builder.query({
      query: () => ({
        url: "/api/v1/ticket",
        method: "GET"
      })
    })
  }),
});

export const { useAddTicketMutation, useGetTicketQuery } = ticketSlice;
