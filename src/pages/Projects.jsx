import React from "react"
import { motion as m } from "framer-motion"
import { BiDownload, BiLinkExternal } from "react-icons/bi"
import "./projects.css"
import { NavLink } from "react-router-dom"

export const Projects = () => {
	return (
		<m.section
			className="projects"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.1, ease: "easeInOut" }}
			exit={{ opacity: 0 }}
		>
			<div className="projects-content">
				<h1>
					Latest <span>Project</span>
				</h1>
				<div className="projects-container">
					<div className="projects-box projects-box-mobile-app">
						<img src="./src/assets/instagram.jpg" alt="Mobile App" />
						<div className="projects-layer projects-layer-mobile-app">
							<h4>Instagram Clone App</h4>
							<NavLink
								to="https://drive.google.com/file/d/1UwCWhGkFxJrbBfj1sl_yNxOFDf9D9NBt/view?usp=drive_link"
								target="_blank"
							>
								<BiDownload />
							</NavLink>
						</div>
					</div>
					<div className="projects-box projects-box-mobile-app">
						<img src="/src/assets/tiktok.jpg" alt="Mobile App" />
						<div className="projects-layer projects-layer-mobile-app">
							<h4>
								Tiktok <br />
								Clone App
							</h4>
							<NavLink
								to="https://drive.google.com/file/d/14mgGuGb2s2DyUfIsDltl7ZB_OeI9DN6M/view?usp=drive_link"
								target="_blank"
							>
								<BiDownload />
							</NavLink>
						</div>
					</div>
					<div className="projects-box">
						<img src="../src/assets/gjservices.png" alt="Project-1" />
						<div className="projects-layer">
							<h4>GJ Services</h4>
							<NavLink
								to="https://romarico23.github.io/gjservices-/#/"
								target="_blank"
							>
								<BiLinkExternal />
							</NavLink>
						</div>
					</div>
					<div className="projects-box">
						<img src="../src/assets/eshopee.png" alt="Project-2" />
						<div className="projects-layer">
							<h4>Shopping Cart</h4>
							<NavLink
								to="https://romarico23.github.io/eshopee/"
								target="_blank"
							>
								<BiLinkExternal />
							</NavLink>
						</div>
					</div>
					<div className="projects-box">
						<img src="../src/assets/chat.png" alt="Project-3" />
						<div className="projects-layer">
							<h4>Chat Application</h4>
							<NavLink
								to="https://romarico23.github.io/chat-application/#/login"
								target="_blank"
							>
								<BiLinkExternal />
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</m.section>
	)
}
