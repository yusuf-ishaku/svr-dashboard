export const VideoUploadForm = () => {
    return (
      <form className="bg-[#0A0B14]  w-full h-fit px-4 rounded-md p-4">
        <div className="flex flex-col mb-5">
          <label className="text-[#ffaa00] text-md">URL:</label>
          <input className="border-[1px] text-[#ffaa00] border-[#ffaa00] bg-transparent outline-none p-2 rounded-md mt-3"></input>
        </div>
        <div className="w-full flex justify-end">
          <button className="bg-[#ffaa00] px-6 py-2 rounded-md " type="submit">
            Upload
          </button>
        </div>
      </form>
    );
  };
  