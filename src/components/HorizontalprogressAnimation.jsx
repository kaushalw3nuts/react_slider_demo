import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalprogressAnimation = () => {

	useEffect(() => {
		const sectionsWrap = gsap.utils.toArray(".sec_pro_wrap");
	
		sectionsWrap.forEach((elem, index) => {
			gsap.timeline({
				scrollTrigger: {
				trigger: elem,
				scrub: true,
				pin: true,
				pinSpacing: false,
				pinSpacer: false,
				start: "top top",
				end: index === sectionsWrap.length - 1 ? "+=20%" : "bottom +30%",
				toggleClass: {
					targets: ".sec_pro",
					className: "wrapper_demo",
				},
				markers: true,
				},
			})
		  	.from(elem, {
				duration: 0.5
			}) // Fade in each section
		  	.to(elem.querySelector("h4"), {
				scale: 1.5, 
				duration: 1 
			}, "<"); // Scale the h4 element
		});
	}, []);

	return (
		<>
			<div className="sec_pro">
				<section className="sec_pro_wrap bl_bg">
					<h4>POST</h4>
				</section>
				<section className="sec_pro_wrap gr_bg">
					<h4>TIME</h4>
				</section>
				<section className="sec_pro_wrap rd_bg">
					<h4>UX</h4>
				</section>
			</div>
		</>
	);
};

export default HorizontalprogressAnimation;