import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
    return (
        <div className="border border-slate-400 p-4 rounded-md bg-white hover:border-blue-500 shadow-lg">
            <p className="text-sm text-slate-500">{props.date}</p>
            <Link href={`/posts/${props.file}`}>
                <h2 className="font-bold text-slate-500 hover:text-blue-500 hover:underline mb-1">{props.title}</h2>
            </Link>
            <p className="text-slate-700">{props.subtitle}</p>
        </div>
    );
};

export default PostPreview;