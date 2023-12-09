import Logo from "../assets/logo.png";
// import './App.css';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import { useLoginUserMutation } from "../data/apiSlices/authApiSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function Auth() {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(32).required(),
  })
    const {register, handleSubmit, formState: {errors}, reset}  = useForm({
      resolver: yupResolver(schema)
    });
   
  const [ loginUser, {isLoading} ] = useLoginUserMutation();
    const onSubmithandler = async (data) => {
      // console.log(data);
      const response = await loginUser(data);
      console.log(response);
      
      if(response.data.code === 200) {
        localStorage.setItem("SVR_TOKEN", JSON.stringify(response.data.data.token));
        navigate("/home");
      }
      // console.log(responseData)
      reset();
    }
  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("SVR_TOKEN"));
    if(token) {
      navigate("/home");
    }
  })
  return (
    <section className='bg-[#0A0B14] w-[100vw] h-[100vh] flex flex-col items-center j'>
      <section className='border-[#FA0] border-[1px] w-[85%] md:w-[50%]  h-fit rounded-md pt-5 mt-20'>
        <header className="flex flex-col items-center justify-center">

          <img className="w-16 h-12" src={Logo}>
          </img>
          <h2 className='text-white'>Log In</h2>
        </header>
        <section>
        <form onSubmit={handleSubmit(onSubmithandler)} className="flex flex-col items-center mt-1 mx-5 justify-center w-auto ">
          <div className="flex flex-col w-full mb-4">
            <label  className="text-white text-sm mb-2">
              Email
            </label>
            <input {...register("email")} className="bg-transparent border-[#FA0] border-[1px] focus:outline-none text-white p-1 px-2 rounded-md" type="email">
            </input>
            <p className="text-red-600 h-4">{errors.email?.message}</p>
          </div>
          <div className="flex flex-col w-full mb-4">
            <label className="text-white text-sm mb-2">
              Password
            </label>
            <input {...register("password")} className="bg-transparent border-[#FA0] border-[1px] focus:outline-none text-white p-1 px-2 rounded-md" type="text">
            </input>
            <p className="text-red-600 h-4">{errors.password?.message}</p>
          </div>
          <div className="flex flex-col items-center w-full mb-4">
              <button disabled={isLoading}  className={`bg-[#fa0] flex flex-row items-center justify-center hover:bg-transparent hover:border-[#fa0] hover:border-[1px] text-white w-[100px] rounded-md px-4 py-2`}>
                {isLoading ? <div className="loader"></div>: "Log In"}
              </button>
          </div>
        </form>
        </section>
      </section>
    </section>
  )
}

