import { useEffect } from "react";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export const Splash = () => {
    const navigate = useNavigate();
    useEffect(() => {
        let token = ()=> {
           let info = JSON.parse(localStorage.getItem("SVR_TOKEN"));
           return info
        };
        console.log(token())
       
        const tokenValidate = (token) => {
            if(!token) {
                navigate("/login")
            }else{
                navigate("/home")
            }
        }
        setTimeout(tokenValidate(token()), 5000)
    })

    return (
        <div className="w-[100vw] h-[100vh] flex flex-row items-center justify-center">
            <img src={Logo}>
            </img>
        </div>
    )
}