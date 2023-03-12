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
            <h1>{content.data.title}</h1>
            <Markdown>{content.content}</Markdown>
        </div>
    );
};

export default PostPage;