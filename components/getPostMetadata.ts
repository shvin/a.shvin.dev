import fs from 'fs';
import matter from 'gray-matter';
import { PostMetadata } from "./PostMetadata";


const getPostMetadata = (sortKey?: string): PostMetadata[] => {
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
    const sortBy = (key: string) => {
      return (a: any, b: any) => {
        if (a[key] > b[key]) return -1;
        if (a[key] < b[key]) return 1;
        return 0;
      };
    }
    const sortedPosts = sortKey ? posts.sort(sortBy(sortKey)) : posts;
    return sortedPosts;
};

export default getPostMetadata;