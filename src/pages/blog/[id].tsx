import BlogLayout from "@/components/BlogLayout";
import Layout from "@/components/Layout";
import { renderBlock } from "@/components/Temp/Temp";
import { getBlocks, getDatabase, getPage } from "@/lib/notion";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { ArrowLeft } from "react-feather";
import { dateCreated } from ".";

const databaseId = process.env.NOTION_DATABASE_ID;

export default function Post({ page, blocks }: { page: any; blocks: any }) {
	console.log(page);
	return (
		<Layout background='white'>
			<div className='max-w-4xl flex flex-col mx-auto p-4 font-sans'>
				<Link
					href={"/blog"}
					className='flex items-center text-2xl text-bgRed/50 underline font-messina font-black mb-12'>
					<ArrowLeft size={24} /> Back
				</Link>
				<div className='image relative aspect-[4/3] object-cover rounded-lg w-full max-h-[720px] z-3 mb-4 '>
					<Image
						className='rounded-lg'
						src={page.properties.cover_image.url}
						alt={
							page.properties.cover_image_alt.rich_text[0].text.content.length > 0
								? page.properties.cover_image_alt.rich_text[0].text.content
								: "A wallpaper standin photo for the blog post cover."
						}
						fill
					/>
				</div>
				<h1 className='text-[100px] sm:text-[150px]  tracking-[-0.10em] leading-[0.7] font-black font-messina mb-4  text-bgRed/50'>
					{page?.properties?.Name?.title[0]?.text?.content}
				</h1>
				<div className='text-gray-500 font-bold text-xl mb-24 md:mb-48 '>{dateCreated(page)}</div>
				<section>
					{blocks?.map((block: any) => (
						<Fragment key={block?.id}>{renderBlock(block)}</Fragment>
					))}
				</section>
			</div>
		</Layout>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const database = await getDatabase(databaseId);
	return {
		paths: database.map((page: any) => ({ params: { id: page.id } })),
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps = async (context: any) => {
	const { id } = context.params;
	const page = await getPage(id);
	const blocks = await getBlocks(id);

	// Retrieve block children for nested blocks (one level deep), for example toggle blocks
	// https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
	const childBlocks = await Promise.all(
		blocks
			.filter((block: any) => block.has_children)
			.map(async (block) => {
				return {
					id: block.id,
					children: await getBlocks(block.id),
				};
			})
	);
	const blocksWithChildren = blocks.map((block: any) => {
		// Add child blocks if the block should contain children but none exists
		if (block.has_children && !block[block.type].children) {
			block[block.type]["children"] = childBlocks.find((x) => x.id === block.id)?.children;
		}
		return block;
	});

	return {
		props: {
			page,
			blocks: blocksWithChildren,
		},
		revalidate: 1,
	};
};
