import { useState } from "react";
import CompanyLogo1 from "../../Images/CompanyLogo1.png";
import CompanyLogo2 from "../../Images/CompanyLogo2.png";
import CompanyLogo3 from "../../Images/CompanyLogo3.png";
import "./Portfolio.css";

export default function Portfolio() {
	const [portfolioItems] = useState([
  {
    id: 1,
    title: "Acadza",
    description:
      "Acadza is an ed-tech platform founded in 2020 by Anshul Singhal, helping JEE & NEET aspirants with practical tools and expert guidance. With 50+ IITians and doctors mentored, Acadza offers a customizable, student-friendly interface, formula sheets, assignments, and predictive tools to make learning stress-free and effective.",
    category: "EdTech",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQE0xpoXH415Gg/company-logo_200_200/company-logo_200_200/0/1630648783268?e=1753920000&v=beta&t=bmnJZIE1fM_JgcvvSkTBPwbMOdcn9M5w-OsahJ5baBs",
    color: "bg-yellow-400",
  },
  {
    id: 2,
    title: "Janitri",
    description:
      "Developing sustainable technology to improve maternal and child healthcare.",
    category: "HealthTech",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQHyt0dPZQFEnQ/company-logo_200_200/company-logo_200_200/0/1704874748651/janitri_logo?e=1753920000&v=beta&t=do-KmxAYAaPwqvgW3wSa4v_sjEuo8X2ym1fosdJvcjE",
    color: "bg-pink-400",
  },
  {
    id: 3,
    title: "Bioveda Agro Ventures Private Limited",
    description:
      "An Agritech Start-Up focussed on Financial Inculsion for Farmers through organised Credit, Agri-inputs & Market Linkages.",
    category: "AgriTech",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGUgjxWxnw8aw/company-logo_200_200/company-logo_200_200/0/1660560841257?e=1753920000&v=beta&t=ggoTmSirv953vaFoy3ruuQLbYpxcMId9IHGsvbac1iM",
    color: "bg-green-500",
  },
  {
    id: 4,
    title: "LivNSense",
    description:
      "LivNSense™ is a leading Industrial AI company tackling the Net Zero Challenge with GreenOps™, the world’s first AI-driven Energy Balance platform.",
    category: "AI",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQERnWeQTGvSSg/company-logo_200_200/company-logo_200_200/0/1642742761399/livnsense_technologies_pvt_ltd_logo?e=1753920000&v=beta&t=nkOKdjD35I_ADecpF-29DcsyGQG_gsKajrMlAUSD3TE",
    color: "bg-blue-500",
  },
  {
    id: 5,
    title: "PayMart",
    description:
      "Paymart India Pvt. Ltd. is a fintech replacing ATMs with a merchant network, launching India’s first cash withdrawal gateway.",
    category: "Fintech",
    logo: "https://media.licdn.com/dms/image/v2/C510BAQFbQniLDO5FQA/company-logo_200_200/company-logo_200_200/0/1631315402364?e=1753920000&v=beta&t=1PCqzu8Ct1ymxF1C4Ri4pPT7Vp9biDsFX9ypRsYqpSs",
    color: "bg-cyan-500",
  },
  {
    id: 6,
    title: "Lawyered",
    description:
      "Many find the legal system complex and costly, making help out of reach. Lawyered changes this by offering affordable, tech-driven legal services with easy solutions and access to verified lawyers on demand—making justice accessible for all.",
    category: "LegalTech",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQHjGRoCoUSkjQ/company-logo_200_200/company-logo_200_200/0/1646156870951/lawyered_logo?e=2147483647&v=beta&t=xm-pPYMWg4xbFDhiSj4XCj2U1ZtcNIwNh4OlOKJx_ec",
    color: "bg-red-400",
  },
  {
    id: 7,
    title: "Dentamitra",
    description:
      "India's 1st One-stop Digital Dentist. Treatments at Doorstep. Dental Implants, Root Canal Treatment(RCT), Aligners, Dentures.",
    category: "HealthTech",
    logo: "https://dentamitra.com/static/media/DentaMitraLogoWhite.b1648945.png",
    color: "bg-purple-500",
  },
  {
    id: 8,
    title: "Optimizers",
    description:
      "Optimizers is a hospital-based optical chain delivering high-quality eyewear alongside expert doctors. We aim to enhance patient care, support doctors, and combat curable blindness and myopia for India’s next half billion people.",
    category: "HealthTech",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQHuyhzu8XqIEw/company-logo_200_200/company-logo_200_200/0/1714112026172/optimizersinc_logo?e=1753920000&v=beta&t=EhAp7VukYgr3hiymOqkAoIExGikrE55NQTV0a2nAZDA",
    color: "bg-teal-400",
  },
  {
    id: 9,
    title: "NFX Digital",
    description:
      "NFX Digital is transforming India’s marketing research with Adytude.com, a digital platform delivering fast, cost-effective, and accurate consumer insights.",
    category: "MarketingTech",
    logo: "https://media.licdn.com/dms/image/v2/C510BAQEZv_kT2p81bQ/company-logo_200_200/company-logo_200_200/0/1630612758677/net_effects_digital_logo?e=1753920000&v=beta&t=8UvdJ83c4Hp9aQZzW0c3NXIuwd48hBHnRpz8Zi-2kMM",
    color: "bg-indigo-400",
  },
  {
    id: 10,
    title: "Inc42",
    description:
      "🚀 Inc42 – India’s largest tech media platform on a mission to accelerate the GDP of India’s tech & startup economy.",
    category: "MediaTech",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQHuXvYnpUhlJQ/company-logo_200_200/company-logo_200_200/0/1707466042285/inc42_logo?e=1753920000&v=beta&t=dgs98LQ5d---U6N41bq6xPVXW8y8ehx2wLWgRQvKcxc",
    color: "bg-orange-400",
  },
  {
    id: 11,
    title: "Tummoc",
    description:
      "Tummoc is the first Made-in-India transit application that provides accurate real-time public transport information, easy ticketing options and last-mile connectivity.",
    category: "Mobility",
    logo: "https://tummoc.com/images/logoHeader.png",
    color: "bg-blue-300",
  },
  {
    id: 12,
    title: "Elevate Now",
    description:
      "Elevate Now offers India’s first doctor-led medical weight loss program. Our subscription combines FDA-approved meds, personalized coaching, wearables, and nutrition.",
    category: "HealthTech",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQHahxGDsbZNFQ/company-logo_200_200/company-logo_200_200/0/1668758962811/elevate_now_health_logo?e=1753920000&v=beta&t=0cL2Vsg1rnsRk2J2qDeQEK4WsY17EoSiRxSaNk3EweA",
    color: "bg-lime-400",
  },
  {
    id: 13,
    title: "Riggle",
    description:
      "Riggle is a smart, digital solution revolutionizing FMCG distribution. From inventory to campaigns, it helps monitor and grow your business efficiently.",
    category: "RetailTech",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQFjdvuoHMe1iQ/company-logo_200_200/company-logo_200_200/0/1677682665156/riggle_app_logo?e=1753920000&v=beta&t=ri_euZ2u-tbMYrRR0gN7iW73YfL_utPm-30KYYawQEE",
    color: "bg-yellow-500",
  },
  {
    id: 14,
    title: "House of Brand Company",
    description:
      "House Of Brands Company designs exclusive products in a variety of verticals. Designed in India. Made for the world.",
    category: "Consumer Goods",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQHOW6EqkRUUFQ/company-logo_200_200/company-logo_200_200/0/1657686142743/houseofbrandscompany_logo?e=1753920000&v=beta&t=-6ZP6JBQqY9goVIBfwSqTIYT288Xk5ua_0q10pqRfO8",
    color: "bg-rose-500",
  },
  {
    id: 15,
    title: "Sprink",
    description:
      "Say No To Kitchen & Yes to Life with easy, affordable food services for your daily meals. #1 Tiffin Service That Is Homely, Healthy & Affordable.",
    category: "FoodTech",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQGul_Yv3rngow/company-logo_200_200/company-logo_200_200/0/1630648550196/petoo_in_logo?e=1753920000&v=beta&t=3nxCRcbxYlrI50cJAQj3K2ma1MxR9BNyYmVsZIUR9pM",
    color: "bg-red-500",
  },
  {
    id: 16,
    title: "RiseUpp",
    description:
      "RiseUpp is building India’s #1 destination for online degrees and certificates—ensuring every learner makes the right, career-aligned choice with confidence.",
    category: "EdTech",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQFb-hPqdy4e2A/company-logo_200_200/B56ZV5f4hVGUAM-/0/1741500156593/riseupp_logo?e=1753920000&v=beta&t=n31RNnyMjcM9nj8HqxWuS7pJ8U9cBRdwl11vf1TXZ1w",
    color: "bg-fuchsia-500",
  },
  {
    id: 17,
    title: "Reminiscent",
    description:
      "Reminiscent Interior Design offers customized, cost-effective interior solutions with a focus on quality, detail, and customer satisfaction.",
    category: "Interior Design",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQEKJ8Wv50nUrg/company-logo_200_200/company-logo_200_200/0/1700288580218/reminiscence_life_spaces_logo?e=1753920000&v=beta&t=qEnVHr5dOmUjnXerKa153Zu9Z7EAUjV4jEPpn5m-2Ns",
    color: "bg-stone-400",
  },
]);


	return (
		<div className="relative min-h-screen bg-black text-white overflow-hidden">
			<main className="relative z-10 container mx-auto px-4 py-12">
				<div className="relative">
					<h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[20vw] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF0D]  to-[#FFFFFF0D] uppercase tracking-wide">
						GROWTH
					</h1>

					<h1 className="relative text-4xl md:text-5xl lg:text-7xl text-center mb-8 font-bold xl:text-[80px] leading-[88px] bg-gradient-to-r from-[#facc15] to-white bg-clip-text text-transparent">
						OUR PORTFOLIO
					</h1>

					<p className="relative text-center max-w-4xl text-base sm:text-lg md:text-xl font-inter font-medium mx-auto mb-24 text-gray-300">
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
					<h2 className="text-4xl md:text-5xl lg:text-6xl text-center mb-8 font-bold xl:text-[80px] leading-[60px] lg:leading-[88px] underline bg-gradient-to-r from-[#facc15]  to-white bg-clip-text text-transparent">
						Our Investment Philosophy
					</h2>
					<p className="text-center max-w-4xl text-base sm:text-lg md:text-xl font-inter font-medium mx-auto mb-16 text-gray-300">
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
						<div className="flex justify-center items-center gap-[7.61904764175415px] bg-[#facc15] py-[11.5px] px-[10px] rounded-[83.80952453613281px] cursor-pointer">
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
