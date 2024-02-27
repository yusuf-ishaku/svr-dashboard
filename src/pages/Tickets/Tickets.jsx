import { IoMdAdd } from "react-icons/io";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { TicketUploadForm } from "./components/TicketUploadForm";
import { useGetTicketQuery } from "../../data/apiSlices/ticketSlice";
export const Tickets = () => {
  const [addTicketModalOpen, setAddTicketModalOpen] = useState(false);
  const { data } = useGetTicketQuery();
  return (
    <>
      <section className="w-full h-[100vh] bg-[#101220] pb-40">
        {addTicketModalOpen && (
          <section className="w-full sm:w-9/12 h-full px-4 pr-9 pb-20 fixed bg-[#212121ab] overflow-y-scroll pt-14 flex flex-row justify-center ">
            <section className="bg-[#0A0B14] w-full h-fit px-4 rounded-md p-4">
              <header className="flex flex-row items-center justify-between mb-5">
                <h1 className="text-[#ffaa00] text-xl">New Ticket</h1>
                <RxCross1
                  cursor={"pointer"}
                  onClick={() => setAddTicketModalOpen(false)}
                  color="red"
                />
              </header>
              <section className="h-fit">
                <TicketUploadForm></TicketUploadForm>
              </section>
            </section>
          </section>
        )}
        <div className="flex flex-row gap-5 pt-10">
          <button
            onClick={() => setAddTicketModalOpen(true)}
            className="bg-[#152a47] text-white cursor-pointer w-full h-40 rounded-md flex flex-col items-center justify-center"
          >
            <IoMdAdd size={50}></IoMdAdd>
            <h2 className="text-2xl ">Add new ticket</h2>
          </button>
        </div>
        <section className="mt-10 pb-20">
          <header>
            <h1 className="text-[#ffaa00] text-2xl">Tickets</h1>
          </header>
          <article className=" flex flex-col justify-center items-center sm:grid grid-cols-2">
            {data?.data.map((x, y) => {
              return (
                <div
                  key={y}
                  className="flex flex-col items-center mr-10 my-2 md:my-10 p-6 w-fit md:w-[20rem] h-fit border-[1px] rounded-lg border-[#FFAA0080] bg-[#6666661a]"
                >
                  <div className="w-full md:w-32 object-fit rounded-lg">
                    <img
                      className="object-fit rounded-lg"
                      src={
                        x.eventFlier
                          ? x.eventFlier
                          : "https://live.staticflickr.com/65535/52978370704_11a3f81fbd_m.jpg"
                      }
                      width="199"
                      height="166"
                      alt="Rectangle 19"
                    />
                  </div>
                  <div>
                    {x.tickets.map((x, y) => {
                      return (
                        <div key={y} className="text-center w-full bg-blue-600 rounded-md mb-2 mt-2 px-4 py-2">
                          <span className="text-[#ffaa00]">{x.tag}</span>
                          <span className="text-white block">Number bought: {x.amountBought}</span>
                          <span className="text-white block">Number left: {x.quantity - x.amountBought }</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </article>
        </section>
      </section>
    </>
  );
};
