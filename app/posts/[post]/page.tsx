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
                <h1 className="text-3xl text-black font-bold">
                    {content.data.title}
                </h1>
                <p className="text-grey mt-1 mb-2">
                    {content.data.date}
                </p>
            </div>
            <article className="prose md:prose-xl">
                <Markdown>
                    {content.content}
                </Markdown>
            </article>
        </div>
    );
};

export default PostPage;