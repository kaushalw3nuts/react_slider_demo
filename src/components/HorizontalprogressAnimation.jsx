import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalprogressAnimation = () => {

	// useEffect(() => {
	// 	const sectionsWrapPart = gsap.utils.toArray(".sec_pro_wrap");

	// 	sectionsWrapPart.forEach((content, index) => {
	// 		const char = gsap.timeline({
	// 			scrollTrigger: {
	// 				trigger: content,
	// 				start: "top top", 
	// 				end: index === sectionsWrapPart.length - 1 ? "+=20%" : "bottom +30%",
	// 				scrub: true,
	// 				pin: true,
	// 				pinSpacer: false,
	// 				pinSpacing: false,
	// 				markers: true,
	// 			},
	// 		});
	// 	});
	// }, []); 

	useEffect(() => {
		// Initialize GSAP timeline
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".sec_pro",
				start: "top top",
				end: "bottom +30%",
				scrub: true,
			},
		});
	
		// Animation for each section
		tl.from(".sec_pro_wrap h4", {
			scale: 2,
		});
	
		// Add class to each section on scroll
		gsap.utils.toArray(".sec_pro_wrap").forEach((section, index) => {
			ScrollTrigger.create({
				trigger: section,
				start: "top center",
				pin: true,
				pinSpacing: false,
				pinSpacer: false,
			});
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