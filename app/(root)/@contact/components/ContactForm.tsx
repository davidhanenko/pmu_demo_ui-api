'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';

import {
  contactReasons,
  phoneRegex,
} from '../../../../constants/index';

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
        message: 'Something went wrong, please try again',
      });
    }
  };

  return (
    <div className='flex flex-col items-center'>
      <motion.h4
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.5 }}
        className='text-purple3 text-2xl sm:text-3xl font-semibold mb-12 px-2 sm:px-8 lg:p-0'
      >
        Would you like me to
        <span className='text-gradient-animated-red'>
          &nbsp;call you back&nbsp;
        </span>
        or help you to
        <span className='text-gradient-animated-red'>
          &nbsp;schedule an appointment&nbsp;
        </span>
      </motion.h4>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.5 }}
        onSubmit={handleSubmit(onSubmitForm)}
        className='relative bg-glass w-5/6 sm:w-3/4 px-4 lg:px-8 py-16'
      >
        {!!statusMessage.message && (
          <div
            className={`absolute top-1 left-4 lg:left-8 right-4 lg:right-8 py-3 text-sm flex justify-between items-center ${
              statusMessage.status === 'success'
                ? 'text-green-600'
                : 'text-red-600'
            }`}
          >
            <p>{statusMessage.message}</p>
            <span
              className='text-lg cursor-pointer'
              onClick={() =>
                setStatusMessage({
                  status: '',
                  message: '',
                })
              }
            >
              &times;
            </span>
          </div>
        )}
        {/* name */}
        <fieldset className='relative mb-6'>
          <input
            id='name'
            type='text'
            placeholder='Name*'
            className={`input-field  ${
              dirtyFields.name ? 'border-pink-400' : ''
            }`}
            {...register('name', {
              required: 'Name is required',
            })}
          />
          {!!errors.name && (
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
                ? 'border-pink-400'
                : ''
            }`}
            {...register('phoneNumber', {
              required: 'Phone number is required',
              pattern: {
                value: phoneRegex,
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
          {!!errors.phoneNumber && (
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
              dirtyFields.email ? 'border-pink-400' : ''
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
              dirtyFields.message ? 'border-pink-400' : ''
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
          <div className='bg-red-50 p-4 rounded-none focus:border-purple-400 focus:outline-none focus:rounded-none shadow-[inset_0_0_2px_1px_#fbcfe8]'>
            <select
              className='bg-red-50 w-full h-full'
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
            className='w-full text-2xl bg-pink-200 py-2 transition-all text-white hover:bg-pink-300'
          >
            {isSubmitting ? (
              <span className='animate-pulse'>💋</span>
            ) : (
              <span>Send</span>
            )}
          </button>
        </div>
      </motion.form>
    </div>
  );
};
