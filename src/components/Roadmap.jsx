import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';

const Roadmap = () => {
  const milestones = [
    {
      year: '2026',
      quarter: 'Q1-Q4',
      title: 'Temel ve MVP',
      items: [
        'TÜBİTAK 1512 BIGG başvurusu',
        'MVP yazılım geliştirme',
        'İlk prototip testleri',
        'Pilot çiftliklerde saha testleri',
        '20 müşteri hedefi',
      ],
      status: 'in-progress',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      year: '2027',
      quarter: 'Q1-Q4',
      title: 'Beta ve Ticari Sürüm',
      items: [
        'Beta testleri ve geri bildirimler',
        'Yazılım optimizasyonu',
        'Ticari sürüm lansmanı',
        'Pazarlama kampanyası',
        '150 müşteri hedefi',
      ],
      status: 'planned',
      color: 'from-blue-500 to-blue-600',
    },
    {
      year: '2028',
      quarter: 'Q1-Q4',
      title: 'Büyüme ve Genişleme',
      items: [
        'Bölgesel genişleme',
        'Yeni özellikler ekleme',
        'Stratejik ortaklıklar',
        'İkinci tur yatırım',
        '300 müşteri hedefi',
      ],
      status: 'planned',
      color: 'from-purple-500 to-purple-600',
    },
    {
      year: '2029',
      quarter: 'Q1-Q4',
      title: 'Ulusal Kapsama',
      items: [
        'Türkiye geneline yayılma',
        'Mobil uygulama v2.0',
        'Yapay zeka model güncellemesi',
        'Ek hizmetler geliştirme',
        '500 müşteri hedefi',
      ],
      status: 'planned',
      color: 'from-orange-500 to-orange-600',
    },
    {
      year: '2030',
      quarter: 'Q1-Q4',
      title: 'Pazar Dominasyonu',
      items: [
        'Pazar liderliği konsolidasyonu',
        'Yeni ürün hatları',
        'Ar-Ge yatırımları',
        'Franchise modeli',
        '1.000 müşteri hedefi',
      ],
      status: 'planned',
      color: 'from-pink-500 to-pink-600',
    },
    {
      year: '2031',
      quarter: 'Q1-Q4',
      title: 'Uluslararası Açılım',
      items: [
        'Komşu ülkelere açılma',
        'Uluslararası ortaklıklar',
        'Çoklu dil desteği',
        '117M TL gelir hedefi',
        '1.500 müşteri hedefi',
      ],
      status: 'planned',
      color: 'from-red-500 to-red-600',
    },
  ];

  return (
    <section id="roadmap" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50 backdrop-blur-sm transition-colors duration-500" data-aos="flip-left">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Yol <span className="text-emerald-600 dark:text-emerald-400">Haritası</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300">
            2026'dan 2031'e uzanan stratejik büyüme planımız
          </p>
        </div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-blue-500 to-red-500"></div>

          {/* Milestones */}
          <div className="space-y-24">
            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0;
              const Icon = milestone.status === 'in-progress' ? CheckCircle : Circle;

              return (
                <div key={index} className="relative">
                  {/* Center Point */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-0">
                    <div className={`w-16 h-16 bg-gradient-to-br ${milestone.color} rounded-full flex items-center justify-center shadow-xl border-4 border-white`}>
                      <Icon className={`w-8 h-8 ${milestone.status === 'in-progress' ? 'text-white' : 'text-white/70'}`} />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`grid grid-cols-2 gap-8 ${isLeft ? '' : 'direction-rtl'}`}>
                    <div className={isLeft ? 'text-right' : 'text-left col-start-2'}>
                      <div className="inline-block bg-white dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 max-w-lg border border-gray-200/50 dark:border-gray-700/50">
                        <div className={`inline-block px-4 py-2 bg-gradient-to-r ${milestone.color} text-white rounded-full font-bold mb-4`}>
                          {milestone.year} • {milestone.quarter}
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                          {milestone.title}
                        </h3>

                        <ul className="space-y-3 text-left">
                          {milestone.items.map((item, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <div className={`w-2 h-2 bg-gradient-to-br ${milestone.color} rounded-full mt-2 flex-shrink-0`}></div>
                              <span className="text-gray-700 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline - Mobile */}
        <div className="lg:hidden space-y-6 sm:space-y-8">
          {milestones.map((milestone, index) => {
            const Icon = milestone.status === 'in-progress' ? CheckCircle : Circle;

            return (
              <div key={index} className="relative pl-10 sm:pl-12">
                {/* Line */}
                {index < milestones.length - 1 && (
                  <div className={`absolute left-5 sm:left-6 top-10 sm:top-12 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b ${milestone.color}`}></div>
                )}

                {/* Point */}
                <div className="absolute left-0 top-0">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${milestone.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${milestone.status === 'in-progress' ? 'text-white' : 'text-white/70'}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="bg-white dark:bg-gray-800/50 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
                  <div className={`inline-block px-2 sm:px-3 py-1 bg-gradient-to-r ${milestone.color} text-white text-xs sm:text-sm rounded-full font-bold mb-2 sm:mb-3`}>
                    {milestone.year} • {milestone.quarter}
                  </div>
                  
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                    {milestone.title}
                  </h3>

                  <ul className="space-y-1.5 sm:space-y-2">
                    {milestone.items.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-1.5 sm:space-x-2 text-xs sm:text-sm">
                        <div className={`w-1.5 h-1.5 bg-gradient-to-br ${milestone.color} rounded-full mt-1.5 flex-shrink-0`}></div>
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 sm:mt-16 grid sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 text-center text-white shadow-xl">
            <div className="text-3xl sm:text-4xl font-bold mb-2">6 Yıl</div>
            <div className="text-sm sm:text-base text-emerald-100">Stratejik Planlama</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 text-center text-white shadow-xl">
            <div className="text-3xl sm:text-4xl font-bold mb-2">1.500</div>
            <div className="text-sm sm:text-base text-blue-100">Müşteri Hedefi</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 text-center text-white shadow-xl">
            <div className="text-3xl sm:text-4xl font-bold mb-2">117M TL</div>
            <div className="text-sm sm:text-base text-purple-100">Gelir Hedefi</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
