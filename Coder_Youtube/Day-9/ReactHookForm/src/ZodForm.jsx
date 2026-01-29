import React from 'react'
import {useForm} from "react-hook-form"
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'


// Schema Define
const formSchema = z.object({
    name: z.string().min(3,"Minimum length should be 3").max(20,"Maximum length should be 30"),
    age: z.coerce.number().min(10,"Minimum age should be 10").max(80,"Maximum age should be 80"),
    password : z.string().min(5,"Minimum age should be 5").max(20,"Maximum age should be 20"),
    confirm: z.string(),
    email : z.email("Email is invalid")
}).refine((data) => data.password === data.confirm,{
    message : "Passwords don't match",
    path: ["confirm"]
})


const ZodForm = () => {
  
    const {
        register,
        handleSubmit,
        formState : {errors}} = useForm({
            resolver : zodResolver(formSchema)
        });
  
    function submitForm(data){
        console.log(data);
    }

    console.log("Render");
        
    return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
        <div>
            <label htmlFor="first">Name : </label>
            <input id="first" {...register('name')} />
            {errors.name && <span>{errors.name.message}</span>}
        </div>

        <div>
            <label htmlFor="second">Age : </label>
            <input type="second" {...register('age')} />
            {errors.age && <span>{errors.age.message}</span>}
        </div>

        <div>
            <label htmlFor="third">Email : </label>
            <input id="third" {...register('email')} />
            {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div>
            <label htmlFor="fourth">Password : </label>
            <input id="fourth" {...register('password')} />
            {errors.password && <span>{errors.password.message}</span>}
        </div>

        <div>
            <label htmlFor="fifth">Confirm Password : </label>
            <input id="fifth" {...register("confirm")} />
            {errors.confirm && <span>{errors.confirm.message}</span>}
        </div>
        <button>Sumbit</button>
      </form>
    </div>
  )
}

export default ZodForm;
