// components/BlogCard.tsx
"use client";
import { PrismaClient } from "@/prisma/prisma-client"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

interface BlogCardProps {
  title: string;
  link: string;
  userid:string;
}

export function BlogCard({ title, link ,userid}: BlogCardProps) {
  const [saved, setSaved] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="w-[350px] shadow-lg m-[5px] ">
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <Button
            size="icon"
            variant={saved ? "default" : "outline"}
            onClick={() => setSaved(!saved)}
          >
            <Bookmark
              className={`h-5 w-5 ${saved ? "fill-current text-yellow-500" : ""}`}
            />
          </Button>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">
            A short preview or excerpt of the blog can go here...
          </p>
        </CardContent>
        <CardFooter>
          <Link href={link} target="_blank">
            <Button variant="secondary">Read More</Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
