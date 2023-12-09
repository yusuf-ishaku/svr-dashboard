import Logo from "./assets/logo.png"
import './App.css'

function App() {
  
  return (
    <section className='bg-[#0A0B14] w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
      <section className='border-[#FA0] border-[1px] w-[70%]  h-[80%] rounded-md pt-5'>
        <header className="flex flex-col items-center justify-center">

          <img className="w-16 h-12" src={Logo}>
          </img>
          <h2 className='text-white'>Log In</h2>
        </header>
        <section>
        <form className="flex flex-col items-center mt-10 mx-5 justify-center w-auto ">
          <div className="flex flex-col w-full mb-4">
            <label  className="text-white text-sm mb-2">
              Username
            </label>
            <input className="bg-transparent  w-full border-[#FA0] border-[1px] focus:outline-none text-white p-1 px-2 rounded-md" type="text">
            </input>
          </div>
          <div className="flex flex-col w-full mb-4">
            <label  className="text-white text-sm mb-2">
              Email
            </label>
            <input className="bg-transparent border-[#FA0] border-[1px] focus:outline-none text-white p-1 px-2 rounded-md" type="email">
            </input>
          </div>
          <div className="flex flex-col w-full mb-4">
            <label className="text-white text-sm mb-2">
              Password
            </label>
            <input className="bg-transparent border-[#FA0] border-[1px] focus:outline-none text-white p-1 px-2 rounded-md" type="text">
            </input>
          </div>
        </form>
        </section>
      </section>
    </section>
  )
}

export default App
