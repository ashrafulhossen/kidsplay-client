// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube,FaEnvelope,FaPhoneAlt,FaMapMarkerAlt, } from "react-icons/fa";
import logo from "/assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="bg-black text-base-content ">
			<div className="footer grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 px-8 gap-14 lg:gap-8 pt-20 pb-16  mx-auto max-w-7xl">
				<div className="mx-auto">
					<img className="w-16 h-16 self-center inline mx-auto" src={logo} alt="logo image" />
					<h1 className="-mt-3 mx-auto flex items-center justify-center font-extrabold text-4xl bg-gradient-to-r from-sky-500 from-10% via-blue-500 to-fuchsia-600 to-90% bg-clip-text text-transparent">
						KidsPlay
					</h1>
					<p className="max-w-[300px] text-center text-gray-400 text-base my-2">
						A kids toy shop is a store that specializes in selling
						toys and games designed specifically for children.
					</p>
					<ul className="flex items-center mx-auto justify-center gap-4">
						<li className="h-8 w-8">
							<a href="https://www.facebook.com">
								<FaFacebook className="text-white w-full h-full" />
							</a>
						</li>
						<li className="h-8 w-8">
							<a href="https://www.web.whatsapp.com">
								<FaWhatsapp className="text-white w-full h-full" />
							</a>
						</li>
						<li className="h-8 w-8">
							<a href="https://www.instagram.com">
								<FaInstagram className="text-white w-full h-full" />
							</a>
						</li>
						<li className="h-8 w-8">
							<a href="https://www.youtube.com">
								<FaYoutube className="text-white w-full h-full" />
							</a>
						</li>
					</ul>
				</div>
				<div className="mx-auto">
					<span className="text-white mx-auto font-bold text-xl mb-4">Have a Question?</span>
					<a className="link link-hover mx-auto text-gray-500 text-base flex items-center justify-center gap-2 mb-2"><FaEnvelope className="w-5 h-5" />kidsplay@gmail.com</a>
					<a className="link link-hover mx-auto text-gray-500 text-base flex items-center justify-center gap-2 mb-2"><FaPhoneAlt className="w-5 h-5"/>+88 0123545825</a>
					<a className="link link-hover mx-auto text-gray-500 text-base flex items-center justify-center gap-2 mb-2"><FaMapMarkerAlt className="w-5 h-5"/>1/1, Baisteki, Sec #13, Mirpur</a>
				</div>
				<div className="mx-auto">
					<span className="text-white font-bold text-xl mb-4">Information</span>
					<Link to={"/allToys"} className="link link-hover mx-auto  text-gray-500 text-base">All Toys</Link>
					<Link to={"/myToys"} className="link link-hover mx-auto  text-gray-500 text-base">My Toys</Link>
					<Link to={""} className="link link-hover mx-auto  text-gray-500 text-base">About Us</Link>
					<Link to={""} className="link link-hover mx-auto  text-gray-500 text-base">Contact</Link>
				</div>
				<div className="mx-auto">
					<span className="mx-auto text-white font-bold text-xl mb-4">Legal</span>
					<a className="link link-hover mx-auto  text-gray-500 text-base">Terms of use</a>
					<a className="link link-hover mx-auto  text-gray-500 text-base">Privacy policy</a>
					<a className="link link-hover mx-auto  text-gray-500 text-base">Cookie policy</a>
				</div>
			</div>
			
		</footer>
	);
};

export default Footer;
