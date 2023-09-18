import Lottie from "lottie-react";
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import animation from "../../../public/assets/login-animation.json";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
	const { signIn } = useContext(AuthContext);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [err, setErr] = useState("");

	// input field value event handler
	const emailEvent = (e) => {
		setEmail(e.target.value);
	};
	const passwordEvent = (e) => {
		setPassword(e.target.value);
	};

	// submission event handler
	const logInEvent = (e) => {
		e.preventDefault();

		signIn(email, password)
			.then((result) => {
				console.log(result);
				setEmail("");
				setPassword("");
				setErr("");
			})
			.catch((err) => {
				setErr(err.message);
				console.log(err.message);
			});
	};

	return (
		<div className="max-w-7xl mx-auto flex flex-col items-center justify-center md:flex-row max-[639px]:gap-40 pb-20 md:pt-20">
			{/* Page Title */}
			<Helmet>
				<title>Log in</title>
				<meta name="description" content="Log in Page" />
			</Helmet>

			<div className="max-w-[400px]">
				<div className="w-full lg:ml-auto h-56  sm:h-96">
					<Lottie animationData={animation} loop={true} />
				</div>
			</div>
			<div className="max-w-sm px-4">
				<h2 className="text-4xl font-bold mb-4 text-center">Log in</h2>
				<form onSubmit={logInEvent} className="w-full">
					<div className="form-control mb-2">
						<label className="label">
							<span className="label-text text-base font-semibold">
								Email
							</span>
						</label>
						<input
							type="email"
							placeholder="Enter your email"
							className="input input-bordered"
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
							className="input input-bordered"
							value={password}
							onChange={passwordEvent}
							required
						/>
						{err && <p className="text-sm mt-2 text-red-600">{err}</p>}
					</div>
					<div className="form-control mt-6">
						<button className="btn bg-sky-500 border-0 hover:bg-sky-500 hover:scale-105">
							Login
						</button>
					</div>
				</form>
				<div
					className="mt-6 text-center
                "
				>
					<p>
						Are not member of KidsPlay?{" "}
						<Link
							className="text-sky-500 font-semibold
                    "
							to={"/authentication/register"}
						>
							Register Now
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
