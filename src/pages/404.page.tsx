import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

import BaseLink from '@/components/links/BaseLink';
import Typography from '@/components/typography/Typography';

export default function NotFoundPage() {
  return (
    <main>
      <section className='relative h-screen overflow-clip bg-[#201F1F] text-white'>
        <div className='flex h-full w-full -translate-y-6 flex-col items-center justify-center gap-y-1'>
          <Typography
            variant='k0'
            className='bg-gradient-to-tr from-blue-500 to-blue-400 bg-clip-text font-libre-caslon-condensed text-9xl text-transparent md:text-8xl'
          >
            404
          </Typography>
          <Typography variant='s0' className='pb-0 text-center font-adelphe'>
            The page you&#39;re looking for does not exist.
          </Typography>

          <div className='mt-4 flex items-center gap-x-1'>
            <HiOutlineArrowNarrowLeft size={22} />
            <BaseLink
              href='/'
              className='font-primary text-lg underline decoration-white underline-offset-2 transition-colors duration-150 hover:decoration-gray-600'
            >
              Go Back
            </BaseLink>
          </div>
        </div>
      </section>
    </main>
  );
}
