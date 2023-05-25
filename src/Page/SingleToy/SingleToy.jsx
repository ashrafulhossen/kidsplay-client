// eslint-disable-next-line no-unused-vars
import React from "react";
import { Helmet } from "react-helmet-async";
import { HiOutlineStar, HiStar } from "react-icons/hi";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";

const SingleToy = () => {
	const {
		name,
		image,
		price,
		rating,
		quantity,
		details,
		seller: { sellerName, sellerEmail },
	} = useLoaderData();
	return (
		<div className="max-w-7xl px-4 mx-auto py-16">
			{/* Page Title */}
			<Helmet>
				<title>Toy Details</title>
				<meta name="description" content="Toy Details Page" />
			</Helmet>
			<div className="card lg:card-side shadow-xl p-10 items-center justify-center gap-8">
				<figure>
					<img
						src={image}
						className="w-96 h-96 object-contain"
						alt="Album"
					/>
				</figure>
				<div className="card-body w-1/2 flex-grow-0">
					<h3 className="text-3xl font-bold">{name}</h3>
					<p>
						<span className="text-lg font-semibold">Details:</span>{" "}
						{details}
					</p>
					<p className="text-lg flex-grow-0">
						<span className="font-semibold">Seller Name:</span>{" "}
						{sellerName}
					</p>
					<p className="text-lg flex-grow-0">
						<span className="font-semibold">Seller Email:</span>{" "}
						{sellerEmail}
					</p>
					<p className="text-lg flex-grow-0">
						<span className="font-semibold">Price:</span> ${price}
					</p>
					<p className="text-lg flex-grow-0">
						<span className="font-semibold">
							Available Quantity
						</span>{" "}
						${quantity}
					</p>

					<p className="text-lg flex-grow-0 flex items-center gap-1">
						<span className="pb-2">Rating: {rating}</span>
						<Rating
							initialRating={rating}
							fullSymbol={
								<HiStar className="w-6 h-6 text-yellow-400" />
							}
							emptySymbol={
								<HiOutlineStar className="w-6 h-6 text-yellow-400" />
							}
							readonly={true}
						/>
					</p>
					<div className="card-actions justify-end">
						<button className="btn btn-primary">Buy Toy</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleToy;
