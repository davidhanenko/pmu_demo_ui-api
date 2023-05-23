import { on } from 'events';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormData = {
  name: string;
  phoneNumber: string;
  email: string;
  message: string;
};

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: {
      errors,
      isSubmitting,
      dirtyFields,
      isDirty,
    },
  } = useForm({
    defaultValues: {
      name: '',
      phoneNumber: '',
      email: '',
      message: '',
    },
  });

  const onSubmitForm: SubmitHandler<FormData> = data => {};

  return (
    <div className='flex flex-col items-center'>
      <h4 className='text-purple3 text-3xl font-semibold'>
        Would you like me to call you back or drop me a line
      </h4>

      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className='bg-glass w-3/4 px-6'
      >
        {/* name */}
        <fieldset className='my-4'>
          {/* <label htmlFor='name'>Name</label> */}
          <input
            id='name'
            type='text'
            placeholder='Name*'
            className={`input-field ${
              dirtyFields.name ? 'border-purple-500' : ''
            }`}
            {...register('name', {
              required: 'Name is required',
            })}
          />
          <span>{errors?.name?.message}</span>
        </fieldset>

        {/* phone */}
        <fieldset className='my-4'>
          <input
            id='phoneNumber'
            type='text'
            placeholder='Phone*'
            className={`input-field ${
              dirtyFields.phoneNumber
                ? 'border-purple-500'
                : ''
            }`}
            {...register('phoneNumber', {
              required: 'Phone number is required',
            })}
          />
          <span>{errors?.phoneNumber?.message}</span>
        </fieldset>

        {/* email */}
        <fieldset className='my-4'>
          <input
            id='email'
            type='text'
            placeholder='Email'
            className={`input-field ${
              dirtyFields.email ? 'border-purple-500' : ''
            }`}
            {...register('email')}
          />
          <span>{errors?.email?.message}</span>
        </fieldset>

        {/* message */}
        <fieldset className='my-4'>
          <textarea
            id='message'
            placeholder='Message'
            className={`input-field ${
              dirtyFields.message ? 'border-purple-500' : ''
            }`}
            {...register('message', {
              minLength: {
                value: 5,
                message: 'Tell me a bit more',
              },
            })}
          />
          <span>{errors?.message?.message}</span>
        </fieldset>

        <button type='submit' disabled={isSubmitting}>
          Send
        </button>
      </form>
    </div>
  );
};
