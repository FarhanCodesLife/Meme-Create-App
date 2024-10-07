"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const MemeGeneratorPage = () => {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMemes = async () => {
      try {
        const response = await fetch('https://api.imgflip.com/get_memes');
        const { data } = await response.json();
        setMemes(data.memes);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching memes:', error);
      }
    };
    fetchMemes();
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-white">VIP Meme Generator</h1>
        <p className="text-gray-400 mt-2">Create memes with premium ease and style</p>
      </header>

      <div className="flex flex-wrap justify-center gap-6">
        {loading ? (
          <h2 className="text-white text-2xl">Loading memes...</h2>
        ) : memes.length > 0 ? (
          memes.map((item: { name: string; id: string; url: string; box_count: string }) => (
            <div
              key={item.id}
              className="bg-gray-800 text-white rounded-lg shadow-lg p-4 transform transition-all hover:scale-105"
            >
              <Image src={item.url} height={200} width={200} alt={item.name} className="rounded-lg" />
              <h2 className="text-lg mt-4">{item.name}</h2>
              <Link
                href={{
                  pathname: '/creatememe',
                  query: {
                    id: item.id,
                    url: item.url,
                    box: item.box_count,
                  },
                }}
              >
                <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition">
                  Create Meme
                </button>
              </Link>
            </div>
          ))
        ) : (
          <h2 className="text-white text-2xl">No memes found</h2>
        )}
      </div>
    </div>
  );
};

export default MemeGeneratorPage;
