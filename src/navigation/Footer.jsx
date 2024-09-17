import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react"; // Adjust based on your icon library
import Link from "next/link"; // Ensure you're using the correct link component

export default function Footer() {
  return (
    <footer className="bg-[#4A90E2] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">PetCare Hub</h3>
            <p>Caring for your pets like family</p>
          </div>
          <div className="flex space-x-4">
            <Link href="https://facebook.com">
              <Facebook className="h-6 w-6 text-blue-600 hover:text-blue-800 mx-2" />
            </Link>
            <Link href="https://instagram.com">
              <Instagram className="h-6 w-6 text-pink-500 hover:text-pink-700 mx-2" />
            </Link>
            <Link href="https://twitter.com">
              <Twitter className="h-6 w-6 text-blue-400 hover:text-blue-600 mx-2" />
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} PetCare Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
