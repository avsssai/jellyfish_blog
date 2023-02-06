import { RichTextEntity } from "@/types/globalTypes";
import Text from "../Text/Text";
interface IProps {
	richTextArr: RichTextEntity[];
}

export function Heading1({ richTextArr }: IProps) {
	return (
		<h1 className='text-4xl font-black mb-4'>
			{richTextArr.map((text) => (
				<Text key={text.text.content} rich_text={text} />
			))}
		</h1>
	);
}
export function Heading2({ richTextArr }: IProps) {
	return (
		<h2 className='text-2xl font-bold mb-4'>
			{richTextArr.map((text) => (
				<Text key={text.text.content} rich_text={text} />
			))}
		</h2>
	);
}

export function Heading3({ richTextArr }: IProps) {
	return (
		<h3 className='text-xl font-semibold mb-4'>
			{richTextArr.map((text) => (
				<Text key={text.text.content} rich_text={text} />
			))}
		</h3>
	);
}
