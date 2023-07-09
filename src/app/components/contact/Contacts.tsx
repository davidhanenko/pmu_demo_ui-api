'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { instagramIconSVG } from '@/assets/icons/Instagram';
import { appear } from '@/utils/motions';

export const Contacts = () => {
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
            href='tel:4641882432'
            className='my-12 flex items-end text-pink-500 transition-transform hover:rotate-1'
          >
            <FontAwesomeIcon
              icon={faPhone}
              className='w-16 h-16 mr-4'
            />
            <p className=''>464 1188 2432</p>
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
            href='https://www.instagram.com/'
            className='my-12 flex items-end text-pink-600 transition-transform hover:rotate-1'
          >
            <div className='h-16 w-16 mr-4 fill-pink-600'>
              {instagramIconSVG}
            </div>
            <p className=''>@pmu.nyc</p>
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
            href='https://goo.gl/maps/c3hc7jCF4fwrJtvVA?coh=178571&entry=tt'
            className='my-16 flex items-center text-pink-700 transition-transform hover:rotate-1'
          >
            <FontAwesomeIcon
              icon={faLocationDot}
              className='w-16 h-16 mr-4'
            />
            <div>
              <p className=''>335 5th Ave, 1st fl</p>
              <p className=''>New York, 11111</p>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
