import GalleryCard from '@/components/gallery/card';
import Typography from '@/components/typography/Typography';

export default function gallery() {
  return (
    <main className='my-28 flex min-h-screen flex-col items-center justify-center'>
      <section className='mb-10 flex flex-col items-center justify-center gap-y-2'>
        <Typography
          variant='s2'
          className='bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text text-transparent'
        >
          GALLERY HMTC
        </Typography>
        <Typography variant='j2' className='font-adelphe'>
          From Capturing Moments to Sharing Memories
        </Typography>
      </section>

      <section className='mt-5 grid grid-cols-4 grid-rows-3 gap-20'>
        {/* todo: dynamic import, data fetch, etc */}
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
