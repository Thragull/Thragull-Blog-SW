import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
	return (
		<nav className="navbar navbar-light mb-3">
			<span className="navbar-brand mb-0 ms-5">STAR WARS Thragull blog</span>
			<div className="ml-auto">
				<button className="btn fav-btn me-5">
					Favourites
					<span className="badge rounded-pill bg-danger ms-2">
						99+
						<span className="visually-hidden">unread messages</span>
					</span>
				</button>
			</div>
		</nav>
	);
};
