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
import { useEffect } from "react";
import { useState } from "react";
import { useInView } from 'react-intersection-observer';


const SwiperSliderComponent = () => {

	const swiperwrap = [
        {
			imgsrc: Newsimg1,
			imgalt: 'Newsblkimg1',
            text: 'Powerful podcast episode is now in your area just enjoy',
			date: '18 June, 2021',
        },
        {
			imgsrc: Newsimg2,
			imgalt: 'Newsblkimg2',
			text: 'Powerful podcast episode is now in your area just enjoy',
			date: '18 June, 2021',
        },
        {
			imgsrc: Newsimg3,
			imgalt: 'Newsblkimg3',
            text: 'Powerful podcast episode is now in your area just enjoy',
			date: '18 June, 2021',
        },
		{
			imgsrc: Newsimg4,
			imgalt: 'Newsblkimg4',
			text: 'Powerful podcast episode is now in your area just enjoy',
			date: '18 June, 2021',
		},
        {
			imgsrc: Newsimg5,
			imgalt: 'Newsblkimg5',
			text: 'Powerful podcast episode is now in your area just enjoy',
			date: '18 June, 2021',
        },
	]

	const [inViewRef, inView] = useInView({
		triggerOnce: true,
	});

	const [addClass, setAddClass] = useState(false);
	const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

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

	const swiperRef = useRef();
	const sliderSettings = {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
		1200: {
			slidesPerView: 4,
		},
	};

	return (
		<>
			<div className="swiper_section">
				<div className="container">
					<div className="title">
						<h3>
							<div className={`word_wrap ${addClass ? 'visible' : ''}`} ref={inViewRef}>
								{
									'swiper slider'.split(" ").map(function (word, index) {
										let style = { "animationDelay": (0.2 + index / 10) + "s" }
										let customeVal = word
										const totalLength = 'swiper slider'.split(" ").length
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
					<Swiper className="swiper_slider"
						loop={false}
						slidesPerView={4}
						spaceBetween={20}
						breakpoints={sliderSettings}
						// navigation={true}
						// modules={[Navigation]}
						onBeforeInit={(swiper) => {
							swiperRef.current = swiper;
						}}
						onSlideChange={(swiper) => {
                            setIsBeginning(swiper.isBeginning);
                            setIsEnd(swiper.isEnd);
                        }}
                        onReachBeginning={() => setIsBeginning(true)}
                        onReachEnd={() => setIsEnd(true)}
					>
						{
							swiperwrap.map((swiperwrapper, index) => {
								const {imgsrc, imgalt, text, date} = swiperwrapper
								return (
									<SwiperSlide key={index}>
										<Link href="#" className="box_slider">
											<div className="image_box_slider">
												<Image src={imgsrc} alt={imgalt}/>
											</div>
											<div className="image_slider_dtl">
												<p>{text}</p>
												<div className="date_newsblock">{date}</div>
											</div>
										</Link>
									</SwiperSlide>
								)
							})
						}
					</Swiper>
					<div className="switer_btn">
						<button onClick={() => swiperRef.current?.slidePrev()} className={`group ${isBeginning ? 'disable_arrow' : ''}`}>
							<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="20" cy="20" r="19" stroke="#E12929" strokeWidth="2"/>
								<path d="M18 27L11 20M11 20L18 13M11 20L29 20" stroke="#E12929" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
						</button>
						<button onClick={() => swiperRef.current?.slideNext()} className={`group ${isEnd ? 'disable_arrow' : ''}`}>
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