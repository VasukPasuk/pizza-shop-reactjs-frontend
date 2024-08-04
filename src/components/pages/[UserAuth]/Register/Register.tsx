import {useEffect} from 'react';
import './style.scss';
import {FaMailBulk} from "react-icons/fa";
import Input from "../../../ui/Input/Input.tsx";
import {FaUsers} from "react-icons/fa6";
import {Link, useNavigate} from "react-router-dom";
import {useForm, SubmitHandler} from "react-hook-form";
import axios from "axios";
import {toast} from "react-toastify";
import {z} from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import FORM_CONFIG from "../../../../constants/formValidationConfig.ts";
import {useAppDispatch} from "../../../../redux/store.tsx";
import {setUserError, signup} from "../../../../redux/slices/User.slice.tsx";
import {$register} from "../../../../api";


const schema = z.object({
  email: z.string().email(FORM_CONFIG.MESSAGES.EMAIL.NOT_EMAIL),
  login: z.string().min(FORM_CONFIG.LOGIN_MIN, FORM_CONFIG.MESSAGES.LOGIN.MIN).max(FORM_CONFIG.LOGIN_MAX, FORM_CONFIG.MESSAGES.LOGIN.MAX),
  password: z.string().min(FORM_CONFIG.PASSWORD_MIN, FORM_CONFIG.MESSAGES.PASSWORD.MIN).max(FORM_CONFIG.PASSWORD_MAX, FORM_CONFIG.MESSAGES.PASSWORD.MAX),
  confirmPassword: z.string().min(FORM_CONFIG.PASSWORD_MIN, FORM_CONFIG.MESSAGES.PASSWORD.MIN).max(FORM_CONFIG.PASSWORD_MAX, FORM_CONFIG.MESSAGES.PASSWORD.MAX),
})

type FormData = z.infer<typeof schema>;


function Register() {
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    formState: {errors},
    watch
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onSubmit"
  });

  const watchedFields = watch();

  const navigate = useNavigate()

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (data.confirmPassword !== data.password) {
      return toast("Confirm password and password must be equal.", {type: "warning"})
    }

    try {
      const result = await $register(data.email,data.login,data.password)
      dispatch(signup(result.data))
      navigate('/')
    } catch (error) {
      dispatch(setUserError(true))
      if (axios.isAxiosError(error)) {
        // Додаткові перевірки для AxiosError
        if (error.response && error.response.status === 400) {
          toast(error.response.data.message, {
            type: "error",
          })
        }
      } else if (error instanceof Error) {
        toast(error.message);
      } else {
        // Випадок, якщо помилка не має властивості message
        toast('An unknown error occurred');
      }
    }

  };

  useEffect(() => {
    // For each error in error array will be thrown toast with error message
    Object.keys(errors).forEach((fieldName) => {
      const error = errors[fieldName as keyof FormData];
      if (error?.message) {
        toast.error(error.message, {
          toastId: `${fieldName}-error`,
          autoClose: false,
        });
      }
    });
  }, [watchedFields, errors]);
  return (
    <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="form-title">Register</h2>
      <Input
        register={register}
        icon={<FaMailBulk/>}
        placeholder="Email"
        type="email"
        name="email"
        validationRules={{
          required: true
        }}
      />
      <Input
        register={register}
        icon={<FaUsers/>}
        placeholder="Login"
        type="text"
        name="login"
        validationRules={{
          required: true
        }}
      />
      <Input
        register={register}
        placeholder="Password"
        type="password"
        name="password"
        validationRules={{
          required: true
        }}
      />
      <Input
        register={register}
        placeholder="Confirm password"
        type="password"
        name="confirmPassword"
        validationRules={{
          required: true
        }}
      />
      <button type="submit">Register</button>
      <span className="go-to-label">
        Already have an account? <Link to={"/auth/login"}>Login</Link>
      </span>
    </form>
  );
}

export default Register;
