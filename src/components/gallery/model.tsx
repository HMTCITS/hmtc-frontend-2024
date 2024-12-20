import Typography from '@/components/typography/Typography';

export default function Model() {
  return (
    <section className='flex flex-col items-center gap-2 bg-white p-10'>
      <Typography
        variant='s2'
        className='bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text text-transparent'
      >
        ACCESS RESTRICTED
      </Typography>
      <Typography variant='h1' className='font-adelphe'>
        Please enter your NRP to access this page.
      </Typography>
      <form action='' className='flex w-full flex-col justify-center'>
        <input
          type='text'
          name=''
          id=''
          placeholder='NRP'
          className='w-full rounded-sm px-2 py-1 outline outline-offset-2 outline-zinc-500'
        />
        <button
          type='submit'
          className='w-100 mt-5 text-center font-medium underline underline-offset-4'
        >
          Submit
        </button>
      </form>
    </section>
  );
}
