import Lottie from "lottie-react";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import img404 from "../../../public/assets/404/404.json";

const Page404 = () => {
    console.log(img404);
	return (
		<div className="max-w-2xl mx-auto py-20 flex items-center justify-center flex-col">
			<Link to={"/"}>
				<button
					style={{ textShadow: "0px 0px 10px #374151" }}
					className="font-[Rancho] text-2xl hover:scale-105 bg-gradient py-2 pl-2 pr-3 transition-all rounded-lg"
				>
					<FaArrowLeft className="inline text-lg mr-2" /> Back to home
				</button>
			</Link>
            <div className="w-full lg:ml-auto h-56  sm:h-96">
				<Lottie animationData={img404} loop={true} />
            </div>
		</div>
	);
};

export default Page404;
