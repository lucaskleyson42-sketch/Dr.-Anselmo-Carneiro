/*
 * HEADER — Dr. Anselmo Carneiro
 * Design: "Engenharia da Face" — Editorial Masculino de Luxo
 * Behavior: Transparente → frosted glass ao scrollar 80px
 * Mobile: Menu fullscreen dark overlay
 */

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Filosofia", href: "#filosofia" },
  { label: "Procedimentos", href: "#procedimentos" },
  { label: "Casos Clínicos", href: "#resultados" },
  { label: "O Médico", href: "#medico" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div
            className="header-inner"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "72px",
            }}
          >
            {/* Logo + Name */}
            <a
  href="#"
  style={{
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
  }}
  onClick={(e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }}
>
  <img
  className="header-logo"
  src="/logos/logo-4.png"
  alt="GAS Man Clinic"
  style={{
    height: "90px",
    width: "auto",
    objectFit: "contain",
  }}
/>
</a>
            {/* Desktop Nav */}
            <nav
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2.5rem",
              }}
              className="hidden lg:flex"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 400,
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--charcoal)",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                    opacity: 0.75,
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.opacity = "1";
                    (e.target as HTMLElement).style.color = "var(--olive)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.opacity = "0.75";
                    (e.target as HTMLElement).style.color = "var(--charcoal)";
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/5511954885446"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding: "0.6rem 1.4rem", fontSize: "0.65rem" }}
              >
                Agendar Consulta
              </a>
            </nav>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                padding: "4px",
                zIndex: 300,
                position: "relative",
              }}
              aria-label="Menu"
            >
              <span
                style={{
                  display: "block",
                  width: "24px",
                  height: "1px",
                  background: menuOpen ? "var(--warm-white)" : "var(--charcoal)",
                  transition: "transform 0.3s ease, background 0.3s ease",
                  transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "24px",
                  height: "1px",
                  background: menuOpen ? "var(--warm-white)" : "var(--charcoal)",
                  transition: "opacity 0.3s ease, background 0.3s ease",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "24px",
                  height: "1px",
                  background: menuOpen ? "var(--warm-white)" : "var(--charcoal)",
                  transition: "transform 0.3s ease, background 0.3s ease",
                  transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(link.href);
            }}
            style={{
              transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.4s ease, transform 0.4s ease",
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://wa.me/5511954885446"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
          style={{
            marginTop: "1rem",
            transitionDelay: menuOpen ? "300ms" : "0ms",
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.4s ease, transform 0.4s ease, background-color 0.3s ease",
          }}
        >
          Agendar Consulta
        </a>
      </div>
    </>
  );
}
