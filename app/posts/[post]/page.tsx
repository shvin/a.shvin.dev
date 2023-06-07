import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getPostMetadata from '@/components/getPostMetadata';

const getPostData = (post: string) => {
    const folder = "posts/";
    const file = `${folder}${post}.md`;
    const content = fs.readFileSync(file, 'utf8');
    const graymatterResult = matter(content);
    return graymatterResult;
};

export const generateStaticParams = async() => {
    const posts = getPostMetadata();
    return posts.map((post) => ({
        post: post.file,
    }));
}

const PostPage = (props: any) => {
    const post = props.params.post;
    const content = getPostData(post);

    return (
      <div>
        <div className="flex flex-col items-center">
          <div className="border-b border-slate-800 px-4 py-2 text-center">
            <h1 className="text-3xl text-white font-bold font-mono mb-2">
              {content.data.title}
            </h1>
            <div className="flex flex-wrap items-baseline justify-center space-y-2">
              <div className="flex items-center mr-4">
                <p className="text-white text-lg mr-1">released:</p>
                <p className="text-blue-400 text-lg">{content.data.date}</p>
              </div>
              <div className="flex items-center">
                <p className="text-white text-lg mr-1">updated:</p>
                <p className="text-blue-400 text-lg">{content.data.lastUpdated}</p>
              </div>
            </div>
          </div>
        </div>
        <article className="prose md:prose-xl prose-invert max-w-none">
          <Markdown>{content.content}</Markdown>
        </article>
      </div>
    );
    
};

export default PostPage;