import AOS from "aos";
import "aos/dist/aos.css";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import gallery1 from "/assets/gallery/gallery1.png";
import gallery10 from "/assets/gallery/gallery10.png";
import gallery11 from "/assets/gallery/gallery11.png";
import gallery2 from "/assets/gallery/gallery2.png";
import gallery3 from "/assets/gallery/gallery3.png";
import gallery4 from "/assets/gallery/gallery4.png";
import gallery5 from "/assets/gallery/gallery5.png";
import gallery6 from "/assets/gallery/gallery6.png";
import gallery7 from "/assets/gallery/gallery7.png";
import gallery8 from "/assets/gallery/gallery8.png";
import gallery9 from "/assets/gallery/gallery9.png";

const galleryImages = [
	gallery1,
	gallery2,
	gallery3,
	gallery4,
	gallery5,
	gallery6,
	gallery7,
	gallery8,
	gallery9,
	gallery10,
	gallery11,
];

const Gallery = () => {
	const [showAllGallery, setShowAllGallery] = useState(false);

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div className="max-w-7xl px-4 mx-auto py-8">
			<h2 className="text-4xl font-bold text-center">
				Recent PhotoShots
			</h2>
			<p className="text-sky-500 text-center">Gallery</p>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-8">
				{(showAllGallery
					? galleryImages
					: galleryImages.slice(0, 6)
				).map((galleryImage, index) => (
					<img
						data-aos="zoom-in-up"
						className="w-full h-full rounded-lg hover:scale-110 transition-transform duration-300"
						key={index}
						src={galleryImage}
						alt="gallery image"
					/>
				))}
			</div>
			<div className="text-center mt-8">
				<button
					className="px-6 py-3 rounded-md font-bold text-lg text-white bg-sky-500 hover:bg-fuchsia-500 transition-colors duration-300"
					onClick={() => setShowAllGallery(!showAllGallery)}
				>
					{showAllGallery ? "Show Less" : "Show All"}
				</button>
			</div>
		</div>
	);
};

export default Gallery;
