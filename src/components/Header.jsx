import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/MurderMania-Logo.svg";
import { useEffect, useState } from "react";


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
			</div>
		</>
	)
}

export default Header;