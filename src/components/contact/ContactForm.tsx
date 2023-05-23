import { useState } from 'react';
import { contactReasons } from '@/constants';
import { useForm, SubmitHandler } from 'react-hook-form';

const PHONE_REGEX = new RegExp(
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gim
);

type FormData = {
  name: string;
  phoneNumber: string;
  email: string;
  message: string;
  reason: string;
};

export const ContactForm = () => {
  const [statusMessage, setStatusMessage] = useState({
    status: '',
    message: '',
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, dirtyFields },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      phoneNumber: '',
      email: '',
      message: '',
      reason: 'Call me back',
    },
  });

  const onSubmitForm: SubmitHandler<
    FormData
  > = async values => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const messageStatus = await response.json();

      if (messageStatus.status === 'success') {
        setStatusMessage(messageStatus);
        reset();
      } else {
        setStatusMessage(messageStatus);
      }
    } catch (err) {
      setStatusMessage({
        status: 'fail',
        message: err.message,
      });
    }
  };

  return (
    <div className='flex flex-col items-center'>
      <h4 className='text-purple3 text-3xl font-semibold'>
        Would you like me to call you back or drop me a line
      </h4>

      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className='relative bg-glass w-5/6 sm:w-3/4 px-4 lg:px-8 py-16'
      >
        {statusMessage.message && (
          <p
            className={`absolute top-1 left-4 lg:left-8 right-4 lg:right-8 py-3 pl-2 text-sm ${
              statusMessage.status === 'success'
                ? 'bg-green-100 text-green-600'
                : 'bg-red-100 text-red-600'
            }`}
          >
            {statusMessage.message}
          </p>
        )}
        {/* name */}
        <fieldset className='relative mb-6'>
          <input
            id='name'
            type='text'
            placeholder='Name*'
            className={`input-field  ${
              dirtyFields.name ? 'border-purple-500' : ''
            }`}
            {...register('name', {
              required: 'Name is required',
            })}
          />
          {errors.name && (
            <span className='input-error'>
              {`${errors?.name?.message}*`}
            </span>
          )}
        </fieldset>
        {/* phone */}
        <fieldset className='relative mb-6'>
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
              pattern: {
                value: PHONE_REGEX,
                message:
                  'Please enter a valid phone number, ex. 1112223333 or 111-222-3333',
              },
              minLength: {
                value: 10,
                message:
                  'Seems too short for a phone number',
              },
              maxLength: {
                value: 12,
                message: 'Seems to long for a phone number',
              },
            })}
          />
          {errors.phoneNumber && (
            <span className='input-error'>
              {`${errors?.phoneNumber?.message}*`}
            </span>
          )}
        </fieldset>
        {/* email */}
        <fieldset className='relative mb-6'>
          <input
            id='email'
            type='text'
            placeholder='Email'
            className={`input-field ${
              dirtyFields.email ? 'border-purple-500' : ''
            }`}
            {...register('email', {
              pattern: {
                value:
                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Please enter a valid email',
              },
            })}
          />
          <span className='input-error'>
            {errors?.email?.message}
          </span>
        </fieldset>
        {/* message */}
        <fieldset className='relative mb-6'>
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
          <span className='input-error'>
            {errors?.message?.message}
          </span>
        </fieldset>
        <div className='grid grid-cols-2 gap-4'>
          {/* select reason */}
          <div className='bg-pink-50 p-4 rounded-none focus:border-purple-500 focus:outline-none focus:rounded-none shadow-[inset_0_0_2px_1px_#f5d0fe]'>
            <select
              className='bg-pink-50 w-full h-full'
              {...register('reason')}
            >
              {contactReasons.map(reason => (
                <option key={reason.id}>
                  {reason.value}
                </option>
              ))}
            </select>
          </div>

          {/* submit button */}
          <button
            type='submit'
            disabled={isSubmitting}
            className='w-full text-2xl border-2 border-purple-200 py-2 shadow-[inset_0_0_2px_1px_#f5d0fe] transition-all hover:shadow-none text-purple3'
          >
            {isSubmitting ? (
              <span className='animate-pulse'>💋</span>
            ) : (
              <span>Send</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
