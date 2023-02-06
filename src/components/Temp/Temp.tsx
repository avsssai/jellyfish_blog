import { Fragment } from "react";
import { RichTextEntity } from "@/types/globalTypes";
import Paragraph from "../Paragraph";
import { Heading1, Heading2, Heading3 } from "../Headings/Headings";
import { ListItem } from "../ListElements";
import Todo from "../Todo";
import Image from "next/image";
import Quote from "../Quote";
import Text from "../Text";
import Toggle from "../Toggle";
import Code from "../Code";
export const renderBlock = (block: any) => {
	const { type, id } = block;
	const value = block[type];

	// const text = value[type]
	let richTextArr = value.rich_text as RichTextEntity[];
	switch (type) {
		case "paragraph":
			return <Paragraph richTextArr={richTextArr} />;
		case "heading_1":
			return <Heading1 richTextArr={richTextArr} />;
		case "heading_2":
			return <Heading2 richTextArr={richTextArr} />;
		case "heading_3":
			return <Heading3 richTextArr={richTextArr} />;
		case "bulleted_list_item":
		case "numbered_list_item":
			return <ListItem richTextArr={richTextArr} />;

		case "to_do":
			const checked = value.checked as boolean;
			return <Todo id={id} richTextArr={richTextArr} checked={checked} />;
		case "toggle":
			return <Toggle {...value} />;
		case "divider":
			return <div className='w-full border border-black mb-4'></div>;
		case "child_page":
			return <p>{value.title}</p>;
		case "quote":
			return <Quote richTextArr={richTextArr} />;
		case "image":
			const src = value.type === "external" ? value.external.url : value.file.url;
			const caption = value?.caption ? value.caption[0]?.plain_text : "";
			return (
				<figure className='w-full relative h-full aspect-[4/3] mb-8'>
					<Image src={src} alt={caption} fill />
					{caption && <figcaption>{caption}</figcaption>}
				</figure>
			);
		case "code":
			return <Code {...value} />;
		default:
			return `❌ Unsupported block (${type === "unsupported" ? "unsupported by Notion API" : type})`;
	}
};

export default function Temp({ text }: { text: string }) {
	return <div>{text}</div>;
}
