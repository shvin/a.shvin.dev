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
            <div className="border-b border-slate-800">
                <h1 className="text-3xl text-white font-bold font-mono">
                    {content.data.title}
                </h1>
                <div className="flex space-x-2">
                    <p className="text-white text-lg mt-1 mb-2">released: </p>
                    <p className="text-blue-500 text-lg mt-1 mb-2">{content.data.date}</p>
                    <p className="text-white text-lg mt-1 mb-2">|  updated: </p>
                    <p className="text-blue-500 text-lg mt-1 mb-2">{content.data.lastUpdated}</p>
                </div>
            </div>
            <article className="prose md:prose-xl prose-invert max-w-none">
                <Markdown>
                    {content.content}
                </Markdown>
            </article>
        </div>
    );
};

export default PostPage;