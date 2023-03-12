import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
    return (
        <div className="border border-slate-400 p-4 rounded-md shadow-sm bg-white">
            <Link href={`/posts/${props.file}`}>
                <h2 className="font-bold text-slate-500 hover:underline">{props.title}</h2>
            </Link>
            <p className="text-sm text-slate-500 mb-1">{props.date}</p>
            <p className="text-slate-700">{props.subtitle}</p>
        </div>
    );
};

export default PostPreview;