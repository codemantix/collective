import Link from "next/link";
import NotFoundClient from "../components/ui/NotFoundClient";

export const metadata = {
  title: "Page Not Found - 404 | Codemantix Collective",
  description:
    "The page you're looking for doesn't exist. Explore our services, projects, or get in touch with Codemantix Collective.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Page Not Found - 404 | Codemantix Collective",
    description:
      "The page you're looking for doesn't exist. Explore our services, projects, or get in touch with Codemantix Collective.",
    type: "website",
  },
};

export default function NotFound() {
  return <NotFoundClient />;
}
