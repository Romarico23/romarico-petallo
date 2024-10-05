import React from "react"
import "./about.css"
import { motion as m } from "framer-motion"

export const About = () => {
	const listVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
	}

	return (
		<m.section
			className="about"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.1, ease: "easeInOut" }}
			exit={{ opacity: 0 }}
		>
			<div className="about-content">
				<h1>
					About <span>Me</span>
				</h1>
				<h3>Web Developer!</h3>
				<p>
					Hi! My name is Romarico, and I have a passion for creating things that
					live on the internet. My journey into web development began in 2022
					when I started learning how to build websites using Notepad. That
					experience gave me a solid foundation in HTML and CSS, sparking my
					interest in the field.
				</p>
				<p>
					Currently, I work as a Flutter Mobile Developer at SupSoft Tech, where
					I develop mobile applications. In addition, I’m working on several
					personal projects involving both mobile apps and websites.
				</p>
				<p>
					Here are the technologies and languages I’ve been working with
					recently:
				</p>
				<m.ul
					variants={listVariants}
					initial="hidden"
					animate="visible"
					className="tech-list"
				>
					{[
						"Flutter",
						"React JS",
						"React Native",
						"Firebase",
						"Laravel",
						"Node JS",
						"Dart",
						"Javascript",
						"Typescript",
						"PHP",
						"HTML",
						"Tailwind CSS",
						"CSS",
						"SASS",
						"Bootstrap",
						"REST API",
						"MYSQL",
					].map((tech, index) => (
						<m.li key={index} variants={itemVariants}>
							{tech}
						</m.li>
					))}
				</m.ul>
			</div>
		</m.section>
	)
}
