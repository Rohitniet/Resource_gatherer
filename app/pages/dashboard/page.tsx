"use client"
import ThumbnailCard from "@/components/Thubnail";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { signOut } from "next-auth/react";
import { useRef, useState } from "react";



export default function Dashboard(){

    const inputref = useRef<HTMLInputElement>(null);

 const [content,setcontent ]=useState(); 

    async function content_geter(){



        const res= await axios.post("/api/infogather",{
        
            subject:inputref.current?.value
        })

        console.log(res.data)
        


    }

    

    


    return <div>


{/* topbar */}
        <div className=" w-[100%] h-[100px] bg-black flex flex-row justify-end items-center">
            
        <div><Button size={"lg"} className="bg-blue-950" onClick={()=>signOut()}> signout</Button></div>

        </div>




        <div className="bg-gray-900 w-[100%] h-[700px] flex flex-col items-center ">


            <div className="flex  items-center">
                <div className="m-5"> <Input  ref={inputref}  placeholder="write the name of your topic " className="w-[450px] bg-white "></Input></div>


                <div> <Button onClick={()=>content_geter()} size = {"lg"}className="bg-blue-950" >search  </Button></div>
            </div>
           

            <div>
            <ThumbnailCard></ThumbnailCard>
        </div>
       



        </div>
        
       

    </div>
}