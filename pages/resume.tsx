import { Box, Divider, Stack, Typography } from "@mui/material";
const resume_details = [
	{
		type: "Education",
		where: "Grinnell College, Grinnell, Iowa",
		when: "2015 – 2019",
		title: "Bachelor of Arts in Computer Science and Studio Art",
		details: [],
	},
	{
		type: "Experience",
		where: "Remote, Boston",
		when: "Jan 2022 – Present",
		title: "Software Engineer",
		who: "Legitimate Tech",
		details: [
			"Developed bidding platform using React, GraphQL and NestJS for web3 and non-web3 creatives",
			"Conceptualized Atomic design principles to build a deliberate interface design system in React",
			"Crafted user personas and stories to improve the product for target audience",
			"Implemented a REST API in Ruby to verify encrypted codes from NFC chips",
			"Increased test coverage by 70% across the platform through integration and unit tests",
		],
	},
	{
		type: "Experience",
		where: "Boston, Massachusetts",
		when: "June 2019 – Dec 2021",
		title: "Software Engineer",
		who: "Fidelity Investments",
		details: [
			"Provided leadership and technical direction for customized components within internal applications",
			"Developed personalized applications to aid Project Managers perform their job more efficiently",
			"Translated wireframes into responsive, interactive features using HTML, SCSS and Typescript",
			"Utilized agile methodologies in everyday practice to impose continuous integration and development",
		],
	},

	{
		type: "Experience",
		where: "Boston, Massachusetts",
		when: "May 2018 - Aug 2018",
		title: "Technical Intern",
		who: "Fidelity Investments",
		details: [
			"Crafted front end application for Admin Console UI which will allow Help Desk employees to adjust trader preferences",
			"Collaborated with technical intern in order to construct a RESTful service to connect to Admin Console UI application",
			"Executed manual component testing on modules using Jest, Jenkins and uDeploy",
		],
	},
	{
		type: "Research",
		where: "Grinnell, Iowa",
		when: "May 2017 – July 2017",
		title: "Undergraduate Researcher",
		who: "GLIMMER Labs",
		details: [
			"Analyzed participant demographics using t-tests for over 500 coding camps to identify characteristics of students being targeted for computer programming",
			"Collaborated with six other computer scientists to develop curricula for elementary and middle school coding camps teaching Scratch and Python",
			"Co-authored and submitted research paper to the SIGCSE 2018 Technical Symposium",
		],
	},
];
export default function Resume() {
	return (
		<Stack spacing={2}>
			<Typography color={"primary.main"} variant="h5">
				Education
			</Typography>
			<Divider />

			{resume_details
				.filter((x) => x.type === "Education")
				.map((item, index) => (
					<Box>
						<Typography variant="h6" color={"#f66466"}>
							{item.who}
						</Typography>
						<Typography>{item.where}</Typography>
						<Typography variant="body2">{item.title}</Typography>
						<Typography variant="body2">{item.when}</Typography>
						{item.details &&
							item.details.map((det, i) => <li key={i}>{det}</li>)}
					</Box>
				))}
			<Typography color={"primary.main"} variant="h5">
				Experience
			</Typography>
			<Divider />
			{resume_details
				.filter((x) => x.type === "Experience")
				.map((item, index) => (
					<Box>
						<Typography variant="h6" color={"#f66466"}>
							{item.who}
						</Typography>
						<Typography variant="body2">{item.where}</Typography>
						<Typography variant="body2">{item.title}</Typography>
						<Typography variant="body2">{item.when}</Typography>
						{item.details &&
							item.details.map((det, i) => <li key={i}>{det}</li>)}
					</Box>
				))}
			<Typography color={"primary.main"} variant="h5">
				Research
			</Typography>
			<Divider />

			{resume_details
				.filter((x) => x.type === "Research")
				.map((item, index) => (
					<Box>
						<Typography variant="h6" color={"#f66466"}>
							{item.who}
						</Typography>
						<Typography variant="body2">{item.where}</Typography>
						<Typography variant="body2">{item.title}</Typography>
						<Typography variant="body2">{item.when}</Typography>
						{item.details &&
							item.details.map((det, i) => <li key={i}>{det}</li>)}
					</Box>
				))}
		</Stack>
	);
}
