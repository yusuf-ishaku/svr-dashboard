import { IoMdAdd } from "react-icons/io";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { TicketUploadForm } from "./components/TicketUploadForm";
export const Tickets = () => {
  const [addTicketModalOpen, setAddTicketModalOpen] = useState(false);
  return (
    <>
      <section className="w-full h-[100vh] bg-[#101220]">
        {addTicketModalOpen && (
          <section className="w-9/12 h-full fixed bg-[#212121ab] pt-14 flex flex-row justify-center overflow-auto">
            <section className="bg-[#0A0B14] w-fit h-fit px-4 rounded-md p-4">
              <header className="flex flex-row items-center justify-between mb-5">
                <h1 className="text-[#ffaa00] text-xl">New Ticket</h1>
                <RxCross1
                  cursor={"pointer"}
                  onClick={() => setAddTicketModalOpen(false)}
                  color="red"
                />
              </header>
              <TicketUploadForm></TicketUploadForm>
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
        <section className="mt-10">
          <header>
            <h1 className="text-[#ffaa00] text-2xl">Tickets</h1>
          </header>
         
        </section>
      </section>
    </>
  );
};
