import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import { useInView } from 'react-intersection-observer';
import React from "react";


const Textanimation = () => {

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
	
	return (
		<>
			<div className="text_section">
				<div className="container">
					<div className="title">
						<h3>
							<div className={`word_wrap ${addClass ? 'visible' : ''}`} ref={inViewRef}>
								{
									'text animation'.split(" ").map(function (word, index) {
										let style = { "animationDelay": (0.2 + index / 10) + "s" }
										let customeVal = word
										const totalLength = 'text animation'.split(" ").length
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
				</div>
			</div>
		</>
	);
};

export default Textanimation;