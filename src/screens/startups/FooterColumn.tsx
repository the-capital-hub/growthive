import * as React from "react";

interface FooterLink {
  text: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h4 className="mb-5 text-lg font-semibold text-white">{title}</h4>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="block mb-2.5 text-base no-underline duration-[0.3s] text-white text-opacity-70 transition-[color]"
        >
          {link.text}
        </a>
      ))}
    </div>
  );
}

export default FooterColumn;
