/* eslint-disable react/prop-types */
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const TicketTagPoint = (props) => {
  const tagPointSchema = yup.object().shape({
    tag: yup.string().required("Ticket Tag is required"),
    description: yup.string().required("Ticket description is required"),
    quantity: yup.number().typeError("This should be a number").required("Quantity to be sold is required"),
    price: yup.number().typeError("This should be a number").required("Ticket price is required"),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(tagPointSchema),
  });

  const ticketSubmit = (data) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(ticketSubmit)}
      className="flex flex-col mb-1 border-[1px] border-[#ffaa00] p-2 rounded-lg mt-5"
    >
      <div className="flex flex-col mb-1">
        <label className="text-[#ffaa00] text-base">Ticket Tag</label>
        <input
          {...register("tag")}
          onChange={(e) => props.setArrayData(props.i, "tag", e.target.value)}
          placeholder="e.g. VVIP"
          type="text"
          value={props.tag}
          className="border-[1px] placeholder:text-[#ffaa00] text-[#ffaa00] border-[#ffaa00] bg-transparent outline-none p-1 rounded-md mt-3"
        ></input>
        <span className="text-red-600 h-fit mt-1">{errors.tag?.message}</span>
      </div>
      <div className="flex flex-col mb-1">
        <label className="text-[#ffaa00] text-base">Ticket Description</label>
        <input
          {...register("description")}
          onChange={(e) => props.setArrayData(props.i, "description", e.target.value)}
          placeholder="e.g. Table of three"
          type="text"
          value={props.description}
          className="border-[1px] placeholder:text-[#ffaa00] text-[#ffaa00] border-[#ffaa00] bg-transparent outline-none p-1 rounded-md mt-3"
        ></input>
        <span className="text-red-600 h-fit mt-1">
          {errors.description?.message}
        </span>
      </div>
      <div className="flex flex-col mb-3">
        <label className="text-[#ffaa00] text-base">Ticket Price</label>
        <input
          {...register("price")}
          onChange={(e) => props.setArrayData(props.i, "price", Number(e.target.value))}
          type="number"
          value={props.price}
          className="border-[1px] text-[#ffaa00] border-[#ffaa00] bg-transparent outline-none p-1 rounded-md mt-3"
        ></input>
        <span className="text-red-600 h-fit mt-1">{errors.price?.message}</span>
      </div>
      <div className="flex flex-col mb-5">
        <label className="text-[#ffaa00] text-base">Number to be sold</label>
        <input
          {...register("quantity")}
          onChange={(e) => props.setArrayData(props.i, "quantity", Number(e.target.value))}
          type="number"
          value={props.quantity}
          className="border-[1px] text-[#ffaa00] border-[#ffaa00] bg-transparent outline-none p-1 rounded-md mt-3"
        ></input>
        <span className="text-red-600 h-fit mt-1">
          {errors.quantity?.message}
        </span>
      </div>
      <button onClick={() => props.removeTagPoint(props.id)} type="button" className="bg-transparent text-red-600">Remove</button>
      <button type="submit" className="bg-transparent text-red-600"></button>
    </form>
  );
};