import { appApi } from "./api";
let token = () => {
    let info = JSON.parse(localStorage.getItem("SVR_CREDENTIALS"));
    return info;
  };
let mytoken = token().split(" ")[0].trim();
console.log(mytoken);
const audioApiSlice = appApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllAudios: builder.query({
            query: () => ({
                url: "/api/v1/audio",
                method: "GET"
            })
        }),
        addNewAudio: builder.mutation({
            query: (data) => ({
                headers: {
                    Authorization: `Bearer ${mytoken}`
                },
                url: "/api/v1/audio",
                method: "POST",
                body: data.uploadData
            })
        })
    })
});

export const { useGetAllAudiosQuery, useAddNewAudioMutation } = audioApiSlice;