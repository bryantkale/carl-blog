import {
	Box,
	ListItem,
	ListItemIcon,
	ListItemText,
	Stack,
	Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { goodReads } from "../posts/activity";
import FolderIcon from "@mui/icons-material/Folder";

export default function Bookshelf({ activity }) {
	const someBooks = activity[0].activities;

	return (
		<Stack direction="column" spacing={4}>
			<Typography color="primary.main" variant="h5">
				Currently Reading
			</Typography>
			<Box letterSpacing={0.5}>
				{someBooks
					.filter((x) => x.activity_type === "BookStatusReading")
					.map((item, index) => (
						<ul style={{ margin: 0 }} key={index}>
							<li>
								{item.product} by {item.author}
							</li>
						</ul>
					))}
			</Box>
			<Typography variant="h6" sx={{ textAlign: "center" }}>
				。゜゜(´Ｏ`) ゜゜。
			</Typography>
			<Box letterSpacing={0.5}>
				<Typography color="primary.main" variant="h5">
					Already Read
				</Typography>
				{someBooks
					.filter((x) => x.activity_type === "BookStatusRead")
					.map((item, index) => (
						<ul style={{ margin: 0 }} key={index}>
							<li>
								{item.product} by {item.author}
							</li>
						</ul>
					))}
			</Box>
			<Typography variant="h6" sx={{ textAlign: "center" }}>
				▓▒░(°◡°)░▒▓
			</Typography>
			<Box letterSpacing={0.5}>
				<Typography color="primary.main" variant="h5">
					Want to Read
				</Typography>
				{someBooks
					.filter((x) => x.activity_type === "BookStatusWantToRead")
					.map((item, index) => (
						<ul style={{ margin: 0 }} key={index}>
							<li>
								{item.product} by {item.author}
							</li>
						</ul>
					))}
			</Box>
		</Stack>
	);
}

export async function getStaticProps() {
	return {
		props: {
			activity: goodReads,
		},
	};
}
