import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useAppSelector } from '../../hooks/redux'
import './orderForm.css'
import * as z from 'zod'

export const ValidationSchema = z.object({
  name: z.string()
    .min(2, { message: "Name must be 2 characters or more" }),
  surname: z.string()
    .min(1, { message: "Surname is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  phone: z.string()
    .min(10, { message: "Must be a valid mobile number" })
    .max(14, { message: "Must be a valid mobile number" })
    .regex(/^[0-9+]+$/, "The phone number must contain only numbers and plus (+)"),
})

type FormInput = z.infer<typeof ValidationSchema>

const OrderForm = () => {
  const { basket } = useAppSelector(state => state.session)
  const methods = useForm<FormInput>({
    resolver: zodResolver(ValidationSchema),
    defaultValues: {
      name: "",
      surname: "",
      address: "",
      phone: "",
    }
  })

  return (
    <div className='form-wrap'>
      <form className="form" onSubmit={methods.handleSubmit((d) => console.log(d))}>
        <div className="form-item">
          <input
            {...methods.register("name")}
            type="text"
            className='form-control'
            placeholder='Name'
          />
          {methods.formState.errors?.name?.message && (
            <p className="error-msg">{methods.formState.errors.name.message}</p>
          )}
        </div>
        <div className="form-item">
          <input
            {...methods.register("surname")}
            className='form-control'
            type="text"
            placeholder='Surname'
          />
          {methods.formState.errors?.surname?.message && (
            <p className="error-msg">{methods.formState.errors.surname.message}</p>
          )}
        </div>
        <div className="form-item">
          <input
            {...methods.register("address")}
            className='form-control'
            type="text"
            placeholder='Address'
          />
          {methods.formState.errors?.address?.message && (
            <p className="error-msg">{methods.formState.errors.address.message}</p>
          )}
        </div>
        <div className="form-item">
          <input
            {...methods.register("phone")}
            className='form-control'
            type="tel"
            placeholder='Phone'
          />
          {methods.formState.errors?.phone?.message && (
            <p className="error-msg">{methods.formState.errors.phone.message}</p>
          )}
        </div>
        <button
          className={basket?.products.length === 0 ? "button disabled" : "button"}
          disabled={basket?.products.length === 0}
        >Order</button>
      </form>
    </div>
  )
}

export default OrderForm