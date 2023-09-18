// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import ToyTableRow from "./ToyTableRow";

const AllToys = () => {
	const loadAllToys = useLoaderData();
	const [storeToys, setStoreToys] = useState(loadAllToys.slice(0, 20) || []);
	const [allToys, setAllToys] = useState(storeToys);
	const [showAll, setShowAll] = useState(false);

	const searchEvent = async (e) => {
		const search = e.target.value;
		console.log(search);
		if (search) {
			const res = await fetch(
				`https://kidsplay-server.vercel.app/allToys/filter=${search}`
			);
			const data = await res.json();
			setStoreToys(data);
			setAllToys(data);
			if (data.length > 20) {
				setShowAll(true);
			}
		} else {
			setStoreToys(loadAllToys);
			setAllToys(loadAllToys);
		}
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
			{/* Page Title */}
			<Helmet>
				<title>All Toys</title>
				<meta name="description" content="All Toys Page" />
			</Helmet>

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
						{allToys.length > 0 ? (
							allToys.map((toy, index) => (
								<ToyTableRow
									key={toy._id}
									serial={index + 1}
									toy={toy}
								/>
							))
						) : (
							<p className="text-3xl font-bold mt-4 text-center">
								No toys have been found.
							</p>
						)}
					</tbody>
				</table>
			</div>
			<div className="text-center mt-8">
				{storeToys.length >= 20 && (
					<button
						className="px-6 py-3 rounded-lg text-lg font-bold text-white btn-bg"
						onClick={showAllOrLessEvent}
					>
						{showAll && storeToys.length > 20
							? "Show Less"
							: "Show All"}
					</button>
				)}
			</div>
		</div>
	);
};

export default AllToys;
