import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { HiOutlineStar, HiStar } from "react-icons/hi";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const ShopByCategoryToysCard = ({ toy }) => {
	const { _id, image, name, price, rating } = toy;
	return (
		<div className="card card-compact w-full bg-gradient shadow-xl p-4">
			<figure>
				<img src={image} className="rounded-2xl" alt="Toy image" />
			</figure>
			<div className="card-body">
				<h2 className="card-title text-3xl mt-4">{name}</h2>
				<p className="text-lg flex-grow-0">Price: ${price}</p>
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
				<div className="card-actions justify-end flex-grow">
					<Link to={`/toy/${_id}`}>
						<button className="mt-auto px-6 py-2 text-white font-bold text-lg btn-bg rounded-lg">
							View Details
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

ShopByCategoryToysCard.propTypes = {
	toy: PropTypes.objectOf(
		PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number,
			PropTypes.object,
		])
	).isRequired,
};

export default ShopByCategoryToysCard;
