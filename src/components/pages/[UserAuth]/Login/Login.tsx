import './style.scss';
import Input from "../../../ui/Input/Input.tsx";
import {FaMailBulk} from "react-icons/fa";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {SubmitHandler, useForm} from "react-hook-form";
import {toast} from "react-toastify";
import {Link, useNavigate} from "react-router-dom";
import FORM_CONFIG from "../../../../constants/formValidationConfig.ts";
import axios from "axios";
import {useEffect} from "react";
import {useAppDispatch} from "../../../../redux/store.tsx";
import { setUserError, signup} from "../../../../redux/slices/User.slice.tsx";
import {$login} from "../../../../api";

const schema  = z.object({
  email: z.string().email(FORM_CONFIG.MESSAGES.EMAIL.NOT_EMAIL),
  password: z.string().min(FORM_CONFIG.PASSWORD_MIN, FORM_CONFIG.MESSAGES.PASSWORD.MIN).max(FORM_CONFIG.PASSWORD_MAX, FORM_CONFIG.MESSAGES.PASSWORD.MAX),
})

type FormData = z.infer<typeof schema>
function Login() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: {errors},
    watch
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onSubmit"
  })

  const watchedFields = watch();

  const navigate = useNavigate()

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const result = await $login(data.email, data.password)
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
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      <span className="form-title">Login</span>
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
        icon={<FaMailBulk/>}
        placeholder="Password"
        type="password"
        name="password"
        validationRules={{
          required: true
        }}
      />
      <button className="login-submit" type="submit">
        Login
      </button>
      <span className="go-to-label">
         Don't have an account? <Link to={"/auth/register"}>Register</Link>
      </span>
    </form>
  );
}

export default Login;
