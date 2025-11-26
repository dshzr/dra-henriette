import { ArrowRight, Scale, Award } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#BF953F]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FCF6BA]/5 rounded-full blur-[120px]"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#BF953F]/20 to-[#FCF6BA]/20 border border-[#BF953F]/30 rounded-full">
              <Award className="w-4 h-4 text-[#BF953F]" />
              <span className="text-[#BF953F]" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: 600 }}>
                TOP 1 DO BRASIL EM DIREITO TRABALHISTA
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-white leading-tight" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700 }}>
              Pessoas bem orientadas{' '}
              <span className="bg-gradient-to-r from-[#BF953F] to-[#FCF6BA] bg-clip-text text-transparent">
                não são passadas pra trás
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-white/70 max-w-xl" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.125rem', lineHeight: '1.8' }}>
              Advogada trabalhista digital com alcance global. 2 milhões de pessoas confiam na minha orientação para proteger seus direitos.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contato" 
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#BF953F] to-[#FCF6BA] text-[#0F0F0F] rounded-full hover:shadow-[0_0_40px_rgba(191,149,63,0.6)] transition-all duration-300"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '1.125rem' }}
              >
                Proteja Seus Direitos Agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="#servicos" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#BF953F] text-[#BF953F] rounded-full hover:bg-[#BF953F]/10 transition-all duration-300"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '1.125rem' }}
              >
                <Scale className="w-5 h-5" />
                Conheça os Serviços
              </a>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#BF953F]/20">
              <div>
                <div className="text-[#BF953F]" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 700 }}>2M+</div>
                <div className="text-white/60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}>Seguidores</div>
              </div>
              <div>
                <div className="text-[#BF953F]" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 700 }}>6.5K+</div>
                <div className="text-white/60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}>Conteúdos</div>
              </div>
              <div>
                <div className="text-[#BF953F]" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 700 }}>Global</div>
                <div className="text-white/60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}>Atendimento</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#BF953F]/20 to-[#FCF6BA]/20 rounded-3xl blur-3xl transform rotate-6"></div>
            <div className="relative">
              <img 
                src="/henriette.png"
                alt="Dra. Henriette Brigagão"
                className="w-full h-auto rounded-3xl shadow-[0_0_80px_rgba(191,149,63,0.3)] object-cover"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#121212] border-2 border-[#BF953F] rounded-2xl p-6 shadow-[0_0_40px_rgba(191,149,63,0.4)]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#BF953F] to-[#FCF6BA] rounded-full flex items-center justify-center">
                    <Scale className="w-6 h-6 text-[#0F0F0F]" />
                  </div>
                  <div>
                    <div className="text-white" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>Atendimento Global</div>
                    <div className="text-[#BF953F]" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}>Em todo o Brasil e exterior</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
