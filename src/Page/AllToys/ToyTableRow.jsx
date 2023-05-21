import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const ToyTableRow = ({ toy, serial }) => {
    const {_id,name, Category, subCategory, price, quantity, seller} = toy;
	return (
		<tr>
			<th>{serial}</th>
			<td>{seller.sellerName}</td>
			<td>{name}</td>
			<td>{Category}</td>
			<td>{subCategory}</td>
			<td>{price}</td>
			<td>{quantity}</td>
			<td><Link to={`/toy/${_id}`}><button className="py-2 px-4  rounded-lg text-white font-semibold btn-bg">View Details</button></Link></td>
		</tr>
	);
};

ToyTableRow.propTypes = {
	toy: PropTypes.object.isRequired,
	serial: PropTypes.number.isRequired,
};

export default ToyTableRow;
