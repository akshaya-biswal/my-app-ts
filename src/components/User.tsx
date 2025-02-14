type UserProps = { user: { name: string; age: number }; index: number };

const User = (props: UserProps) => {
  return (
    <>
      <h2>User - {props.index}</h2>
      <p>{props.user.name}</p>
      <p>{props.user.age}</p>
    </>
  );
};

export default User;
