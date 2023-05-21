import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
	const { user, loadingUser } = useContext(AuthContext);
	const location = useLocation();

	if (loadingUser) {
		return (
			<div className="flex items-center justify-center">
				<progress className="progress w-56 h-12"></progress>
			</div>
		);
	}

	if (user) {
		return <div>{children}</div>;
	}

	return (
		<Navigate
			to={"/authentication/login"}
			state={{ from: location }}
			replace={true}
		/>
	);
};

PrivateRoute.propTypes = {
	children: PropTypes.node.isRequired,
};

export default PrivateRoute;
