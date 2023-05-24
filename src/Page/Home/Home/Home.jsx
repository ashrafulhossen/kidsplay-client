// eslint-disable-next-line no-unused-vars
import React from "react";
import Banner from "../Banner/Banner";
import FrequentlyAskedQuestion from "../FrequentlyAskedQuestion/FrequentlyAskedQuestion";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import Subscription from "../Subscription/Subscription";

const Home = () => {
	return (
		<div>
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
