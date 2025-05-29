import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = await getCollection("posts");
  return rss({
    title: "Roland Tóth's Posts",
    description: "Latest posts",
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      // Compute RSS link from post `id`s
      link: `/posts/${post.slug}/`,
    })),
    stylesheet: "/rss/styles.xsl",
  });
}
