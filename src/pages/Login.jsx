import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()

  const handelLogin=async(e)=>{
    e.preventDefault()
    try {
      const res=await axios.post('http://localhost:3001/auth/login',{email, password})
      if (res?.data?.success) {
        toast.success(res.data.message)
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate("/")
      }
        else{
        toast.error(res.data.message)
       
      }
      
    } catch (error) {
      console.log(error)
    }
  }



  return (

<section className="relative flex flex-wrap lg:h-screen lg:items-center">
  <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
    <div className="mx-auto max-w-lg text-center">
      <h1 className="text-2xl font-bold sm:text-3xl">Login To Your Account!</h1>

      <p className="mt-4 text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
        ipsa culpa autem, at itaque nostrum!
      </p>
    </div>

    <form onSubmit={handelLogin} action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
      <div>
        <label htmlFor="email" className="sr-only">Email</label>

        <div className="relative">
          <input
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
            type="email"
            className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter email"
          />

          
        </div>
      </div>

      <div>
        <label htmlFor="password" className="sr-only">Password</label>

        <div className="relative">
          <input
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
            type="password"
            className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter password"
          />

          
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          No account?
          <a className="underline" href="">Sign up</a>
        </p>

        <button
          type="submit"
          className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
        >
          Sign in
        </button>
      </div>
    </form>
  </div>

  <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
    <img
      alt="Welcome"
      src="https://images.unsplash.com/photo-1482053450283-3e0b78b09a70?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>
</section>
  )
}

export default Login
