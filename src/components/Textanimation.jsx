import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useEffect } from "react";





const Textanimation = () => {
	useEffect (() => {
		let animationsection = gsap.timeline();
		animationsection.from('.word', {
			y: 100,
			stagger: {
				each: 0.07
			}
		})
	}, [])
	
	return (
		<>
			<div className="text_section">
				<div className="container">
					<div className="title">
						<h3>
							{
								'good day'.split('').map((word) => {
									return word === ' ' ? <div className="word">&nbsp;</div> : <div className="word">{word}</div>
								})
							}
						</h3>
					</div>
				</div>
			</div>
		</>
	);
};

export default Textanimation;