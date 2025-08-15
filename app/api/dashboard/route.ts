import { save } from "@/app/(common)/save";
import { NextRequest, NextResponse } from "next/server";




export async function POST(req:NextRequest){

    const data=await req.json();
    const saveinfo= data.saveinfo


    const res= await save(saveinfo);

    return NextResponse.json({
        res
    })
}