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
    <section id="team" className="py-20 lg:py-32 bg-white dark:bg-gray-800/30 backdrop-blur-sm transition-colors duration-500" data-aos="fade-up" data-aos-delay="200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            <span className="text-emerald-600 dark:text-emerald-400">Ekibimiz</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
            Uzman Profesyonellerden Oluşan Ekip
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-gray-500 dark:text-gray-400">
            Teknoloji, yapay zeka ve veterinerlik alanlarında deneyimli profesyonellerden oluşan ekibimiz, VisionVet-AI'ı hayata geçiriyor.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {team.map((member, index) => (
            <div key={index} className="group relative bg-gray-50 dark:bg-gray-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 hover:bg-white dark:hover:bg-gray-700/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative mb-4 sm:mb-6">
                <div className={`w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center shadow-lg`}>
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div className={`absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-2 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center shadow-lg border-4 border-white dark:border-gray-50`}>
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
              </div>
              <div className="text-center space-y-2 sm:space-y-3">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white">{member.name}</h3>
                <div className={`inline-block px-3 py-1 bg-gradient-to-r ${member.color} text-white text-xs sm:text-sm font-semibold rounded-full`}>{member.role}</div>
                <p className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">{member.expertise}</p>
                <div className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold">{member.experience}</div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{member.description}</p>
                <div className="flex items-center justify-center space-x-3 pt-3 sm:pt-4">
                  <button className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"><Linkedin className="w-3 h-3 sm:w-4 sm:h-4 text-white" /></button>
                  <button className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-600 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"><Mail className="w-3 h-3 sm:w-4 sm:h-4 text-white" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
