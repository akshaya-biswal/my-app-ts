import React from "react";

type UserProps = {
  data: {
    name: string;
    age: number;
  };
  setData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      age: number;
    }>
  >;
};

const User = ({ data, setData }: UserProps) => {
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
