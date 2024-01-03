import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);



const ScrollLineAnimation = () => {

	useEffect(() => {
		const sections = gsap.utils.toArray(".content_box");

		sections.forEach(elem => {
			var tl = gsap.timeline({
				scrollTrigger: {
					trigger: elem,
					scrub: true,
					start: "top center",
					end: 'bottom top',
					toggleClass: 'highlight',
				},
			});
		});
		// gsap.from(".strategy_step", {
		// 	scrollTrigger: {
		// 		trigger: ".strategy_step",
		// 		pin: true,
		// 		pinSpacing: false,
		// 		start: "top top",
    	// 		end: "top top",
		// 	},
		// });
		gsap.to(".timeline-line .line-fill", {
			height: '100%',
			ease: 'linear',
			scrollTrigger: {
				trigger: ".strategy_section",
				scrub: true,
				start: "top center",
				end: 'bottom center',
			}
		});
	}, []);

	return (
		<>
			<div className="strategy">
				<div className="container">
					<div className="strategy_section">
						<div className="row">
							<div className="col-lg-5">
								<div className="text_section fadeInUp">
									<h4>All things considered from strategy to code</h4>
								</div>
							</div>
							<div className="col-lg-6 offset-lg-1">
								<div className="strategy_step">
									<div className="step_box">
										<div className="content_box">
											<span>Strategy</span>
											<p>Our process begins with developing a comprehensive strategy that aligns with clients' goals through thorough research, ensuring the final product meets their needs and delivers tangible results.</p>
										</div>
										<div className="content_box">
											<span>Creative</span>
											<p>Our creative team develops a website design that conveys clients' unique value proposition and drives results by creating an intuitive and engaging user experience, ensuring every aspect of the design meets their business objectives.</p>
										</div>
										<div className="content_box">
											<span>Implementation</span>
											<p>Our developers bring the design to life, ensuring the website is fully functional, responsive, and optimised for search engines, conducting thorough testing to meet high-quality requirements.</p>
										</div>
										<div className="content_box">
											<span>Test</span>
											<p>Quality assurance is paramount to us. Our dedicated testing team rigorously examines every aspect of your project to identify and address any potential issues. Through thorough testing and debugging, we ensure that the final product meets the highest standards.</p>
										</div>
										<div className="content_box">
											<span>Delivery</span>
											<p>In the final phase, we work closely with clients to ensure satisfaction and provide training and support for website management. We strive to establish long-term relationships to help clients achieve their business objectives, monitoring website performance and providing ongoing optimization for continued results.</p>
										</div>
									</div>
									<div class="timeline-line">
										<div class="line-default"></div>
										<div class="line-fill"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ScrollLineAnimation;