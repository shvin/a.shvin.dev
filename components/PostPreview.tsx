import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
    return (
        <Link href={`/posts/${props.file}`}>
            <div className="group border-2 border-slate-400 p-4 rounded-md bg-inherit hover:border-blue-500 hover:text-blue-500 hover:shadow-2xl">
                <p className="text-sm text-slate-300 group-hover:text-blue-800">{props.date}</p>
                <h2 className="font-bold text-slate-400 mb-1 font-mono group-hover:text-blue-500">{props.title}</h2>
                <p className="text-white group-hover:text-blue-500">{props.subtitle}</p>
            </div>
        </Link>
    );
};

export default PostPreview;