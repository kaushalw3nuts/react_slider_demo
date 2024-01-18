import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const HorizontalprogressAnimation = () => {

	const [actbtn, setactBtn] = useState(false);
	const actHandler = () => {
		setactBtn(!actbtn);
	}

	const [counter, setCounter] = useState(10);
	const counterHandler = () => {
		setCounter(counter + 6);
	}

	const [textwrap, setTextwrap] = useState('Prit Kaka');
	const textHandler = (e) => {
		setTextwrap(e.target.value);
	}

	const [check, setCheck] = useState(false);
	const checkHandler = (e) => {
		setCheck(e.target.checked)
	}
	
	return (
		<>
			<div className="sec_pro">
				<div className="wrap">
					<Link href="javascript:void(0);" className="bl_bg" onClick={actHandler}>POST</Link>
				</div>
				<section className={`sec_pro_wrap gr_bg ${actbtn ? 'back_wrap' : ' '}`}>
					<h4>TIME</h4>
				</section>
				<div className="count_wrap">
					<Link href="javascript:void(0);" className="count_btn">You pressed me <span onClick={counterHandler}>{counter}</span> times</Link>
				</div>
				<div className="text_string">
					<input type="text" value={textwrap} onChange={textHandler} />
					<p>Type: {textwrap}</p>
				</div>
				<div className="checkbox_section">
					<label>
						<input type="checkbox" checked={check} onChange={checkHandler} />
						I liked this
					</label>
					<p>You {check ? 'liked' : 'did not like'} this.</p>
				</div>
			</div>
		</>
	);
};

export default HorizontalprogressAnimation;