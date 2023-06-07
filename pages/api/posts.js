import fs from 'fs';
import matter from 'gray-matter';

const sortByKey = (key) => {
  return (a, b) => {
    if (a[key] > b[key]) return -1;
    if (a[key] < b[key]) return 1;
    return 0;
  };
};

const getPostMetadata = () => {
  const folder = "./posts/";
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

  return posts;
};

export default function handler(req, res) {
  const { sortBy } = req.query;

  let posts = getPostMetadata();

  if (sortBy) {
    posts = posts.sort(sortByKey(sortBy));
  }

  res.status(200).json(posts);
}
