import Head from "next/head";
import HookuseState from "@/components/HookuseState";
import Header from "@/components/Header";




export default function Hook () {
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