import Image from "next/image";
import HeroSection from "./components/heroSection";
import Card from "./components/card";
import Toppick from "./components/toppick";
import Blog from "./components/blog";
import Publisity from "./components/publisity";
import Instagram from "./components/instagram";

export default function Home() {
  return (
  <>
  <HeroSection/>
  <Card/>
  <Toppick/>
  <Publisity/>
  <Blog/>
  <Instagram/>
  </>
  );
}
