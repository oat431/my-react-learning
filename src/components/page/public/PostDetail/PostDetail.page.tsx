import { useParams } from "react-router-dom";

import { Link } from "~/components/lib/router/Link";
import { successButton } from "~/constants/buttonColor";
import { postService } from "~/services/post.service";

const { useGetPostDetail } = postService;

/**
 * @package
 */
export const PostDetail = () => {
  const { postId } = useParams();
  const { data } = useGetPostDetail(String(postId), { enabled: !!postId });

  if (!data) return null;

  return (
    <main className="p-4 bg-slate-500">
      <div className="flex gap-4 py-4">
        <Link to="/posts" className={successButton}>
          to /posts
        </Link>
      </div>

      <h2>PostPage{postId}</h2>
      <p>postId : {data.id}</p>
      <p>title : {data.title}</p>
      <p>body : {data.body}</p>
      <p>userId : {data.userId}</p>
    </main>
  );
};
