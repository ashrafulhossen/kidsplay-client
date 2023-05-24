// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./AuthProvider/AuthProvider";
import "./index.css";
import Authentication from "./Layout/Authentication";
import Main from "./Layout/Main.jsx";
import AddToy from "./Page/AddToy/AddToy";
import AllToys from "./Page/AllToys/AllToys";
import Blogs from "./Page/Blogs/Blogs";
import Home from "./Page/Home/Home/Home";
import Login from "./Page/Login/Login";
import MyToys from "./Page/MyToys/MyToys";
import Page404 from "./Page/Page404/Page404";
import Register from "./Page/Register/Register";
import SingleToy from "./Page/SingleToy/SingleToy";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{ path: "/", element: <Home /> },
			{
				path: "/allToys",
				element: <AllToys />,
				loader: () =>
					fetch("https://kidsplay-server.vercel.app/allToys"),
			},
			{
				path: "/toy/:_id",
				element: (
					<PrivateRoute>
						<SingleToy />
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(
						`https://kidsplay-server.vercel.app/toy/${params._id}`
					),
			},
			{
				path: "/myToys/:uid",
				element: (
					<PrivateRoute>
						<MyToys />
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(
						`https://kidsplay-server.vercel.app/myToys/${params.uid}`
					),
			},
			{
				path: "/addToy",
				element: (
					<PrivateRoute>
						<AddToy />
					</PrivateRoute>
				),
			},
			{ path: "/blogs", element: <Blogs /> },
		],
	},
	{
		path: "/authentication",
		element: <Authentication />,
		children: [
			{ path: "/authentication/login", element: <Login /> },
			{ path: "/authentication/register", element: <Register /> },
		],
	},
	{ path: "*", element: <Page404 /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<AuthProvider>
		<Toaster position="bottom-right" reverseOrder={true} />
		<RouterProvider router={router} />
	</AuthProvider>
);
