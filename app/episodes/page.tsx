"use client";
import Link from "next/link";
import Image from 'next/image';
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const episodes = [
	{
		id: "6VxtS_DBPCk",
		title: "S1E1 - Zurück in die (Magische) Schule",
		summary: "Taucht mit uns in ein eigenes Setting und Abenteuer ein, das sich rund um die neu errichtete Akademie zur Finsterwacht im weidener Finsterkamm dreht...",
	},
	{
		id: "W_Z0sY2Mxsc",
		title: "S1E2 - Elementare Grundlagen",
		summary: "Erlebt den Schulalltag unserer kleinen Truppe an Magierstudenten, die sich wohl bald mit mehr als nur skurrilen Lehrern, Hausaufgaben und erwachsenwerden herumschlagen müssen...",
	},
];

export default function Example() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full md:grid-cols-4 gap-8 mx-auto mt-24 sm:grid-cols-1">
					{episodes.map((s) => (
						<Card key={s.id}> 
							<Link 
								href={`https://www.youtube.com/watch?v=${s.id}`}
								className="text-white flex flex-col items-center duration-700 py-4 p-4"
							>
								<div> 
									{s.title}
								</div>
								<Image
								loader={() => {
									return `https://img.youtube.com/vi/${s.id}/0.jpg`;
								}}
								src="me.png"
								alt=""
								width={400}
								height={400}
								className="relative bottom-0 left-0 border-2 bg-black duration-1000"
								/>
								<div className="text-white flex flex-col items-center duration-1700 py-4 p-4"> 
									{s.summary}
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
