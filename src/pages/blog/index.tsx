import Layout from "@/components/Layout";
import { getDatabase } from "@/lib/notion";
import Image from "next/image";
import { GetStaticProps } from "next";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import Page from "@/components/Page";
export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Blog({ posts }: { posts: any }) {
	return (
		<Layout background='white'>
			<Page background='white' className='min-h-screen'>
				<div className='heading font-messina text-8xl md:text-[200px] text-bgRed/50 tracking-[-0.10em] leading-[0.7] mb-12'>
					Blog.
				</div>
				<div className='blogs-wrapper grid lg:grid-cols-2 lg:first:col-span-1 first-of-type:col-span-full'>
					{posts.map((post: any, index: number) => (
						<div key={post.id} className={`relative isolate ${index === 0 && "col-span-full"}`}>
							<div className='top-[-10px] left-0 text-[250px] z-10 text-gray-300 italic mb-[-200px] relative font-messina w-fit'>
								{String(index + 1).padStart(2, "0")}
							</div>

							<Link href={`/blog/${post.id}`}>
								<div className='p-2  rounded-lg mb-4'>
									<div className='image relative aspect-square object-contain w-full max-h-[1200px] z-3 mb-4'>
										<Image
											src={post.properties?.cover_image?.url}
											alt={
												post?.properties?.cover_image_alt?.rich_text[0]?.text?.content?.length >
												0
													? post?.properties?.cover_image_alt?.rich_text[0]?.text?.content
													: "A wallpaper standin photo for the blog post cover."
											}
											fill
										/>
									</div>
									<h1
										key={post.id}
										className=' text-4xl md:text-6xl text-bgRed/50 font-bold mb-2 tracking-[-0.08em] leading-[0.7]'>
										{post?.properties?.Name?.title[0]?.text?.content}
									</h1>
									<p className='text-xl text-gray-500'>
										written on {format(parseISO(post?.created_time), "LLLL do, y")}
									</p>
								</div>
							</Link>
						</div>
					))}
				</div>
			</Page>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const database = await getDatabase(databaseId);
	return {
		props: {
			posts: database,
		},
		revalidate: 1,
	};
};
