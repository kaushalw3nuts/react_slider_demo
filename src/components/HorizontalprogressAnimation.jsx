import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalprogressAnimation = () => {

	useEffect(() => {
		gsap.to(".sec_pro_wrap:not(:last-child)", {
			yPercent: -100, 
			ease: "none",
			stagger: 0.5,
			scrollTrigger: {
				trigger: ".sec_pro",
				start: "top top",
				end: "+=300%",
				scrub: true,
				pin: true,
				markers: true,
			}
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