import React from 'react';
import { Linkedin, Mail, Award } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: 'İbrahim Hulusi Oflaz',
      role: 'Proje Yürütücüsü',
      expertise: 'Web Geliştirici, Dijital Pazarlama Uzmanı',
      experience: '5+ yıl',
      description: 'Teknoloji start-up\'larında deneyimli proje yöneticisi ve dijital pazarlama stratejisti.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Çağrı Şahin',
      role: 'Yapay Zeka ve Görüntü İşleme Uzmanı',
      expertise: 'Yazılım Mühendisi',
      experience: '7+ yıl',
      description: 'Derin öğrenme ve bilgisayarlı görü alanında uzman. Medikal görüntü işleme projelerinde tecrübeli.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      name: 'Rümeysa Ahsen Çiçek',
      role: 'Mobil Uygulama Geliştirme',
      expertise: 'Yazılım Mühendisi',
      experience: '3+ yıl',
      description: 'iOS ve Android platformları için cross-platform uygulama geliştirme uzmanı.',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      name: 'Dr. Burak Fatih Yüksel',
      role: 'Bilimsel Danışman',
      expertise: 'Veteriner Hekim, Mastitis Uzmanı',
      experience: '6+ yıl, 21 bilimsel yayın',
      description: 'Süt sığırı hastalıkları ve mastitis konusunda akademik çalışmalar yürüten veteriner hekim.',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section id="team" className="py-20 lg:py-32 bg-white dark:bg-gray-800/30 backdrop-blur-sm transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="text-emerald-600 dark:text-emerald-400">Ekibimiz</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            Uzman Profesyonellerden Oluşan Ekip
          </p>
          <p className="text-lg text-gray-500">
            Teknoloji, yapay zeka ve veterinerlik alanlarında deneyimli profesyonellerden 
            oluşan ekibimiz, VisionVet-AI'ı hayata geçiriyor.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Avatar Placeholder */}
              <div className="relative mb-6">
                <div className={`w-32 h-32 mx-auto bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center shadow-lg`}>
                  <span className="text-4xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className={`absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-2 w-10 h-10 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center shadow-lg border-4 border-white`}>
                  <Award className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Info */}
              <div className="text-center space-y-3">
                <h3 className="text-xl font-bold text-gray-900">
                  {member.name}
                </h3>
                
                <div className={`inline-block px-4 py-1 bg-gradient-to-r ${member.color} text-white text-sm font-semibold rounded-full`}>
                  {member.role}
                </div>

                <p className="text-sm font-medium text-gray-700">
                  {member.expertise}
                </p>

                <div className="text-emerald-600 font-semibold">
                  {member.experience}
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {member.description}
                </p>

                {/* Social Links */}
                <div className="flex items-center justify-center space-x-3 pt-4">
                  <button className="w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                    <Linkedin className="w-4 h-4 text-white" />
                  </button>
                  <button className="w-8 h-8 bg-gray-600 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors">
                    <Mail className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Supporters Section */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-12 shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Destekçiler ve Ortaklar
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Institutional Supporters */}
            <div>
              <h4 className="text-xl font-semibold text-emerald-400 mb-4">
                Kurumsal Destekçiler
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                  <span className="text-white">Elazığ Süt Üreticileri Birliği</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                  <span className="text-white">Fırat Üniversitesi Hayvan Hastanesi</span>
                </li>
              </ul>
            </div>

            {/* Pilot Farms */}
            <div>
              <h4 className="text-xl font-semibold text-blue-400 mb-4">
                Pilot Çiftlikler
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <span className="text-white">Hikmet Çetinkaya Süt Çiftliği</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <span className="text-white">Pınar Hisar Süt Çiftliği</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <span className="text-white">Dut Pınar Süt Çiftliği</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Strategic Partnerships */}
          <div className="mt-8 pt-8 border-t border-white/20">
            <h4 className="text-xl font-semibold text-purple-400 mb-4 text-center">
              Stratejik Ortaklık Görüşmeleri
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <span className="text-white font-semibold">Sütaş</span>
              </div>
              <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <span className="text-white font-semibold">Yörsan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
