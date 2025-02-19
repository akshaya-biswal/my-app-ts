import { useEffect, useState } from "react";

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const Todo = () => {
  const [todo, setTodo] = useState<TodoType | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setTodo(json));
  }, []);

  return (
    <>
      <h2>Todo</h2>
      {todo ? (
        <div>
          <p>{todo.userId}</p>
          <p>{todo.title}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Todo;
