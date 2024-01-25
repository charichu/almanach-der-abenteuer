import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Image from 'next/image';

import { Instagram, Youtube, Twitch, Music2 } from "lucide-react";

const navigation = [
  { name: "Abenteurer", href: "/characters" },
  { name: "Episoden", href: "/episodes" },
  { name: "Youtube", href: "https://www.youtube.com/@Almanach_der_Abenteuer", icon: <Youtube size={20} /> },
  { name: "Twitch", href: "https://www.twitch.tv/almanach_der_abenteuer", icon: <Twitch size={20} /> },
  { name: "Discord", href: "https://discord.com/invite/qHYp4GU6", customIcon: <Image src="/images/spotify.png" width={20} height={20} alt="Discord" />},
  { name: "Spotify", href: "https://open.spotify.com/show/0zTnEHAwamoBHCw1b7vidi", customIcon: <Image src="/images/discord.png" width={20} height={20} alt="Spotify" />},
  { name: "Instagram", href: "https://www.instagram.com/almanachderabenteuer", icon: <Instagram size={20} /> },
  { name: "TikTok", href: "https://www.tiktok.com/@almanach_der_abenteuer", icon: <Music2 size={20} /> },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-white hover:text-zinc-300"
            >
              {item.icon ? item.icon : item.customIcon ? item.customIcon : item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        almanach <br></br>
        der abenteuer
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-300 ">
          Rollenspiel mit Liebe, Drama und Humor.
        </h2>
      </div>
    </div>
  );

}
