"use client";
import { Navigation } from "../../components/nav";
import { Card } from "../../components/card";
import Image from 'next/image';
import kordakArt from '../../../public/images/kordakArt.png';


export default function Kordak() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto text-white">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-2 lg:gap-16">
          <div className="my-auto">
            <h1 className="text-2xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-2xl md:text-5xl whitespace-nowrap bg-clip-text center mb-4">
              Kordak Hangmüller
            </h1>
            <Card>
                <div className="z-10 flex flex-col items-center mx-4 my-4">
                  <span className="my-auto xl:text-2xl text-zinc-20 font-display animate-title">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,
                  </span>
                </div>
            </Card>
          </div>
          <div className="my-auto animate-title">
            <Image
              src={kordakArt}
              alt="Logo"
              objectFit="contain"
            />
          </div>
        </div>
			</div>
		</div>
	);
}