import Image from "next/image";
import Award from "@/assets/images/award-img.webp";
import Award1 from "@/assets/images/award-img1.webp";
import Award2 from "@/assets/images/award-img2.webp";
import Award3 from "@/assets/images/award-img3.webp";
import Award4 from "@/assets/images/award-img4.svg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Awardsection = () => {

	const mainAward = useRef(null);
	const firstAward = useRef(null);
	const secondAward = useRef(null);
	const thirdAward = useRef(null);
	const fourthAward = useRef(null);

	useEffect(() => {
		
		async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const scroll = new LocomotiveScroll();
		}

		const animateElement = (element, animation) => {
			const char = gsap.timeline({
				scrollTrigger: {
					trigger: "#scroll-container",
					start: "top top",
					end: "bottom top",
					scrub: true,
					pin: true,
					pinSpacing: false,
					pinSpacer: false,
				},
			});
			char.fromTo(element, animation.from, animation.to);
		};

		animateElement(mainAward.current,{
			from:{
				y: 200
			},
			to:{
				y: -1000
			}
		});
		animateElement(firstAward.current,{
			from:{
				y: 200
			},
			to:{
				y: -1000,
				rotation: 360
			}
		});
		animateElement(secondAward.current,{
			from:{
				y: 200
			},
			to:{
				y: -1000,
				rotation: 360
			}
		});
		animateElement(thirdAward.current,{
			from:{
				y: 200
			},
			to:{
				y: -1000,
				rotation: 360
			}
		});
		animateElement(fourthAward.current,{
			from:{
				y: 200
			},
			to:{
				y: -1000,
				rotation: 360
			}
		});
	}, []);

	return (
		<>
			<div className="award">
				<div className="container">
					<div className="award_section">
						<div className="image">
							<Image src={Award} alt="award" ref={mainAward} />
						</div>
						<div className="first_img">
							<Image src={Award1} alt="award" ref={firstAward} />
						</div>
						<div className="second_img">
							<Image src={Award2} alt="award" ref={secondAward} />
						</div>
						<div className="third_img">
							<Image src={Award3} alt="award" ref={thirdAward} />
						</div>
						<div className="fourth_img">
							<Image src={Award4} alt="award" ref={fourthAward} />
						</div>
						<div className="award_text">
							<h2>Award Winning Company</h2>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Awardsection;