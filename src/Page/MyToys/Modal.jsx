import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { toast } from "react-hot-toast";

const Modal = ({ updateEvent }) => {
	const [price, setPrice] = useState(""),
		[quantity, setQuantity] = useState(""),
		[details, setDetails] = useState("");

	const priceEvent = (e) => {
		setPrice(e.target.value);
	};

	const quantityEvent = (e) => {
		setQuantity(e.target.value);
	};

	const detailsEvent = (e) => {
		setDetails(e.target.value);
	};

	const inputUpdateToyEvent = () => {
		if (price !== "" || quantity !== "" || details !== "") {
			updateEvent(price, quantity, details);
		} else {
			toast.error("Please fill at least one input field");
		}
	};

	return (
		<div>
			<input type="checkbox" id="my-modal-6" className="modal-toggle" />
			<div className="modal modal-bottom sm:modal-middle">
				<div className="modal-box">
					<form className="">
						<div className="form-control mb-4">
							<label className="label">
								<span className="label-text text-base font-semibold">
									Price
								</span>
							</label>
							<input
								type="text"
								placeholder="Enter toy's price"
								className="input input-bordered w-full"
								value={price}
								onChange={priceEvent}
							/>
						</div>
						<div className="form-control mb-4">
							<label className="label">
								<span className="label-text text-base font-semibold">
									Quantity
								</span>
							</label>
							<input
								type="text"
								placeholder="Enter toy's price"
								className="input input-bordered w-full"
								value={quantity}
								onChange={quantityEvent}
							/>
						</div>
						<div className="form-control mb-4">
							<label className="label">
								<span className="label-text text-base font-semibold">
									Details
								</span>
							</label>
							<textarea
								cols="30"
								rows="4"
								placeholder="Enter toy's details"
								className="input input-bordered h-auto w-full p-2"
								value={details}
								onChange={detailsEvent}
							></textarea>
						</div>
					</form>
					<div className="modal-action">
						<button
							className="btn-bg px-6 py-2 rounded-lg font-bold text-white text-lg"
							onClick={inputUpdateToyEvent}
						>
							<label htmlFor="my-modal-6">Update</label>
						</button>
						<button className="btn-bg px-6 py-2 rounded-lg font-bold text-white text-lg">
							<label htmlFor="my-modal-6">Close</label>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

Modal.propTypes = {
	updateEvent: PropTypes.func.isRequired,
};

export default Modal;
