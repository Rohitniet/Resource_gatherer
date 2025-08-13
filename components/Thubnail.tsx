import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface cardprop{
  title:string,
  photo:string,
  link:string
}

export default function ThumbnailCard({title,photo,link}:cardprop) {
  return (
    <Card className="w-64 cursor-pointer h-[300px] p-5 m-5">

        <a href={`https://www.youtube.com/watch?v=${link}`}>
      <div className="relative aspect-video overflow-hidden rounded-t-md">
      <img
          src={photo}
          alt="Video thumbnail"
          className="object-cover w-full h-full"
        />
       
      </div>
       </a>
      <CardContent>
        <CardTitle className="text-sm font-semibold line-clamp-2">
          {title}
        </CardTitle>
      </CardContent>
    </Card>
  );
}
