// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Footer from "../Page/Shared/Footer/Footer";
import Header from "../Page/Shared/Header/Header";

const Authentication = () => {
	const { user } = useContext(AuthContext);
	const location = useLocation();
	const previousLocation = location?.state?.from?.pathname;

	if (user && previousLocation) {
		return <Navigate to={previousLocation} replace={true} />;
	}
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
