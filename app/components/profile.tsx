import React from "react";
import { profiles } from "../lib/data";
import Image from "next/image";
import { HiDownload } from "react-icons/hi";

function Profile() {
  return (
    <div className="flex flex-col items-center w-[50%] px-8">
      {profiles.map((profile) => (
        <div
          key={profile.name}
          className="mt-7 mb-5 flex flex-col items-center px-2 gap-8"
          id={profile.id}
        >
          <Image
            src={profile.photo}
            width={150}
            height={150}
            alt={profile.name}
            className="h-36 w-36 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
          />
          <div className="flex flex-col gap-5">
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-3xl text-red-500">
                {profile.name}
              </h1>
              <h3>{profile.occupation}</h3>
            </div>

            <div className="grid grid-cols-2">
              <h2 className="text-red-500 font-bold justify-self-center">
                {profile.description_title}
              </h2>
              <p className="w-[100%]">{profile.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <h2 className="text-red-500 font-bold justify-self-center">
                Skills
              </h2>
              <ul className="list-disc">
                {profile.skills.map((skill) => (
                  <li className="" key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <a
            className="group bg-white text-gray-950 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
            href="/MattCV.pdf"
            download
          >
            Download CV
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>
        </div>
      ))}
    </div>
  );
}

export default Profile;
