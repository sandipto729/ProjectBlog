import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import {Link } from 'react-router-dom'

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<div className="image">
			<img src="https://infoma.me/images/StudySyn.svg" alt="logo"></img>
			<h1>infoma</h1>
			</div>
			<h3>infoma</h3>
			<nav ref={navRef}>
				<Link to="/home">Home</Link>
				<Link to="/treading">Trending</Link>
				<Link to="/blog">Blog</Link>
				<Link to="/newspaper">NewsPaper</Link>
				<Link to="/about">About</Link>
				<Link to="/login">Login</Link>

				<button className="contact-button-1">Contact Us</button>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="contact-button-2">Contact Us</button>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;