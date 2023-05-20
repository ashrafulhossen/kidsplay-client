import Lottie from "lottie-react";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import animation from "../../../public/assets/login-animation.json";

const Register = () => {
	const [name, setName] = useState(""),
    [email, setEmail] = useState(""),
	[password, setPassword] = useState(""),
    [image, setImage] = useState("");

	// input field value event handler
    const nameEvent = (e) => {
		setName(e.target.value);
	};

	const emailEvent = (e) => {
		setEmail(e.target.value);
	};

	const passwordEvent = (e) => {
		setPassword(e.target.value);
	};

    const imageEvent = (e) => {
		setImage(e.target.value);
	};

	// submission event handler
	const registerEvent = (e) => {
		e.preventDefault();

		console.log(name, email, password, image);
	};

	return (
		<div className="max-w-7xl mx-auto flex flex-col items-center justify-center md:flex-row gap-16 max-[639px]:gap-56 pb-20 md:pt-20">
			<div className="max-w-[500px]">
				<div className="w-full lg:ml-auto h-56  sm:h-96">
					<Lottie animationData={animation} loop={true} />
				</div>
			</div>
			<div className="max-w-lg px-8">
				<h2 className="text-4xl font-bold mb-4 text-center">
					Register
				</h2>
				<form onSubmit={registerEvent} className="w-full">
					<div className="form-control mb-2">
						<label className="label">
							<span className="label-text text-base font-semibold">
								Name
							</span>
						</label>
						<input
							type="text"
							placeholder="Enter your name"
							className="input input-bordered xl:w-[400px]"
							value={name}
							onChange={nameEvent}
							required
						/>
					</div>
					<div className="form-control mb-2">
						<label className="label">
							<span className="label-text text-base font-semibold">
								Email
							</span>
						</label>
						<input
							type="email"
							placeholder="Enter your email"
							className="input input-bordered xl:w-[400px]"
							value={email}
							onChange={emailEvent}
							required
						/>
					</div>
					<div className="form-control mb-2">
						<label className="label">
							<span className="label-text text-base font-semibold">
								Password
							</span>
						</label>
						<input
							type="password"
							placeholder="Enter your password"
							className="input input-bordered xl:w-[400px]"
							value={password}
							onChange={passwordEvent}
							required
						/>
					</div>
					<div className="form-control mb-2">
						<label className="label">
							<span className="label-text text-base font-semibold">
								Photo URL
							</span>
						</label>
						<input
							type="text"
							placeholder="Enter your photo url"
							className="input input-bordered xl:w-[400px]"
							value={image}
							onChange={imageEvent}
							required
						/>
					</div>
					<div className="form-control mt-6">
						<button className="btn bg-sky-500 border-0 hover:bg-sky-500 hover:scale-105">
							Register
						</button>
					</div>
				</form>
				<div
					className="mt-6 text-center
                "
				>
					<p>
						Already have an account?{" "}
						<Link
							className="text-sky-500 font-semibold
                    "
							to={"/authentication/login"}
						>
							Login Now
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Register;
