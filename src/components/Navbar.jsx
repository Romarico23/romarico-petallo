import React, { useEffect, useRef, useState } from "react"
import { NavLink } from "react-router-dom"
import { BiMenu } from "react-icons/bi"
import { IoClose } from "react-icons/io5"
import "./navbar.css"
import {
	useAnimate,
	useMotionValueEvent,
	usePresence,
	useScroll,
} from "framer-motion"
export const Navbar = () => {
	const [menuIcon, setMenuIcon] = useState(false)

	const handleClick = () => {
		setMenuIcon(!menuIcon)
	}

	const [isPresent] = usePresence()
	const [show, setShow] = useState(true)
	const { scrollY } = useScroll()

	const [scopeHeader, animateHeader] = useAnimate()
	useEffect(() => {
		if (isPresent) {
			animateHeader(
				scopeHeader.current,
				{ transform: ["translateY(-200px)", "translateY(0px)"] },
				{ opacity: [0, 1] },
				{ duration: 0.5 }
			)
		}
	}, [isPresent])

	useMotionValueEvent(scrollY, "change", (latest) => {
		if (window.scrollY > 50) {
			setShow(false)
		} else {
			setShow(true)
		}
	})

	return (
		<header
			ref={scopeHeader}
			style={{
				transform: show ? "none" : "translateY(-200px)",
				opacity: show ? 1 : 0,
				transition: "all .7s ",
			}}
		>
			<div className="header-logo">
				<NavLink to="/" title="Logo">
					<img src="./src/assets/logos.png" alt="Logo" />
				</NavLink>
			</div>
			<div className="menuIcon" onClick={handleClick}>
				{!menuIcon ? <BiMenu /> : <IoClose />}
			</div>
			<nav className={menuIcon ? "nav-active" : "nav"}>
				<NavLink to="/" onClick={handleClick}>
					Home
				</NavLink>
				<NavLink to="/about" onClick={handleClick}>
					About
				</NavLink>
				<NavLink to="/projects" onClick={handleClick}>
					Projects
				</NavLink>
				<NavLink to="/contact" onClick={handleClick}>
					Contact
				</NavLink>
			</nav>
		</header>
	)
}
