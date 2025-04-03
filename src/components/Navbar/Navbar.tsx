import { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import Logo from "../../Images/growthhivelogo.png";

const Navbar = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", isActive: true, href: "/" },
    { label: "Startups", isActive: false, href: "/startups" },
    { label: "Investors", isActive: false, href: "/investors" },
    { label: "Portfolio", isActive: false, href: "/portfolio" },
    { label: "Team", isActive: false, href: "/team" },
    { label: "Contact Us", isActive: false, href: "/contact-us" },
  ];

  return (
    <header className="w-full px-4 sm:px-6 py-4 bg-[#0d0d0d] backdrop-blur-lg border-b border-[#2a2a2a] shadow-lg relative z-50">
      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[150px] h-[300px] rotate-[160deg] bg-gradient-to-r from-yellow-500 via-yellow-400 to-transparent opacity-10 blur-2xl rounded-full -z-10" />
      <div className="absolute top-0 right-1/4 w-[150px] h-[300px] rotate-[200deg] bg-gradient-to-r from-yellow-500 via-yellow-400 to-transparent opacity-10 blur-2xl rounded-full -z-10" />

      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img className="h-[46px] w-auto" alt="Growth Hive Logo" src={Logo} />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <a
              key={`${item.label}-${index}`}
              href={item.href || "#"}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-yellow-400 ${
                item.isActive ? "text-yellow-400" : "text-white/80"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button - Desktop Only */}
        <div className="hidden md:block">
          <Button
            variant="outline"
            className="px-6 py-2 bg-[#1a1a1a] text-white border border-[#3a3a3a] hover:bg-yellow-500 hover:text-black transition duration-300 rounded-md shadow-sm"
          >
            <span className="text-sm font-medium">Pitch</span>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 px-4">
          {navItems.map((item, index) => (
            <a
              key={`${item.label}-mobile-${index}`}
              href={item.href || "#"}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-yellow-400 ${
                item.isActive ? "text-yellow-400" : "text-white/80"
              }`}
            >
              {item.label}
            </a>
          ))}
          <Button
            variant="outline"
            className="w-full bg-[#1a1a1a] text-white border border-[#3a3a3a] hover:bg-yellow-500 hover:text-black transition duration-300 rounded-md shadow-sm"
          >
            <span className="text-sm font-medium">Pitch</span>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
