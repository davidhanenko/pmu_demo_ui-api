'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  faPhone,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Contacts as ContactsProps } from '@prisma/client';

import { instagramIconSVG } from '../../../../assets/icons/Instagram';

type ContactProps = {
  contactsData: ContactsProps;
};

export const Contacts = ({
  contactsData,
}: ContactProps) => {
  return (
    <div className='text-3xl xs:text-4xl font-semibold flex flex-col items-center justify-center'>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href={`tel:${contactsData.phone}`}
            className='my-12 flex items-end text-pink-500 transition-transform hover:rotate-1'
          >
            <FontAwesomeIcon
              icon={faPhone}
              className='w-16 h-16 mr-4'
            />
            <p className=''>{contactsData?.phone}</p>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <Link
            target='_blank'
            rel='noopener noreferrer'
            href={
              `https://www.instagram.com/${contactsData.instagram}` ??
              'https://www.instagram.com'
            }
            className='my-12 flex items-end text-pink-600 transition-transform hover:rotate-1'
          >
            <div className='h-16 w-16 mr-4 fill-pink-600'>
              {instagramIconSVG}
            </div>
            <p className=''>@{contactsData?.instagram}</p>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
        >
          <Link
            target='_blank'
            rel='noopener noreferrer'
            href={
              contactsData?.location ??
              'https://www.google.com/maps'
            }
            className='my-16 flex items-center text-pink-700 transition-transform hover:rotate-1'
          >
            <FontAwesomeIcon
              icon={faLocationDot}
              className='w-16 h-16 mr-4'
            />
            <div>
              <p className=''>{contactsData?.address1}</p>
              <p className=''>{contactsData?.address2}</p>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
