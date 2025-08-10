import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ThumbnailCard() {
  return (
    <Card className="w-64 cursor-pointer">
      <div className="relative aspect-video overflow-hidden rounded-t-md">
        <img
          src="https://via.placeholder.com/320x180.png?text=Thumbnail"
          alt="Video thumbnail"
          className="object-cover w-full h-full"
        />
      </div>
      <CardContent>
        <CardTitle className="text-sm font-semibold line-clamp-2">
          This is a video title that might be a bit long but gets truncated
        </CardTitle>
      </CardContent>
    </Card>
  );
}
