import Bust from "@/components/Bust";
import Layout from "@/components/Layout";
import Page from "@/components/Page";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownCircle, ArrowRightCircle, Twitter } from "react-feather";

export default function Home() {
	return (
		<>
			<Head>
				<title>The Jellyfish</title>
				<meta name='description' content='The jellyfish blog.' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Layout>
				<Page background='bgBeige' className='min-h-[80vh] md:min-h-screen flex flex-col mt-24 relative'>
					<div className='absolute bottom-10 right-10 hidden md:block'>
						<Bust height={"45vw"} width={"45vw"} />
					</div>
					<div className='mainLanding text-[100px] sm:text-[200px]  tracking-[-0.10em] leading-[0.7] font-messina mb-24 md:mb-48 text-white font-light 2xl:w-[1400px]'>
						the personal site of <span className='colorText text-bgRed/50'>the jellyfish.</span>
					</div>
					<div className='mainPage-links flex flex-col gap-4 mb-16 '>
						<Link href={"/why-jellyfish"} className='text-bgRed/80 text-2xl  md:text-4xl underline'>
							why &quot;the jellyfish?&quot;
						</Link>
						<Link href={"/blog"} className='text-bgRed/80 text-2xl underline md:text-4xl '>
							piece of my mind (blog)
						</Link>
					</div>
					<div className='scroll-bottom-button md:mt-24 lg:mt-48'>
						<ArrowDownCircle size={48} color='#DE8F85' />
					</div>
				</Page>
				<Page background='text-bgBeige/90 flex flex-col min-h-screen md:justify-around'>
					{/* <div className='heading font-black text-5xl md:text-7xl font-messina tracking-[-0.10em] leading-[0.9] mt-8 text-bgRed/80'>
						currently reading
					</div> */}
					<div className='mainLanding text-[100px] sm:text-[200px]  tracking-[-0.10em] leading-[0.7] font-messina mb-12 md:mb-48 text-white font-light 2xl:w-[1400px]'>
						currently<div className='colorText text-bgRed/50'>reading</div>
					</div>
					<div className='content flex flex-col lg:flex-row mt-8 md:mt-24 max-w-[1200px] self-center'>
						<div className='flex-1 items-center justify-center'>
							<div className='image relative aspect-[12/18] min-h-[250px] max-h-[400px] lg:max-h-[600px] mx-auto my-12'>
								<Image
									src='/images/image.png'
									alt="cover photo of salman rushdie's Golden house"
									fill
								/>
							</div>
						</div>
						<div className='bookExcerpt flex flex-col flex-1 mb-8 mx-auto px-8 lg:w-[900px] lg:text-xl justify-center'>
							<div className='bookDetails mb-8'>
								<div className='flex flex-col items-center justify-center gap-2'>
									<div className='title text-5xl font-book tracking-[-0.10em] leading-[0.9] font-messina text-bgRed/80'>
										Golden House
									</div>
									<div className='flex gap-2'>
										<span>By Salman Rushdie</span>
										<span>August 2017</span>
									</div>
								</div>
							</div>
							<div className='flex flex-col gap-8 max-w-[500px] tracking-[-0.08em]'>
								<p>
									““The Golden House” was my first book from Salman Rushdie, his thirteenth novel to
									date. It begins 20 January 2009, with Barack Obama’s inauguration as the 44th
									President of the United States, setting the stage by reminding us of the economic
									ruin following the mortgage crisis that President Obama inherited.
								</p>
								<p>
									On the same day, Nero Golden, his three sons, Petronius, or Petya, Lucius Apuleius,
									or Apu and Dionysius, or D, arrive in the US from an unnamed country of origin,
									moving into a new abode in the “Gardens,” an exclusive area of Greenwich Village
									where all of the 22 houses are linked connected by their garden hidden away
									<span className='text-bgRed/80 font-bold'>....Read More</span>
								</p>
							</div>
						</div>
					</div>
				</Page>
				<Page background=''>
					{/* <div className='heading font-black text-5xl mb-16 font-messina tracking-[-0.10em] leading-[0.9] mt-8 text-bgRed md:text-7xl'>
						more about me
					</div> */}
					<div className='mainLanding text-[100px] sm:text-[200px]  tracking-[-0.10em] leading-[0.7] font-messina mb-24 md:mb-48 text-white font-light 2xl:w-[1400px]'>
						more<div className='colorText text-bgRed/50'>about me</div>
					</div>
					<div className='about flex flex-col gap-8 font-messina max-w-[1200px] text-[32px] '>
						<p className='text-black/80  leading-[1] tracking-[-0.07em] '>
							I am a lawyer who minces words for a living, I like all things yellow. My happy place is
							anywhere I am not disturbed, with a book in my hand, a candle burning and a hot chocolate to
							sip on.
						</p>
						<p className='text-black/80 leading-[1] tracking-[-0.07em]'>
							Send me a picture of your dog or just follow to get daily updates of my life on the socials
							below.
						</p>
						<p>
							<Link
								href={"https://twitter.com/catfishhwho"}
								className='text-3xl flex items-center  gap-2 underline text-black/80'>
								twitter <Twitter color='#1DA1F2' />
							</Link>
						</p>
					</div>
				</Page>
			</Layout>
		</>
	);
}

interface IWordBackground {
	children: React.ReactNode;
	bgColor: string;
	fitting?: boolean;
}

const WordBackground = ({ children, bgColor, fitting = true }: IWordBackground) => {
	const customClass = fitting
		? `background absolute bg-${bgColor} z-[-1] inset-0 right-2`
		: `background absolute bg-${bgColor} z-[-1] inset-0  left-[2] right-[-2]`;
	const customParent = fitting ? `z-10 relative isolate w-fit` : `z-10 relative isolate w-fit p-1`;
	return (
		<span className={customParent}>
			{children} <span className={customClass}></span>
		</span>
	);
};
