import { IoMdAdd } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
export const Music = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [audioModalOpen, setAudioModalOpen] = useState(false);
  return (
    <>
      <section className="w-[100%] h-auto bg-[#101220]">
        {(audioModalOpen && (
          <section className="w-9/12 h-full fixed bg-[#212121ab] flex flex-row justify-center">
            <form className="bg-[#0A0B14] w-[40rem] h-fit px-4 rounded-md p-4">
                <header className="flex flex-row items-center justify-between mb-5">
                    <h1 className="text-[#ffaa00] text-xl">
                        Add new music audio
                    </h1>
                    <RxCross1 cursor={"pointer"} onClick={() => setAudioModalOpen(false)} color="#ffaa00" />
                </header>
              <div className="flex flex-col mb-5">
                <label className="text-[#ffaa00] text-md">Track Name</label>
                <input className="border-[1px] text-[#ffaa00] border-[#ffaa00] bg-transparent outline-none p-2 rounded-md mt-3"></input>
              </div>
              <div className="flex flex-col mb-5">
                <label className="text-[#ffaa00] text-md">Artiste</label>
                <input className="border-[1px] text-[#ffaa00] border-[#ffaa00] bg-transparent outline-none p-2 rounded-md mt-3"></input>
              </div>
              <div className="flex flex-col mb-5">
                <label className="text-[#ffaa00] text-md">Upload audio</label>
                <input type="file" className="border-[1px] text-[#ffaa00] border-[#ffaa00] bg-transparent outline-none p-2 rounded-md mt-3"></input>
              </div>
              <div className="flex flex-col mb-5">
                <label className="text-[#ffaa00] text-md">Upload Cover Image</label>
                <input type="file" className="border-[1px] text-[#ffaa00] border-[#ffaa00] bg-transparent outline-none p-2 rounded-md mt-3"></input>
              </div>
              <div className="w-full flex justify-end">
              <button className="bg-[#ffaa00] px-6 py-2 rounded-md " type="submit">
                Upload
              </button>
              </div>
             
            </form>
          </section>
        )) ||
          (videoModalOpen && <section className="bg-[#21212166]"></section>)}
        <div className="flex flex-row gap-5 mt-10">
        <button
          onClick={() => {
            setAudioModalOpen(true);
          }}
          className="bg-[#545454] text-white cursor-pointer w-full h-40 rounded-md flex flex-col items-center justify-center"
        >
          <IoMdAdd size={50}></IoMdAdd>
          <h2 className="text-2xl ">Add new music audio</h2>
        </button>
        <button onClick={() => setVideoModalOpen(true)} className="bg-[#252424] text-white cursor-pointer w-full h-40 rounded-md flex flex-col items-center justify-center">
          <IoMdAdd size={50}></IoMdAdd>
          <h2 className="text-2xl ">Add new music video</h2>
        </button>
        </div>
       
      </section>
    </>
  );
};
