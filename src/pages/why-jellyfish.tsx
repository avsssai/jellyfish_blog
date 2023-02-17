import Page from "@/components/Page";
import Layout from "@/components/Layout";

export default function WhyJellyfish() {
	return (
		<Layout>
			<Page background='bgBeige min-h-screen'>
				<div className='mainLanding text-[100px] sm:text-[200px]  tracking-[-0.10em] leading-[0.7] font-messina mb-24 md:mb-48 text-white font-light 2xl:w-[1400px]'>
					why<div className='colorText text-bgRed/50'>the jellyfish?</div>
				</div>
				<div className='quote text-black/50 text-9xl'>&quot;</div>
				<div className='jellyfish max-w-[700px] text-2xl font-sans tracking-[-0.07rem]'>
					&quot;Why do you <span className='text-bgRed font-black text-2xl'> like jellyfish</span> so
					much?&rdquo; I asked. &ldquo;I don&apos;t know. I guess I think they&apos;re cute,&rdquo; she said.
					&ldquo;But one thing did occur to me when I was really focused on them. What we see before us is
					just one tiny part of the world. We get into the habit of thinking, This is the world, but
					that&apos;s not true at all. The real world is in a much darker and deeper place than this, and most
					of it is occupied by <span className='text-bgRed font-black'> jellyfish and things</span>. We just
					happen to forget all that. Don&apos;t you agree? Two thirds of the earth&apos;s surface is ocean,
					and all we can see of it with the naked eye is the surface: the skin. We hardly know anything about
					what&apos;s beneath the skin.”
				</div>
				<div className='text-bgRed font-black text-3xl font-messina tracking-[-0.10em] mt-6 ml-24'>
					- Haruki Murakami, The Wind-Up Bird Chronicle
				</div>
			</Page>
		</Layout>
	);
}
