import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Twitter, Instagram } from "lucide-react";
import { toast } from "react-hot-toast";
export default function ContactUs(): JSX.Element {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		userType: "startup",
		message: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			// Replace these with your actual EmailJS service, template, and user IDs
			const templateParams = {
				from_name: `${formData.firstName} ${formData.lastName}`,
				from_email: formData.email,
				phone: formData.phone,
				userType: formData.userType,
				message: formData.message,
			};

			// You need to set up EmailJS with your service ID, template ID, and user ID
			// await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')

			// For demo purposes, we'll just simulate a successful submission
			await new Promise((resolve) => setTimeout(resolve, 1500));

			toast.success("Message sent successfully!");
			setFormData({
				firstName: "",
				lastName: "",
				email: "",
				phone: "",
				userType: "startup",
				message: "",
			});
		} catch (error) {
			console.error("Error sending message:", error);
			toast.error("Failed to send message. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { type: "spring", stiffness: 100 },
		},
	};

	const contactInfo = [
		{
			icon: <Phone size={20} />,
			text: "+1012 3456 789",
			href: "tel:+10123456789",
		},
		{
			icon: <Mail size={20} />,
			text: "demo@gmail.com",
			href: "mailto:demo@gmail.com",
		},
		{
			icon: <MapPin size={20} />,
			text: "132 Dartmouth Street Boston, Massachusetts 02156 United States",
			href: "https://maps.google.com/?q=132+Dartmouth+Street+Boston+Massachusetts+02156",
		},
	];

	return (
		<div className="min-h-fit flex flex-col bg-[#050505]">
			<main className="flex-grow">
				<motion.div
					className="container mx-auto py-12 px-6 md:px-12"
					initial="hidden"
					animate="visible"
					variants={containerVariants}
				>
					<motion.div className="text-center mb-12" variants={itemVariants}>
						<h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
						<p className="text-gray-300">
							Our experts will be happy to assist you with your queries
						</p>
					</motion.div>

					<div className="bg-[#111125] rounded-xl overflow-hidden shadow-xl">
						<div className="grid grid-cols-1 md:grid-cols-3">
							{/* Contact Information */}
							<motion.div
								className="bg-[#151515] p-8 text-white"
								variants={itemVariants}
							>
								<h2 className="text-2xl font-semibold mb-4">
									Contact Information
								</h2>
								<p className="text-gray-400 mb-8">
									Say something to start a live chat!
								</p>

								<div className="space-y-6">
									{contactInfo.map((item, index) => (
										<motion.a
											key={index}
											href={item.href}
											className="flex items-start gap-4 text-gray-300 hover:text-white transition-colors"
											whileHover={{ x: 5 }}
											target={item.icon.type === MapPin ? "_blank" : undefined}
											rel={
												item.icon.type === MapPin
													? "noopener noreferrer"
													: undefined
											}
										>
											<span className="mt-1">{item.icon}</span>
											<span>{item.text}</span>
										</motion.a>
									))}
								</div>

								<div className="flex gap-4 mt-12">
									<motion.a
										href="https://twitter.com"
										target="_blank"
										rel="noopener noreferrer"
										className="text-white hover:text-yellow-500 transition-colors"
										whileHover={{ y: -5 }}
									>
										<Twitter size={20} />
									</motion.a>
									<motion.a
										href="https://instagram.com"
										target="_blank"
										rel="noopener noreferrer"
										className="text-white hover:text-yellow-500 transition-colors"
										whileHover={{ y: -5 }}
									>
										<Instagram size={20} />
									</motion.a>
								</div>

								{/* Decorative circle */}
								<div className="relative mt-12">
									<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full border border-gray-700 opacity-50"></div>
								</div>
							</motion.div>

							{/* Contact Form */}
							<motion.div
								className="col-span-2 p-8 bg-[#2C2C2CB2]"
								variants={itemVariants}
							>
								<form
									onSubmit={handleSubmit}
									className="grid grid-cols-1 md:grid-cols-2 gap-6"
								>
									<div>
										<label
											htmlFor="firstName"
											className="block text-sm text-white mb-1"
										>
											First Name
										</label>
										<input
											type="text"
											id="firstName"
											name="firstName"
											value={formData.firstName}
											onChange={handleChange}
											className="w-full bg-[#151515] text-white border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
											required
										/>
									</div>

									<div>
										<label
											htmlFor="lastName"
											className="block text-sm text-white mb-1"
										>
											Last Name
										</label>
										<input
											type="text"
											id="lastName"
											name="lastName"
											value={formData.lastName}
											onChange={handleChange}
											className="w-full bg-[#151515] text-white border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
											required
										/>
									</div>

									<div>
										<label
											htmlFor="email"
											className="block text-sm text-white mb-1"
										>
											Email
										</label>
										<input
											type="email"
											id="email"
											name="email"
											value={formData.email}
											onChange={handleChange}
											className="w-full bg-[#151515] text-white border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
											required
										/>
									</div>

									<div>
										<label
											htmlFor="phone"
											className="block text-sm text-white mb-1"
										>
											Phone Number
										</label>
										<input
											type="tel"
											id="phone"
											name="phone"
											value={formData.phone}
											onChange={handleChange}
											className="w-full bg-[#151515] text-white border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
											required
										/>
									</div>

									<div className="md:col-span-2">
										<label className="block text-sm text-white hite mb-3">
											Choose One
										</label>
										<div className="flex gap-8">
											<label className="flex items-center gap-2 cursor-pointer">
												<input
													type="radio"
													name="userType"
													value="startup"
													checked={formData.userType === "startup"}
													onChange={handleChange}
													className="hidden" // Hide the default radio button
												/>
												<span
													className={`w-5 h-5 border-2 rounded-full flex items-center justify-center transition-colors ${
														formData.userType === "startup"
															? "bg-transparent border-white"
															: "bg-transparent border-white"
													}`}
												>
													{formData.userType === "startup" && (
														<span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
													)}
												</span>
												<span
													className={`${
														formData.userType === "startup"
															? "text-yellow-500"
															: "text-white"
													}`}
												>
													startup
												</span>
											</label>
											<label className="flex items-center gap-2 cursor-pointer">
												<input
													type="radio"
													name="userType"
													value="investor"
													checked={formData.userType === "investor"}
													onChange={handleChange}
													className="hidden"
												/>
												<span
													className={`w-5 h-5 border-2 rounded-full flex items-center justify-center transition-colors ${
														formData.userType === "investor"
															? "bg-transparent border-white"
															: "bg-transparent border-white"
													}`}
												>
													{formData.userType === "investor" && (
														<span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
													)}
												</span>
												<span
													className={`${
														formData.userType === "investor"
															? "text-yellow-500"
															: "text-white"
													}`}
												>
													Investor
												</span>
											</label>
										</div>
									</div>

									<div className="md:col-span-2">
										<label
											htmlFor="message"
											className="block text-sm text-white mb-1"
										>
											Message
										</label>
										<textarea
											id="message"
											name="message"
											value={formData.message}
											onChange={handleChange}
											placeholder="Write your message..."
											rows={4}
											className="w-full bg-[#151515] text-white border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
											required
										></textarea>
									</div>

									<div className="md:col-span-2 flex justify-end">
										<motion.button
											type="submit"
											className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-md flex items-center gap-2 disabled:opacity-70"
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
											disabled={isSubmitting}
										>
											{isSubmitting ? "Sending..." : "Send Message"}
											<Send size={18} />
										</motion.button>
									</div>
								</form>

								{/* Decorative paper plane */}
								<motion.div
									className="hidden md:block absolute bottom-12 right-12"
									animate={{
										y: [0, -15, 0],
										rotate: [0, 5, 0],
									}}
									transition={{
										repeat: Number.POSITIVE_INFINITY,
										duration: 3,
										ease: "easeInOut",
									}}
								>
									<svg
										width="80"
										height="80"
										viewBox="0 0 80 80"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M70 10L36 44"
											stroke="#FFC610"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M70 10L48 70L36 44L10 32L70 10Z"
											stroke="#FFC610"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</motion.div>
							</motion.div>
						</div>
					</div>
				</motion.div>
			</main>
		</div>
	);
}
