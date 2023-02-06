import { RichTextEntity } from "@/types/globalTypes";
import Text from "../Text/Text";
interface IProps {
	richTextArr: RichTextEntity[];
}
export default function Paragraph({ richTextArr }: IProps) {
	// let completeText = richTextArr.reduce((acc: string, cur: RichTextEntity) => (acc += cur.text.content), "");
	// return <p>{completeText}</p>;
	return (
		<p className='mb-4'>
			{richTextArr.map((text) => (
				<Text key={text.text.content} rich_text={text} />
			))}
		</p>
	);
}
