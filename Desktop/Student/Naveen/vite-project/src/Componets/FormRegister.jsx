import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./valitaction/schema";
import { useNavigate } from "react-router-dom";
import { FORM_ACTIONS, useRegister } from "../../app/FormProvider";
import { number } from "yup";

export function FormRegister() {
  const navigate = useNavigate();
  const { state, dispatch } = useRegister();
  const {
    register,
    handleSubmit,
    setValue,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    dispatch({ type: FORM_ACTIONS.REGISTER, payload: data });
    navigate("/login");
  };
  console.log({ state });

  return (
    <div className="flex justify-center items-center mt-15">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-2 border-gray-500 p-5 rounded-sm shadow-lg flex flex-col gap-5 w-[400px] "
      >
        <h1 className="font-bold text-xl uppercase text-center">
          Register Form
        </h1>
        <div className="flex flex-col">
          <label className="font-medium">Username:</label>
          <input
            className={`border-2 p-2 border-gray-300 outline-none rounded-sm ${
              errors.username && "animate-shake border-red-500"
            }`}
            type="text"
            {...register("username")}
          />
          {errors.username && (
            <div className="text-red-500">{errors.username.message}</div>
          )}
        </div>
        <div className="flex flex-col">
          <label className="font-medium">Email:</label>
          <input
            className={`border-2 p-2 border-gray-300 outline-none rounded-sm ${
              errors.email && "animate-shake border-red-500"
            }`}
            type="text"
            {...register("email")}
          />
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>
        <div className="flex flex-col">
          <label className="font-medium">Password:</label>
          <input
            className={`border-2 p-2 border-gray-300 outline-none rounded-sm ${
              errors.password && "animate-shake border-red-500"
            }`}
            type="text"
            {...register("password")}
          />
          {errors.password && (
            <div className="text-red-500">{errors.password.message}</div>
          )}
        </div>
        <div className="flex flex-col">
          <label className="font-medium">Confirm Password:</label>
          <input
            className={`border-2 p-2 border-gray-300 outline-none rounded-sm ${
              errors.confirmPassword && "animate-shake border-red-500"
            }`}
            type="text"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <div className="text-red-500">{errors.confirmPassword.message}</div>
          )}
        </div>
        <div className="flex flex-col">
          <label className="font-medium">Age:</label>
          <input
            className={`border-2 p-2 border-gray-300 outline-none rounded-sm ${
              errors.age && "animate-shake border-red-500"
            }`}
            type="number"
            {...register("age")}
            // onChange={(e) => setValue("age", parseInt(e.target.value))}
          />
          {errors.age && (
            <div className="text-red-500">{errors.age.message}</div>
          )}
        </div>
        <button className="bg-green-400 w-full py-2 rounded-sm" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
