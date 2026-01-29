import React from 'react'
import {useForm} from "react-hook-form"
const Form = ()=>{

    // handleSubmit is given by useForm --> main work is handlesubmit ko call and return the obj
    // How to handle Error in form , Handle Error easily 
    const {register, handleSubmit, formState: {errors}} = useForm();


    // For to solve the problem of validation we use ZOd , schema design , data validation like string , length
    function submitForm(data){
        console.log(data);
    }
    console.log("Form Re-Render");

    return (
        <div>
            <form onSubmit={handleSubmit(submitForm)}>
                <div>
                    <label htmlFor="first">Name :</label>
                    <input id="first" {...register('name',
                        {required: "Name can't be empty"}
                    )} />
                    {/* If ia apply validation here then coder readibility is not good */}
                    {errors.name && <span>{errors.name.message}</span>}  
                </div>

                <div>
                    <label htmlFor='second'>Age :</label>
                    <input id="second" {...register('age',
                        {min:{
                            value: 10,
                            message: "Minimum age should be 10"
                        },
                        max:{
                            value: 80,
                            message: "Maximum age should be 80"
                        }}
                    )} />
                    {errors.age && <span>{errors.age.message}</span>}
                </div>

                <div>
                    <label htmlFor='third'>Password :</label>
                    <input id="third" {...register('password',
                        {
                            minLength:{
                                value: 5,
                                message: "Minimum Length of Password should be 5"
                            },
                            maxLength:{
                                value: 20,
                                message: "Maximum Lenght of Passsword should be 20"
                            }
                        }
                    )} />
                    {errors.password && <span>{errors.password.message}</span>}
                </div>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;