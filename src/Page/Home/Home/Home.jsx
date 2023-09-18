// eslint-disable-next-line no-unused-vars
import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import FrequentlyAskedQuestion from "../FrequentlyAskedQuestion/FrequentlyAskedQuestion";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import Subscription from "../Subscription/Subscription";

const Home = () => {
	return (
		<div>
			{/* Page Title */}
			<Helmet>
				<title>Home</title>
				<meta name="description" content="Home Page" />
			</Helmet>
			
			{/* Banner Section */}
			<Banner />

			{/* Gallery Section */}
			<Gallery />

			{/* Shop By Category Section */}
			<ShopByCategory />

			{/* Frequently Asked Question Section */}
			<FrequentlyAskedQuestion />

			{/* Subscription Section */}
			<Subscription />
		</div>
	);
};

export default Home;
