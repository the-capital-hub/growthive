import type { FC } from "react";
import { LinkedinIcon as LinkedInIcon } from "lucide-react";

interface TeamMemberCardProps {
	name: string;
	title: string;
	subtitle: string;
	description?: string;
	image: string;
	linkedin?: string;
	featured?: boolean;
}

export const TeamMemberCard: FC<TeamMemberCardProps> = ({
	name,
	title,
	subtitle,
	description,
	image,
	linkedin,
	featured = false,
}) => {
	return (
		<div
			className={`${
				featured ? "grid grid-cols-1 md:grid-cols-3 gap-8 items-center" : ""
			}`}
		>
			<div
				className={`bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden hover:border-gray-700 transition-all duration-300 p-6 `}
			>
				<div className={`${featured ? "md:col-span-1" : ""} relative`}>
					<div className=" mx-auto" style={{ maxWidth: "150px" }}>
						{/* Profile image with golden border */}
						<img
							src={image || "/placeholder.svg?height=180&width=180"}
							alt={name}
							className="w-full aspect-square rounded-full object-cover"
						/>
					</div>

					{/* Colorful dots */}
					<div className="absolute top-0 left-0 flex space-x-1">
						<div className="w-2 h-2 bg-red-500 rounded-full"></div>
						<div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
						<div className="w-2 h-2 bg-green-500 rounded-full"></div>
					</div>
				</div>
			</div>

			<div
				className={`text-center ${
					featured ? "md:col-span-2 md:text-left" : "mt-6"
				}`}
			>
				{featured ? (
					<>
						<h3 className="text-2xl font-bold mb-1">{name}</h3>
						<p className="text-gray-300 mb-2">{title}</p>
						<p className="text-gray-400 text-sm mb-4">{subtitle}</p>
						{description && <p className="text-gray-400">{description}</p>}
					</>
				) : (
					<>
						{linkedin && (
							<a
								href={linkedin}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block mb-3 text-blue-400 hover:text-blue-300"
							>
								<LinkedInIcon size={20} />
							</a>
						)}
						<h3 className="text-xl font-bold text-yellow-400 mb-1">{name}</h3>
						<p className="text-white mb-2">{title}</p>
						<p className="text-gray-400 text-sm">{subtitle}</p>
					</>
				)}
			</div>
		</div>
	);
};
