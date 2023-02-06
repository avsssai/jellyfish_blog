import { Code as CodeType } from "@/types/globalTypes";
import Text from "../Text/Text";

export default function Code({ rich_text: richTextArr, language }: CodeType) {
	return (
		<pre className='bg-black p-4 overflow-scroll'>
			<div className='border-b mb-4 text-yellow-300 w-full max-w-fit'>{language}</div>
			<code className='text-white'>
				{richTextArr?.map((text) => (
					<Text rich_text={text} key={text.plain_text} />
				))}
			</code>
		</pre>
	);
}
