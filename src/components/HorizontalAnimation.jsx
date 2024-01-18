import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const HorizontalAnimation = () => {

	useEffect(() => {
		const sectionsWrap = gsap.utils.toArray(".first_wrap");

		sectionsWrap.forEach((elem, index) => {
			var tl = gsap.timeline({
				scrollTrigger: {
					trigger: elem,
					scrub: true,
					pin: true,
					pinSpacing: false,
					pinSpacer: false,
					start: "top top",
					end: index === sectionsWrap.length - 1 ? "+=20%" : "bottom +30%",
					toggleClass: "wrapper_demo",
				},
			});
		});
	}, []);
	
	
	return (
		<>
			<div className="wrapper">
				<section className="first_wrap bl_bg">
					<h2>NAME</h2>
				</section>
				<section className="first_wrap gr_bg">
					<h2>FIRST</h2>
				</section>
				<section className="first_wrap rd_bg">
					<h2>SECOND</h2>
				</section>
			</div>
		</>
	)
};

export default HorizontalAnimation;