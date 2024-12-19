import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

import BaseLink from '@/components/links/BaseLink';
import Typography from '@/components/typography/Typography';

export default function NotFoundPage() {
  return (
    <main>
      <section className='relative h-screen overflow-clip bg-[#201F1F] text-white'>
        <div className='flex h-full w-full -translate-y-6 flex-col items-center justify-center gap-y-1'>
          <Typography variant='s3'>ERROR</Typography>
          <h1 className='bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-libre-caslon-condensed  text-[10rem] leading-none text-transparent sm:text-[6rem] md:text-[9rem]'>
            404
          </h1>
          <Typography variant='s1' className='mb-0 text-center font-adelphe'>
            The page you&#39;re looking for does not exist.
          </Typography>

          <div className='flex items-center gap-x-1'>
            <BaseLink
              href='/'
              className='flex items-center gap-x-1 font-primary text-lg underline decoration-white underline-offset-2 transition-colors duration-150 hover:decoration-gray-600'
            >
              <HiOutlineArrowNarrowLeft size={22} />
              Go Back
            </BaseLink>
          </div>
        </div>
      </section>
    </main>
  );
}
