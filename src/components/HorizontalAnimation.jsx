import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const HorizontalAnimation = () => {

	useEffect(() => {
		const sectionsWrap = gsap.utils.toArray(".first_wrap");

		sectionsWrap.forEach(elem => {
			var tl = gsap.timeline({
				scrollTrigger: {
					trigger: elem,
					scrub: true,
					pin: true,
					pinSpacer: false,
					pinSpacing: false,
					start: "top center",
					end: "bottom top",
					toggleClass: "wrapper_demo",
				},
			});
		});
		gsap.to(".wrapper_demo", {
			scrollTrigger: {
				trigger: ".wrapper",
				scrub: true,
				start: "top top",
				end: "bottom top",
				markers: true,
			}
		});
	}, []);
	
	
	return (
		<>
			<div className="wrapper">
				<section className="first_wrap">
					<h2>NAME</h2>
				</section>
				<section className="first_wrap">
					<h2>FIRST</h2>
				</section>
				<section className="first_wrap">
					<h2>SECOND</h2>
				</section>
			</div>
		</>
	)
};

export default HorizontalAnimation;