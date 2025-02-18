import { useEffect, useState } from "react";

const DocumentTitle = () => {
  const [run, setRun] = useState(false);
  const [notification, setNotification] = useState(0);

  useEffect(() => {
    if (run) {
      document.title = "Notification " + notification;
    }
  }, [notification, run]);

  return (
    <>
      <h2>Document Title - {notification}</h2>
      <button onClick={() => setRun((prev) => !prev)}>
        {run ? "Stop" : "Run"}
      </button>
      <button onClick={() => setNotification(notification + 1)}>Update</button>
    </>
  );
};

export default DocumentTitle;
