import { useRouter } from "next/router";

const BlogPost = () => {
  const { query } = useRouter();

  return (
    <div>
      <h1>The Blog Post</h1>
      <h2>{query.slug}</h2>
    </div>
  );
};

export default BlogPost;
