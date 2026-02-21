"use client";

import { Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import messages from "@/messages.json";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      {/* Hero Section */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 md:px-24 py-20">
        <section className="text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Anonymous Feedback.
            <br />
            Honest Conversations.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300">
            A safe space where truth flows freely — and identity stays hidden.
          </p>
        </section>

        {/* Carousel */}
        <div className="mt-16 w-full max-w-3xl">
          <Carousel plugins={[Autoplay({ delay: 3000 })]} className="relative">
            <CarouselContent>
              {messages.map((message, index) => (
                <CarouselItem key={index} className="p-4">
                  <Card className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl rounded-2xl">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-white">
                        {message.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="flex items-start gap-4 text-gray-300">
                      <Mail className="w-5 h-5 text-purple-400 mt-1" />
                      <div>
                        <p className="text-base leading-relaxed">
                          {message.content}
                        </p>
                        <p className="text-xs text-gray-500 mt-3">
                          {message.received}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="text-white border-white/20 hover:bg-white/10" />
            <CarouselNext className="text-white border-white/20 hover:bg-white/10" />
          </Carousel>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-white/10 text-gray-500 text-sm">
        © {new Date().getFullYear()} True Feedback. All rights reserved.
      </footer>
    </div>
  );
}
