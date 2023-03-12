import getPostMetadata from '../components/getPostMetadata';
import PostPreview from '../components/PostPreview';

export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.file} {...post} />
  ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {postPreviews}
    </div>
  )
}
