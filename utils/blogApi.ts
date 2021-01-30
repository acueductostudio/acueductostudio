import fs from "fs";
import { join } from "path";

const postsDirectory = join(process.cwd(), "public/locales/es/articulos/");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.json$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.json`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const post = JSON.parse(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = post.article.content;
    }
    if (post.article.data[field]) {
      items[field] = post.article.data[field];
    }
  });
  return items;
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug, fields));
  // sort posts by date in descending order
  // .sort((post1, post2) => (post1.article.date > post2.article.date ? '-1' : '1'))
  return posts;
}
