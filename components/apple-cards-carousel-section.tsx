"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

const cards = [
  {
    src: "/P1026066.jpg",
    title: "450 PS",
    category: "Fahrspass pur",
    content: (
      <p>
        Titanium. So strong. So light. So Pro. <br />
        Introducing the iPhone 15 Pro, the ultimate iPhone experience.
      </p>
    ),
  },
  {
    src: "/images/apple-2.jpg",
    title: "iPad Pro",
    category: "Supercharged by M2.",
    content: (
      <p>
        The ultimate iPad experience with the most advanced technology.
      </p>
    ),
  },
  {
    src: "/images/apple-3.jpg",
    title: "MacBook Air",
    category: "Lean. Mean. M3 machine.",
    content: (
      <p>
        The world’s best-selling laptop. Now supercharged by the Apple M3 chip.
      </p>
    ),
  },
    {
    src: "/images/apple-3.jpg",
    title: "MacBook Air",
    category: "Lean. Mean. M3 machine.",
    content: (
      <p>
        The world’s best-selling laptop. Now supercharged by the Apple M3 chip.
      </p>
    ),
  },
    {
    src: "/images/apple-3.jpg",
    title: "MacBook Air",
    category: "Lean. Mean. M3 machine.",
    content: (
      <p>
        The world’s best-selling laptop. Now supercharged by the Apple M3 chip.
      </p>
    ),
  },
];

export default function AppleCardsCarouselSection() {
  return (
    <div className="my-12">
      <Carousel items={cards.map((card, i) => <Card key={i} card={card} index={i} />)} />
    </div>
  );
}
