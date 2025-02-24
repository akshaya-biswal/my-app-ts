import { useQuery } from "@tanstack/react-query";

import { useParams } from "react-router-dom";
import { PostType } from "../types/PostType";

const fetchPost = async (id: string) => {
  if (!id) {
    throw new Error("ID is required");
  }
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  if (!response.ok) {
    throw new Error("Failed");
  }
  return response.json();
};

const PostDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error } = useQuery<PostType>({
    queryKey: ["posts", id],
    queryFn: () => fetchPost(id!),
    retry: false,
    refetchOnWindowFocus: false,
    // refetchOnMount: false,
  });

  if (isLoading) {
    return <h1>Loading ....</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Post Details - {id}</h2>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default PostDetails;
