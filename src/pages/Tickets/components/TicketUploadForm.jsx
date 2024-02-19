import * as yup from "yup";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { IoMdAdd } from "react-icons/io";
import { yupResolver } from "@hookform/resolvers/yup";
import { TicketTagPoint } from "./TicketTagPoint";

export const TicketUploadForm = () => {
  // const [ticketCount, setTicketCount] = useState(1);
  const tagPointRef = useRef(null);
  const formRef = useRef(null);
  let [tagPointArray, setTagPointArray] = useState([
    {
      id: 0,
      tag: "",
      description: "",
      quantity: null,
      price: null,
    },
  ]);
  const ticketUploadSchema = yup.object().shape({
    eventName: yup.string().required("Please input event name"),
    eventDate: yup
      .date("Date type is required").typeError("This should be a date")
      .required("Please input event date"),
    eventTime: yup.date().typeError("This should be a date").required("Time is required"),
    eventLocation: yup.string().required("Please provide event location"),
    eventFlier: yup.mixed().required("Ticket image is required"),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ticketUploadSchema),
  });
  const uploadTicket = (data) => {
    console.log(data);
  };
  const eventFormSubmit = () => {
    let forms = Array.from(tagPointRef.current.children);
    forms.forEach((child) => {
      child.lastChild.click();
    });
    formRef.current.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    formRef.current.lastChild.click();
  };

  const removeTagPoint = (i) => {
    let resolvedTagPointArray = tagPointArray.filter((x) => x.id !== i);
    setTagPointArray(resolvedTagPointArray);
    console.log(tagPointArray);
    console.log(resolvedTagPointArray);
  };
  const setArrayData = (index, key, value) => {
    tagPointArray[index][key] = value;
    console.log(tagPointArray);
  
    setTagPointArray([...tagPointArray]);
  };
  return (
    <section className="bg-[#0A0B14] w-full h-fit px-4 rounded-md p-4">
      <form
        onSubmit={handleSubmit(uploadTicket)}
        className="bg-[#0A0B14] w-full h-fit rounded-md"
        ref={formRef}
      >
        <div className="flex flex-col mb-5">
          <label className="text-[#ffaa00] text-md">Event</label>
          <input
            {...register("eventName")}
            className="border-[1px] text-[#ffaa00] border-[#ffaa00] bg-transparent outline-none p-2 rounded-md mt-3"
          ></input>
          <span className="text-red-600 h-4 mb-2 mt-1">
            {errors?.eventName?.message}
          </span>
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-[#ffaa00] text-md">Event Poster</label>
          <input
            {...register("eventFlier")}
            type="file"
            className="border-[1px] text-[#ffaa00] border-[#ffaa00] bg-transparent outline-none p-2 rounded-md mt-3"
          ></input>
          <span className="text-red-600 h-4 mb-2 mt-1">
            {errors?.eventFlier?.message}
          </span>
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-[#ffaa00] text-md">Date</label>
          <input
            {...register("eventDate")}
            type="date"
            className="border-[1px] text-[#ffaa00] border-[#ffaa00] bg-transparent outline-none p-2 rounded-md mt-3"
          ></input>
          <span className="text-red-600 h-4 mb-2 mt-1">
            {errors?.eventDate?.message}
          </span>
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-[#ffaa00] text-md">Event Time</label>
          <input
            {...register("eventTime")}
            type="date"
            className="border-[1px] text-[#ffaa00] border-[#ffaa00] bg-transparent outline-none p-2 rounded-md mt-3"
          ></input>
          <span className="text-red-600 h-4 mb-2 mt-1">
            {errors?.eventTime?.message}
          </span>
        </div>
        <div className="flex flex-col mb-5">
          <label className="text-[#ffaa00] text-md">Event Location</label>
          <input
            {...register("eventLocation")}
            type="text"
            className="border-[1px] text-[#ffaa00] border-[#ffaa00] bg-transparent outline-none p-2 rounded-md mt-3"
          ></input>
          <span className="text-red-600 h-4 mb-2 mt-1">
            {errors?.eventLocation?.message}
          </span>
        </div>
        <button type="submit" className="bg-transparent text-red-600"></button>
      </form>
      <div className="flex flex-col mb-5">
        <div>
          <header className="flex flex-row items-center justify-between mb-4">
            <h1 className="text-[#ffaa00] text-xl">Tickets</h1>
            <button
              type="button"
              className="flex flex-row items-center px-4 py-2 rounded-md bg-[#ffaa00]"
              onClick={() => {
                setTagPointArray([
                  ...tagPointArray,
                  {
                    id: tagPointArray.length,
                    tag: "",
                    description: "",
                    quantity: 0,
                    price: 0,
                  },
                ]);
              }}
            >
              <IoMdAdd className="mr-2"></IoMdAdd>
              Add
            </button>
          </header>
          <div ref={tagPointRef}>
            {tagPointArray.map((x, y) => {
              return (
                <TicketTagPoint
                  key={y}
                  i={y}
                  description={x.description}
                  price={x.price}
                  tag={x.tag}
                  quantity={x.quantity}
                  id={x.id}
                  setArrayData={setArrayData}
                  removeTagPoint={removeTagPoint}
                ></TicketTagPoint>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end">
        <button
          onClick={eventFormSubmit}
          className="bg-[#ffaa00] px-6 py-2 rounded-md"
          type="button"
        >
          Upload
        </button>
      </div>
    </section>
  );
};
