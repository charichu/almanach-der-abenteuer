"use client";
import { ArrowLeft, Instagram, Youtube, Twitch, Music2  } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";


export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	const router = useRouter();
	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500  border-zinc-800 "
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between gap-4 duration-200 text-zinc-300 hover:text-zinc-100">
						<Link 
						 href="https://www.twitch.tv/almanach_der_abenteuer"				
						>
							<Twitch className="w-6 h-6 " />
						</Link>
						<Link 
						 href="https://www.youtube.com/@Almanach_der_Abenteuer"				
						>
							<Youtube className="w-6 h-6 " />
						</Link>
						<Link 
						 href="https://www.youtube.com/@Almanach_der_Abenteuer"				
						>
							<Instagram className="w-6 h-6 " />
						</Link>
						<Link 
						 href="https://www.instagram.com/almanachderabenteuer"				
						>
							<Music2 className="w-6 h-6 " />
						</Link>
					</div>

					<div className="duration-200 text-zinc-300 hover:text-zinc-100" onClick={() => router.back()}>
						<ArrowLeft className="w-6 h-6 " />
					</div>
				</div>
			</div>
		</header>
	);
};
