import { useState } from "react";
import CompanyLogo1 from "../../Images/CompanyLogo1.png";
import CompanyLogo2 from "../../Images/CompanyLogo2.png";
import CompanyLogo3 from "../../Images/CompanyLogo3.png";
import "./Portfolio.css";

export default function Portfolio() {
	const [portfolioItems] = useState([
		{
			id: 1,
			title: "Fintech Infra for Bharat",
			description:
				"Revolutionizing financial access in India by building robust infrastructure that brings banking to the underserved millions.",
			category: "Fintech",
			logo: CompanyLogo1,
			color: "bg-cyan-500",
		},
		{
			id: 2,
			title: "AI-Driven Logistics Optimization",
			description:
				"Redefining logistics with cutting-edge AI technology to streamline operations and boost efficiency.",
			category: "AI",
			logo: CompanyLogo3,
			color: "bg-blue-500",
		},
		{
			id: 3,
			title: "Creator Economy SaaS",
			description:
				"Empowering creators to scale their influence with intuitive SaaS platforms, helping them monetize and thrive.",
			category: "SaaS",
			logo: CompanyLogo1,
			color: "bg-indigo-400",
		},
		{
			id: 4,
			title: "Clean Energy Marketplace",
			description:
				"A platform that connects individuals and businesses to sustainable energy sources, fostering a greener future.",
			category: "Clean Energy",
			logo: CompanyLogo2,
			color: "bg-green-500",
		},
		{
			id: 5,
			title: "GenZ Fashion Brand",
			description:
				"A fast-fashion brand for GenZ that combines trendsetting styles with eco-friendly practices.",
			category: "Fashion",
			logo: CompanyLogo1,
			color: "bg-pink-500",
		},
	]);

	return (
		<div className="relative min-h-screen bg-black text-white overflow-hidden">
			<main className="relative z-10 container mx-auto px-4 py-12">
				<div className="relative">
					<h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[20vw] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF0D]  to-[#FFFFFF0D] uppercase tracking-wide">
						GROWTH
					</h1>

					<h1 className="relative text-4xl md:text-5xl lg:text-6xl text-center mb-8 font-bold xl:text-[80px] leading-[88px] bg-gradient-to-r from-[#ffc610] to-white bg-clip-text text-transparent">
						OUR PORTFOLIO
					</h1>

					<p className="relative text-center max-w-4xl mx-auto mb-24 text-gray-300">
						At GrowthVec, we're honored to partner with ambitious founders
						transforming industries. Each startup in our portfolio represents
						bold ideas executed with precision, disrupting markets and shaping
						the future.
					</p>
				</div>

				<section className="mb-20 relative">
					<div className="relative z-10">
						<h2 className="text-4xl md:text-5xl font-bold text-center mb-2">
							Explore the Trailblazers
						</h2>
						<p className="text-center text-gray-400 mb-10">
							Here's a glimpse of the innovators redefining their sectors
						</p>

						<div className="flex flex-col md:flex-row flex-wrap gap-10 justify-center">
							{portfolioItems.map((item) => (
								<div
									key={item.id}
									className="w-[340px] bg-[#FFFFFF0D] border border-gray-800 rounded-lg overflow-hidden hover:border-gray-700 transition-all duration-300 h-[340px] flex flex-col"
								>
									<div className={`p-4 flex items-center justify-center h-40`}>
										<img
											src={item.logo || "/placeholder.svg"}
											alt={item.category}
											className="w-full h-full object-cover rounded-xl"
										/>
									</div>
									<div className="p-4 flex-1 flex flex-col">
										<h3 className="text-xl font-bold mb-2">{item.title}</h3>
										<p className="text-gray-400 text-sm flex-1">
											{item.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="w-full h-full bg-gradient absolute bottom-0 left-0 -z-10"></div>
				</section>

				<section className="mb-20">
					<h2 className="text-4xl md:text-5xl lg:text-6xl text-center mb-8 font-bold xl:text-[80px] leading-[60px] lg:leading-[88px] underline bg-gradient-to-r from-[#ffc610]  to-white bg-clip-text text-transparent">
						Our Investment Philosophy
					</h2>
					<p className="text-center max-w-4xl mx-auto mb-16 text-gray-300">
						We back founders who are bold enough to think big and execute fast.
						From fintech to fashion, our portfolio reflects a diverse mix of
						sectors, each with groundbreaking potential.
					</p>
				</section>

				<section className="text-center mb-12">
					<h3 className="text-2xl font-bold mb-8">Curious to Learn More?</h3>
					{/* <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-8 py-6 rounded-full">
						Apply for Funding
					</Button> */}

					<div className="mx-auto h-[66px] w-[202px] flex flex-col gap-[7.61904764175415px] p-[5.333333492279053px] rounded-[146.2857208251953px] border-[2.2857143878936768px] border-solid border-white">
						<div className="flex justify-center items-center gap-[7.61904764175415px] bg-[#ffc610] py-[11.5px] px-[10px] rounded-[83.80952453613281px] cursor-pointer">
							<span className="font-semibold text-[20px] text-black">
								Apply for Funding
							</span>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
