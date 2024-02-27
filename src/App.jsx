import { useEffect } from "react";
// import { Home } from "./pages/Home";
import { Splash } from "./pages/Splash";
import { Link, useNavigate,} from "react-router-dom";
import { Outlet } from "react-router-dom";
import SVR from "./assets/logo.png";
import { FaTicket, FaMusic } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { IoLogOut } from "react-icons/io5";
// import { ReactReduxContext } from "react-redux";
import { useLocation } from "react-router-dom";
import { getToken } from "./pages/utils/getToken";
function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const token = getToken();
  useEffect(() => {
    if (token) {
      navigate("/home");
      return;
    } else {
      navigate("/auth/login");
    }
  }, [navigate, token]);
  // console.log(pathname)
  return (
    <>
      {token ? (
        <main className="w-[100vw] h-[100vh] flex flex-row bg-[#0A0B14] fixed">
          <nav className="w-0 sm:w-3/12 h-[100vh] hidden sm:flex flex-col justify-between">
            <header className="flex flex-row items-center justify-start">
              <img src={SVR}></img>
              <h2 className="text-[#ffaa00] text-lg">Super Vibes Record</h2>
            </header>
            <ul className="w-full h-auto flex flex-col justify-start -mt-40">
              <Link to={"/home"}>
              <li className={`text-xl flex flex-row pl-5 items-center w-full h-20 cursor-pointer  ${pathname === "/home" ? "bg-[#ffaa00] text-white" : "text-[#ffaa00]"} `}>
                <AiFillHome className="mr-4"></AiFillHome>
                Home
              </li>
              </Link>
              <Link to={"/music"}>
              <li className={`text-xl flex flex-row pl-5 items-center w-full h-20 cursor-pointer  ${pathname === "/music" ? "bg-[#ffaa00] text-white" : "text-[#ffaa00]"}`}>
                <FaMusic className="mr-4"></FaMusic>
                Music
              </li>
              </Link>
             <Link to={"/tickets"}>
             <li className={`text-xl flex flex-row pl-5 items-center w-full h-20 cursor-pointer  ${pathname === "/tickets" ? "bg-[#ffaa00] text-white" : "text-[#ffaa00]"}`}>
                <FaTicket className="mr-4"></FaTicket>
                Tickets
              </li>
             </Link>
             
            </ul>
            <ul>
              <li className={`text-xl flex flex-row pl-5 items-center w-full h-20 cursor-pointer  ${pathname === "/logout" ? "bg-[#ffaa00] text-white" : "text-[#ffaa00]"}`}>
                <IoLogOut className="mr-4"></IoLogOut>
                Logout
              </li>
            </ul>
          </nav>
          <section className="w-[100vw] sm:w-9/12 h-[100vh] bg-[#101220] p-4 pt-0 overflow-y-auto">
            <Outlet ></Outlet>
          </section>
          <nav className="w-[100vw] fixed bottom-0 bg-[#101220]  h-fit sm:hidden flex px-4 flex-row items-center justify-center">
            <ul className="w-full flex flex-row justify-between items-center">
              <Link to={"/home"}>
              <li className={`text-xl flex flex-col pl-5 items-center justify-center w-full h-20 cursor-pointer  ${ !(pathname === "/home") ? " text-white" : "text-[#ffaa00]"} `}>
                <AiFillHome className="sm:mr-4"></AiFillHome>
                Home
              </li>
              </Link>
              <Link to={"/music"}>
              <li className={`text-xl flex flex-col pl-5 items-center justify-center w-full h-20 cursor-pointer  ${ !(pathname === "/music") ? " text-white" : "text-[#ffaa00]"}`}>
                <FaMusic className="sm:mr-4"></FaMusic>
                Music
              </li>
              </Link>
             <Link to={"/tickets"}>
             <li className={`text-xl flex flex-col pl-5 items-center justify-center w-full h-20 cursor-pointer  ${ !(pathname === "/tickets") ? " text-white" : "text-[#ffaa00]"}`}>
                <FaTicket className="sm:mr-4"></FaTicket>
                Tickets
              </li>
             </Link>
             <Link to={"/logout"}>
             <li className={`text-xl flex flex-col pl-5 items-center justify-center w-full h-20 cursor-pointer  ${ !(pathname === "/logout") ? " text-white" : "text-[#ffaa00]"}`}>
                <IoLogOut className="mr-4"></IoLogOut>
                Logout
              </li>
             </Link>
             
            </ul>
          </nav>
        </main>
      ) : (
        <Splash></Splash>
      )}
    </>
  );
}

export default App;
