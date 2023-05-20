// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import logo from "/assets/logo.png";
import userImage from "/assets/user.png";

const Header = () => {
	const { user, logOut } = useContext(AuthContext);
	console.log(user);
	// List items
	const listItems = (
		<>
			<li className="">
				<NavLink
					to={"/"}
					className={({ isActive }) =>
						`navlink ${isActive && "border-black border-b-2"}`
					}
				>
					Home
				</NavLink>
			</li>
			<li className="">
				<NavLink
					to={"/allToys"}
					className={({ isActive }) =>
						`navlink ${isActive && "border-black border-b-2"}`
					}
				>
					All Toys
				</NavLink>
			</li>
			<li className="">
				<NavLink
					to={"/myToys"}
					className={({ isActive }) =>
						`navlink ${isActive && "border-black border-b-2"}`
					}
				>
					My Toys
				</NavLink>
			</li>
			<li className="">
				<NavLink
					to={"/addToy"}
					className={({ isActive }) =>
						`navlink ${isActive && "border-black border-b-2"}`
					}
				>
					Add A Toy
				</NavLink>
			</li>
			<li className="">
				<NavLink
					to={"/blogs"}
					className={({ isActive }) =>
						`navlink ${isActive && "border-black border-b-2"}`
					}
				>
					Blogs
				</NavLink>
			</li>
		</>
	);

	const [isHover, setHover] = useState(false);

	const onMouseHoverEvent = () => {
		setHover(!isHover);
	};

	const logOutEvent = () => {
		logOut();
	};

	return (
		<div className="navbar w-full justify-between py-6 mx-auto max-w-7xl px-2 sm:px-6 bg-base-100">
			<div className="navbar-start max-[429px]:w-full flex max-[429px]:justify-between">
				<div className="dropdown">
					<label
						tabIndex={0}
						className="btn btn-ghost p-2 mr-2 lg:hidden"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-compact rounded-lg dropdown-content block mt-3 p-2 shadow-md bg-base-100 w-52"
					>
						<li className="hidden space-x-5 max-[449px]:flex flex-row items-center justify-between">
							{user ? (
								<button
									onClick={logOutEvent}
									className="text-lg font-bold hover:scale-110 transition-transform duration-200"
								>
									Logout
								</button>
							) : (
								<NavLink
									to={"/authentication/login"}
									className={({ isActive }) =>
										`navlink ${
											isActive &&
											"border-black border-b-2 text-lg font-bold hover:scale-110 transition-transform duration-200"
										}`
									}
								>
									Login
								</NavLink>
							)}
							<div
								onClick={onMouseHoverEvent}
								className="relative active:bg-transparent hover:bg-transparent"
							>
								<img
									className="w-8 h-8 rounded-full border-2 border-black"
									src={
										user?.photoURL != null
											? user.photoURL
											: userImage
									}
									alt="user image"
								/>
								{isHover && (
									<p className="absolute top-10 -left-12 text-center w-40 text-lg font-bold">
										{user?.displayName != null
											? user.displayName
											: "UserName"}
									</p>
								)}
							</div>
						</li>
						{listItems}
					</ul>
				</div>
				<Link to={"/"}>
					<h1 className="w-56 flex items-center justify-center font-extrabold text-4xl bg-gradient-to-r from-sky-500 from-10% via-blue-500 to-fuchsia-600 to-90% bg-clip-text text-transparent">
						<img
							className="w-14 h-14 mr-2"
							src={logo}
							alt="logo image"
						/>
						KidsPlay
					</h1>
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">{listItems}</ul>
			</div>
			<div className="justify-end w-28 md:w-1/2 hidden space-x-5 min-[450px]:flex">
				{user ? (
					<button
						onClick={logOutEvent}
						className="text-lg font-bold hover:scale-110 transition-transform duration-200"
					>
						Logout
					</button>
				) : (
					<Link to={"/authentication/login"}>
						<button className="text-lg font-bold hover:scale-110 transition-transform duration-200">
							Login
						</button>
					</Link>
				)}
				<div
					onMouseEnter={onMouseHoverEvent}
					onMouseLeave={onMouseHoverEvent}
					className="relative"
				>
					<img
						className="w-8 h-8 rounded-full border-2 border-black"
						src={user?.photoURL != null ? user.photoURL : userImage}
						alt="user image"
					/>
					{isHover && (
						<p className="absolute top-10 -left-16 text-center w-40 text-lg font-bold">
							{user?.displayName != null
								? user.displayName
								: "UserName"}
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
