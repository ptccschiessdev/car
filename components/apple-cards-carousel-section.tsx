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
    // src replaced with video embed as cover
    video: (
      <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <iframe
          id="ik-vod-1jijk03u53gzq"
          class="ik-player-1jhvl2upwockr ik-embed"
          src="https://player.vod2.infomaniak.com/embed/1jijk03u53gzq"
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
          frameBorder={"0"}
          allow="autoplay; fullscreen; picture-in-picture"
          title="audi finished"
        ></iframe>
      </div>
    ),
    title: "Purer Sound",
    category: "Maximale Performance",
    content: (
      <p>
        The ultimate iPad experience with the most advanced technology.
      </p>
    ),
  },
  {
    src: "/20250831_1stCarRigTesting/I97A4838.jpg",
    title: "MacBook Air",
    category: "Lean. Mean. M3 machine.",
    content: (
      <p>
        The world’s best-selling laptop. Now supercharged by the Apple M3 chip.
      </p>
    ),
  },
    {
    src: "/20250831_1stCarRigTesting/I97A4849.jpg",
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
