import React from "react";
import ReactDOM from "react-dom/client";
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
import Register from "./Page/Register/Register";
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
			},
			{ path: "/myToys", element: <MyToys /> },
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</React.StrictMode>
);
