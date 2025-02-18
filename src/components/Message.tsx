import { useState } from "react";

const Message = () => {
  const [message, setMessage] = useState<string>("Welcome");

  const handleOnClick = () => {
    setMessage("Bye");
  };

  return (
    <>
      <h1>User Name - {message}</h1>
      <button onClick={handleOnClick}>Update Message</button>
    </>
  );
};

export default Message;
