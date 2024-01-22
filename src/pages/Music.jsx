import { IoMdAdd } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { FaHeadphonesAlt } from "react-icons/fa";
import { useGetAllAudiosQuery } from "../data/apiSlices/audioSlice";
import { RiDeleteBin6Line } from "react-icons/ri";
export const Music = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [audioModalOpen, setAudioModalOpen] = useState(false);
  const { data } = useGetAllAudiosQuery();
  console.log(data);
  return (
    <>
      <section className="w-[100%] h-auto bg-[#101220">
        {(audioModalOpen && (
          <section className="w-9/12 h-full fixed bg-[#212121ab] flex flex-row justify-center">
            <form className="bg-[#0A0B14] w-[40rem] h-fit px-4 rounded-md p-4">
              <header className="flex flex-row items-center justify-between mb-5">
                <h1 className="text-[#ffaa00] text-xl">Add new music audio</h1>
                <RxCross1
                  cursor={"pointer"}
                  onClick={() => setAudioModalOpen(false)}
                  color="#ffaa00"
                />
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
                <input
                  type="file"
                  className="border-[1px] text-[#ffaa00] border-[#ffaa00] bg-transparent outline-none p-2 rounded-md mt-3"
                ></input>
              </div>
              <div className="flex flex-col mb-5">
                <label className="text-[#ffaa00] text-md">
                  Upload Cover Image
                </label>
                <input
                  type="file"
                  className="border-[1px] text-[#ffaa00] border-[#ffaa00] bg-transparent outline-none p-2 rounded-md mt-3"
                ></input>
              </div>
              <div className="w-full flex justify-end">
                <button
                  className="bg-[#ffaa00] px-6 py-2 rounded-md "
                  type="submit"
                >
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
          <button
            onClick={() => setVideoModalOpen(true)}
            className="bg-[#252424] text-white cursor-pointer w-full h-40 rounded-md flex flex-col items-center justify-center"
          >
            <IoMdAdd size={50}></IoMdAdd>
            <h2 className="text-2xl ">Add new music video</h2>
          </button>
        </div>
        <section className="mt-10">
          <header>
            <h1 className="text-[#ffaa00] text-2xl">Audios</h1>
          </header>
          <article className="grid grid-cols-2">
            {data?.data.map((x, y) => {
              return (
                <div key={y} className="flex flex-col items-center mr-10 my-2 md:my-10 p-6 w-full md:w-[20rem] h-fit border-[1px] rounded-lg border-[#FFAA0080] bg-[#6666661a]">
                  <div className="w-1/4 md:w-32 object-fit rounded-lg">
                    <img
                      className="object-fit rounded-lg"
                      src={
                        x.imageUrl
                          ? x.imageUrl
                          : "https://live.staticflickr.com/65535/52978370704_11a3f81fbd_m.jpg"
                      }
                      width="199"
                      height="166"
                      alt="Rectangle 19"
                    />
                  </div>
                  <article className="flex flex-col justify-center items-center ml-4">
                    <h3 className="text-lg sm:text-2xl text-white leading-6">
                      {x.title}
                    </h3>
                    <h4 className="text-sm font-light text-white">{x.artiste}</h4>
                    <div className="flex flex-row items-center w-fit">
                      <div className="flex items-center mr-4">
                        <FaHeadphonesAlt color="white"></FaHeadphonesAlt>
                        <span className="text-white">{10}</span>
                      </div>
                      <div>
                      <RiDeleteBin6Line color="red" cursor={"pointer"} />
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </article>
        </section>
      </section>
    </>
  );
};
