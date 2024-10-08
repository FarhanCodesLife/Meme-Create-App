import Image from "next/image";
import React from "react";

const Corousal = () => {
  return (
    <div className="carousel m-10 h-96 shadow-lg   border ">
      <div id="slide1" className="carousel-item relative w-full">
        <Image
         height={100}
         width={100}
          src="https://i.ytimg.com/vi/omV5m5ZXkLg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBm89E323fkZVDWmF-fmWvD_EklFA"
          className="w-full"
          alt="mmmm"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <Image
         height={100}
         width={100}
          src="https://media.licdn.com/dms/image/D5612AQGf0dUH2xs8WQ/article-cover_image-shrink_720_1280/0/1678729017267?e=2147483647&v=beta&t=qvg9zN8XysQ7LIdBjZYwG0t3TedZn5h_rilFdcxVxcQ"
          className="w-full"
          alt="nxnn"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <Image
         height={100}
         width={100}

          src="https://www.kapwing.com/resources/content/images/size/w1200/2020/01/image---2020-01-23T155051.930.jpg"
          className="w-full"
          alt="xb"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <Image
        height={100}
        width={100}
          src="https://thijsporck.com/wp-content/uploads/2022/01/oegrammarmeme.banner.jpg?w=1200"
          className="w-full"
          alt="jj"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Corousal;
