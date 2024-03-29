import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Newsimg1 from "@/assets/images/news1.png";
import Newsimg2 from "@/assets/images/news2.png";
import Newsimg3 from "@/assets/images/news3.png";
import Newsimg4 from "@/assets/images/news4.png";
import Newsimg5 from "@/assets/images/news5.png";
import { useEffect } from "react";
import { useState } from "react";
import { useInView } from 'react-intersection-observer';
import React from "react";

const SlickSliderComponent = () => {

	const [inViewRef, inView] = useInView({
		triggerOnce: true,
	});

	const [addClass, setAddClass] = useState(false);

	useEffect (() => {
		if (inView && !addClass) {
			// Add a delay of 1000 milliseconds (1 second) before adding the class
			const delayTimeout = setTimeout(() => {
				setAddClass(true);
			}, 50);

			// Clear the timeout if the component goes out of view before the delay
			return () => clearTimeout(delayTimeout);
		}
	}, [inView, addClass])

	const ArrowLeft = (props) => (
		<button {...props} className="left group">
			<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="20" cy="20" r="19" stroke="#E12929" strokeWidth="2"/>
				<path d="M18 27L11 20M11 20L18 13M11 20L29 20" stroke="#E12929" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
		</button>
	);
	const ArrowRight = (props) => (
		<button {...props} className="right group">
			<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="20" cy="20" r="19" stroke="#E12929" strokeWidth="2"/>
				<path d="M22 13L29 20M29 20L22 27M29 20L11 20" stroke="#E12929" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
		</button>
	);

	var settings = {
		dots: false,
		arrow: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: <ArrowLeft />,
		nextArrow: <ArrowRight />,
		responsive: [
			{
				breakpoint: 1399,
				settings: {
				  slidesToShow: 3,
				}
			},
			{
				breakpoint: 1300,
				settings: {
				  slidesToShow: 3,
				}
			},
			{
			  breakpoint: 1199,
			  settings: {
				slidesToShow: 3,
			  }
			},
			{
			  breakpoint: 991,
			  settings: {
				slidesToShow: 2,
			  }
			},
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 1,
			  }
			}
		]
	};

	return (
		<>
			<div className="slick_section">
				<div className="container">
					<div className="title">
						<h3>
							<div className={`word_wrap ${addClass ? 'visible' : ''}`} ref={inViewRef}>
								{
									'slick slider'.split(" ").map(function (word, index) {
										let style = { "animationDelay": (0.2 + index / 10) + "s" }
										let customeVal = word
										const totalLength = 'slick slider'.split(" ").length
										if (index !== (totalLength - 1)) {
											customeVal = word
										}

										return (
											<React.Fragment key={index}>
												<div className="word" style={style}>{word}</div>
												<span className="word">&nbsp;</span>
											</React.Fragment>
										);
									}
								)}
							</div>
						</h3>
					</div>
					<div className="slick_slider_wrap">
						<Slider {...settings}>
							<Link href="#" className="box_slider">
								<div className="image_box_slider">
									<Image src={Newsimg1} alt="Newsblkimg1"/>
								</div>
								<div className="image_slider_dtl">
									<p>Powerful podcast episode is now in your area just enjoy</p>
									<div className="date_newsblock">18 June, 2021</div>
								</div>
							</Link>
							<Link href="#" className="box_slider">
								<div className="image_box_slider">
									<Image src={Newsimg2} alt="Newsblkimg2"/>
								</div>
								<div className="image_slider_dtl">
									<p>Powerful podcast episode is now in your area just enjoy</p>
									<div className="date_newsblock">18 June, 2021</div>
								</div>
							</Link>
							<Link href="#" className="box_slider">
								<div className="image_box_slider">
									<Image src={Newsimg3} alt="Newsblkimg3"/>
								</div>
								<div className="image_slider_dtl">
									<p>Powerful podcast episode is now in your area just enjoy</p>
									<div className="date_newsblock">18 June, 2021</div>
								</div>
							</Link>
							<Link href="#" className="box_slider">
								<div className="image_box_slider">
									<Image src={Newsimg4} alt="Newsblkimg4"/>
								</div>
								<div className="image_slider_dtl">
									<p>Powerful podcast episode is now in your area just enjoy</p>
									<div className="date_newsblock">18 June, 2021</div>
								</div>
							</Link>
							<Link href="#" className="box_slider">
								<div className="image_box_slider">
									<Image src={Newsimg5} alt="Newsblkimg5"/>
								</div>
								<div className="image_slider_dtl">
									<p>Powerful podcast episode is now in your area just enjoy</p>
									<div className="date_newsblock">18 June, 2021</div>
								</div>
							</Link>
						</Slider>
					</div>
				</div>
			</div>
		</>
	)
}

export default SlickSliderComponent;