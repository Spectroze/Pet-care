import React from "react";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="bg-muted py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <img
          src="/group.png"
          width="500"
          height="400"
          alt="About Us"
          className="rounded-lg shadow-lg"
          style={{ aspectRatio: "500/400", objectFit: "cover" }}
        />
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">About PetCare Hub</h2>
          <p className="text-muted-foreground">
            PetCare Hub is a leading platform that connects pet owners with
            trusted pet sitting and veterinary services. Our mission is to
            provide a seamless and reliable experience for both pet owners and
            professionals, ensuring the well-being of our furry friends.
          </p>
          <p className="text-muted-foreground">
            With a team of passionate pet enthusiasts and a commitment to
            excellence, we strive to make pet care accessible and convenient for
            everyone.
          </p>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-[#d1f7d1] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
