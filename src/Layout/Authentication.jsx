// eslint-disable-next-line no-unused-vars
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Page/Shared/Footer/Footer";
import Header from "../Page/Shared/Header/Header";

const Authentication = () => {
	return (
		<div>
			<Header />
			<div className="min-h-[calc(100vh-300px)]">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Authentication;
