import { RichTextEntity } from "@/types/globalTypes";
import Text from "../Text/Text";
interface IProps {
	richTextArr: RichTextEntity[];
}

export default function Quote({ richTextArr }: IProps) {
	return (
		<div className='mb-4 w-1/2 max-w-1/2 ml-8 px-3 py-8 italic border border-l-4 font-bold font-messina text-2xl border-le-bgRed/50 text-bgRed/50'>
			{richTextArr.map((text) => (
				<span key={text.plain_text}>
					<Text rich_text={text} />
				</span>
			))}
		</div>
	);
}
