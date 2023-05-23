import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Swal from "sweetalert2";
import Modal from "./Modal";

const MyToysTableRow = ({ toy, serial, deleteEvent, updateEvent }) => {
	const { _id, name, Category, subCategory, price, quantity, seller } = toy;
	const [toyPrice, setToyPrice] = useState(price),
	[toyQuantity, setToyQuantity] = useState(quantity);

	const deleteToyEvent = (_id) => {
		const swalWithBootstrapButtons = Swal.mixin({
			customClass: {
				confirmButton:
					"btn border-0 hover:bg-green-600 bg-green-500 m-4",
				cancelButton: "btn border-0 hover:bg-red-600 bg-red-500",
			},
			buttonsStyling: false,
		});

		swalWithBootstrapButtons
			.fire({
				title: "Are you sure?",
				text: "You won't be able to revert this!",
				icon: "warning",
				showCancelButton: true,
				confirmButtonText: "Yes, delete it!",
				cancelButtonText: "No, cancel!",
				reverseButtons: true,
			})
			.then((result) => {
				if (result.isConfirmed) {
					deleteEvent(_id);
				} else if (
					/* Read more about handling dismissals below */
					result.dismiss === Swal.DismissReason.cancel
				) {
					swalWithBootstrapButtons.fire(
						"Cancelled",
						"Your toy is safe :)",
						"error"
					);
				}
			});
	};

	const updateToyEvent = (price, quantity, details) => {
		const updatableData = { _id, price, quantity, details };
		const isDataUpdated = updateEvent(updatableData);
		console.log(isDataUpdated);
		if (isDataUpdated) {
			Swal.fire("Updated!", "Toy has been updated.", "success");
			setToyPrice(updatableData?.price);
			setToyQuantity(updatableData?.quantity); 
		}
	};

	return (
		<>
			<tr>
				<th>{serial}</th>
				<td>{seller.sellerName}</td>
				<td>{name}</td>
				<td>{Category}</td>
				<td>{subCategory}</td>
				<td>{toyPrice}</td>
				<td>{toyQuantity}</td>
				<td>
					<button className="mr-2 py-2 px-4  rounded-lg text-white font-semibold btn-bg">
						<label htmlFor="my-modal-6">Update</label>
					</button>

					<button
						onClick={() => deleteToyEvent(_id)}
						className="py-2 px-4  rounded-lg text-white font-semibold btn-bg"
					>
						Delete
					</button>
					<Modal updateEvent={updateToyEvent} /> 
				</td>
			</tr>
		</>
	);
};

MyToysTableRow.propTypes = {
	toy: PropTypes.object.isRequired,
	serial: PropTypes.number.isRequired,
	deleteEvent: PropTypes.func.isRequired,
	updateEvent: PropTypes.func.isRequired,
};

export default MyToysTableRow;
