import * as yup from "yup";
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"; 

export const TicketUploadForm = () => {
  const ticketUploadSchema = yup.object().shape({
    eventName: yup.string().required("Please input event name"),
    eventDate: yup.date().required("Please input event date"),
    eventTime: yup.date().required("Time is required"),
    ticketPrice: yup.date().required("Please provide ticket price"),
    eventLocation: yup.string().required("Please provide event location"),
    eventFlier: yup.mixed().required("Ticket image is required")
  })

  const { handleSubmit, register, formState: {errors}, } = useForm({
    resolver: yupResolver(ticketUploadSchema)
  });
  const uploadTicket = (data) => {
    console.log(data);
  }


    return (
      <form onSubmit={handleSubmit(uploadTicket)} className="bg-[#0A0B14] w-full h-fit px-4 rounded-md p-4">
        <div className="flex flex-col mb-5">
          <label className="text-[#ffaa00] text-md">Event</label>
          <input {...register('eventName')} className="border-[1px] text-[#ffaa00] border-[#ffaa00] bg-transparent outline-none p-2 rounded-md mt-3"></input>
          <span className="text-white h-4 mb-2 mt-1">{errors?.eventName?.message}</span>
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-[#ffaa00] text-md">Date</label>
          <input {...register('eventDate')} type="date" className="border-[1px] text-[#ffaa00] border-[#ffaa00] bg-transparent outline-none p-2 rounded-md mt-3"></input>
          <span className="text-white h-4 mb-2 mt-1">{errors?.eventDate?.message}</span>
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-[#ffaa00] text-md">Event Time</label>
          <input
          {...register("eventTime")}
            type="file"
            className="border-[1px] text-[#ffaa00] border-[#ffaa00] bg-transparent outline-none p-2 rounded-md mt-3"
          ></input>
          <span className="text-white h-4 mb-2 mt-1">{errors?.eventTime?.message}</span>
        </div>
        <div  className="flex flex-col mb-5">
          <label className="text-[#ffaa00] text-md">Ticket Price</label>
          <input
          {...register('ticketPrice')}
            type="text"
            className="border-[1px] text-[#ffaa00] border-[#ffaa00] bg-transparent outline-none p-2 rounded-md mt-3"
          ></input>
          <span className="text-white h-4 mb-2 mt-1">{errors?.ticketPrice?.message}</span>
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-[#ffaa00] text-md">Event Location</label>
          <input
          {...register('eventLocation')}
            type="text"
            className="border-[1px] text-[#ffaa00] border-[#ffaa00] bg-transparent outline-none p-2 rounded-md mt-3"
          ></input>
          <span className="text-white h-4 mb-2 mt-1">{errors?.eventLocation?.message}</span>
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-[#ffaa00] text-md">Event Poster</label>
          <input
          {...register("eventFlier")}
            type="file"
            className="border-[1px] text-[#ffaa00] border-[#ffaa00] bg-transparent outline-none p-2 rounded-md mt-3"
          ></input>
          <span className="text-white h-4 mb-2 mt-1">{errors?.eventFlier?.message}</span>
        </div>
        <div className="w-full flex justify-end">
          <button className="bg-[#ffaa00] px-6 py-2 rounded-md " type="submit">
            Upload
          </button>
        </div>
      </form>
    );
  };
  