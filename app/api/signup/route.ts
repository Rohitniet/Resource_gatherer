import { PrismaClient } from "@/prisma/prisma-client"
import { get } from "axios"
import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcrypt"




export  async function POST(req:NextRequest){

    console.log("hitting backlend")

    


 //@ts-ignore
const body= await req.json();

const email= body.email;
const username= body.username;
const password=body.password;

const hashpass= await   bcrypt.hash(password,5)





    const client= new PrismaClient()

try{
    const res= await client.user.create({

       data:{
        email,
        username,
       password:hashpass
       }
      
    })
   
    return NextResponse.json({
        "message":"account has been created"
    })
}
    catch(e){
        console.log(e)



         return NextResponse.json({
        "message":"error occured whiel creating db"
    })
    }


}


