import { useState } from "react";

const User = () => {
  const [data, setData] = useState({ name: "", age: 0 });

  return (
    <>
      <h1>
        User - {data.name} {data.age}
      </h1>
      <input
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <input
        value={Number(data.age)}
        onChange={(e) => setData({ ...data, age: Number(e.target.value) })}
      />
    </>
  );
};

export default User;
