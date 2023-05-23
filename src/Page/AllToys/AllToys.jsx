// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ToyTableRow from "./ToyTableRow";

const AllToys = () => {
	const loadAllToys = useLoaderData();
    const [storeToys, setStoreToys] = useState(loadAllToys.slice(0, 20) || []);
	const [allToys, setAllToys] = useState(storeToys);
	const [showAll, setShowAll] = useState(false);
	const [search, setSearch] = useState("");

	const searchEvent = (e) => {
		setSearch(e.target.value);
	};

    const resetSearch = () => {
        setSearch("");
        setAllToys(loadAllToys);
    }

	const searchBtnEvent = () => {
		const filteredToys = loadAllToys.filter((toy) => toy.name.toLowerCase().includes(search));
        setStoreToys(filteredToys);
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
			<div className="form-control py-4">
				<div className="input-group justify-center">
					<input
						type="text"
						value={search}
						onChange={searchEvent}
						placeholder="Search…"
						className="input input-bordered"
					/>
					<button
						onClick={searchBtnEvent}
						className="px-6 font-bold text-lg text-white btn-bg border-r border-sky-600"
					>
						Search
					</button>
                    <button
						onClick={resetSearch}
						className="px-6 font-bold text-lg text-white btn-bg "
					>
						Reset
					</button>
				</div>
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
						{typeof allToys == "object" && allToys.length > 0 &&
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
