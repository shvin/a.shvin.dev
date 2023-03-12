import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "./PostMetadata";


const getPostMetadata = (): PostMetadata[] => {
    const folder = "posts/";
    const files = fs.readdirSync(folder);
    const mdPosts = files.filter((file) => file.endsWith(".md"));
  
    // using gray-matter to parse the blog post metadata section
    const posts = mdPosts.map((fileName) => {
      const fileContents = fs.readFileSync(`posts/${fileName}`, 'utf8');
      const graymatterResult = matter(fileContents);
      return {
        title: graymatterResult.data.title,
        date: graymatterResult.data.date,
        subtitle: graymatterResult.data.subtitle,
        file: fileName.replace(".md", ""),
      };
    });
    return posts;
};

export default getPostMetadata;