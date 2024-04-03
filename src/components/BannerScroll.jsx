import Image from "next/image";
import React, { useState, useEffect } from 'react';


const BannerScroll = () => {
	const [scrollHeight, setScrollHeight] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const scrollbnr = window.scrollY;
			setScrollHeight(scrollbnr);
		};
	
		window.addEventListener('scroll', handleScroll);
	
		return () => {
		  	window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return(
		<>
			<section className="section_block">
				<div className="bg" style={{ height: `${scrollHeight}px` }}></div>
			</section>
		</>
	)
}

export default BannerScroll;