
"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import { Rotate3D } from "lucide-react";

export default function Home() {

  const route= useRouter();



  return <div className="flex ">

    <div className="bg-gray-500 border rounded-b-3xl-2xl top-0 h-[100px] w-[100%]">


<div className="flex flex-row ">
 <div className="p-3"><Button  className=" p-5" onClick={()=>{route.push("/signup")}} >signup </Button></div> 
 <div  className="p-3"> <Button  className=" p-5" onClick={()=>{route.push("/api/auth/signin")}} >signin </Button></div>


</div>

    </div>

  
  </div>
   
}
