// src/components/StickyNavbar.jsx
import { useEffect, useState } from 'react';

export default function StickyNavbar({ children }) {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      if (current < lastScroll || current < 10) {
        setShow(true);
      } else {
        setShow(false);
      }
      setLastScroll(current);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScroll]);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
      <header className="bg-white shadow border-b">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src="/images/trimbook-logo-light-removebg.png" alt="TrimBook Logo" className="h-10" />
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-4">
            <a href="" className="text-sm font-medium text-gray-800 hover:text-blue-500">
              Iniciar sesión / <span className="font-semibold">Registrarse</span>
            </a>
            <button disabled className="inline-flex items-center gap-1 px-4 py-1.5 text-sm text-white border border-gray-300 rounded bg-orange-400 hover:bg-orange-600 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5m0 15V21m9-9h-1.5M3 12H1.5m16.95-6.45L17.1 7.1m-10.2 10.2-1.35 1.35m12.75 0-1.35-1.35M6.9 6.9 5.55 5.55" />
              </svg>
              Incluye tu negocio
            </button>
          </div>

          {/* Hamburger for mobile */}
          <button className="md:hidden text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pb-4 flex flex-col gap-3 bg-white border-t">
            <a href="/login" className="text-sm font-medium text-gray-800 hover:text-blue-500">
              Iniciar sesión / <span className="font-semibold">Registrarse</span>
            </a>
            <a href="/dashboard" className="text-sm font-medium text-gray-800 hover:text-blue-500">
              Dashboard
            </a>
            <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-sm text-white border border-gray-300 rounded bg-orange-400 hover:bg-orange-600 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5m0 15V21m9-9h-1.5M3 12H1.5m16.95-6.45L17.1 7.1m-10.2 10.2-1.35 1.35m12.75 0-1.35-1.35M6.9 6.9 5.55 5.55" />
              </svg>
              Incluye tu negocio
            </button>
          </div>
        )}
      </header>
    </div>
  );
}
