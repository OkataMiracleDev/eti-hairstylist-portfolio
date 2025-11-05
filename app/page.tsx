// "use client";
import Home from "@/components/Home/Home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Discover Eti’s hairstyling portfolio: braiding, plaiting, coloring, and grooming crafted with artistic precision.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <div className="relative w-full overflow-x-hidden px-5 md:px-20">
      <Home />
    </div>
  );
}
