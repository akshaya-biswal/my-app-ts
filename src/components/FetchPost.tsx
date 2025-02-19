import React, { ChangeEvent, useState } from "react";

type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const FetchPost = () => {
  const [post, setPost] = useState<PostType | null>(null);
  const [postId, setPostId] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setPostId(e.target.value);
  // };

  const fetchPost = async () => {
    if (!postId) return;
    setLoading(true);
    setPost(null);
    setError(null);

    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      if (!res.ok) {
        throw new Error("Post not found");
      }
      const data = await res.json();
      setPost(data);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2>Fetch Post -{postId}</h2>
      <input
        type="number"
        placeholder="Enter a post ID"
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
      />
      <button onClick={fetchPost}>Fetch Post</button>
      {loading && <p>Loading</p>}
      {error && <p>{error}</p>}
      {post && (
        <div>
          <p>{post.title}</p>
        </div>
      )}
    </>
  );
};

export default FetchPost;
