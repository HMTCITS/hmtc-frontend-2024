import { HiArrowLongRight } from 'react-icons/hi2';

import BaseLink from '@/components/links/BaseLink';
import Typography from '@/components/typography/Typography';

export default function galleryCard() {
  return (
    <div className='m-0 flex w-56 flex-col gap-y-3'>
      <div className='h-44 w-56 bg-zinc-300'></div>
      <Typography variant='h4' className='font-satoshi leading-none'>
        Activity Name
      </Typography>
      <Typography variant='b3' className='line-clamp-3 overflow-ellipsis'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada,
        nunc id aliquam. Vivamus luctus urna sed urna ultricies ac tempor dui
        sagittis.
      </Typography>
      <BaseLink href='/gallery' className='flex flex-row justify-end gap-x-1'>
        <Typography variant='s2' className='text-right underline'>
          See More
        </Typography>
        <HiArrowLongRight size={22} />
      </BaseLink>
    </div>
  );
}
