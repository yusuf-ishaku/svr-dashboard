import { useNavigate } from "react-router-dom";
import { FaHeadphonesAlt } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { useState, useEffect } from "react";
export const Home = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  // const { pathname } = useLocation();
  let token = () => {
    let info = JSON.parse(localStorage.getItem("SVR_CREDENTIALS"));
    return info;
  };
  useEffect(() => {
    console.log(token());
    if (token()) {
      const usernameVal = token().split(" ")[1];
      setUsername(usernameVal);
      return;
    } else {
      navigate("/auth/login");
    }
  }, [navigate]);
  return (
    <>
      <section className="w-full h-auto bg-[#101220] p-4">
        <nav className="h-20 flex flex-row justify-between items-center mr-10">
          <header className="flex flex-row justify-between">
            <h1 className="text-[#ffaa00] text-3xl">Welcome back, {username}</h1>
          </header>
          <div className="flex flex-row items-center">
          <IoMdNotifications color="#ffaa00" size={40} />
            <div className="w-12 h-12 rounded-full ml-4 bg-[#ffaa00]">
            </div>
          </div>
        </nav>
        <section className="w-fit grid grid-cols-3 gap-5 pt-8">
            <div className="bg-[#ffaa0059] text-[#e3d7d7] h-40 w-80 rounded-lg flex flex-col items-center justify-center">
                <FaHeadphonesAlt size={60}></FaHeadphonesAlt>
                <h3>
                Total Number of Plays
                </h3>
                <span>
                30
                </span>
               
            </div>
            <div className="bg-[#0037ff59] text-[#e3d7d7] h-40 w-80 rounded-lg flex flex-col items-center justify-center">
                <FaChartLine size={60}></FaChartLine>
                <h3>
                 Most played Song
                </h3>
                <span>
                 Only By Montala Jay
                </span>
               
            </div>
            <div className="bg-[#0037ff59] text-[#e3d7d7] h-40 w-80 rounded-lg flex flex-col items-center justify-center">
                <FaChartLine size={60}></FaChartLine>
                <h3>
                 Most played Song
                </h3>
                <span>
                 Only By Montala Jay
                </span>
               
            </div>
        </section>
      </section>
    </>
  );
};
