import { useState, useEffect } from 'react';

const DotAnimation = () => {
	const [dot, setDot] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const positionHandler = (e) => {
			setDot({ x: e.clientX, y: e.clientY });
		}
		window.addEventListener('pointermove', positionHandler);
		return () => {
			window.removeEventListener('pointermove', positionHandler);
		};
	}, []);

	return (
		<div className="dot_wrapper" style={{ transform: `translate(${dot.x}px, ${dot.y}px)` }} />
	);
}

export default DotAnimation;