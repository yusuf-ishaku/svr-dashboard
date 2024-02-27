import { IoMdAdd } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { FaHeadphonesAlt } from "react-icons/fa";
import { useDeleteAudioMutation, useGetAllAudiosQuery } from "../../data/apiSlices/audioSlice";
import { AudioUploadForm } from "./components/AudioUploadForm";
import { VideoUploadForm } from "./components/VideoUploadForm";
import { RiDeleteBin6Line } from "react-icons/ri";
export const Music = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [audioModalOpen, setAudioModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [soundToDelete, setSoundToDelete] = useState("");
  const [ soundToDeleteId, setSoundToDeleteId] = useState("");
  const { data } = useGetAllAudiosQuery();
  const [deleteAudio, {isLoading, isSuccess}] = useDeleteAudioMutation();
  console.log(data);

  function deleteSound(sound, id) {
    console.log(id)
    setDeleteModalOpen(true);
    setSoundToDelete(sound);
    setSoundToDeleteId(id);
  }
  
 
  return (
    <>
      <section className="w-[100%] h-auto bg-[#101220] pb-20 overflow-y-scroll">
        {audioModalOpen && (
          <section className="w-full px-4 pr-9 sm:w-9/12 h-full fixed bg-[#212121ab]  overflow-y-scroll pt-14 flex flex-row justify-center">
            <section className="bg-[#0A0B14] w-full h-fit px-4 rounded-md p-4">
              <header className="flex flex-row items-center justify-between mb-5">
                <h1 className="text-[#ffaa00] text-xl">Add new music audio</h1>
                <RxCross1
                  cursor={"pointer"}
                  onClick={() => setAudioModalOpen(false)}
                  color="red"
                />
              </header>
              <AudioUploadForm></AudioUploadForm>
            </section>
          </section>
        )}
        {videoModalOpen && <section className="w-full sm:w-9/12 px-4 pr-9 h-full fixed bg-[#212121ab]  overflow-y-scroll pt-14 flex flex-row justify-center">
            <section className="bg-[#0A0B14] w-full h-fit px-4 rounded-md p-4">
              <header className="flex flex-row items-center justify-between mb-5">
                <h1 className="text-[#ffaa00] text-xl">Add new music video</h1>
                <RxCross1
                  cursor={"pointer"}
                  onClick={() => setVideoModalOpen(false)}
                  color="red"
                />
              </header>
              <section className="h-fit">
              <VideoUploadForm></VideoUploadForm>
              </section>
            </section>
          </section>}
        {deleteModalOpen && (
          <section className="w-9/12 h-full fixed bg-[#212121ab] pt-40 flex flex-row justify-center">
            <section className="bg-[#0A0B14] w-fit h-fit px-4 rounded-md p-4">
              <header className="flex flex-row items-center justify-between mb-5">
                <h1 className="text-red-800 text-xl">Delete Sound</h1>
                <RxCross1
                  cursor={"pointer"}
                  onClick={() => setDeleteModalOpen(false)}
                  color="red"
                />
              </header>
              {
                isSuccess ? 
                <div className="bg-[#0A0B14] w-[40rem] h-fit px-4 rounded-md p-4">
                  <span className="text-white block mb-4">
                   Delete Successful!
                  </span>
                </div>
                :
                <div className="bg-[#0A0B14] w-[40rem] h-fit px-4 rounded-md p-4">
                <span className="text-white block mb-4">
                  Are you sure you want to delete this sound, {soundToDelete} ?
                </span>
                <button
                  className="bg-red-800 px-4 text-white py-1 rounded-md mr-4"
                  type="submit"
                  disabled={isLoading}
                  onClick={ async () => {
                    console.log(soundToDeleteId);
                    await deleteAudio(soundToDeleteId);
                    if (isSuccess) {
                      setDeleteModalOpen(false);
                    }
                  }}
                >
                 {isLoading ? <span className="loader2"></span> : "Yes, sure"}
                </button>
                <button
                  className="border-red-800 border-[1px] text-white px-4 py-1 rounded-md "
                  type="submit"
                  disabled={isLoading}
                  onClick={() => setDeleteModalOpen(false)}
                >
                  No.
                </button>
              </div>
              }
              
            </section>
          </section>
        )}
        <div className="flex flex-col md:flex-row gap-5 pt-10">
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
          <article className=" flex flex-col justify-center items-center sm:grid grid-cols-2">
            {data?.data.map((x, y) => {
              return (
                <div
                  key={y}
                  className="flex flex-col items-center mr-10 my-2 md:my-10 p-6 w-fit md:w-[20rem] h-fit border-[1px] rounded-lg border-[#FFAA0080] bg-[#6666661a]"
                >
                  <div className="w-1/4 md:w-full object-fit rounded-lg">
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
                    <h4 className="text-sm font-light text-white">
                      {x.artiste}
                    </h4>
                    <div className="flex flex-row items-center w-fit">
                      <div className="flex items-center mr-4">
                        <FaHeadphonesAlt color="white"></FaHeadphonesAlt>
                        <span className="text-white">{10}</span>
                      </div>
                      <div>
                        <RiDeleteBin6Line
                          onClick={() => deleteSound(`${x.title} by ${x.artiste}`, x._id)}
                          color="red"
                          cursor={"pointer"}
                        />
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
