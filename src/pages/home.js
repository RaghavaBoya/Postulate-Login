import React from "react";
import theme from "theme";
import { Theme, Link, Text, List, Box, Section, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
import { FaPlaneDeparture, FaClipboardList, FaBookOpen } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				HomePage - JJ
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="0px 0 0px 0">
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
			>
				<Text margin="0" md-margin="0px 0 20px 0" text-align="left" font="normal 900 50px/1.5 --fontFamily-googleTeko">
					JOURNEY DIARIES
				</Text>
				<Link href="#" color="#000000" />
				<List
					margin="0px 0px 0px 0px"
					padding="0px 0px 0px 20px"
					as="ul"
					list-style-type="none"
					flex="0 1 auto"
					order="1"
					display="flex"
				>
					<Link
						href="#"
						color="#000000"
						padding="8px 12px 6px 12px"
						text-decoration-line="initial"
						display="flex"
						font="30px/30px --fontFamily-googleTeko"
						hover-color="--lightD2"
						transition="background-color 0.1s ease 0s"
					>
						Home
					</Link>
					<Link
						href="#"
						color="#000000"
						padding="8px 12px 6px 12px"
						text-decoration-line="initial"
						display="flex"
						font="30px/30px --fontFamily-googleTeko"
						hover-color="--lightD2"
						transition="background-color 0.1s ease 0s"
					>
						About
					</Link>
					<Link
						href="#"
						color="white"
						padding="6px 12px 6px 12px"
						text-decoration-line="initial"
						display="flex"
						font="30px/30px --fontFamily-googleTeko"
						hover-color="--lightD2"
						transition="background-color 0.1s ease 0s"
						background="#3468d3"
						border-style="solid"
						border-width="2px"
						hover-background="#898c96"
					>
						LOGIN
					</Link>
					<Link
						href="#"
						color="white"
						padding="6px 12px 6px 12px"
						margin-left="0.4em"
						text-decoration-line="initial"
						display="flex"
						font="30px/30px --fontFamily-googleTeko"
						hover-color="--lightD2"
						transition="background-color 0.1s ease 0s"
						background="#3468d3"
						border-style="solid"
						border-width="2px"
						hover-background="#898c96"
					>
						REGISTER
					</Link>
				</List>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" background="url(https://wallpaperaccess.com/full/1386030.jpg) 0% 0%/cover no-repeat,#EDF2F6" sm-padding="60px 0 60px 0">
			<Box
				width="100%"
				display="flex"
				flex-direction="column"
				md-width="100%"
				md-align-items="center"
				md-justify-content="center"
				md-text-align="center"
				lg-width="100%"
				margin="0px 0px 56px 0px"
				align-items="center"
			>
				<Text
					margin="0px 0px 16px 0px"
					font="--headline2"
					color="--dark"
					md-text-align="center"
					sm-font="normal 700 32px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					text-align="center"
				>
					Make your own Journal for you Jorneys
				</Text>
			</Box>
			<Box display="grid" grid-template-columns="repeat(3, 1fr)" grid-gap="32px 4%" md-grid-template-columns="1fr">
				<Box
					padding="45px 45px"
					lg-padding="45px 30px"
					md-padding="45px 45px"
					background="#FFFFFF"
					border-radius="24px"
					justify-content="flex-start"
					flex-direction="column"
					display="flex"
					opacity="0.5"
					hover-opacity="1"
					hover-transform="skew(0deg, 0deg)"
					hover-mix-blend-mode="normal"
					mix-blend-mode="screen"
					md-opacity="1"
					md-mix-blend-mode="normal"
				>
					<Icon
						category="fa"
						icon={FaPlaneDeparture}
						margin="0px 0px 30px 0px"
						color="--dark"
						size="48px"
					/>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Travel
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="#000000"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						Traveling? Record your experiences 
				hassle-free with our webApp! Create your 
				own electronic diary and travel light. 
				Start preserving memories effortlessly today!
					</Text>
				</Box>
				<Box
					padding="45px 45px"
					lg-padding="45px 30px"
					md-padding="45px 45px"
					background="#FFFFFF"
					border-radius="24px"
					justify-content="flex-start"
					flex-direction="column"
					display="flex"
					opacity="0.5"
					mix-blend-mode="screen"
					hover-opacity="1"
					hover-mix-blend-mode="normal"
					md-opacity="1"
					md-mix-blend-mode="normal"
				>
					<Icon
						category="fa"
						icon={FaClipboardList}
						margin="0px 0px 30px 0px"
						color="--dark"
						size="48px"
					/>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Bucket List
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						We provide an option to make 
				your own Bucket List with our help, 
				so that you don't forget any place.{" "}
					</Text>
				</Box>
				<Box
					padding="45px 45px"
					lg-padding="45px 30px"
					md-padding="45px 45px"
					background="#FFFFFF"
					border-radius="24px"
					justify-content="flex-start"
					flex-direction="column"
					display="flex"
					mix-blend-mode="screen"
					opacity="0.5"
					hover-opacity="1"
					hover-mix-blend-mode="normal"
					md-opacity="1"
					md-mix-blend-mode="normal"
				>
					<Icon
						category="fa"
						icon={FaBookOpen}
						margin="0px 0px 30px 0px"
						color="--dark"
						size="48px"
					/>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Record
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						Write you experience. Upload Photos and Videos to store your Memories.
					</Text>
				</Box>
			</Box>
		</Section>
		<Section background-color="--dark" text-align="center" padding="32px 0" quarkly-title="Footer-1">
			<List
				margin="0px 0px 0px 0px"
				padding="12px 0px 12px 0px"
				list-style-type="none"
				as="ul"
				display="flex"
				align-items="center"
				justify-content="center"
			>
				<Link
					href="#"
					color="white"
					padding="6px 12px 6px 12px"
					text-decoration-line="initial"
					display="flex"
					font="20px/30px sans-serif"
					hover-color="--lightD2"
					transition="background-color 0.1s ease 0s"
				>
					About
				</Link>
				<Link
					href="#"
					color="white"
					padding="6px 12px 6px 12px"
					text-decoration-line="initial"
					display="flex"
					font="20px/30px sans-serif"
					hover-color="--lightD2"
					transition="background-color 0.1s ease 0s"
				>
					Services
				</Link>
				<Link
					href="#"
					color="white"
					padding="6px 12px 6px 12px"
					text-decoration-line="initial"
					display="flex"
					font="20px/30px sans-serif"
					hover-color="--lightD2"
					transition="background-color 0.1s ease 0s"
				>
					Contacts
				</Link>
			</List>
			<Link
				href="mailto:hello@company.com"
				text-decoration-line="none"
				variant="--base"
				color="--grey"
				hover-color="--primary"
			>
				hello@company.com
			</Link>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"64948d1991dc65001840fab9"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});
