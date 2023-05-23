import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { instagramIconSVG } from '@/assets/icons/Instagram';

export const Contacts = () => {
  return (
    <div className='text-4xl font-semibold'>
      <div className='my-12 flex items-end text-pink-500 '>
        <FontAwesomeIcon
          icon={faPhone}
          className='w-16 h-16 mr-4'
        />
        <p className=''>464 1188 2432</p>
      </div>
      <div className='my-12 flex items-end text-pink-600'>
        <div className='h-16 w-16 mr-4 fill-pink-600'>{instagramIconSVG}</div>
        <p className=''>@pmu.nyc</p>
      </div>
      <div className='my-16 flex items-center text-pink-700'>
        <FontAwesomeIcon
          icon={faLocationDot}
          className='w-16 h-16 mr-4'
        />
        <div>
          <p className=''>
            335 5th Ave, 1st fl
          </p>
          <p className=''>New York, 11111</p>
        </div>
      </div>
    </div>
  );
};
