import Image from "next/image";
import Intro from "./components/intro";
import SectionDivider from "./components/section-divider";
import Gallery from "./components/gallery";
import Profile from "./components/profile";
import Contact from "./components/contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      <SectionDivider />
      <Gallery />
      <SectionDivider />
      <Profile />
      <SectionDivider />
      <Contact />
    </main>
  );
}
