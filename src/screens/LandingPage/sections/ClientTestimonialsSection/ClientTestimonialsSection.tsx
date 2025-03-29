import { Button } from "../../../../components/ui/button";
import Logo from "../../../../Images/growthhivelogo.png";

export const ClientTestimonialsSection = (): JSX.Element => {
  const navItems = [
    { label: "Home", isActive: true },
    { label: "Startups", isActive: false },
    { label: "Investors", isActive: false },
    { label: "Portfolio", isActive: false },
    { label: "Team", isActive: false },
    { label: "Contact Us", isActive: false },
  ];

  return (
    <header className="w-full flex items-center justify-between px-4 py-3 bg-[#1919194c] backdrop-blur-md border border-white/5 shadow-md">
      <div className="absolute top-0 left-[100px] transform -translate-x-1/2 w-[100px] h-[300px] rotate-[150deg] bg-gradient-to-r from-yellow-400 via-yellow-500 to-transparent opacity-20 blur-2xl rounded-full z-0" />
      <div className="absolute top-0 left-[700px] transform -translate-x-1/2 w-[100px] h-[300px] rotate-[170deg] bg-gradient-to-r from-yellow-400 via-yellow-500 to-transparent opacity-20 blur-2xl rounded-full z-0" />
      <div className="absolute top-0 right-[100px] transform -translate-x-1/2 w-[100px] h-[300px] rotate-[200deg] bg-gradient-to-r from-yellow-400 via-yellow-500 to-transparent opacity-20 blur-2xl rounded-full z-0" />
      <div className="absolute top-0 right-[700px] transform -translate-x-1/2 w-[100px] h-[300px] rotate-[190deg] bg-gradient-to-r from-yellow-400 via-yellow-500 to-transparent opacity-20 blur-2xl rounded-full z-0" />
      {/* Logo and Brand Name */}
      <div className="flex items-center gap-2">
        <img
          className="w-90 h-[46px]"
          alt="Growth Hive Logo"
          src={Logo} // Replace with your logo path
        />
        
      </div>

      {/* Navigation Menu */}
      <nav className="flex items-center gap-[30px]">
        {navItems.map((item, index) => (
          <div
            key={`${item.label}-${index}`}
            className="px-2 py-2 rounded-[10px]"
          >
            <div
              className={`text-lg cursor-pointer leading-[27px] font-['Urbanist',Helvetica] ${
                item.isActive
                  ? "text-[#ffc610] font-medium"
                  : "text-white font-normal"
              }`}
            >
              {item.label}
            </div>
          </div>
        ))}
      </nav>

      {/* CTA Button */}
      <Button
        variant="outline"
        className="px-6 py-2 bg-[#1A1A1A] rounded-[10px] border border-[#2a2a2a]"
      >
        <span className="font-['Urbanist',Helvetica] font-medium text-white text-sm">
          Pitch
        </span>
      </Button>
    </header>
  );
};
