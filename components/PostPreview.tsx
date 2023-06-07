import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <Link href={`/posts/${props.file}`}>
      <div className="group border-2 border-blue-400 p-4 rounded-md bg-inherit hover:border-slate-300 hover:text-blue-400 hover:shadow-2xl">
        <div className="flex justify-between">
          <p className="text-sm text-left text-slate-300 group-hover:text-blue-400">{props.date}</p>
          <div className="h-fit p-0.5 bg-slate-600 group-hover:bg-text-blue-800 w-fit rounded-md">
            <p className="text-sm text-right font-mono text-slate-300 group-hover:text-blue-400">{props.tag}</p>
          </div>
        </div>
        <h2 className="font-bold text-white mb-1 font-mono group-hover:text-white">{props.title}</h2>
        <p className="text-slate-300 group-hover:text-blue-400">{props.subtitle}</p>
      </div>
    </Link>
  );
};

export default PostPreview;