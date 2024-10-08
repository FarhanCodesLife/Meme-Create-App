import Image from "next/image";
import Link from "next/link";
import React from "react";
import Corousal from "./components/Corousal";

const page = async () => {
  const response = await fetch("https://api.imgflip.com/get_memes")
    .then((response) => response.json())
    .then((response) => response.data)
    .catch((error) => console.log(error));

  console.log(response);

  return (
    <>
      <div className="flex justify-center m-5 rounded-xl">
        <Corousal />
      </div>
      <div className="text-start text-2xl p-3 px-10">
        <h1>Templetes</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-5 p-10 bg-gray-100 min-h-screen ">
        {response ? (
          response.memes.map(
            (item: {
              name: string;
              id: string;
              url: string;
              box_count: string;
            }) => {
              return (
                <div
                  key={item.id}
                  className="border border-gray-300 text-center rounded-lg p-5  bg-white shadow-lg transform transition hover:scale-105"
                >
                  <Image
                    src={item.url}
                    height={200}
                    width={200}
                    alt={item.name}
                    className="rounded-lg h-52"
                  />

                  <Link
                    href={{
                      pathname: "/creatememe",
                      query: {
                        id: item.id,
                        url: item.url,
                        box: item.box_count,
                      },
                    }}
                  >
                    <button className="mt-4 bg-blue-500  text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                      Create Meme
                    </button>
                  </Link>
                </div>
              );
            }
          )
        ) : (
          <h1 className="text-xl font-bold text-red-500">Memes not found</h1>
        )}
      </div>
    </>
  );
};

export default page;
