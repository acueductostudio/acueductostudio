import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import EpisodeProps from "utils/types/EpisodeProps";

const episodesDirectory = join(process.cwd(), "_episodios");

export function getEpisodeSlugs() {
  return fs.readdirSync(episodesDirectory);
}

export function getEpisodeBySlug(slug, fields = []) {
  console.log(fields);
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(episodesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: EpisodeProps = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllEpisodes(fields = []) {
  const slugs = getEpisodeSlugs();
  const episodes = slugs.map((slug) => getEpisodeBySlug(slug, fields));
  const sortedEpisodes = episodes.sort((post1, post2) => (post1.episode > post2.episode ? 1 : -1));
  console.log(sortedEpisodes)
  return episodes;
}
