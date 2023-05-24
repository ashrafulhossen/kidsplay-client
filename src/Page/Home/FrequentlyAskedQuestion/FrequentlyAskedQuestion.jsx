// eslint-disable-next-line no-unused-vars
import React from "react";

const FrequentlyAskedQuestion = () => {
	return (
		<div className="max-w-2xl mx-auto py-16">
            <h2 className="text-4xl font-bold text-center mb-8">Frequently Asked Question</h2>
			<div className="flex flex-col gap-2">
				<div
					tabIndex={0}
					className="collapse collapse-plus border border-base-300 bg-gradient rounded-xl"
				>
					<div className="collapse-title text-xl font-medium border-b">
						<h5 className="font-bold pl-2">Do you offer a warranty or return policy for your
						products?</h5>
					</div>
					<div className="collapse-content">
						<p className="pt-4">
							Yes. We offer a warranty in our maximum
							toys and we give you a return option in our toys in
							7 to 15 day.
						</p>
					</div>
				</div>
				<div
					tabIndex={1}
					className="collapse collapse-plus border border-base-300 bg-gradient rounded-xl"
				>
					<div className="collapse-title text-xl font-medium border-b">
                    <h5 className="font-bold pl-2">Do I need to pick them up in-store or delivered at home?</h5>
					</div>
					<div className="collapse-content">
						<p className="pt-4">
							You can pick them up from our store. If
							your want to deliver at your home, we also have this
							option. You can choose one option which is suitable
							for you.
						</p>
					</div>
				</div>
				<div
					tabIndex={2}
					className="collapse collapse-plus border border-base-300 bg-gradient rounded-xl"
				>
					<div className="collapse-title text-xl font-medium border-b">
                    <h5 className="font-bold pl-2">Are your toys environmentally friendly and sustainable?</h5>
					</div>
					<div className="collapse-content">
						<p className="pt-4">
							Yes. Our toys are environmentally
							friendly and sustainable.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FrequentlyAskedQuestion;
