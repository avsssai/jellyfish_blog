import BlogLayout from "@/components/BlogLayout";
import Layout from "@/components/Layout";
import { renderBlock } from "@/components/Temp/Temp";
import { getBlocks, getDatabase, getPage } from "@/lib/notion";
import { GetStaticPaths, GetStaticProps } from "next";
import { Fragment } from "react";

const databaseId = process.env.NOTION_DATABASE_ID;

export default function Post({ page, blocks }: { page: any; blocks: any }) {
	console.log(page, blocks);

	return (
		<BlogLayout>
			<h1 className='text-5xl mb-8 font-black text-amber-500 mt-[108px]'>
				{page.properties.Name.title[0].text.content}
			</h1>
			<section>
				{blocks.map((block: any) => (
					<Fragment key={block.id}>{renderBlock(block)}</Fragment>
				))}
			</section>
		</BlogLayout>
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
