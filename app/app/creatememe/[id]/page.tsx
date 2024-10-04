"use client"
import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
import Image from 'next/image';

const MemeCreate = (id:string) => {
//   const router = useRouter();
//   const { id } = router.query; // Get meme ID from the URL query

  const [meme, setMeme] = useState<any>(null);
  const [editedName, setEditedName] = useState<string>('');
  const [editedUrl, setEditedUrl] = useState<string>('');

  useEffect(() => {
    if (id) {
      // Fetch the meme details based on the ID
      fetch(`https://api.imgflip.com/get_memes`)
        .then((response) => response.json())
        .then((data) => {
          const foundMeme = data.data.memes.find((m: { id: string }) => m.id === id);
          setMeme(foundMeme);
          setEditedName(foundMeme?.name || '');
          setEditedUrl(foundMeme?.url || '');
        })
        .catch((error) => console.error('Error fetching meme:', error));
    }
  }, [id]);

  const handleSave = () => {
    // Logic to save the edited meme (to backend or state)
    console.log('Updated Meme Name:', editedName);
    console.log('Updated Meme URL:', editedUrl);
  };

  if (!meme) {
    return <h1 className='text-center text-2xl'>Loading Meme...</h1>;
  }

  return (
    <div className='flex flex-col items-center p-10'>
      <h1 className='text-3xl mb-5'>Edit Meme</h1>

      <div className='border p-5 rounded-lg shadow-lg bg-white'>
        <h2 className='text-lg font-semibold mb-3'>Meme ID: {meme.id}</h2>
        
        <Image src={editedUrl} height={300} width={300} alt={meme.name} className='rounded-lg mb-5' />

        <label className='block mb-3'>
          Meme Name:
          <input
            type='text'
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            className='border p-2 rounded-lg w-full mt-2'
          />
        </label>

        <label className='block mb-3'>
          Meme URL:
          <input
            type='text'
            value={editedUrl}
            onChange={(e) => setEditedUrl(e.target.value)}
            className='border p-2 rounded-lg w-full mt-2'
          />
        </label>

        <button
          onClick={handleSave}
          className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default MemeCreate;
