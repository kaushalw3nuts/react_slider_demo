import Head from "next/head";
import HookuseState from "@/components/HookuseState";
import Header from "@/components/Header";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";



export default function Hook () {

	useEffect(() => {
		const Locoscroll = new LocomotiveScroll({
			el: document.querySelector("[data-scroll-container]"),
			smooth: true,
		});
		return () => {
			if (Locoscroll) {
				Locoscroll.destroy();
			}
		  };
	}, []);

	return (
	  <>
		<Head>
		  <title>Hook</title>
		</Head>
		<Header />
		<HookuseState />
	  </>
	)
}