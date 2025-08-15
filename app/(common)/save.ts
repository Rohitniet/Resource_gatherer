import { PrismaClient } from "@/prisma/prisma-client";

const client = new PrismaClient();


type typeinfo = "blog" |"video"
interface resource {
  thumbnail?: string | null;
  link: string;
  title: string;
  type:typeinfo
}

interface save {
  email: string;
  resource: resource;
}

export async function save(saveinfo: save) {
  const email = saveinfo.email;
console.log("save is callleed" + email)
  const { link, title, thumbnail, type } = saveinfo.resource;
  console.log( link ,title)

  if (type === "blog") {
    try {
      const res = await client.blogs.create({
        data: {
          link,
          title,
          email,
        },
      });

      console.log(res)
      return res;
    } catch (e) {

      console.log(e)
      return e;
    }
  }

  if (type === "video") {

    console.log("inside video")
    console.log(email,link )
    try {
      if (thumbnail) {
        const res = await client.videos.create({
          data: {
            link,
            title,
            email,
            thumbnail,
          },
        });

        return res;
      }
    } catch (e) {
      return e;
    }
  }
}
