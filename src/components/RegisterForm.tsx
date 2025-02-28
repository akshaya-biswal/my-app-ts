import { useState } from "react";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    console.log({ name, email, password });

  };

  return (
    <>
      <h1>Register Form</h1>
      <form onSubmit={onSubmit}>
        <input
          required
          type="text"
          placeholder="Name"
          value={name}
          minLength={3}
          maxLength={10}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          required
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          required
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={loading} type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
