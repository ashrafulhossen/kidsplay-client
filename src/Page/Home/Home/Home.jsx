// eslint-disable-next-line no-unused-vars
import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import FrequentlyAskedQuestion from "../FrequentlyAskedQuestion/FrequentlyAskedQuestion";

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
			<FrequentlyAskedQuestion/>
		</div>
	);
};

export default Home;
