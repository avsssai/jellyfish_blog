import { RichTextEntity } from "@/types/globalTypes";

const styles = {
	spanClass: "",
};

export default function Text({ rich_text }: { rich_text: RichTextEntity }) {
	const { annotations, text, href } = rich_text;
	const { bold, code, color, italic, strikethrough, underline } = annotations;
	return (
		<span
			className={`${styles.spanClass} ${bold ? "font-bold" : ""} ${
				color === "default" ? `text-inherit` : `text-${color}-500`
			} ${code ? "font-mono bg-gray-300 before:content-['`'] after:content-['`']" : ""} ${
				italic ? "italic" : ""
			} ${strikethrough ? "line-through" : ""} ${underline ? "underline" : ""}`}>
			{text.link ? (
				<a href={text.link.url} className='text-blue-600 visited:text-purple-600 underline hover:no-underline'>
					{href}
				</a>
			) : (
				text.content
			)}
		</span>
	);
}
