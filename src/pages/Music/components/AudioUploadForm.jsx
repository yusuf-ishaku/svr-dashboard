import { useForm } from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import { useAddNewAudioMutation } from "../../../data/apiSlices/audioSlice";
import { useState } from "react";
import { getToken } from "../../utils/getToken";

export const AudioUploadForm = () => {
  const uploadSchema = yup.object().shape({
    trackName: yup.string().required("Track name is required"),
    artiste: yup.string().required("Artiste name is required"),
    audio: yup.mixed().required("Audio file is required"),
    audioCover: yup.mixed().required("Audio file is required"),
  });

  const {register, handleSubmit, formState: {errors}, reset}  = useForm({
    resolver: yupResolver(uploadSchema)
  });
  const [uploadAudio, {isLoading} ]  = useAddNewAudioMutation();
  const [audio, setAudio] = useState(null);
  const [cover, setCover] = useState(null);
  const [message, setMessage] = useState("");
  const token = getToken();
  
  const onSubmithandler = async (data) => {
    const uploadData = new FormData();
    uploadData.append("artiste", data.artiste);
    uploadData.append("title", data.trackName);
    uploadData.append("audio", audio);
    uploadData.append("image", cover);
   await uploadAudio({uploadData, token}).then((data) => {
    if(data.data){
      setMessage("Upload Sucessful");
      reset();
    }
    else{
      setMessage("Upload not successful, try again!")
    }
   });
  }

  return (
    <form onSubmit={handleSubmit(onSubmithandler)} className="bg-[#0A0B14] w-full h-fit px-4 rounded-md p-4">
      <div>
        <span className="text-white">{message}</span>
      </div>
      <div className="flex flex-col">
        <label className="text-[#ffaa00] text-md">Track Name</label>
        <input {...register("trackName")} className="border-[1px] text-[#ffaa00] border-[#ffaa00] bg-transparent outline-none p-2 rounded-md mt-1"></input>
        <span className="text-white h-4 mb-2 mt-1">{errors?.trackName?.message}</span>
      </div>
      <div className="flex flex-col mb-2">
        <label className="text-[#ffaa00] text-md">Artiste</label>
        <input {...register("artiste")} className="border-[1px] text-[#ffaa00] border-[#ffaa00] bg-transparent outline-none p-2 rounded-md mt-1"></input>
        <span className="text-white h-4 mb-2 mt-1">{errors?.artiste?.message}</span>
      </div>
      <div className="flex flex-col mb-2">
        <label className="text-[#ffaa00] text-md">Upload audio</label>
        <input
          {...register("audio")}
          onChange={(e) => setAudio(e.target.files[0])}
          type="file"
          required={true}
          className="border-[1px] text-[#ffaa00] border-[#ffaa00] bg-transparent outline-none p-2 rounded-md mt-1"
        ></input>
         <span className="text-white h-4 mb-2 mt-1">{errors?.audio?.message}</span>
      </div>
      <div className="flex flex-col mb-2">
        <label className="text-[#ffaa00] text-md">Upload Cover Image</label>
        <input
          {...register("audioCover")}
          onChange={(e) => setCover(e.target.files[0])}
          type="file"
          required={true}
          className="border-[1px] text-[#ffaa00] border-[#ffaa00] bg-transparent outline-none p-2 rounded-md mt-3"
        ></input>
         <span className="text-white h-4 mb-2 mt-1">{errors?.audioCover?.message}</span>
      </div>
      <div className="w-full flex justify-end">
        <button disabled={isLoading} className={`${isLoading && "cursor-not-allowed"} bg-[#ffaa00] px-6 py-2 rounded-md`} type="submit">
        {isLoading ? <span className="loader mx-6 my-auto"></span> : "Upload"}
        </button>
      </div>
    </form>
  );
};
