import { Globe, FileCheck, MessageSquare, Shield, Scale, Users } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Atendimento Global',
      description: 'Consultoria jurídica trabalhista para clientes em todo o Brasil e no exterior, com suporte completo em português.',
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: 'Análise de Casos',
      description: 'Avaliação detalhada de rescisões, demissões e direitos trabalhistas com orientação estratégica personalizada.',
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Consultoria Digital',
      description: 'Atendimento ágil e moderno através de canais digitais, sem perder a qualidade e atenção aos detalhes.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Defesa de Direitos',
      description: 'Proteção integral dos seus direitos trabalhistas com estratégias comprovadas e resultados efetivos.',
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: 'Ações Trabalhistas',
      description: 'Representação completa em processos trabalhistas, desde a análise inicial até a conclusão do caso.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Orientação Preventiva',
      description: 'Educação jurídica para evitar problemas futuros e garantir que seus direitos sejam sempre respeitados.',
    },
  ];

  return (
    <section id="servicos" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#121212] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-[#FCF6BA]/5 rounded-full blur-[120px]"></div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#BF953F]/10 border border-[#BF953F]/30 rounded-full mb-4">
            <Scale className="w-4 h-4 text-[#BF953F]" />
            <span className="text-[#BF953F]" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: 600 }}>
              SERVIÇOS ESPECIALIZADOS
            </span>
          </div>
          
          <h2 className="text-white" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700 }}>
            Como Posso <span className="bg-gradient-to-r from-[#BF953F] to-[#FCF6BA] bg-clip-text text-transparent">Te Ajudar</span>
          </h2>
          
          <p className="text-white/60 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.125rem' }}>
            Soluções completas em direito trabalhista com a expertise de quem é referência nacional
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-[#0F0F0F] border border-[#BF953F]/20 rounded-2xl p-8 hover:border-[#BF953F]/60 hover:shadow-[0_0_40px_rgba(191,149,63,0.2)] transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#BF953F]/20 to-[#FCF6BA]/20 rounded-xl flex items-center justify-center text-[#BF953F] mb-6 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(191,149,63,0.3)] transition-all">
                {service.icon}
              </div>
              
              <h3 className="text-white mb-3" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 600 }}>
                {service.title}
              </h3>
              
              <p className="text-white/60" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: '1.7' }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#BF953F]/10 to-[#FCF6BA]/10 border border-[#BF953F]/30 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-white mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700 }}>
            Pronto para Proteger Seus Direitos?
          </h3>
          
          <p className="text-white/70 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.125rem' }}>
            Agende uma consultoria e descubra como posso ajudar você a conquistar o que é seu por direito
          </p>
          
          <a 
            href="#contato" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#BF953F] to-[#FCF6BA] text-[#0F0F0F] rounded-full hover:shadow-[0_0_40px_rgba(191,149,63,0.6)] transition-all duration-300"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '1.125rem' }}
          >
            Falar com a Dra. Henriette
          </a>
        </div>
      </div>
    </section>
  );
}
