import { RichTextEntity } from "@/types/globalTypes";
import Text from "../Text/Text";
interface IProps {
	richTextArr: RichTextEntity[];
}

export default function Quote({ richTextArr }: IProps) {
	console.log(richTextArr[0].plain_text, "quote");
	return (
		<div className='before:content-["`"] mb-4 bg-slate-200 w-1/2 max-w-1/2 ml-8 px-3 py-8 italic'>
			{richTextArr.map((text) => (
				<span key={text.plain_text}>
					<Text rich_text={text} />
				</span>
			))}
		</div>
	);
}
