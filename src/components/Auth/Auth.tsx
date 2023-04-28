import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/redux'
import { loginUser } from '../../store/sessionSlice'
import './auth.css'
import * as z from 'zod'

export const ValidationSchema = z.object({
  username: z.string()
    .min(4, { message: "Name must be 4 characters or more" }),
  password: z.string()
    .min(6, { message: "Password must be 6 characters or more" })
})

type FormInput = z.infer<typeof ValidationSchema>

const Auth = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const methods = useForm<FormInput>({
    resolver: zodResolver(ValidationSchema),
    defaultValues: {
      // TODO: remove initial values when real server will be implemented
      username: "kminchelle",
      password: "0lelplR"
    }
  })

  const submitForm = (data: any) => {
    console.log(data)
    dispatch(loginUser({ username: data.username, password: data.password }))
    navigate("/")
  }

  return (
    <div className="auth wrap">
      {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
      <form onSubmit={methods.handleSubmit(submitForm)} className="form auth-form">
        <div className="title text-center">Authorization</div>
        <div className="form-item">
          <input
            {...methods.register("username")}
            type="text"
            className='form-control'
            placeholder='Username'
          />
          {methods.formState.errors?.username?.message && (
            <p className="error-msg">{methods.formState.errors.username.message}</p>
          )}
        </div>
        <div className="form-item">
          <input
            {...methods.register("password")}
            type="password"
            className='form-control'
            placeholder='Password'
          />
          {methods.formState.errors?.password?.message && (
            <p className="error-msg">{methods.formState.errors.password.message}</p>
          )}
        </div>
        <button
          type='submit'
          className='button'
        >Login</button>
      </form>
    </div>
  )
}

export default Auth