import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Newsimg1 from "@/assets/images/news1.png";
import Newsimg2 from "@/assets/images/news2.png";
import Newsimg3 from "@/assets/images/news3.png";
import Newsimg4 from "@/assets/images/news4.png";
import Newsimg5 from "@/assets/images/news5.png";


const SwiperSliderComponent = () => {

	const swiperRef = useRef();
	const sliderSettings = {
		767: {
			slidesPerView: 1,
		},
		991: {
			slidesPerView: 2,
		},
		1199: {
			slidesPerView: 3,
		},
		1300: {
			slidesPerView: 3,
		},
		1301: {
			slidesPerView: 4,
		},
	};

	return (
		<>
			<div className="swiper_section">
				<div className="container">
					<div className="title">
						<h3>swiper slider</h3>
					</div>
					<Swiper className="swiper_slider"
						loop={true}
						slidesPerView={4}
						spaceBetween={20}
						breakpoints={sliderSettings}
						// navigation={true}
						// modules={[Navigation]}
						onBeforeInit={(swiper) => {
						swiperRef.current = swiper;
						}}
					>
						<SwiperSlide>
							<Link href="#" className="box_slider">
								<div className="image_box_slider">
									<Image src={Newsimg1} alt="Newsblkimg1"/>
								</div>
								<div className="image_slider_dtl">
									<p>Powerful podcast episode is now in your area just enjoy</p>
									<div className="date_newsblock">18 June, 2021</div>
								</div>
							</Link>
						</SwiperSlide>
						<SwiperSlide>
							<Link href="#" className="box_slider">
								<div className="image_box_slider">
									<Image src={Newsimg2} alt="Newsblkimg2"/>
								</div>
								<div className="image_slider_dtl">
									<p>Powerful podcast episode is now in your area just enjoy</p>
									<div className="date_newsblock">18 June, 2021</div>
								</div>
							</Link>
						</SwiperSlide>
						<SwiperSlide>
							<Link href="#" className="box_slider">
								<div className="image_box_slider">
									<Image src={Newsimg3} alt="Newsblkimg3"/>
								</div>
								<div className="image_slider_dtl">
									<p>Powerful podcast episode is now in your area just enjoy</p>
									<div className="date_newsblock">18 June, 2021</div>
								</div>
							</Link>
						</SwiperSlide>
						<SwiperSlide>
							<Link href="#" className="box_slider">
								<div className="image_box_slider">
									<Image src={Newsimg4} alt="Newsblkimg4"/>
								</div>
								<div className="image_slider_dtl">
									<p>Powerful podcast episode is now in your area just enjoy</p>
									<div className="date_newsblock">18 June, 2021</div>
								</div>
							</Link>
						</SwiperSlide>
						<SwiperSlide>
							<Link href="#" className="box_slider">
								<div className="image_box_slider">
									<Image src={Newsimg5} alt="Newsblkimg5"/>
								</div>
								<div className="image_slider_dtl">
									<p>Powerful podcast episode is now in your area just enjoy</p>
									<div className="date_newsblock">18 June, 2021</div>
								</div>
							</Link>
						</SwiperSlide>
					</Swiper>
					<div className="switer_btn">
						<button onClick={() => swiperRef.current?.slidePrev()} className="group">
							<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="20" cy="20" r="19" stroke="#E12929" strokeWidth="2"/>
								<path d="M18 27L11 20M11 20L18 13M11 20L29 20" stroke="#E12929" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
						</button>
						<button onClick={() => swiperRef.current?.slideNext()} className="group">
							<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="20" cy="20" r="19" stroke="#E12929" strokeWidth="2"/>
								<path d="M22 13L29 20M29 20L22 27M29 20L11 20" stroke="#E12929" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default SwiperSliderComponent;