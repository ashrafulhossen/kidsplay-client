// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const AddToy = () => {
	const [name, setName] = useState(""),
		[image, setImage] = useState(""),
		[price, setPrice] = useState(""),
		[details, setDetails] = useState(""),
		[subCategory, setSubCategory] = useState(""),
		[quantity, setQuantity] = useState(""),
		[rating, setRating] = useState("");

	const [sellerName, setSellerName] = useState(""),
		[sellerEmail, setSellerEmail] = useState("");

	// input field value event handler
	const nameEvent = (e) => {
		setName(e.target.value);
	};

	const imageEvent = (e) => {
		setImage(e.target.value);
	};

	const priceEvent = (e) => {
		setPrice(e.target.value);
	};

	const detailsEvent = (e) => {
		setDetails(e.target.value);
	};

	const subCategoryEvent = (e) => {
		setSubCategory(e.target.value);
	};

	const quantityEvent = (e) => {
		setQuantity(e.target.value);
	};

	const ratingEvent = (e) => {
		setRating(e.target.value);
	};

	const sellerNameEvent = (e) => {
		setSellerName(e.target.value);
	};

	const sellerEmailEvent = (e) => {
		setSellerEmail(e.target.value);
	};

	// submission event handler
	const submitEvent = (e) => {
		e.preventDefault();

		// setName("");
		// setEmail("");
		// setPassword("");
		// setImage("");
		const toy = {
			name,
			image,
			subCategory,
			price,
			quantity,
			rating,
			details,
			seller: { sellerName, sellerEmail },
		};
        console.log(toy);
	};

	return (
		<div className="max-w-7xl mx-auto flex flex-col items-center justify-center md:flex-row gap-16 w-full">
			<div className="px-8 w-full pt-14 pb-36">
				<h2 className="text-4xl font-bold mb-4 text-center">
					Add A Toy
				</h2>
				<form
					onSubmit={submitEvent}
					className="grid grid-cols-1 md:grid-cols-2 gap-x-20 px-48 mt-8"
				>
					<div className="w-full">
						<div className="form-control mb-4">
							<label className="label">
								<span className="label-text text-base font-semibold">
									Name
								</span>
							</label>
							<input
								type="text"
								placeholder="Enter toy's name"
								className="input input-bordered w-full"
								value={name}
								onChange={nameEvent}
								required
							/>
						</div>
						<div className="form-control mb-4">
							<label className="label">
								<span className="label-text text-base font-semibold">
									Photo URL
								</span>
							</label>
							<input
								type="text"
								placeholder="Enter toy's Photo URL"
								className="input input-bordered w-full"
								value={image}
								onChange={imageEvent}
								required
							/>
						</div>
						<div className="form-control mb-4">
							<label className="label">
								<span className="label-text text-base font-semibold">
									Seller Name
								</span>
							</label>
							<input
								type="text"
								placeholder="Enter seller name"
								className="input input-bordered w-full"
								value={sellerName}
								onChange={sellerNameEvent}
								required
							/>
						</div>
						<div className="form-control mb-4">
							<label className="label">
								<span className="label-text text-base font-semibold">
									Seller Email
								</span>
							</label>
							<input
								type="text"
								placeholder="Enter seller email"
								className="input input-bordered w-full"
								value={sellerEmail}
								onChange={sellerEmailEvent}
								required
							/>
						</div>
					</div>
					<div>
						<div className="form-control mb-4">
							<label className="label">
								<span className="label-text text-base font-semibold">
									Sub-Category
								</span>
							</label>
							<input
								type="text"
								placeholder="Enter toy's sub-category"
								className="input input-bordered w-full"
								value={subCategory}
								onChange={subCategoryEvent}
								required
							/>
						</div>
						<div className="form-control mb-4">
							<label className="label">
								<span className="label-text text-base font-semibold">
									Price
								</span>
							</label>
							<input
								type="text"
								placeholder="Enter toy price"
								className="input input-bordered w-full"
								value={price}
								onChange={priceEvent}
								required
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
								placeholder="Enter available toys quantity"
								className="input input-bordered w-full"
								value={quantity}
								onChange={quantityEvent}
								required
							/>
						</div>
						<div className="form-control mb-4">
							<label className="label">
								<span className="label-text text-base font-semibold">
									Rating
								</span>
							</label>
							<input
								type="text"
								placeholder="Enter toy's rating"
								className="input input-bordered w-full"
								value={rating}
								onChange={ratingEvent}
								required
							/>
						</div>
					</div>
					<div className="col-span-2">
						<div className="form-control mb-4">
							<label className="label">
								<span className="label-text text-base font-semibold">
									Details
								</span>
							</label>
							<textarea
								cols="30" rows="4"
								placeholder="Enter toy's details"
								className="input input-bordered h-auto w-full p-2"
								value={details}
								onChange={detailsEvent}
								required
							></textarea>
						</div>
						<div className="form-control mt-6">
							<button className="btn bg-sky-500 border-0 hover:bg-sky-500 hover:scale-105">
								Add Toy
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddToy;
