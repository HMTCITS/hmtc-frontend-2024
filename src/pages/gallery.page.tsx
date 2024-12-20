import GalleryCard from '@/components/gallery/card';
import Model from '@/components/gallery/model';
import Typography from '@/components/typography/Typography';

export default function gallery() {
  return (
    <main className='my-28 flex min-h-screen flex-col items-center justify-center'>
      {/* Model Login Screen */}
      <section className='fixed inset-0 z-[100] bg-black bg-opacity-50' />
      <section className='fixed inset-0 z-[100] flex items-center justify-center'>
        <Model />
      </section>

      {/* Gallery */}
      <section className='mb-10 flex flex-col items-center justify-center gap-y-2'>
        <Typography
          variant='s2'
          className='bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text text-transparent'
        >
          GALLERY HMTC
        </Typography>
        <Typography
          variant='j2'
          className='px-2 text-center font-adelphe sm:px-5 md:px-3'
        >
          From Capturing Moments to Sharing Memories
        </Typography>
      </section>

      <section className='mt-5 grid grid-cols-1 grid-rows-1 gap-20 sm:grid-rows-1 sm:gap-5 md:grid-cols-3 md:gap-10 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4'>
        {/* todo: fetch statis dari src/images? */}
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
        <GalleryCard />
      </section>
    </main>
  );
}
