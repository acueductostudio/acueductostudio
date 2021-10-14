import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import EpisodeProps from "utils/types/EpisodeProps";

const episodesDirectory = join(process.cwd(), "_episodios");

export function getEpisodeSlugs() {
  return fs.readdirSync(episodesDirectory);
}

export function getEpisodeBySlug(slug, fields = []) {
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
  return episodes;
}

export function getNextEpisodeSlug(currentEpisode) {
  //retreive object with episodes in alphabetical order
  const allIds = getAllEpisodes(["episode"]);

  //turn object into simple array, same order
  let slugArr: number[] = [];
  allIds.map((obj) => {
    for (var [key, value] of Object.entries(obj)) {
      slugArr.push(value);
    }
  });

  //identify next episode number
  let nextEp = currentEpisode + 1;

  //identify next episode position in array by looking for its episode num in the simple array
  let nextEpPosInArr = slugArr.indexOf(nextEp, 0);

  //if the next position doesn't exist (last episode + 1), return to first episode
  //this also prevents mislabeled episodes from breaking 
  nextEpPosInArr == -1
    ? (nextEpPosInArr = slugArr.indexOf(1, 0))
    : (nextEpPosInArr = nextEpPosInArr);

  //retreive object with episodes slug in alphabetical order
  const allSlugs = getAllEpisodes(["slug"]);

  //find slug by looking for next episode position in slug array
  return allSlugs[nextEpPosInArr].slug;
}