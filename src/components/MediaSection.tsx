import { Newspaper, TrendingUp, Users } from 'lucide-react';
import { useState } from 'react';

export function MediaSection() {
  const mediaAppearances = [
    {
      outlet: 'R7',
      title: 'Atendimentos em todos os Estados Brasileiros e também no Exterior',
      description: 'Dra. Henriette Brigagão expandiu sua atuação para atender clientes em todo território nacional e internacional.',
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      outlet: 'Correio Braziliense',
      title: 'Dra. Henriette Brigagão é a maior referência feminina da advocacia brasileira',
      description: 'Advogada influente com alcance digital sem precedentes, revolucionando o direito trabalhista.',
      icon: <Users className="w-6 h-6" />,
    },
    {
      outlet: 'Observatório dos Famosos',
      title: 'Henriette Brigagão supera 2 milhões de seguidores no Instagram',
      description: 'Alcança 4 milhões de seguidores nas redes sociais, tornando-se Top 1 do Brasil em direito trabalhista digital.',
      icon: <Newspaper className="w-6 h-6" />,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="midia" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Effect */}
      <div className="absolute left-0 top-1/2 w-96 h-96 bg-[#BF953F]/5 rounded-full blur-[120px]"></div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#BF953F]/10 border border-[#BF953F]/30 rounded-full mb-4">
            <Newspaper className="w-4 h-4 text-[#BF953F]" />
            <span className="text-[#BF953F]" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: 600 }}>
              RECONHECIMENTO NACIONAL
            </span>
          </div>
          
          <h2 className="text-white" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700 }}>
            Destaque na <span className="bg-gradient-to-r from-[#BF953F] to-[#FCF6BA] bg-clip-text text-transparent">Mídia Nacional</span>
          </h2>
          
          <p className="text-white/60 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.125rem' }}>
            Reconhecida pelos principais veículos de comunicação do país pela excelência e inovação no direito trabalhista
          </p>
        </div>

        {/* Media Logos */}
        <div className="flex flex-wrap items-center justify-center gap-12 mb-16 pb-16 border-b border-[#BF953F]/20">
          {['R7', 'Correio Braziliense', 'Observatório dos Famosos'].map((outlet, index) => (
            <div 
              key={index}
              className="text-white/40 hover:text-[#BF953F] transition-colors cursor-pointer"
              style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 700 }}
            >
              {outlet}
            </div>
          ))}
        </div>

        {/* Featured Articles Carousel */}
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            {mediaAppearances.map((article, index) => (
              <div
                key={index}
                className="group bg-[#121212] border border-[#BF953F]/20 rounded-2xl p-6 hover:border-[#BF953F]/60 hover:shadow-[0_0_40px_rgba(191,149,63,0.2)] transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#BF953F]/20 to-[#FCF6BA]/20 rounded-xl flex items-center justify-center text-[#BF953F] group-hover:scale-110 transition-transform">
                    {article.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-[#BF953F] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: 600 }}>
                      {article.outlet}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-white mb-3" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', fontWeight: 600, lineHeight: '1.4' }}>
                  {article.title}
                </h3>
                
                <p className="text-white/60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', lineHeight: '1.6' }}>
                  {article.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
