// app/api/auth/[...nextauth]/route.ts

import { PrismaClient } from "@/prisma/prisma-client";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import bcrypt from "bcrypt"

const client = new PrismaClient();

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "you@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials ?? {};


        console.log("hitting the auth")
        const user= await client.user.findFirst({
            where:{
                email
            }
        });

        console.log(user)

        if(!user){
            return null;
        }

        if(password===undefined){
            return null
        }
        
        const verify= await bcrypt.compare(password,user.password)

        if(!verify){
          console.log("wrong passs")

            return null

        }else{
console.log("exiting the auth")

            return {
                id :JSON.stringify(user.id),
                email:user.email,
                username:user.username
                
            }
        }

        
        

      
        
      },
    }),
  ],
  pages: {
    // signIn: "/login", 
  },
  session: {
    strategy: "jwt",
  },

  callbacks: {




    
    // Called whenever a JWT is created/updated
    async jwt({ token, user }) {

      console.log("jwt " +user)
      if (user) {
        token.id = user.id;
      }

      console.log(token.id)
      return token;
    },

    // Called whenever a session is checked
    async session({ session, token }) {
     

      console.log("hit the ssession")
      if (token) {
        //@ts-ignore
  // check why are u using ignore
        session.user.id = token.id as number;
      }
      return session;
    },


      async redirect({ url, baseUrl }) {
      // Always redirect to dashboard after sign in
      return "/pages/dashboard";
    },
  },

  
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
