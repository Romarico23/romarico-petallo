import React, { useState } from "react"
import { motion as m } from "framer-motion"
import { BiDownload, BiLinkExternal, BiVideo } from "react-icons/bi"
import { FaGithub } from "react-icons/fa"
import "./projects.css"
import { NavLink } from "react-router-dom"

export const Projects = () => {
	const [isModalOpen, setModalOpen] = useState(false)

	const toggleModal = () => {
		setModalOpen(!isModalOpen)
	}

	// Close the modal if clicking outside the modal content
	const handleOverlayClick = (e) => {
		if (e.target === e.currentTarget) {
			setModalOpen(false)
		}
	}

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
						<img src="assets/instagram.jpg" alt="Mobile App" loading="lazy" />
						<div className="projects-layer projects-layer-mobile-app">
							<h4>Instagram Clone App</h4>
							<div>
								<NavLink
									to="https://drive.google.com/file/d/1UwCWhGkFxJrbBfj1sl_yNxOFDf9D9NBt/view?usp=drive_link"
									target="_blank"
								>
									<BiDownload />
								</NavLink>
								<NavLink
									to="https://github.com/Romarico23/instagram_clone"
									target="_blank"
								>
									<FaGithub />
								</NavLink>
							</div>
						</div>
					</div>
					<div className="projects-box projects-box-mobile-app">
						<img src="assets/tiktok.jpg" alt="Mobile App" />
						<div className="projects-layer projects-layer-mobile-app">
							<h4>
								Tiktok <br />
								Clone App
							</h4>
							<div>
								<NavLink
									to="https://drive.google.com/file/d/14mgGuGb2s2DyUfIsDltl7ZB_OeI9DN6M/view?usp=drive_link"
									target="_blank"
								>
									<BiDownload />
								</NavLink>
								<NavLink
									to="https://github.com/Romarico23/tiktok_clone"
									target="_blank"
								>
									<FaGithub />
								</NavLink>
							</div>
						</div>
					</div>
					<div className="projects-box">
						<img src="assets/gjservices.png" alt="Project-1" />
						<div className="projects-layer">
							<h4>GJ Services</h4>
							<div>
								<NavLink
									to="https://romarico23.github.io/gjservices/"
									target="_blank"
								>
									<BiLinkExternal />
								</NavLink>
								<NavLink
									to="https://github.com/Romarico23/gjservices"
									target="_blank"
								>
									<FaGithub />
								</NavLink>
							</div>
						</div>
					</div>
					<div className="projects-box">
						<img src="assets/rgsweb.png" alt="Project-2" />
						<div className="projects-layer projects-layer-rgsweb">
							<h4>Music Store w/ Admin Dashboard</h4>
							<div>
								<button onClick={toggleModal}>
									<BiVideo />
								</button>
								<NavLink
									to="https://github.com/Romarico23/rgsaudimusic"
									target="_blank"
								>
									<FaGithub />
								</NavLink>
							</div>
						</div>
					</div>
					<div className="projects-box">
						<img src="assets/chat.png" alt="Project-3" />
						<div className="projects-layer">
							<h4>Chat Application</h4>
							<div>
								<NavLink
									to="https://romarico23.github.io/chat-application/#/login"
									target="_blank"
								>
									<BiLinkExternal />
								</NavLink>
								<NavLink
									to="https://github.com/Romarico23/chat-application"
									target="_blank"
								>
									<FaGithub />
								</NavLink>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Modal */}
			{isModalOpen && (
				<div className="modal-overlay" onClick={handleOverlayClick}>
					<div className="modal" onClick={(e) => e.stopPropagation()}>
						<h2>Demo Video</h2>
						<video controls>
							<source src="assets/rgswebdemo.mp4" type="video/mp4" />
							Your browser does not support the video tag.
						</video>
						<button className="close-btn" onClick={toggleModal}>
							Close
						</button>
					</div>
				</div>
			)}
		</m.section>
	)
}
