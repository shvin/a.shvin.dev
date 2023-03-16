import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "./PostMetadata";


const getPostMetadata = (): PostMetadata[] => {
    const folder = "posts/";
    const files = fs.readdirSync(folder);
    const mdPosts = files.filter((file) => file.endsWith(".md"));

    const posts = mdPosts.map((fileName) => {
      const fileContents = fs.readFileSync(`posts/${fileName}`, 'utf8');
      const graymatterResult = matter(fileContents);
      return {
        title: graymatterResult.data.title,
        date: graymatterResult.data.date,
        subtitle: graymatterResult.data.subtitle,
        tag: graymatterResult.data.tag,
        lastUpdated: graymatterResult.data.lastUpdated,
        file: fileName.replace(".md", ""),
      };
    });
    return posts.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
};

export default getPostMetadata;