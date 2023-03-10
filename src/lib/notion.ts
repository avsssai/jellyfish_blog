import { Client } from "@notionhq/client";

const notion = new Client({
	auth: process.env.NOTION_TOKEN,
});

export const getDatabase = async (databaseId: any) => {
	const response = await notion.databases.query({
		database_id: databaseId,
	});
	return response.results;
};

export const getPage = async (pageId: any) => {
	const response = await notion.pages.retrieve({ page_id: pageId });
	return response;
};

export const getBlocks = async (blockId: any) => {
	const response = await notion.blocks.children.list({
		block_id: blockId,
		page_size: 50,
	});
	return response.results;
};
