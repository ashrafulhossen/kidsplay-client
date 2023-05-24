// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ToyTableRow from "./ToyTableRow";

const AllToys = () => {
	const loadAllToys = useLoaderData();
	const [storeToys, setStoreToys] = useState(loadAllToys.slice(0, 20) || []);
	const [allToys, setAllToys] = useState(storeToys);
	const [showAll, setShowAll] = useState(false);

	const searchEvent = async (e) => {
		const res = await fetch(`http://localhost:5000/allToys/filter=${e.target.value}`);
		const data = await res.json();
		console.log(data);
		// setStoreToys(filteredToys);
	};

	const showAllOrLessEvent = () => {
		if (showAll) {
			setAllToys(storeToys.slice(0, 20));
			setShowAll(false);
		} else {
			setAllToys(storeToys);
			setShowAll(true);
		}
	};

	return (
		<div className="max-w-7xl px-4 mx-auto py-16 ">
			<h2 className="text-4xl font-bold mb-8 text-center">All Toys</h2>
			<div className="form-control w-96 mx-auto py-4">
				<input
					type="text"
					onChange={searchEvent}
					placeholder="Search…"
					className="input input-bordered"
				/>
			</div>
			<div className="overflow-x-auto ">
				<table className="table w-full">
					{/* head */}
					<thead>
						<tr>
							<th></th>
							<th>Seller Name</th>
							<th>Toy Name</th>
							<th>Category</th>
							<th>Sub Category</th>
							<th>Price</th>
							<th>Available Quantity</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{typeof allToys == "object" &&
							allToys.length > 0 &&
							allToys.map((toy, index) => (
								<ToyTableRow
									key={toy._id}
									serial={index + 1}
									toy={toy}
								/>
							))}
					</tbody>
				</table>
			</div>
			<div className="text-center mt-8">
				<button
					className="px-6 py-3 rounded-lg text-lg font-bold text-white btn-bg"
					onClick={showAllOrLessEvent}
				>
					{showAll ? "Show Less" : "Show All"}
				</button>
			</div>
		</div>
	);
};

export default AllToys;
