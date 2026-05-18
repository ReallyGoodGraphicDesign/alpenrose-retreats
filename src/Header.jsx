import './Header.css';
import { useState } from 'react';

const navItems = [
  { href: '#alpenrose', label: 'Alpenrose Retreats' },
  { href: '#bloom', label: 'Bloom 2026' },
  { href: '#your_journey', label: 'Your Journey' },
  { href: '#dates_rates', label: 'Dates & Rates' },
  { href: '#accommodations', label: 'Accommodations' },
  { href: '#our_story', label: 'Our Story' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-inner">
        <nav className="header-nav">
          {navItems.map(({ href, label }) => (
            <a key={href} href={href}>
                      {label}
            </a>
          ))}
        </nav>
        <button
          className="list_close_btn"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <i className="bi bi-list"></i>
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-nav-overlay">
          <button
            className="list_close_btn"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <i className="bi bi-x-lg"></i>
          </button>

          <nav className="mobile-nav">
            {navItems.map(({ href, label }) => (
              <a key={href} href={href} onClick={handleNavClick}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
