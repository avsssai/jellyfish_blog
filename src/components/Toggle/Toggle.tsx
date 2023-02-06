import { Toggle as ToggleType } from "@/types/globalTypes";
import { Fragment } from "react";
import { renderBlock } from "../Temp/Temp";
import Text from "../Text/Text";

export default function Toggle({ rich_text: richTextArr, color, children }: ToggleType) {
	return (
		<details>
			<summary>
				{richTextArr?.map((text) => (
					<Text rich_text={text} key={text.plain_text} />
				))}
			</summary>
			{children?.map((block: any) => (
				<Fragment key={block.id}>{renderBlock(block)}</Fragment>
			))}
		</details>
	);
}
