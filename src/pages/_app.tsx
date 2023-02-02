import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Merriweather } from "@next/font/google";

const merriweather = Merriweather({
	variable: "--font-merriweather",
	weight: ["300", "400", "700", "900"],
	subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={`${merriweather.variable} font-serif`}>
			<Component {...pageProps} />
		</main>
	);
}
