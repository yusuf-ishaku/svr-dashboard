import { useNavigate } from "react-router-dom"
import { clearToken } from "../utils/clearToken";

export const LogoutComponent = () => {
    const navigate = useNavigate();
    return (
        <main className="bg-[#101220] h-[100vh] w-full flex flex-col items-center mt-60">
            <div className="w-4/5 rounded-lg h-fit border-[#ffaa00] border-[1px] p-4">
                <span className="text-[#ffaa00]">Are you sure you want to log out?</span>
                <div className="w-full flex flex-row justify-between mt-10">
                    <button onClick={() => navigate("/home")} className="border-[#ffaa00] border-[1px] text-[#ffaa00] rounded-md px-6" >
                        No 
                    </button>
                    <button onClick={() => {clearToken(); navigate("/auth/login")}}  className="bg-red-600 px-6 rounded-md text-white">
                        Yes
                    </button>
                </div>
            </div>
        </main>
    )
}