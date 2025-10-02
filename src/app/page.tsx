import { Metadata } from "next";
import LandingPage from "@/components/pages/LandingPage";

export const metadata: Metadata = {
  title: "SANG HO YOUN - Full Stack Developer | Vancouver, Canada",
  description:
    "Full Stack Developer with 7+ years experience in React, Next.js, Laravel, Python. Based in Vancouver, Canada.",
  keywords:
    "Full Stack Developer, React, Next.js, Laravel, Python, Vancouver, Remote Work",
};

export default function Home() {
  return <LandingPage />;
}
