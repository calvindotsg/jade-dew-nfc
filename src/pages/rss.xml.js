import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

import { METADATA } from "../lib/constants.js";

export async function GET(context) {
  const blog = await getCollection("blog");
  return rss({
    title: "Jade Dew RN",
    description: "We are fellow neighbours who serve in the RC, NC, RN to promote neighbourliness through programmes to build a vibrant and cohesive community.",
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      content: sanitizeHtml(parser.render(post.body)),
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/blog/[slug]` routes
      link: `/blog/${post.slug}/`,
    })),
  });
}
