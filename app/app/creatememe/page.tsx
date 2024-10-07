"use client";
import Image from "next/image";
import { useRef, useState } from "react";

const CreateMeme = ({ searchParams }: { searchParams: { id: string, url: string, box: string } }) => {
  let [meme, setMeme] = useState<string | null>(null);
  let [loading, setLoading] = useState<boolean>(false); // Add loading state
  const inputRefs = useRef<HTMLInputElement[]>([]);

  // Converting box to a number and creating refs for each box dynamically
  const boxCount = parseInt(searchParams.box, 10) || 2;

  // Function to handle meme creation
  async function createMeme(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true); // Set loading to true when the request starts
    const texts = inputRefs.current.map((ref) => ref?.value || "");

    try {
      const data = await fetch(
        `https://api.imgflip.com/caption_image?template_id=${searchParams.id}&username=farhan12w&password=farhan0318&text0=${texts[0]}&text1=${texts[1]}&text2=${texts[2]}&text3=${texts[3]}`,
        { method: "POST" }
      );
      const response = await data.json();
      setMeme(response.data.url);
    } catch (error) {
      console.error("Error creating meme:", error);
    } finally {
      setLoading(false); // Set loading to false when the request is finished
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Create Meme Page</h1>
      <h2 className="text-xl font-semibold mb-4">Create Meme with {boxCount} Text Boxes</h2>

      {/* Display the meme image from URL */}
      {searchParams.url && (
        <Image
          src={searchParams.url}
          width={300}
          height={300}
          alt="meme"
          className="rounded-lg shadow-md mb-4"
        />
      )}

      {/* Meme creation form */}
      <form onSubmit={createMeme} className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg space-y-4">
        {/* Dynamically generate input fields based on box count */}
        {Array.from({ length: boxCount }, (_, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Text ${index + 1}`}
            ref={(el) => {
              if (el) inputRefs.current[index] = el;
            }}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        ))}

        {/* Submit button with loading spinner */}
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
          {loading ? <span className="loading loading-spinner text-info"></span> : "Create Meme"}
        </button>
      </form>

      {/* Display the created meme or loading spinner */}
      {meme ? (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Your Meme:</h3>
          <Image
            src={meme}
            width={300}
            height={300}
            alt="generated meme"
            className="rounded-lg shadow-md"
          />
          {/* Download Button */}
          <a
            href={meme}
            download="meme.jpg"  // Filename of the downloaded meme
            className="mt-4 bg-green-500 text-white p-2 rounded-md hover:bg-green-600 inline-block"
          >
            Download Meme
          </a>
        </div>
      ) : (
        loading && <span className="loading loading-spinner text-info mt-6"></span>
      )}
    </div>
  );
};

export default CreateMeme;
