"use client"
import axios from "axios"
import { PrismaClient } from "@/prisma/prisma-client"
import { useRef } from "react"
import { useRouter } from "next/navigation"



export default function  Signup(){

  

const emailref=useRef(null);
const usernameref=useRef(null);
const passwordref=useRef(null);
const router= useRouter()
 


async function  submithandler(){
     

    const res= await  axios.post("/api/signup",{

        //@ts-ignore
        email:emailref.current?.value,
         //@ts-ignore
        username:usernameref.current?.value,
         //@ts-ignore
        password:passwordref.current?.value

    })

    router.push("/api/auth/signin")
  
}





    return <div className=" flex justify-center  items-center">

         <div className="bg-gray-700 flex flex-col justify-center items-center w-[500px] h-[500px]">
 
        <div className="   text-black "><input ref={emailref} type="text" className="bg-white text-black" placeholder="email" /></div>
        <div><input  ref={usernameref} type="text" className=" text-white" placeholder="username" /></div>
        <div><input  ref={passwordref}type="text" className=" text-white" placeholder="password" /> </div>
 
           <button  onClick={submithandler}> submit</button>


         </div>


        
    </div>
}