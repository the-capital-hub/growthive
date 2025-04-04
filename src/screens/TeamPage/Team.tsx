import { TeamMemberCard } from "../../components/TeamMemberCard";
import { Button } from "../../components/ui/button";
import Avatar from "../../Images/Avatar_Upma.png";
import "./Team.css";

export default function Team() {
	const founders = [
		{
			id: 1,
			name: "Rahul Kumar",
			title: "Founder and CEO",
			subtitle: "Visionary Leader | Startup Mentor | Investor",
			description:
				"With years of experience in startup ecosystems, Rahul has a passion for scaling disruptive businesses and empowering early-stage founders. Their leadership is shaping GrowthHive into a platform where innovation thrives.",
			image: Avatar,
			linkedin: "https://linkedin.com/in/rahulkumar",
			featured: true,
		},
		{
			id: 2,
			name: "Priya Roy",
			title: "Chief Investment Officer (CIO)",
			subtitle: "Strategic Thinker | Angel Investor | Deal-Maker",
			description: "",
			image: Avatar,
			linkedin: "https://linkedin.com/in/priyaroy",
			featured: false,
		},
		{
			id: 3,
			name: "Karthik",
			title: "Head of Startup Partnerships",
			subtitle: "Connector | Startup Evangelist | Business Growth Expert",
			description: "",
			image: Avatar,
			linkedin: "https://linkedin.com/in/karthik",
			featured: false,
		},
		{
			id: 4,
			name: "Geetha",
			title: "Head of Operations",
			subtitle: "Operational Excellence | Team Builder | Execution Guru",
			description: "",
			image: Avatar,
			linkedin: "https://linkedin.com/in/geetha",
			featured: false,
		},
	];

	return (
		<div className="relative min-h-screen bg-black text-white overflow-hidden">
			<main className="relative z-10 container mx-auto px-4 py-12">
				{/* Meet the Team Section */}
				<section className="text-center mb-20 pt-8">
					<h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#facc15] to-white bg-clip-text text-transparent mb-4">
						Meet the Team
					</h1>
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
						The Visionaries Behind GrowthHive
					</h2>

					<p className="text-center max-w-4xl mx-auto mb-16 text-gray-300">
						At GrowthHive, our success is driven by a passionate team of
						investors, operators, and entrepreneurs who believe in backing
						founders with big visions and bold idea.
					</p>
				</section>

				{/* Founders & Leadership Section */}
				<section className="mb-16 border-t border-gray-800 pt-12">
					<div className="relative">
						<div className="absolute top-0 left-0 w-full h-full grid-background -z-10"></div>

						<h2 className="text-4xl font-bold text-center mb-16">
							<span className="text-white">Founders</span>{" "}
							<span className="text-yellow-400">&</span>{" "}
							<span className="text-white">Leadership</span>
						</h2>

						<div className="grid grid-cols-1 gap-8 mb-12">
							{founders
								.filter((founder) => founder.featured)
								.map((founder) => (
									<TeamMemberCard
										key={founder.id}
										name={founder.name}
										title={founder.title}
										subtitle={founder.subtitle}
										description={founder.description}
										image={founder.image}
										linkedin={founder.linkedin}
										featured={founder.featured}
									/>
								))}
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{founders
							.filter((founder) => !founder.featured)
							.map((founder) => (
								<TeamMemberCard
									key={founder.id}
									name={founder.name}
									title={founder.title}
									subtitle={founder.subtitle}
									description={founder.description}
									image={founder.image}
									linkedin={founder.linkedin}
									featured={founder.featured}
								/>
							))}
					</div>
				</section>

				{/* Advisory Board Section */}
				<section className="mb-16 border-gray-800 pt-12">
					<h2 className="text-4xl font-bold text-center bg-gradient-to-r from-[#facc15] to-white bg-clip-text text-transparent mb-8">
						Our Advisory Board
					</h2>

					<p className="text-center max-w-4xl mx-auto mb-16 text-gray-300">
						Our advisors are experienced entrepreneurs, investors, and industry
						experts who bring a wealth of knowledge to help guide GrowthHive and
						our portfolio companies to success.
					</p>

					{/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{advisors.map((advisor) => (
							<AdvisorCard
								key={advisor.id}
								name={advisor.name}
								title={advisor.title}
								subtitle={advisor.subtitle}
								image={advisor.image}
								linkedin={advisor.linkedin}
							/>
						))}
					</div> */}
				</section>

				{/* Call to Action Section */}
				<section className="text-center mb-16 border-gray-800 pt-12">
					<h2 className="text-4xl font-bold text-center bg-gradient-to-r from-[#facc15] to-white bg-clip-text text-transparent mb-8">
						Join Us on This Journey!
					</h2>

					<p className="text-center max-w-4xl mx-auto mb-16 text-gray-300">
						At GrowthHive, we're more than just a team – we're a community
						committed to empowering the next wave of founders and building the
						future of innovation.
					</p>

					<div className="flex flex-col sm:flex-row justify-center gap-4">
						<Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-8 py-6 rounded-full">
							Connect with Us
						</Button>
						<Button
							variant="outline"
							className="bg-transparent text-white font-medium px-8 py-6 rounded-full"
						>
							Explore Our Portfolio
						</Button>
					</div>
				</section>
			</main>
		</div>
	);
}
