import React from "react";

export const links = [
  {
    name: "Intro",
    hash: "#intro",
  },
  {
    name: "Media Gallery",
    hash: "#gallery",
  },
  {
    name: "Nicholas CV",
    hash: "#nicholas",
  },
  {
    name: "Matthew CV",
    hash: "#matthew",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const galleryImages = [
  {
    name: "Image 1",
    url: "/gallery/pic1.png",
  },
  {
    name: "Image 2",
    url: "/gallery/pic2.png",
  },
  {
    name: "Image 3",
    url: "/gallery/pic3.png",
  },
  {
    name: "Image 4",
    url: "/gallery/pic4.png",
  },
  {
    name: "Image 5",
    url: "/gallery/pic5.png",
  },
  {
    name: "Image 6",
    url: "/gallery/pic6.png",
  },
  {
    name: "Image 7",
    url: "/gallery/pic7.png",
  },
  {
    name: "Image 8",
    url: "/gallery/pic8.png",
  },
  {
    name: "Image 9",
    url: "/gallery/pic9.png",
  },
  {
    name: "Image 10",
    url: "/gallery/pic10.png",
  },
  {
    name: "Image 11",
    url: "/gallery/pic11.png",
  },
  {
    name: "Image 12",
    url: "/gallery/pic12.png",
  },
] as const;

export const profiles = [
  {
    id: "nicholas",
    photo: "/nicholas.png",
    name: "Nicholas Michael Balanda",
    occupation: "Game Developer",
    description_title: "Untiy Developer",
    description:
      "I have been developing games from start to finish using the Unity game engine since 2014. I worked on various projects with my brother and taught Unity to a local course in Brazil. Currently im working on a shooting simulator in Évora, Portugal primarily for the trainning the police and armed forces but also for recreational purposes. I speak English and Portuguese fluently",
    skills: ["Unity3D", "Blender", "C#"],
    cv: "/MattCV.pdf",
  },
  {
    id: "matthew",
    photo: "/Photo 3.jpeg",
    name: "Matthew Robert Gluski Balanda",
    occupation: "Game Designer",
    description_title: "Level Designer",
    description: "Matthew Description",
    skills: ["Unity3D", "Blender", "C#", "Inkscape", "CorelDraw"],
    cv: "/MattCV.pdf",
  },
] as const;
