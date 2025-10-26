import React from 'react';
import { Building2, Milk, Users, UserCheck } from 'lucide-react';

const Partnerships = () => {
  const partnerships = {
    supporters: [
      {
        title: 'Elazığ Süt Üreticileri Birliği',
        type: 'Sektör Desteği',
        icon: Users,
        color: 'from-emerald-500 to-green-600',
        description: 'Bölgesel üretici birlikleriyle işbirliği'
      },
      {
        title: 'Fırat Üniversitesi Hayvan Hastanesi',
        type: 'Akademik Destek',
        icon: Building2,
        color: 'from-blue-500 to-cyan-600',
        description: 'Bilimsel araştırma ve klinik çalışmalar'
      }
    ],
    pilots: [
      {
        title: 'Hikmet Çetinkaya Süt Çiftliği',
        location: 'Pilot Çiftlik',
        icon: Milk,
        color: 'from-purple-500 to-pink-600'
      },
      {
        title: 'Pınar Hisar Süt Çiftliği',
        location: 'Pilot Çiftlik',
        icon: Milk,
        color: 'from-orange-500 to-red-600'
      },
      {
        title: 'Dut Pınar Süt Çiftliği',
        location: 'Pilot Çiftlik',
        icon: Milk,
        color: 'from-teal-500 to-emerald-600'
      }
    ],
    strategic: [
      {
        name: 'Yörsan',
        fullName: 'Yörsan Gıda Memülleri San. ve Tic. A.Ş.',
        status: 'Görüşme Aşamasında',
        color: 'bg-gradient-to-br from-yellow-400 to-orange-500'
      },
      {
        name: 'Sütaş',
        fullName: 'Sütaş Süt Ürünleri A.Ş.',
        status: 'Görüşme Aşamasında',
        color: 'bg-gradient-to-br from-green-500 to-emerald-600'
      }
    ]
  };

  return (
    <section 
      id="partnerships" 
      className="relative py-20 lg:py-32 bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50 dark:from-gray-900 dark:via-teal-900/20 dark:to-cyan-900/20 transition-colors duration-500 overflow-hidden"
      data-aos="fade-up"
      data-aos-delay="250"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">İş </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400">
              Birlikleri
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
            Sektör liderleri ve akademik kurumlarla güçlü ortaklıklar
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Left Column - Supporters & Academic */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 to-cyan-500 rounded-full"></div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 pl-4">
                Kurumsal Destekçiler
              </h3>
            </div>

            <div className="space-y-4">
              {partnerships.supporters.map((supporter, index) => {
                const Icon = supporter.icon;
                return (
                  <div 
                    key={index}
                    className="group relative bg-white dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
                    data-aos="fade-right"
                    data-aos-delay={100 * (index + 1)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${supporter.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                            {supporter.title}
                          </h4>
                        </div>
                        <div className="inline-block px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-semibold rounded-full mb-2">
                          {supporter.type}
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {supporter.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pilot Farms */}
            <div className="relative mt-8">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 pl-4">
                Pilot Çiftlikler
              </h3>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {partnerships.pilots.map((pilot, index) => {
                const Icon = pilot.icon;
                return (
                  <div 
                    key={index}
                    className="group bg-white dark:bg-gray-800/80 backdrop-blur-xl rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
                    data-aos="zoom-in"
                    data-aos-delay={150 * (index + 1)}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${pilot.color} rounded-lg flex items-center justify-center shadow-md mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white text-center leading-tight mb-2">
                      {pilot.title}
                    </h4>
                    <div className="text-xs text-center text-blue-600 dark:text-blue-400 font-medium">
                      {pilot.location}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Strategic Partnerships */}
          <div>
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 pl-4">
                Stratejik Ortaklık Görüşmeleri
              </h3>
            </div>

            <div className="space-y-6">
              {partnerships.strategic.map((partner, index) => (
                <div 
                  key={index}
                  className="group relative bg-white dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-gray-200 dark:border-gray-700"
                  data-aos="fade-left"
                  data-aos-delay={150 * (index + 1)}
                >
                  {/* Logo Area - Company Branding */}
                  <div className={`${partner.color} p-8 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                    <div className="relative flex items-center justify-center">
                      <div className="bg-white/95 backdrop-blur-md rounded-2xl px-8 py-6 shadow-2xl">
                        <h4 className="text-3xl font-bold text-gray-800 text-center">
                          {partner.name}
                        </h4>
                      </div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
                  </div>

                  {/* Details */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <UserCheck className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                          {partner.fullName}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                        Durum
                      </span>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-bold text-yellow-600 dark:text-yellow-400">
                          {partner.status}
                        </span>
                      </div>
                    </div>

                    {/* Progress Indicator */}
                    <div className="relative pt-2">
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"
                          style={{ width: '65%' }}
                        ></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-gray-500 dark:text-gray-400">İlk Temas</span>
                        <span className="text-xs font-bold text-purple-600 dark:text-purple-400">Müzakere</span>
                        <span className="text-xs text-gray-400">Anlaşma</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover effect border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500 dark:group-hover:border-purple-400 rounded-3xl transition-all duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>

            {/* Info Card */}
            <div className="mt-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white shadow-xl" data-aos="fade-up">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                  <UserCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Güçlü Sektör Bağlantıları</h4>
                  <p className="text-sm text-white/90 leading-relaxed">
                    Türkiye'nin önde gelen süt ürünleri şirketleriyle stratejik ortaklık görüşmelerimiz devam ediyor. 
                    Bu işbirlikleri, ürünümüzün sektörde geniş çapta benimsenmesini sağlayacak.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid sm:grid-cols-4 gap-6 mt-16">
          <div className="bg-white dark:bg-gray-800/80 backdrop-blur-xl rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700" data-aos="zoom-in">
            <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">2</div>
            <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">Kurumsal Destek</div>
          </div>
          <div className="bg-white dark:bg-gray-800/80 backdrop-blur-xl rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700" data-aos="zoom-in" data-aos-delay="100">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">3</div>
            <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">Pilot Çiftlik</div>
          </div>
          <div className="bg-white dark:bg-gray-800/80 backdrop-blur-xl rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700" data-aos="zoom-in" data-aos-delay="200">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">2</div>
            <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">Stratejik Ortaklık</div>
          </div>
          <div className="bg-white dark:bg-gray-800/80 backdrop-blur-xl rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700" data-aos="zoom-in" data-aos-delay="300">
            <div className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">100%</div>
            <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">Sektör İlgisi</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
