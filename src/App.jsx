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
function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  let token = () => {
    let info = JSON.parse(localStorage.getItem("SVR_CREDENTIALS"));
    return info;
  };
  useEffect(() => {
    console.log(token());
    if (token()) {
      return;
    } else {
      navigate("/auth/login");
    }
  }, [navigate]);
  console.log(pathname)
  return (
    <>
      {token() ? (
        <main className="w-[100vw] h-[100vh] flex flex-row bg-[#0A0B14]">
          <nav className="w-3/12 h-[100vh] flex-col flex justify-between">
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
          <section className="w-9/12 h-[100vh] bg-[#101220] p-4">
            <Outlet ></Outlet>
          </section>
        </main>
      ) : (
        <Splash></Splash>
      )}
    </>
  );
}

export default App;
