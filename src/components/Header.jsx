import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/MurderMania-Logo.svg";
import { useEffect, useState } from "react";
import { gsap } from "gsap";


const Header = () => {

	const [scroll, setScroll] = useState(false);
	useEffect(() => {
		const scrollHandler = () => {
			setScroll(window.scrollY > 1);
		}
		window.addEventListener('scroll', scrollHandler);
	}, []);

	const [menuBtn, setMenuBtn] = useState(false);
	const menuHandler = () => {
		setMenuBtn(!menuBtn);
		const bodyElement = document.body;
		bodyElement.classList.toggle('open_nav');
	}

	const [dot, setDot] = useState({ x: 0, y: 0 });
	const [isOverScaleDemo, setIsOverScaleDemo] = useState(false);
	useEffect(() => {
		const positionHandler = (e) => {
			const scaleDemoElement = document.querySelector(".scale_demo");
			const isOver = scaleDemoElement ? scaleDemoElement.contains(e.target) : false;
			gsap.to(".dot_wrapper", {
				duration: 0.3,
				x: e.clientX,
				y: e.clientY,
				scale: isOver ? 2 : 1,
				ease: "power2.out",
			});
			setDot({ x: e.clientX, y: e.clientY });
			setIsOverScaleDemo(isOver);
		};
		window.addEventListener("pointermove", positionHandler);
		return () => {
			window.removeEventListener("pointermove", positionHandler);
		};
	}, []);

	return (
		<>
			<div className={`header ${scroll ? 'fix_wrap' : ''}`}>
				<div className="container">
					<div className="main_header">
						<div className="logo">
							<Link href="#"><Image src={Logo} alt="logo" /></Link>
						</div>
						<div className={`navigation ${menuBtn ? 'slide' : ''}`}>
							<ul>
								<li><Link href="#">about</Link></li>
								<li><Link href="#">team</Link></li>
								<li><Link href="#">blog</Link></li>
								<li><Link href="#">contact</Link></li>
							</ul>
						</div>
						<div className={`menu-toggler ${menuBtn ? 'active' : ''}`} onClick={menuHandler}>
							<div className="menu-toggler-icon"></div>
						</div>
					</div>
				</div>
				<div className="dot_wrapper" style={{transform: `translate(${dot.x}px, ${dot.y}px)`}} />
			</div>
		</>
	)
}

export default Header;