import { useForm } from "react-hook-form";
import { registerSchema, registerSchemaType } from "./registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const ReactHookFormZod = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<registerSchemaType>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: registerSchemaType) => {
    console.log(data);
    reset();
  };

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name" {...register("name")} />
      {errors.name && <p>{`${errors?.name?.message}`}</p>}
      <input
        type="email"
        placeholder="Email"
        {...register("email", {
          required: "Email is required",
        })}
      />
      {errors.email && <p>{`${errors?.email?.message}`}</p>}
      <input type="password" placeholder="Password" {...register("password")} />
      {errors.password && <p>{`${errors?.password?.message}`}</p>}

      <input
        type="password"
        placeholder="Conform Password"
        {...register("conformPassword")}
      />
      {errors.conformPassword && <p>{`${errors?.conformPassword?.message}`}</p>}
      <button disabled={isSubmitting} type="submit">
        Submit
      </button>
    </form>
  );
};

export default ReactHookFormZod;
