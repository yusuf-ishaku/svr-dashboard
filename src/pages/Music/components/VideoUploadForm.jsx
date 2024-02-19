import { useForm } from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import { useState } from "react";
import { useAddNewVideoMutation } from "../../../data/apiSlices/videoSlice";
import { getToken } from "../../utils/getToken";


export const VideoUploadForm = () => {
  const [message, setMessage] = useState("");
    const uploadFormSchema = yup.object().shape({
        videoUrl: yup.string().required("Video Url is required")
    })
    const {register, handleSubmit, formState: {errors}, reset}  = useForm({
      resolver: yupResolver(uploadFormSchema)
    });
    const [uploadVideo, {isLoading}] = useAddNewVideoMutation();
    const token = getToken();
    const submitData = async (data) => {
      await uploadVideo({data, token}).then((data) => {
        if(data.data) {
          setMessage("Upload Sucessful");
          reset();
        }
        else{
          setMessage("Video not uploaded")
        }
      });
    }

    return (
      <form onSubmit={handleSubmit(submitData)} className="bg-[#0A0B14]  w-full h-fit px-4 rounded-md p-4">
         <div>
        <span className="text-white">{message}</span>
      </div>
        <div className="flex flex-col mb-5">
          <label className="text-[#ffaa00] text-md">URL:</label>
          <input {...register("videoUrl")} className="border-[1px] text-[#ffaa00] border-[#ffaa00] bg-transparent outline-none p-2 rounded-md mt-3"></input>
          <span className="text-white h-4 mb-2 mt-1">{errors?.trackName?.message}</span>
        </div>
        <div className="w-full flex justify-end">
        <button disabled={isLoading} className={`${isLoading && "cursor-not-allowed"} bg-[#ffaa00] px-6 py-2 rounded-md`} type="submit">
        {isLoading ? <span className="loader mx-6 my-auto"></span> : "Upload"}
        </button>
        </div>
      </form>
    );
  };
  