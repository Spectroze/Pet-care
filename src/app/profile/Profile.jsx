"use client";
import React from "react";
import {
  Bell,
  Calendar,
  DollarSign,
  FileText,
  HelpCircle,
  Home,
  Pets,
  Settings,
  Users,
  MessageSquare,
  User,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4 flex flex-col">
      {/* Profile Photo Upload */}
      <div className="mb-6 text-center">
        <label htmlFor="profile-upload" className="cursor-pointer">
          <Avatar className="w-20 h-20 mx-auto mb-2">
            <AvatarImage src="/placeholder.svg" alt="Profile" />
            <AvatarFallback>HP</AvatarFallback>
          </Avatar>
          <span className="text-xs text-blue-300">Upload Photo</span>
        </label>
        <input
          id="profile-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            // Handle file upload here
            console.log("File selected:", e.target.files?.[0]);
          }}
        />
      </div>

      <div className="flex items-center mb-6">
        <img src="/logo.png" alt="Pet Sitter Logo" className="w-8 h-8 mr-2" />
        <h1 className="text-xl font-bold">Pet Sitter Dashboard</h1>
      </div>
      <nav className="flex-grow">
        <ul className="space-y-2">
          {/* ... (rest of the navigation buttons) ... */}
        </ul>
      </nav>
      <div className="mt-auto">
        <Button variant="ghost" className="w-full justify-start">
          <HelpCircle className="mr-2 h-4 w-4" />
          Help
        </Button>
      </div>
    </aside>
  );
}
