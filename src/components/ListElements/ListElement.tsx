import { RichTextEntity } from "@/types/globalTypes";
import Text from "../Text/Text";
interface IProps {
	richTextArr: RichTextEntity[];
}

export function ListItem({ richTextArr }: IProps) {
	return (
		<li className=''>
			{richTextArr.map((text) => (
				<Text key={text.text.content} rich_text={text} />
			))}
		</li>
	);
}
