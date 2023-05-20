import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loadingUser, setLoadingUser] = useState(true);

	useEffect(() => {
		setLoadingUser(true);
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser(null);
			}
		});
		return () => {
			unsubscribe();
		};
	}, []);

	// Create User
	const createUser = (email, password) => {
		setLoadingUser(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};
	// User Sign In
	const signIn = (email, password) => {
		setLoadingUser(true);
		return signInWithEmailAndPassword(auth, email, password);
	};
	// User Log Out
	const logOut = () => {
		setLoadingUser(true);
		return signOut(auth);
	};
    // Sign up with google
    const signUpWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

	const authObject = {
		user,
		loadingUser,
		createUser,
		signIn,
		logOut,
        signUpWithGoogle
	};
	return (
		<AuthContext.Provider value={authObject}>
			{children}
		</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AuthProvider;
