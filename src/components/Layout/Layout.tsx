import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu } from "react-feather";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main className='h-full min-h-screen bg-bgBeige w-full font-messina'>
			<div className='header flex  items-center mb-8 text-bgRed'>
				<nav className='header-content flex justify-between items-center w-full p-4 lg:p-8'>
					<Link href={"/"}>
						<div className='block md:block text-3xl text-bgRed/50 tracking-[-0.10em] leading-[0.9] font-bold'>
							the jellyfish
						</div>
					</Link>
					<div className='rightContent items-center gap-8 hidden md:flex'>
						<Link href={"/blog"}>
							<div className='font-bold text-2xl flex gap-4 items-center'>
								blog <ArrowRight />
							</div>
						</Link>

						<Link href={"/about"}>
							<div className='font-bold text-2xl flex gap-4 items-center'>
								about <ArrowRight />
							</div>
						</Link>
					</div>
					<div className='menu block md:hidden '>
						<Menu size={36} />
					</div>
				</nav>
			</div>
			{children}
			<footer className='border border-t flex bg-bgYello border-t-black'>
				<div className='text-3xl text-black p-4 tracking-[-0.10em] leading-[0.9] font-bold'>the jellyfish</div>
			</footer>
		</main>
	);
}
