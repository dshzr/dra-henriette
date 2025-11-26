import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-[#121212] border-t border-[#BF953F]/20 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-gradient-to-br from-[#BF953F] to-[#FCF6BA] rounded-full flex items-center justify-center">
                <span className="text-[#0F0F0F]" style={{ fontFamily: 'Cinzel, serif', fontSize: '1.5rem', fontWeight: 700 }}>HB</span>
              </div>
              <div>
                <div className="text-white" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 700 }}>
                  Henriette Brigagão
                </div>
                <div className="text-[#BF953F]" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}>
                  Advogada Trabalhista
                </div>
              </div>
            </div>
            
            <p className="text-white/60 max-w-md" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: '1.7' }}>
              Top 1 do Brasil em direito trabalhista digital. Pessoas bem orientadas não são passadas pra trás.
            </p>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://instagram.com/drahenrietteadvogada" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#BF953F]/10 border border-[#BF953F]/30 rounded-full flex items-center justify-center text-[#BF953F] hover:bg-[#BF953F] hover:text-[#0F0F0F] transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#BF953F]/10 border border-[#BF953F]/30 rounded-full flex items-center justify-center text-[#BF953F] hover:bg-[#BF953F] hover:text-[#0F0F0F] transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contato@henriettebrigagao.com" 
                className="w-12 h-12 bg-[#BF953F]/10 border border-[#BF953F]/30 rounded-full flex items-center justify-center text-[#BF953F] hover:bg-[#BF953F] hover:text-[#0F0F0F] transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-6" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', fontWeight: 600 }}>
              Links Rápidos
            </h3>
            <nav className="space-y-3">
              <a href="#sobre" className="block text-white/60 hover:text-[#BF953F] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                Sobre
              </a>
              <a href="#midia" className="block text-white/60 hover:text-[#BF953F] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                Na Mídia
              </a>
              <a href="#servicos" className="block text-white/60 hover:text-[#BF953F] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                Serviços
              </a>
              <a href="#contato" className="block text-white/60 hover:text-[#BF953F] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                Contato
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-6" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', fontWeight: 600 }}>
              Contato
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#BF953F] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white/60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem' }}>
                    contato@henriettebrigagao.com
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#BF953F] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white/60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem' }}>
                    WhatsApp disponível
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#BF953F] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white/60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem' }}>
                    Atendimento em todo Brasil e exterior
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#BF953F]/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-center md:text-left" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}>
              © {currentYear} Henriette Brigagão. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/40 hover:text-[#BF953F] transition-colors" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}>
                Política de Privacidade
              </a>
              <a href="#" className="text-white/40 hover:text-[#BF953F] transition-colors" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}>
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
