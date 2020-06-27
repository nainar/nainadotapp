import { NextPageContext } from "next";
import { getSortedPostsData } from '../lib/posts'

const blogPostsXml = (blogPostsData) => {
  let latestPost = 0;
  let postsXml = "";
  blogPostsData.map(post => {
    const postDate = Date.parse(post.date);
    if (!latestPost || postDate > latestPost) {
      latestPost = postDate;
    }
    postsXml += `
    <url>
      <loc>${post.id}</loc>
      <lastmod>${postDate}</lastmod>
      <priority>0.80</priority>
    </url>`;
  });
  return {
    postsXml,
    latestPost
  };
};

const sitemapXml = (blogPostsData) => {
  const { postsXml, latestPost } = blogPostsXml(blogPostsData);
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://naina.app/</loc>
      <lastmod>${latestPost}</lastmod>
      <priority>1.00</priority>
    </url>
    <url>
      <loc>https://naina.app/posts</loc>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://naina.app/work</loc>
      <priority>0.7</priority>
    </url>
    <url>
      <loc>https://naina.app/talks</loc>
      <priority>0.5</priority>
    </url>
    ${postsXml}
  </urlset>`;
};

export default class Sitemap {
  static async getInitialProps({ res }: any) {
    const blogPostsData = getSortedPostsData();
    res.setHeader("Content-Type", "text/xml");
    res.write(sitemapXml(blogPostsData));
    res.end();
  }
}