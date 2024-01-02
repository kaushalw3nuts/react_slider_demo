import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import { useInView } from 'react-intersection-observer';

const Mapmathode = () => {

	const detail = [
        {
            name: 'Rekob Ramya',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'INDIA',
        },
        {
            name: 'Brandon Savage',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
        },
        {
            name: 'Steve Burns',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'CANADA',
        },
        {
            name: 'Kevin Canlas',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'FRANCE',
        },
	]

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
			<div className="map_section">
				<div className="container">
					<div className="title">
						<h3>
							<div className={`word_wrap ${addClass ? 'visible' : ''}`} ref={inViewRef}>
								{
									'map mathode'.split(" ").map(function (word, index) {
										let style = { "animationDelay": (0.2 + index / 10) + "s" }
										let customeVal = word
										const totalLength = 'map mathode'.split(" ").length
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
					<div className="textbox">
						{
							detail.map((content) => {
								const {name,address,description} = content
								return (
									<>
										<h5>{name}</h5>
										<p>{address}</p>
										<i>{description}</i>
									</>
								)
							})
						}
					</div>
				</div>
			</div>
		</>
  	)
}

export default Mapmathode;