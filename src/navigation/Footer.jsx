import React from "react";

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
            <a href="#" className="hover:text-[#F5A623] transition-colors">
              Facebook
            </a>
            <a href="#" className="hover:text-[#F5A623] transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-[#F5A623] transition-colors">
              Instagram
            </a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 PetCare Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
