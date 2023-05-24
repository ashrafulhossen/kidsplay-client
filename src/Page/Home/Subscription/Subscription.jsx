// eslint-disable-next-line no-unused-vars
import React from "react";

const Subscription = () => {
	return (
		<div className="mb-16 flex-col lg:flex-row flex justify-center items-center max-w-7xl mx-auto gap-10 bg-gradient rounded-xl py-8">
			<div>
				<h2 className="text-4xl font-bold mb-1 text-center">
					Subscribe
				</h2>
				<p className="text-center text-lg">
					Be the first to know our new toys, offers, sales and
					promotions
				</p>
			</div>
			<div className="form-control w-full px-4 sm:w-[30rem]">
				<div className="input-group">
					<input
						type="text"
						placeholder="Search…"
						className="input input-bordered w-full"
					/>
					<button className="px-4 btn-bg text-lg font-bold text-white">
						Subscribe
					</button>
				</div>
			</div>
		</div>
	);
};

export default Subscription;
