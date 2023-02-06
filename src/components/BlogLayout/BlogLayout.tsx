import Image from "next/image";
import Link from "next/link";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
	return (
		<main className='h-full min-h-screen bg-bgYellow w-full min-w-full px-4' style={{ border: "1px solid red" }}>
			<div className='header flex justify-center items-center mb-10 lg:w-[400px] m-auto'>
				<nav className='header-content flex justify-between items-center w-full m-4'>
					<Link href={"/"}>
						<div className='hidden md:block font-bold'>Home</div>
					</Link>
					<Link href={"/"}>
						<div className='flex justify-center items-center gap-2'>
							<Image src='/images/jellyfish.svg' width={30} height={30} alt='jellyfish logo' />
							<div className='font-black text-2xl'>the jellyfish</div>
						</div>
					</Link>
					<Link href={"/blog"}>
						<div className='font-bold'>Blog</div>
					</Link>
				</nav>
			</div>
			<div className='relative max-w-[600px] w-[100%] mx-auto'>{children}</div>
		</main>
	);
}
