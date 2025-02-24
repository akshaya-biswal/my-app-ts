import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { PostType } from "./types/PostType";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed");
  }
  return response.json();
};

const PostList = () => {
  const { data, isLoading, error, refetch } = useQuery<PostType[]>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    retry: false,
    refetchOnWindowFocus: false,
    // refetchOnMount: false,
    staleTime: 1000 * 60 * 10, // 10min
  });

  if (isLoading) {
    return <h1>Loading ....</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <h2>Post List</h2>
      <ul>
        {data?.map((i) => (
          <li key={i.id}>
            <Link to={`/posts/${i.id}`}>{i.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={() => refetch()}>Refetch</button>
    </>
  );
};

export default PostList;
