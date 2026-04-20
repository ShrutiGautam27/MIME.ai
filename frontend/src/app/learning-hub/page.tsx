"use client";

import Header from "@/components/Landing_components/Header";
import { Play } from "lucide-react";

const tutorials = [
  {
    id: "1",
    title: "Learn ASL Alphabet - American Sign Language",
    description: "Master the ASL finger alphabet with this comprehensive guide",
    thumbnail: "https://img.youtube.com/vi/kpBPcR3iqIk/maxresdefault.jpg",
    videoId: "kpBPcR3iqIk",
    duration: "15:30",
    category: "Beginner",
  },
  {
    id: "2",
    title: "ASL Numbers 1-20 | Learn Sign Language",
    description: "Learn how to sign numbers 1-20 in American Sign Language",
    thumbnail: "https://img.youtube.com/vi/0-56M3T-oho/maxresdefault.jpg",
    videoId: "0-56M3T-oho",
    duration: "12:45",
    category: "Beginner",
  },
  {
    id: "3",
    title: "Common ASL Phrases for Daily Conversation",
    description: "Essential phrases to start conversations in ASL",
    thumbnail: "https://img.youtube.com/vi/4-s5pO3-vE8/maxresdefault.jpg",
    videoId: "4-s5pO3-vE8",
    duration: "20:15",
    category: "Intermediate",
  },
  {
    id: "4",
    title: "Colors in ASL - Learn Sign Language",
    description: "Learn to sign all the colors in American Sign Language",
    thumbnail: "https://img.youtube.com/vi/sJ0J6bZT1jU/maxresdefault.jpg",
    videoId: "sJ0J6bZT1jU",
    duration: "8:20",
    category: "Beginner",
  },
  {
    id: "5",
    title: "Family Signs - ASL for Family Members",
    description: "Learn how to sign mom, dad, siblings, and more",
    thumbnail: "https://img.youtube.com/vi/H5cJx9W1pwE/maxresdefault.jpg",
    videoId: "H5cJx9W1pwE",
    duration: "10:00",
    category: "Beginner",
  },
  {
    id: "6",
    title: "Emotions and Feelings in ASL",
    description: "Express emotions naturally in American Sign Language",
    thumbnail: "https://img.youtube.com/vi/7W5r2ZkqQz4/maxresdefault.jpg",
    videoId: "7W5r2ZkqQz4",
    duration: "14:30",
    category: "Intermediate",
  },
  {
    id: "7",
    title: " ASL Greetings and Introductions",
    description: "Learn proper greetings and how to introduce yourself",
    thumbnail: "https://img.youtube.com/vi/wCLX_h1v0qQ/maxresdefault.jpg",
    videoId: "wCLX_h1v0qQ",
    duration: "11:45",
    category: "Beginner",
  },
  {
    id: "8",
    title: "Food and Drinks Signs - ASL Vocabulary",
    description: "Essential food and drink signs for everyday use",
    thumbnail: "https://img.youtube.com/vi/3g3cZmhTz0Q/maxresdefault.jpg",
    videoId: "3g3cZmhTz0Q",
    duration: "16:20",
    category: "Intermediate",
  },
];

const categories = ["All", "Beginner", "Intermediate", "Advanced"];

export default function LearningHub() {
  const handleVideoClick = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ASL Learning Hub
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Video tutorials to help you learn American Sign Language at your own pace
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tutorials.map((tutorial) => (
            <div
              key={tutorial.id}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer"
              onClick={() => handleVideoClick(tutorial.videoId)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={tutorial.thumbnail}
                  alt={tutorial.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {tutorial.duration}
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    tutorial.category === "Beginner" 
                      ? "bg-green-500/20 text-green-400" 
                      : tutorial.category === "Intermediate"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-red-500/20 text-red-400"
                  }`}>
                    {tutorial.category}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-sm line-clamp-2 group-hover:text-purple-400 transition-colors duration-300">
                  {tutorial.title}
                </h3>
                <p className="text-gray-400 text-xs mt-1 line-clamp-2">
                  {tutorial.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-3xl p-8 md:p-12 border border-white/10">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Practice with Our Translation Tool
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              After watching these tutorials, try our translation tool to convert your text or audio into sign language animations
            </p>
            <a
              href="/upload"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
            >
              <Play className="w-5 h-5" />
              Start Translating
            </a>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 MIME.ai - Bridging communication gaps through AI-powered sign language translation
          </p>
        </div>
      </footer>
    </div>
  );
}