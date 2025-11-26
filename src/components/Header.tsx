import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F0F0F]/95 backdrop-blur-sm border-b border-[#BF953F]/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative w-16 h-16 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#BF953F] to-[#FCF6BA] rounded-full opacity-20 blur-xl"></div>
              <div className="relative w-14 h-14 bg-gradient-to-br from-[#BF953F] to-[#FCF6BA] rounded-full flex items-center justify-center">
                <span className="text-[#0F0F0F] tracking-tight" style={{ fontFamily: 'Cinzel, serif', fontSize: '1.5rem', fontWeight: 700 }}>HB</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#sobre" className="text-white/80 hover:text-[#BF953F] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>Sobre</a>
            <a href="#midia" className="text-white/80 hover:text-[#BF953F] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>Na Mídia</a>
            <a href="#servicos" className="text-white/80 hover:text-[#BF953F] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>Serviços</a>
            <a href="#contato" className="px-6 py-2.5 bg-gradient-to-r from-[#BF953F] to-[#FCF6BA] text-[#0F0F0F] rounded-full hover:shadow-[0_0_30px_rgba(191,149,63,0.5)] transition-all duration-300" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
              Fale Comigo
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 border-t border-[#BF953F]/20">
            <a href="#sobre" className="block text-white/80 hover:text-[#BF953F] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>Sobre</a>
            <a href="#midia" className="block text-white/80 hover:text-[#BF953F] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>Na Mídia</a>
            <a href="#servicos" className="block text-white/80 hover:text-[#BF953F] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>Serviços</a>
            <a href="#contato" className="block px-6 py-2.5 bg-gradient-to-r from-[#BF953F] to-[#FCF6BA] text-[#0F0F0F] rounded-full text-center" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
              Fale Comigo
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
