"use client";
import {
  Navbar,
  NavBody,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ui/resizable-navbar";
import { useState } from "react";

const Header = () => {
  const navItems = [
    { name: "Home", link: "#about" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#project" },
    { name: "Contact", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (e, target) => {
    e.preventDefault();

    const element = document.querySelector(target);

    if (element) {
      const navbar = document.querySelector('div.fixed');
      const offset = navbar ? navbar.offsetHeight : 80;

      const elementPosition = element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <div className="w-full fixed top-0 z-50">
      <Navbar>

        {/* Desktop */}
        <NavBody>
          <div className="ml-3">
            <h2 className="text-2xl text-white">
              Yash <span className="text-cyan-400">Kumar</span>
            </h2>
          </div>

          <div className="flex gap-6">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                onClick={(e) => handleScroll(e, item.link)}
                className="text-white hover:text-cyan-400 transition"
              >
                {item.name}
              </a>
            ))}
          </div>
        </NavBody>

        {/* Mobile */}
        <MobileNav>
          <MobileNavHeader>
            <div className="ml-3">
              <h2 className="text-2xl text-white">
                Yash <span className="text-cyan-400">Kumar</span>
              </h2>
            </div>

            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={(e) => handleScroll(e, item.link)}
                className="text-neutral-300 py-2"
              >
                {item.name}
              </a>
            ))}
          </MobileNavMenu>
        </MobileNav>

      </Navbar>
    </div>
  );
};

export default Header;