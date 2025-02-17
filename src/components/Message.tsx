import { useState } from "react";

const Message = () => {
  const [message, setMessage] = useState("Welcome");

  return (
    <>
      <h1>Message - {message}</h1>
      <button onClick={() => setMessage("Bye")}>Update Message</button>
    </>
  );
};

export default Message;
