import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import ShopByCategoryToysCard from "./ShopByCategoryToyCard";

const ShopByCategoryToys = ({ subCategory }) => {
	const [subCategorizeToys, setSubCategorizeToys] = useState([]);

	useEffect(() => {
		const loadData = async () => {
			const res = await fetch(
				`http://localhost:5000/allToys/${subCategory}/`
			);
			const data = await res.json();
			setSubCategorizeToys(data);
		};
		loadData();
	}, []);
	return (
		<div>
			<div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 py-8">
				{subCategorizeToys.length > 0 &&
					subCategorizeToys.map((toy) => (
						<ShopByCategoryToysCard key={toy._id} toy={toy} />
					))}
			</div>
		</div>
	);
};

ShopByCategoryToys.propTypes = {
	subCategory: PropTypes.string.isRequired,
};
export default ShopByCategoryToys;
