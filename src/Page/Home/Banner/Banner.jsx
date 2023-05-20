// eslint-disable-next-line no-unused-vars
import React from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import bannerImage1 from "/assets/home/banner1.jpg";
import bannerImage2 from "/assets/home/banner2.jpg";
import bannerImage3 from "/assets/home/banner3.jpg";
import bannerImage4 from "/assets/home/banner4.jpg";
import bannerImage5 from "/assets/home/banner5.jpg";

const Banner = () => {
	return (
		<div className="max-w-7xl px-4 pt-8 pb-20 mx-auto">
			<div className="carousel w-full">
				<div id="slide1" className="carousel-item relative w-full">
					<img
						src={bannerImage1}
						className="w-full max-[399px]:min-h-[1050px] min-[400px]:min-h-[850px] sm:min-h-[800px] sm:max-h-[800px] object-cover rounded-xl"
					/>
					<div className="absolute top-0 left-0 w-full h-full rounded-xl flex items-center justify-end bg-gradient-to-r from-[#0ea4e950] via-[#3b83f690] via-40% to-[#bf26d380] to-70%">
						<div className="space-y-7 text-center sm:text-left lg:px-36 sm:px-16 px-2 ">
							<h2 className="text-6xl font-bold text-white">
								Let's Make Learn Into Fun
							</h2>
							<p className="text-lg text-white font-medium">
								Developing critical thinking in kids is crucial.
								Encourage puzzles, brain teasers, and asking
								questions. Create a safe space for expression.
								Foster curiosity, exploration, and multiple
								perspectives. Help kids become confident problem
								solvers, adaptive learners, and independent
								thinkers. Cultivate a lifelong love for
								learning.
							</p>
							<button className="text-xl font-bold text-white py-3 px-6 rounded-full bg-sky-500 hover:bg-fuchsia-500 transition-colors duration-300">
								Shop Now
							</button>
						</div>

						<div className="absolute flex justify-center gap-4 transform right-5 sm:right-20 bottom-5 sm:bottom-20">
							<a
								href="#slide5"
								className="rounded-full p-3 bg-sky-500 text-white hover:bg-fuchsia-500 transition-colors duration-300"
							>
								<HiOutlineArrowLeft className="text-xl" />
							</a>
							<a
								href="#slide2"
								className="rounded-full p-3 bg-sky-500 text-white hover:bg-fuchsia-500 transition-colors duration-300"
							>
								<HiOutlineArrowRight className="text-xl" />
							</a>
						</div>
					</div>
				</div>
                <div id="slide2" className="carousel-item relative w-full">
					<img
						src={bannerImage2}
						className="w-full max-[399px]:min-h-[1050px] min-[400px]:min-h-[850px] sm:min-h-[800px] sm:max-h-[800px] object-cover rounded-xl"
					/>
					<div className="absolute top-0 left-0 w-full h-full rounded-xl flex items-center justify-end bg-gradient-to-r from-[#0ea4e950] via-[#3b83f690] via-40% to-[#bf26d380] to-70%">
						<div className="space-y-7 text-center sm:text-left lg:px-36 sm:px-16 px-2 ">
							<h2 className="text-6xl font-bold text-white">
								Let's Do Some Experiment
							</h2>
							<p className="text-lg text-white font-medium">
								Developing critical thinking in kids is crucial.
								Encourage puzzles, brain teasers, and asking
								questions. Create a safe space for expression.
								Foster curiosity, exploration, and multiple
								perspectives. Help kids become confident problem
								solvers, adaptive learners, and independent
								thinkers. Cultivate a lifelong love for
								learning.
							</p>
							<button className="text-xl font-bold text-white py-3 px-6 rounded-full bg-sky-500 hover:bg-fuchsia-500 transition-colors duration-300">
								Shop Now
							</button>
						</div>

						<div className="absolute flex justify-center gap-4 transform right-5 sm:right-20 bottom-5 sm:bottom-20">
							<a
								href="#slide1"
								className="rounded-full p-3 bg-sky-500 text-white hover:bg-fuchsia-500 transition-colors duration-300"
							>
								<HiOutlineArrowLeft className="text-xl" />
							</a>
							<a
								href="#slide3"
								className="rounded-full p-3 bg-sky-500 text-white hover:bg-fuchsia-500 transition-colors duration-300"
							>
								<HiOutlineArrowRight className="text-xl" />
							</a>
						</div>
					</div>
				</div>
                <div id="slide3" className="carousel-item relative w-full">
					<img
						src={bannerImage3}
						className="w-full max-[399px]:min-h-[1050px] min-[400px]:min-h-[850px] sm:min-h-[800px] sm:max-h-[800px] object-cover rounded-xl"
					/>
					<div className="absolute top-0 left-0 w-full h-full rounded-xl flex items-center justify-end bg-gradient-to-r from-[#0ea4e950] via-[#3b83f690] via-40% to-[#bf26d380] to-70%">
						<div className="space-y-7 text-center sm:text-left lg:px-36 sm:px-16 px-2 ">
							<h2 className="text-6xl font-bold text-white">
								Let's Think
							</h2>
							<p className="text-lg text-white font-medium">
								Developing critical thinking in kids is crucial.
								Encourage puzzles, brain teasers, and asking
								questions. Create a safe space for expression.
								Foster curiosity, exploration, and multiple
								perspectives. Help kids become confident problem
								solvers, adaptive learners, and independent
								thinkers. Cultivate a lifelong love for
								learning.
							</p>
							<button className="text-xl font-bold text-white py-3 px-6 rounded-full bg-sky-500 hover:bg-fuchsia-500 transition-colors duration-300">
								Shop Now
							</button>
						</div>

						<div className="absolute flex justify-center gap-4 transform right-5 sm:right-20 bottom-5 sm:bottom-20">
							<a
								href="#slide2"
								className="rounded-full p-3 bg-sky-500 text-white hover:bg-fuchsia-500 transition-colors duration-300"
							>
								<HiOutlineArrowLeft className="text-xl" />
							</a>
							<a
								href="#slide4"
								className="rounded-full p-3 bg-sky-500 text-white hover:bg-fuchsia-500 transition-colors duration-300"
							>
								<HiOutlineArrowRight className="text-xl" />
							</a>
						</div>
					</div>
				</div>
                <div id="slide4" className="carousel-item relative w-full">
					<img
						src={bannerImage4}
						className="w-full max-[399px]:min-h-[1050px] min-[400px]:min-h-[850px] sm:min-h-[800px] sm:max-h-[800px] object-cover rounded-xl"
					/>
					<div className="absolute top-0 left-0 w-full h-full rounded-xl flex items-center justify-end bg-gradient-to-r from-[#0ea4e950] via-[#3b83f690] via-40% to-[#bf26d380] to-70%">
						<div className="space-y-7 text-center sm:text-left lg:px-36 sm:px-16 px-2 ">
							<h2 className="text-6xl font-bold text-white">
								Let's Make Something
							</h2>
							<p className="text-lg text-white font-medium">
								Developing critical thinking in kids is crucial.
								Encourage puzzles, brain teasers, and asking
								questions. Create a safe space for expression.
								Foster curiosity, exploration, and multiple
								perspectives. Help kids become confident problem
								solvers, adaptive learners, and independent
								thinkers. Cultivate a lifelong love for
								learning.
							</p>
							<button className="text-xl font-bold text-white py-3 px-6 rounded-full bg-sky-500 hover:bg-fuchsia-500 transition-colors duration-300">
								Shop Now
							</button>
						</div>

						<div className="absolute flex justify-center gap-4 transform right-5 sm:right-20 bottom-5 sm:bottom-20">
							<a
								href="#slide3"
								className="rounded-full p-3 bg-sky-500 text-white hover:bg-fuchsia-500 transition-colors duration-300"
							>
								<HiOutlineArrowLeft className="text-xl" />
							</a>
							<a
								href="#slide5"
								className="rounded-full p-3 bg-sky-500 text-white hover:bg-fuchsia-500 transition-colors duration-300"
							>
								<HiOutlineArrowRight className="text-xl" />
							</a>
						</div>
					</div>
				</div>
                <div id="slide5" className="carousel-item relative w-full">
					<img
						src={bannerImage5}
						className="w-full max-[399px]:min-h-[1050px] min-[400px]:min-h-[850px] sm:min-h-[800px] sm:max-h-[800px] lg:object-bottom object-center object-cover rounded-xl"
					/>
					<div className="absolute top-0 left-0 w-full h-full rounded-xl flex items-center justify-end bg-gradient-to-r from-[#0ea4e950] via-[#3b83f690] via-40% to-[#bf26d380] to-70%">
						<div className="space-y-7 text-center sm:text-left lg:px-36 sm:px-16 px-2 ">
							<h2 className="text-6xl font-bold text-white">
								Explore Yourself
							</h2>
							<p className="text-lg text-white font-medium">
								Developing critical thinking in kids is crucial.
								Encourage puzzles, brain teasers, and asking
								questions. Create a safe space for expression.
								Foster curiosity, exploration, and multiple
								perspectives. Help kids become confident problem
								solvers, adaptive learners, and independent
								thinkers. Cultivate a lifelong love for
								learning.
							</p>
							<button className="text-xl font-bold text-white py-3 px-6 rounded-full bg-sky-500 hover:bg-fuchsia-500 transition-colors duration-300">
								Shop Now
							</button>
						</div>

						<div className="absolute flex justify-center gap-4 transform right-5 sm:right-20 bottom-5 sm:bottom-20">
							<a
								href="#slide4"
								className="rounded-full p-3 bg-sky-500 text-white hover:bg-fuchsia-500 transition-colors duration-300"
							>
								<HiOutlineArrowLeft className="text-xl" />
							</a>
							<a
								href="#slide1"
								className="rounded-full p-3 bg-sky-500 text-white hover:bg-fuchsia-500 transition-colors duration-300"
							>
								<HiOutlineArrowRight className="text-xl" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
