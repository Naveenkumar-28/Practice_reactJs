import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from './valitaction/schema';
import { useRegister } from "../../app/FormProvider";


export function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors } } = useForm({
      resolver: yupResolver(loginSchema)
    })
  const { state } = useRegister()


  const onSubmit = (data) => {
    console.log(data);
    const { email, password } = data
    console.log(email,state.email);
    
    if (email != state.email) return alert('Email not found')
    if (password != state.password) return alert('Password is incorrect')
    alert('Login successfully!')
  }


  return (
    <div className="flex justify-center items-center mt-15">

      <form onSubmit={handleSubmit(onSubmit)} className="border-2 border-gray-500 p-5 rounded-sm shadow-lg flex flex-col gap-5 w-[400px] ">
        <h1 className="font-bold text-xl uppercase text-center">Login Form</h1>
        <div className="flex flex-col">
          <label className="font-medium">Email:</label>
          <input className={`border-2 p-2 border-gray-300 outline-none rounded-sm ${errors.email && 'animate-shake border-red-500'}`} type="text" {...register('email')} />
          {errors.email && <div className="text-red-500">{errors.email.message}</div>}
        </div>
        <div className="flex flex-col">
          <label className="font-medium">Password:</label>
          <input className={`border-2 p-2 border-gray-300 outline-none rounded-sm ${errors.password && 'animate-shake border-red-500'}`} type="text" {...register('password')} />
          {errors.password && <div className="text-red-500">{errors.password.message}</div>}
        </div>
        <button className="bg-green-400 w-full py-2 rounded-sm" type="submit">Submit</button>
      </form>

    </div>

  );
}