"use client";
import Link from "next/link";
import Image from 'next/image';
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import montogomeryPic from '../../public/images/montgomery.jpg';
import slPic from '../../public/images/spielleiter.jpg';
import jellianPic from '../../public/images/jellian.jpg';
import kordakPic from '../../public/images/kordak.jpg';
import meiraPic from '../../public/images/meira.jpg';
import nallePic from '../../public/images/nalle.jpg';

const socials = [
	{
		icon: montogomeryPic,
		href: "/characters/montgomery",
		label: "Ronny",
		handle: "Montgomery",
	},
	{
		icon: meiraPic,
		href: "/characters/meira",
		label: "Nora",
		handle: "Meira",
	},
	{
		icon: nallePic,
		href: "/characters/nalle",
		label: "Malou",
		handle: "Nalle",
	},
	{
		icon: kordakPic,
		href: "/characters/kordak",
		label: "Pascal",
		handle: "Kordak",
	},
	{
		icon: jellianPic,
		href: "/characters/jellian",
		label: "Matthias",
		handle: "Jellian",
	},
	{
		icon: slPic,
		href: "/characters/spielleiter",
		label: "Spielleiter",
		handle: "Nikki",
	},
];

export default function Example() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					{socials.map((s) => (
						<Card>
							<Link
								href={s.href}
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
										<Image
											src={s.icon}
											alt="Logo"
											objectFit="contain"
											className="relative bottom-0 left-0 rounded-full border-2 bg-black"
										/>
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
