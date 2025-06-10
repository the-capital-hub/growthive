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
		<div className="flex flex-col items-center">
			{/* Card with image */}
			<div className="relative bg-gray-900/50 border border-gray-800 rounded-lg p-8 mb-6 w-full hover:border-gray-700 transition-all duration-300">
				{/* Colorful dots */}
				<div className="absolute top-4 left-4 flex space-x-1">
					<div className="w-2 h-2 bg-red-500 rounded-full"></div>
					<div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
					<div className="w-2 h-2 bg-green-500 rounded-full"></div>
				</div>

				{/* Image with golden border */}
				<div className="relative mx-auto" style={{ maxWidth: "180px" }}>
					<div className="absolute inset-0 rounded-full border-2 border-yellow-400"></div>
					<img
						src={image || "/placeholder.svg?height=180&width=180"}
						alt={name}
						className="w-full aspect-square rounded-full object-cover"
					/>
				</div>
			</div>

			{/* Text content below card */}
			<div className="text-center">
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
				<h3 className="text-xl font-bold text-yellow-400 mb-2">{name}</h3>
				<p className="text-white mb-2">{title}</p>
				<p className="text-gray-400 text-sm">{subtitle}</p>
				{description && (
					<p className="text-gray-400 text-sm mt-4 leading-relaxed max-w-lg">
						{description}
					</p>
				)}
			</div>
		</div>
	);
};
