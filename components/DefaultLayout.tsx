import Head from "next/head";
import Image from "next/image";
import styles from "../styles/utils.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { Header } from "./Header";
import Footer from "./Footer/Footer";
import { Container } from "@mui/material";

const name = "Carl";
export const siteTitle = "CNB";

export default function DefaultLayout({ children, home }) {
	return (
		<>
			<Container
				sx={{
					backgroundColor: "background.default",
					minHeight: "100vh",
					padding: "0 0.5rem",
				}}
			>
				<Header />
				{/* <Head>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Learn how to build a personal website using Next.js"
				/>
				<meta
					property="og:image"
					content={`https://og-image.vercel.app/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head> */}

				<main>{children}</main>
				{!home && (
					<div className={styles.backToHome}>
						<Link href="/">
							<a>← Back to home</a>
						</Link>
					</div>
				)}
			</Container>
			<Footer />
		</>
	);
}
