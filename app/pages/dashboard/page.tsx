"use client";

import ThumbnailCard from "@/components/Thubnail";
import { BlogCard } from "@/components/ui/Blog_card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";

import { SessionProvider, signOut, useSession } from "next-auth/react";
import { useRef, useState } from "react";

export default function Dashboard() {
  const inputref = useRef<HTMLInputElement>(null);

 const { data: session, status } = useSession();
 

  const [content, setcontent] = useState();

  

  async function content_geter() {
    const res = await axios.post("/api/infogather", {
      q: inputref.current?.value,
    });

    console.log(res.data);

    ///@ts-ignore see what is happening 
    setcontent(res.data)
  }

  return (
     <SessionProvider>
    <div>
      <div className=" w-[100%] h-[100px] bg-black flex flex-row justify-end items-center">
        <div>
          <Button size={"lg"} className="bg-blue-950" onClick={() => signOut()}>
            {" "}
            signout
          </Button>
        </div>
      </div>
      

      <div className="bg-gray-900 w-[100%] h-[1000px] flex flex-col items-center ">
        <div className="flex  items-center">
          <div className="m-5">
            {" "}
            <Input
              ref={inputref}
              placeholder="write the name of your topic "
              className="w-[450px] bg-white "
            ></Input>
          </div>

          <div>
            {" "}
            <Button
              onClick={() => content_geter()}
              size={"lg"}
              className="bg-blue-950"
            >
              search{" "}
            </Button>
          </div>


          
        </div>

        <div className="bg-black p-5 w-[100%] h-[400px] flex text-white">


            {
               //@ts-ignore
                content?.video.items.map(a =>(<ThumbnailCard link={a.id.videoId} photo={a.snippet.thumbnails.medium.url}  title={a.snippet.title} /> ))
            }
        </div>




                   <div className="bg-black p-5 w-[100%] h-[400px] mt-[10px] flex flex-row text-white">


            {
               //@ts-ignore
                content?.blogs.map(a =>(<BlogCard  link={a.link}   title={a.title} /> ))


            }
        </div>
        
      </div>
    </div>
    </SessionProvider>
  );
}
