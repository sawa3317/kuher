import { useForm } from "react-hook-form";

import formErrors from "../../services/formErrors";
import useUsersServices from "../../services/usersServices";

function Registration() {
    const {postUser,findUser} = useUsersServices()
    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
        getValues
    } = useForm();

    const  onSubmit = async (data) => {
        console.log(data)
        console.log(await findUser(getValues('email'),getValues('password')))
        // postUser(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="registration">
            <input placeholder="Email" {...register('email', {
                required: formErrors.required,
                pattern: {
                    value: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                    message: formErrors.email
                }
            })}/>
            <div className="registration__error">{errors?.email?.message}</div>
            <input type="password" placeholder="Пароль" {...register('password', {
                required: formErrors.required
            })}/>
            <div className="registration__error">{errors?.password?.message}</div>

            <input type="submit" />
        </form>
    )
}

export default Registration;