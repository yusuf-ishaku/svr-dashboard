import { ticketUploadSchema } from "../utils/ticketUploadSchema";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { IoMdAdd } from "react-icons/io";
import { yupResolver } from "@hookform/resolvers/yup";
import { TicketTagPoint } from "./TicketTagPoint";
import { eventFormSubmit } from "../utils/submitForm";
import { useAddTicketMutation } from "../../../data/apiSlices/ticketSlice";
import { getToken } from "../../utils/getToken";

export const TicketUploadForm = () => {
  let ticketsFormsReady = [];
  const tagPointRef = useRef(null);
  const [eventFlier, setEventFlier] = useState(null)
  const formRef = useRef(null);
  let [tagPointArray, setTagPointArray] = useState([
    {
      id: 0,
      tag: "",
      description: "",
      quantity: "",
      price: "",
    },
  ]);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ticketUploadSchema),
  });
  const [addTicket, { isLoading, isSuccess }] = useAddTicketMutation();
  const uploadTicket = async (data) => {
    if (ticketsFormsReady.length === tagPointArray.length && data) {
      // eslint-disable-next-line no-unused-vars
      let newTagPointArray = tagPointArray.map(({id,...rest}) => ({...rest, amountBought: 0}));
      // console.log(newTagPointArray)
      let uploadData = new FormData();
      uploadData.append("eventName", data.eventName);
      uploadData.append("eventDate", data.eventDate);
      uploadData.append("eventFlier", eventFlier);
      uploadData.append("eventLocation", data.eventLocation);
      uploadData.append("eventTime", data.eventTime);
      uploadData.append("tickets", JSON.stringify([...newTagPointArray]));
      const token = getToken();
      let res = await addTicket({ uploadData, token});
      console.log(res);
    }
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
  const ticketFormsGo = (value) => {
    ticketsFormsReady = [...ticketsFormsReady, value];
  };

  return (
    <section className="bg-[#0A0B14] w-full h-fit px-4 rounded-md p-4">
      { !isSuccess ? (
        <>
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
                onChange={(e) => setEventFlier(e.target.files[0])}
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
            <button
              type="submit"
              className="bg-transparent text-red-600"
            ></button>
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
                        quantity: null,
                        price: null,
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
                      ticketFormsReady={ticketFormsGo}
                    ></TicketTagPoint>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <button
              disabled={isLoading || isSuccess}
              onClick={() => eventFormSubmit(tagPointRef, formRef)}
              className={`bg-[#ffaa00] px-6 py-2 rounded-md ${
                isLoading && "cursor-not-allowed"
              }`}
              type="button"
            >
              { isLoading ?<span className="loader3 mx-6 my-auto"></span> : "Upload"}
            </button>
          </div>
        </>
      ) : (
        <h1 className="text-white text-4xl">Upload successful</h1>
      )}
    </section>
  );
};
