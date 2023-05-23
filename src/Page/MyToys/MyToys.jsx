// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import MyToysTableRow from "./MyToysTableRow";

const MyToys = () => {
	const loadMyAllToys = useLoaderData();
	const [myAllToys, setMyAllToys] = useState(loadMyAllToys || []);
	const [ascendingSorted, setAscendingSorted] = useState(true);
	const [decendingSorted, setDecendingSorted] = useState(false);

	const sorting = () => {
		if (ascendingSorted) {
			myAllToys.sort((a, b) => a.price - b.price);
			setAscendingSorted(false);
			setDecendingSorted(true);
		}
		if (decendingSorted) {
			myAllToys.sort((a, b) => b.price - a.price);
			setDecendingSorted(false);
			setAscendingSorted(true);
		}
	};

	const deleteEvent = (_id) => {
		const deleteToy = async () => {
			const res = await fetch(
				`https://kidsplay-server.vercel.app/myToys/${_id}/delete`,
				{
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			const data = await res.json();
			if (data.deletedCount) {
				const newMyAllToys = myAllToys.filter(
					(coffee) => coffee._id !== _id
				);
				setMyAllToys(newMyAllToys);
				Swal.fire("Deleted!", "Toy has been deleted.", "success");
			} else {
				Swal.fire(
					"Opps...",
					"Something went wrong. Please try again later.",
					"error"
				);
			}
		};
		deleteToy();
	};


	const updateEvent = (updatableData) => {
		const updateToy = async () => {
			const res = await fetch(`https://kidsplay-server.vercel.app/myToys/${updatableData?._id}/edit`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(updatableData),
			});
			const data = await res.json();
			return data?.modifiedCount;
		}
		return updateToy();
	}

	return (
		<div className="max-w-7xl px-4 mx-auto py-16 ">
			<h2 className="text-4xl font-bold mb-8 text-center">My Toys</h2>

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
						{myAllToys.length > 0 &&
							myAllToys.map((toy, index) => (
								<MyToysTableRow
									key={toy._id}
									serial={index + 1}
									toy={toy}
									deleteEvent={deleteEvent}
									updateEvent={updateEvent}
								/>
							))}
					</tbody>
				</table>
			</div>
			<div className="text-center mt-8">
				<button onClick={sorting} className="py-2 px-6 btn-bg text-white text-lg font-bold rounded-lg">Sort</button>
			</div>
		</div>
	);
};

export default MyToys;
