import { Instagram, Award, TrendingUp, Globe } from 'lucide-react';

export function SocialProofSection() {
  const stats = [
    {
      icon: <Instagram className="w-10 h-10" />,
      value: '2 Milhões',
      label: 'Seguidores no Instagram',
      description: 'Maior comunidade de direito trabalhista do Brasil',
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      value: '6.5 Mil',
      label: 'Conteúdos Publicados',
      description: 'Educação jurídica diária para milhões de pessoas',
    },
    {
      icon: <Award className="w-10 h-10" />,
      value: 'Top 1',
      label: 'do Brasil',
      description: 'Advogada digital mais influente em direito trabalhista',
    },
    {
      icon: <Globe className="w-10 h-10" />,
      value: '674',
      label: 'Seguindo',
      description: 'Rede seletiva de profissionais e parceiros',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Effect */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#BF953F]/5 rounded-full blur-[150px]"></div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#BF953F]/10 border border-[#BF953F]/30 rounded-full mb-4">
            <Award className="w-4 h-4 text-[#BF953F]" />
            <span className="text-[#BF953F]" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: 600 }}>
              NÚMEROS QUE COMPROVAM
            </span>
          </div>
          
          <h2 className="text-white" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700 }}>
            Autoridade <span className="bg-gradient-to-r from-[#BF953F] to-[#FCF6BA] bg-clip-text text-transparent">Comprovada</span>
          </h2>
          
          <p className="text-white/60 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.125rem' }}>
            Milhões de pessoas confiam na orientação jurídica da Dra. Henriette Brigagão
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#121212] border border-[#BF953F]/20 rounded-2xl p-8 text-center hover:border-[#BF953F]/60 hover:shadow-[0_0_40px_rgba(191,149,63,0.2)] transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#BF953F]/20 to-[#FCF6BA]/20 rounded-2xl text-[#BF953F] mb-6">
                {stat.icon}
              </div>
              
              <div className="text-white mb-2" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', fontWeight: 700 }}>
                {stat.value}
              </div>
              
              <div className="text-[#BF953F] mb-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.125rem', fontWeight: 600 }}>
                {stat.label}
              </div>
              
              <p className="text-white/60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem' }}>
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#BF953F]/5 to-[#FCF6BA]/5 border border-[#BF953F]/30 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-gradient-to-br from-[#BF953F] to-[#FCF6BA] rounded-3xl flex items-center justify-center shadow-[0_0_40px_rgba(191,149,63,0.4)]">
                <Instagram className="w-12 h-12 text-[#0F0F0F]" />
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-white mb-2" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700 }}>
                Acompanhe no Instagram
              </h3>
              
              <p className="text-white/70 mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.125rem' }}>
                <span className="text-[#BF953F]">@drahenrietteadvogada</span>
              </p>
              
              <p className="text-white/60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem' }}>
                Conteúdo diário sobre direitos trabalhistas • Dicas práticas • Cases reais
              </p>
            </div>
            
            <div className="flex-shrink-0">
              <a 
                href="https://instagram.com/drahenrietteadvogada" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#BF953F] to-[#FCF6BA] text-[#0F0F0F] rounded-full hover:shadow-[0_0_30px_rgba(191,149,63,0.5)] transition-all duration-300"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
              >
                <Instagram className="w-5 h-5" />
                Seguir Agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
