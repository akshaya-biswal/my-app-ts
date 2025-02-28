import { type FieldValues, useForm } from "react-hook-form";

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    reset();
  };

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Name"
        {...register("name", {
          required: "Name is required",
          minLength: {
            value: 5,
            message: "Must be 5 char",
          },
          maxLength: {
            value: 20,
            message: "Must be 20 char",
          },
        })}
      />
      {errors.name && <p>{`${errors?.name?.message}`}</p>}
      <input
        type="email"
        placeholder="Email"
        {...register("email", {
          required: "Email is required",
        })}
      />
      {errors.email && <p>{`${errors?.email?.message}`}</p>}
      <input
        type="password"
        placeholder="Password"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Must be 8 char",
          },
        })}
      />
      {errors.password && <p>{`${errors?.password?.message}`}</p>}

      <input
        type="password"
        placeholder="Conform Password"
        {...register("conformPassword", {
          required: "Conform Password is required",
          validate: (value) =>
            value === getValues("password") || "Password must be same",
        })}
      />
      {errors.conformPassword && <p>{`${errors?.conformPassword?.message}`}</p>}
      <button disabled={isSubmitting} type="submit">
        Submit
      </button>
    </form>
  );
};

export default ReactHookForm;
