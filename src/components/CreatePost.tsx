import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

const createPost = async (post: {
  title: string;
  body: string;
  userId: number;
}) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });
  if (!response.ok) {
    throw new Error("Failed");
  }
  return response.json();
};

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      alert("Form Submitted Successfully");
    },
    onError: (error) => {
      alert(error.message);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ title, body, userId: 1 });
  };

  return (
    <>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          value={body}
          placeholder="body"
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Create Post</button>
      </form>
    </>
  );
};

export default CreatePost;
