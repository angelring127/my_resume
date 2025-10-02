import { Metadata } from "next";
import ResumePage from "@/components/pages/ResumePage";

export const metadata: Metadata = {
  title: "Resume - SANG HO YOUN | Full Stack Engineer",
  description:
    "Professional resume of SANG HO YOUN, Full Stack Engineer with 7+ years experience in web development.",
  keywords:
    "Resume, CV, Full Stack Engineer, Web Developer, React, Laravel, Python",
};

export default function Resume() {
  return <ResumePage />;
}
