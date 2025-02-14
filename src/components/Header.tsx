type HeaderProps = {
  name: string;
  age: number;
};

const Header = (props: HeaderProps) => {
  return (
    <>
      <h2>Header</h2>
      <p>{props.name} </p>
      <p>{props.age}</p>
    </>
  );
};

export default Header;
