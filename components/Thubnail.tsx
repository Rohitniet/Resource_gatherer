import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";
import { PrismaClient } from "@/prisma/prisma-client";
import axios from "axios";

interface VideoCardProps {
  email:string
  title: string;
  link: string;
  thumbnail?: string;
  onSave: () => void; // Callback for save action
}

export function ThumbnailCard({ title, link, thumbnail, onSave ,email}: VideoCardProps) {
  const youtubeUrl = link.startsWith("http")
    ? link
    : `https://www.youtube.com/watch?v=${link}`;



    const client= new PrismaClient();
    
    
      
    
    
      const saveinfo={
        email,
        resource:{
          title,
          link,
          thumbnail,
          type:"video" as const
        }
        
      }
    
      async function savehandler(){
        console.log("savehandler" +email)
    
        const res=await axios.post("/api/dashboard",{
          saveinfo
        })
    
      
        console.log(res)
    
      
      
    }






  return (
    <Card className="w-64 h-[320px] flex flex-col overflow-hidden m-5 hover:shadow-lg transition-all">
      {/* Thumbnail */}
      <a
        href={youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative aspect-video overflow-hidden"
      >
        {thumbnail ? (
          <img  src={thumbnail} alt={title}  className="object-cover" />
        ) : (
          <div className="bg-gray-200 w-full h-full flex items-center justify-center text-gray-500">
            No Thumbnail
          </div>
        )}
      </a>

      {/* Content */}
      <CardContent className="flex flex-col justify-between flex-1 p-3">
        <CardTitle className="text-sm font-semibold line-clamp-2">
          {title}
        </CardTitle>

        {/* Save Button */}
        <Button
          onClick={savehandler}
          variant="outline"
          size="sm"
          className="mt-2 flex items-center gap-1"
        >
          <Bookmark className="w-4 h-4" />
          Save
        </Button>
      </CardContent>
    </Card>
  );
}
