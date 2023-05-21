// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import MyToysTableRow from "./MyToysTableRow";

const MyToys = () => {
	const loadMyAllToys = useLoaderData();
    const [myAllToys, setMyAllToys] = useState(loadMyAllToys || []);

	const deleteEvent = (_id) => {
		const deleteToy = async () => {
			const res = await fetch(
				`http://localhost:5000/myToys/${_id}/delete`,
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
						{myAllToys.length > 0 && myAllToys.map((toy, index) => (
							<MyToysTableRow
								key={toy._id}
								serial={index + 1}
								toy={toy}
                                deleteEvent={deleteEvent}
							/>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyToys;
