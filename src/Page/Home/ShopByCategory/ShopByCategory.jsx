import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// eslint-disable-next-line no-unused-vars
import React from "react";

const ShopByCategory = () => {
    const getSubCategorizeToys = async(subCategory) => {
        const res = await fetch(`http://localhost:5000/allToys/${subCategory}/`);
        const data = await res.json();
        console.log(data);
    }
	return (
		<div className="max-w-7xl mx-auto">
			<h2 className="text-4xl font-bold text-center">Shop By Category</h2>
			
		</div>
	);
};

export default ShopByCategory;
