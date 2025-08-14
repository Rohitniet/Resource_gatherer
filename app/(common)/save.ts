import { PrismaClient } from "@/prisma/prisma-client";

const client = new PrismaClient();

interface resource {
  thumbnail?: string | null;
  link: string;
  title: string;
  type: "blog" | "video";
}

interface save {
  email: string;
  resource: resource;
}

export async function save(saveinfo: save) {
  const email = saveinfo.email;

  const { link, title, thumbnail, type } = saveinfo.resource;

  if (type === "blog") {
    try {
      const res = await client.blogs.create({
        data: {
          link,
          title,
          email,
        },
      });

      return res;
    } catch (e) {
      return e;
    }
  }

  if (type === "video") {
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
