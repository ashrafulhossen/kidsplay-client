import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./Layout/Main.jsx";
import AllToys from "./Page/AllToys/AllToys";
import Home from "./Page/Home/Home/Home";
import MyToys from "./Page/MyToys/MyToys";
import AddToy from "./Page/AddToy/AddToy";
import Blogs from "./Page/Blogs/Blogs";
import Login from "./Page/Login/Login";
import Authentication from "./Layout/Authentication";
import Register from "./Page/Register/Register";

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
			{ path: "/addToy", element: <AddToy /> },
			{ path: "/blogs", element: <Blogs /> },

		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
