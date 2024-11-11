import Image from "next/image";
import React from "react";

function Intro() {
  return (
    <div className="max-w-full flex items-center justify-center" id="intro">
      <header className="min-h-[100vh] min-w-[160vh] relative grid place-items-center">
        <video
          className="absolute top-0 left-0 right-0 bottom-0 grid justify-center items-center -z-10"
          muted
          autoPlay
          loop
        >
          <source src="/trailer.mp4" type="video/mp4" />
        </video>
        <div className="text-white bg-black/80 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          <div className="flex flex-col items-center space-y-5 ">
            <h1 className="font-bold text-7xl absolute top-52">Balanda Bros</h1>
            <p className="font-bold text-2xl absolute top-72">
              Please check some of the games we made
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Intro;
