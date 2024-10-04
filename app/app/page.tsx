import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = async () => {
  const response = await fetch('https://api.imgflip.com/get_memes')
    .then((response) => response.json())
    .then((response) => response.data)
    .catch((error) => console.log(error));

  console.log(response);

  return (
    <>
      <div className='flex flex-wrap justify-center gap-5 p-10 bg-gray-100 min-h-screen'>
        {response ? (
          response.memes.map((item: { name: string; id: string; url: string }) => {
            return (
              <div
                key={item.id}
                className='border border-gray-300 rounded-lg p-5 bg-white shadow-lg transform transition hover:scale-105'
              >
                <h1 className='text-lg font-bold'>ID: {item.id}</h1>
                <h1 className='text-lg font-semibold mb-3'>Name: {item.name}</h1>

                <Image src={item.url} height={200} width={200} alt={item.name} className='rounded-lg' />
                
                <Link  href={{
    pathname: '/creatememe',
    query: { 
    
      url:item.url 
    }
  }}>
                  <button className='mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600'>
                    Create Meme
                  </button>
                </Link>
              </div>
            );
          })
        ) : (
          <h1 className='text-xl font-bold text-red-500'>Memes not found</h1>
        )}
      </div>
    </>
  );
};

export default page;
