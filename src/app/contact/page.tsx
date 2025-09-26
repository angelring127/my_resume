import { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact - SANG HO YOUN | Full Stack Developer",
  description:
    "Get in touch with SANG HO YOUN for full-stack development opportunities and collaborations.",
  keywords:
    "Contact, Full Stack Developer, Vancouver, Remote Work, Collaboration",
};

export default function Contact() {
  return <ContactPage />;
}
