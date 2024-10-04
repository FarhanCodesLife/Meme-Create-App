"use client"
import Image from 'next/image';
import { useRouter } from 'next/router';

const CreateMeme = () => {
  const router = useRouter();

  // Safely extracting 'url' from query and ensuring it's a string
  const url = router.query.url as string | undefined;

  if (!url) {
    return <p>Loading...</p>;  // Show loading text until 'url' is available
  }

  return (
    <div>
      <h1>Create Meme Page</h1>
      {/* Ensure that 'url' is defined before using it */}
      <Image src={url} width={200} height={200} alt='meme' />
    </div>
  );
};

export default CreateMeme;
