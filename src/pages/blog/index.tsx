import BlogLayout from "@/components/BlogLayout";
import Layout from "@/components/Layout";
import { getDatabase } from "@/lib/notion";
import { GetStaticProps } from "next";
import Link from "next/link";
import { format, parseISO } from "date-fns";
export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Blog({ posts }: { posts: any }) {
	console.log(posts);
	const dateCreated = format(parseISO(posts[0].created_time), "LLLL do, y");
	return (
		<BlogLayout>
			<div className='border-4 border-yellowPastel'></div>
			<div className='border-4 border-redPastel'></div>
			<div className='border-4 border-greenPastel'></div>
			<div className='border-4 border-bluePastel'></div>
			<div className='mx-4 mt-4 mb-8'>
				<div className='text-5xl font-black'>Blog.</div>
			</div>
			<div className=''>
				{posts.map((post: any) => (
					<Link href={`/blog/${post.id}`} key={post.id}>
						<div className='p-2 shadow-lg rounded-lg mb-4'>
							<h1 key={post.id} className='text-xl text-amber-500 font-bold mb-2'>
								{post.properties.Name.title[0].text.content}
							</h1>
							<p className='text-sm'>written on {dateCreated}</p>
						</div>
					</Link>
				))}
			</div>
		</BlogLayout>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const database = await getDatabase(databaseId);
	return {
		props: {
			posts: database,
		},
		revalidate: 1,
	};
};
