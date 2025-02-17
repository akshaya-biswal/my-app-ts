import { useState } from "react";

const User = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);

  return (
    <>
      <h1>
        User - {name} {age}
      </h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={age} onChange={(e) => setAge(Number(e.target.value))} />
    </>
  );
};

export default User;
