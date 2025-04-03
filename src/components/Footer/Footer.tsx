import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Footer = (): JSX.Element => {
  // Data for footer links
  const generalLinks = [
    { title: "About Us", href: "#" },
    { title: "Pricing", href: "#" },
    { title: "Contact Us", href: "#" },
  ];

  const policyLinks = [
    { title: "Security safeguards", href: "#" },
    { title: "Terms of service", href: "#" },
    { title: "Privacy", href: "#" },
    { title: "Accessibility", href: "#" },
  ];

  // Social media links
  const socialLinks = [
    {
      icon: <FacebookIcon className="w-6 h-6" />,
      href: "#",
      ariaLabel: "Facebook",
    },
    {
      icon: <TwitterIcon className="w-6 h-6" />,
      href: "#",
      ariaLabel: "Twitter",
    },
    {
      icon: <InstagramIcon className="w-6 h-6" />,
      href: "#",
      ariaLabel: "Instagram",
    },
    {
      icon: <YoutubeIcon className="w-6 h-6" />,
      href: "#",
      ariaLabel: "Youtube",
    },
  ];

  return (
    <footer className="w-full bg-[#070707] backdrop-blur-[25px] py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-16">
          {/* Company description */}
          <div className="w-full md:w-auto max-w-[234px]">
            <p className="font-normal text-white text-sm tracking-[-0.03px]">
              Lorem ipsum dolor sit amet consectetur. Magna integer enim vitae
              vulputate eu vitae tristique.
            </p>
          </div>

          {/* General links */}
          <div className="w-full md:w-auto">
            <h3 className="font-medium text-white text-xl tracking-[-0.04px] mb-6">
              General
            </h3>
            <ul className="space-y-4">
              {generalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-normal text-white text-[15px]"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policy links */}
          <div className="w-full md:w-auto">
            <h3 className="font-medium text-white text-xl tracking-[-0.04px] mb-6">
              Policies
            </h3>
            <ul className="space-y-4">
              {policyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-normal text-white text-[15px]"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch */}
          <div className="w-full md:w-auto max-w-[238px]">
            <h3 className="font-medium text-white text-xl tracking-[-0.04px] mb-6">
              Get in touch
            </h3>
            <p className="font-normal text-white text-[15px] leading-[18px] mb-6">
              Follow us on social media and stay updated with the latest
              information about our services
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.ariaLabel}
                  className="w-8 h-8 bg-[#d9d9d9] rounded-2xl flex items-center justify-center"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Subscribe section */}
          <div className="w-full md:w-auto max-w-[292px]">
            <h3 className="font-medium text-white text-xl tracking-[-0.04px] text-center mb-4">
              Subscribe to our Lorem
            </h3>
            <p className="font-normal text-white text-[15px] tracking-[-0.03px] mb-6">
              Lorem ipsum dolor sit amet consectetur. Velit enim est urna est
              massa cras. Sed varius convallis netus aliquet duis ut.
            </p>
            <div className="relative w-full h-10">
              <Input
                type="email"
                placeholder="Enter your mail"
                className="h-10 bg-white text-black font-medium text-sm rounded-[6.62px] pr-24"
              />
              <Button
                className="absolute right-0 top-0 h-10 w-[88px] bg-[#ffc808] text-black font-medium text-[9.9px] rounded-[6.62px]"
                type="submit"
              >
                Join Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;