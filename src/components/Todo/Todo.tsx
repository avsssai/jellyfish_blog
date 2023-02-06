import { RichTextEntity } from "@/types/globalTypes";
import Text from "../Text/Text";
interface IProps {
	richTextArr: RichTextEntity[];
	id: string;
	checked: boolean;
}

export default function Todo({ richTextArr, id, checked }: IProps) {
	const [] = richTextArr;
	return (
		<div>
			<label htmlFor={id}>
				{richTextArr.map((text) => (
					<div key={text.plain_text}>
						<input type='checkbox' id={id} defaultChecked={checked} /> <Text rich_text={text} />
					</div>
				))}
			</label>
		</div>
	);
}
