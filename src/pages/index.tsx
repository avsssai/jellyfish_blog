import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightCircle } from "react-feather";

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
				<div className='main-content mx-4 font-black flex flex-col md:flex-row-reverse justify-center gap-10 md:mt-[14rem]'>
					<div className='image-container h-[300px] w-auto md:h-[500px] md:w-[500px] md:flex-1 min-w-mobileWidth min-h-mobileHeight  mb-16 relative'>
						<Image alt='graphic of me (jellyfish)' src='/images/jelly.svg' fill className='mx-auto' />
					</div>
					<div className='content md:max-w-[700px] md:flex-1 flex flex-col justify-center '>
						<div className='content1 mb-8 text-3xl md:text-4xl '>
							I{" "}
							<span className='z-10 relative isolate w-fit'>
								<span className='underline italic font-normal font-sans'>
									churn
									<span className='background absolute bg-yellowPastel z-[-1] inset-0'></span>
								</span>
							</span>{" "}
							words for a living and I{" "}
							<span className='z-10 relative isolate w-fit'>
								<span className='px-4 text-white font-sans'>
									love
									<span className='background absolute bg-redPastel z-[-1] inset-0'></span>
								</span>
							</span>{" "}
							it.
						</div>
						<div className='content2 mb-8 text-2xl font-semibold'>
							I write about the{" "}
							<span className='z-10 relative isolate w-fit '>
								<span className='text-red-500 font-normal italic break-keep px-1 font-sans'>
									books
									<span className='background absolute bg-greenPastel z-[-1] inset-0 '></span>
								</span>
							</span>{" "}
							I read, the{" "}
							<span className='z-10 relative isolate w-fit '>
								<span className='text-white font-sans font-thin italic break-keep underline px-1'>
									experiences
									<span className='background absolute bg-bluePastel z-[-1] inset-0 '></span>
								</span>
							</span>{" "}
							I had and much more!
						</div>
						<Link href={"/blog"}>
							<div className='blog-button p-4 bg-greenPastel w-fit font-sans font-bold flex items-center gap-1 rounded-md cursor-pointer'>
								read the blog <ArrowRightCircle size={18} />
							</div>
						</Link>
					</div>
				</div>
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
