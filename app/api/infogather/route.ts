import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import Parser from "rss-parser";





const parser= new Parser()


async function blog_gatherer(subject:string){


    // try{

    const response= await parser.parseURL(`https://medium.com/feed/tag/${subject}`)
    console.log(response)

    
    const blogs= response.items.map((b:any)=>(
        {
            title:b.title,
            link: b.link,
            pubDate: b.pubDate,
        }
    
    ))

    return blogs
    
    // }catch(e){

    //     console.log("error in fecthing")
    //     return e 
    // }



}

export async  function POST(req:NextRequest){
    console.log(process.env.youtube_api)

    const body = await  req.json();
    console.log(body+"this is bodyasdasasdasdasdad")

    
try{
    const { q, regionCode = "US", language = "en" } = body;

    console.log(q);
    console.log(regionCode);
    console.log(language);

  
    const response = await axios.get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        part: "snippet",
        q,
        type: "video",
        maxResults: 5,
        regionCode,         // Location filter
        relevanceLanguage: language, // Language filter
        key: process.env.youtube_api,
      },
    });


    // calling blog function here

    const blog= await  blog_gatherer(q);

   return NextResponse.json({

    video:response.data,

    blogs:blog
   });

}
   catch (error) {
   return NextResponse.json({ error: "Failed to fetch videos" });
  }

    



}