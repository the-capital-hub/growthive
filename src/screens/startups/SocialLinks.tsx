import * as React from "react";

function SocialLinks() {
  const socialLinks = [
    { icon: "ti-brand-twitter", href: "#" },
    { icon: "ti-brand-facebook", href: "#" },
    { icon: "ti-brand-instagram", href: "#" },
    { icon: "ti-brand-linkedin", href: "#" },
  ];

  return (
    <div className="flex gap-4">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="text-xl duration-[0.3s] text-white text-opacity-70 transition-[color]"
        >
          <i className={`ti ${link.icon}`} />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
