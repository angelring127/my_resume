import { Metadata } from "next";
import PortfolioPage from "@/components/pages/PortfolioPage";

export const metadata: Metadata = {
  title: "Portfolio - SANG HO YOUN | Full Stack Developer",
  description:
    "Explore my portfolio of full-stack development projects including React, Next.js, Laravel, and Python applications.",
  keywords:
    "Portfolio, Projects, Full Stack Development, React, Next.js, Laravel, Python",
};

export default function Portfolio() {
  return <PortfolioPage />;
}
