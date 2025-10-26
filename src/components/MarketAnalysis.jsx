import React from 'react';
import { TrendingUp, Target, Globe, MapPin } from 'lucide-react';

const MarketAnalysis = () => {
  const marketStats = [
    {
      icon: Globe,
      value: '32.2 Milyar USD',
      label: 'Global Süt Ürünleri Pazarı (2024)',
      description: 'Yıllık %15 büyüme oranı ile 2029\'da 50 Milyar USD\'ye ulaşacak',
      trend: '+15% CAGR',
    },
    {
      icon: TrendingUp,
      value: '35 Milyar USD',
      label: 'Mastitis Global Ekonomik Kayıp',
      description: 'Dünya genelinde yıllık mastitis nedeniyle oluşan toplam zarar',
      trend: 'Yıllık',
    },
    {
      icon: MapPin,
      value: '750 Milyon USD',
      label: 'Türkiye Mastitis Kayıpları',
      description: 'Ülkemizde yıllık mastitis kaynaklı ekonomik zarar',
      trend: 'Yıllık',
    },
  ];

  const growthData = [
    { year: '2026', firms: 20, revenue: '2M TL', milestone: 'MVP ve İlk Satışlar', tests: '3.600' },
    { year: '2027', firms: 150, revenue: '15M TL', milestone: 'Pazar Genişlemesi', tests: '27.000' },
    { year: '2029', firms: 500, revenue: '58M TL', milestone: 'Ulusal Kapsama', tests: '90.000' },
    { year: '2031', firms: 1500, revenue: '117M TL', milestone: 'Uluslararası Açılım', tests: '270.000' },
  ];

  return (
    <section id="market" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50 backdrop-blur-sm transition-colors duration-500" data-aos="slide-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 px-2">
            Pazar Analizi ve <span className="text-emerald-600 dark:text-emerald-400">Büyüme Potansiyeli</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 px-2">
            Veteriner teknoloji pazarı yılda %15 büyüyor
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-gray-500 dark:text-gray-400 px-2">
            Mastitis hastalığı için akıllı tanı sistemlerine olan talep sürekli artıyor. 
            VisionVet-AI bu büyüyen pazarda lider olmayı hedefliyor.
          </p>
        </div>

        {/* Market Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {marketStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800/50 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50"
              >
                <div className="flex items-start space-x-2 sm:space-x-3 lg:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 break-words">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-1 sm:mb-2 leading-tight">
                      {stat.label}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {stat.description}
                    </p>
                    <div className="inline-block bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded text-xs font-semibold">
                      {stat.trend}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Target Market */}
        <div className="bg-gradient-to-br from-emerald-600 to-blue-600 rounded-xl sm:rounded-2xl p-5 sm:p-8 lg:p-12 shadow-2xl mb-12 sm:mb-16">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="text-white space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                <Target className="w-6 h-6 sm:w-8 sm:h-8" />
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">Hedef Pazar</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-base sm:text-lg lg:text-xl">180.000 Süt Üreticisi</div>
                    <div className="text-sm sm:text-base text-emerald-100">Türkiye genelinde toplam</div>
                  </div>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-base sm:text-lg lg:text-xl">30.000 Uygun Firma</div>
                    <div className="text-sm sm:text-base text-emerald-100">Teknoloji adaptasyonu için hazır</div>
                  </div>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-base sm:text-lg lg:text-xl">%15 Yıllık Büyüme</div>
                    <div className="text-sm sm:text-base text-emerald-100">Veteriner teknoloji sektörü</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 sm:p-6 lg:p-8 border border-white/20">
              <div className="text-center space-y-3 sm:space-y-4">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">16.7%</div>
                <div className="text-base sm:text-lg lg:text-xl font-semibold text-white">Pazar Payı Hedefi</div>
                <p className="text-sm sm:text-base text-emerald-100">
                  5 yıl içinde 30.000 uygun firmadan 1.500'üne ulaşmayı hedefliyoruz
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Growth Timeline */}
        <div className="bg-white dark:bg-gray-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-12 shadow-xl">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center px-2">
            5 Yıllık <span className="text-emerald-600 dark:text-emerald-400">Büyüme Hedefi</span>
          </h3>
          
          <div className="space-y-3 sm:space-y-4">
            {growthData.map((data, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 lg:p-6 bg-gray-50 dark:bg-gray-700/30 rounded-lg sm:rounded-xl hover:bg-gradient-to-r hover:from-emerald-50 hover:to-blue-50 dark:hover:from-emerald-900/20 dark:hover:to-blue-900/20 transition-all duration-300">
                  {/* Year */}
                  <div className="flex-shrink-0 w-16 sm:w-20">
                    <div className="text-xl sm:text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                      {data.year}
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1.5 sm:mb-2 gap-2">
                      <span className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white truncate">{data.milestone}</span>
                      <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">{data.firms} firma</span>
                    </div>
                    <div className="relative h-2 sm:h-3 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                      <div
                        className="absolute left-0 top-0 h-full bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full transition-all duration-1000"
                        style={{ width: `${(data.firms / 1500) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Revenue */}
                  <div className="flex-shrink-0 sm:w-24 lg:w-28 text-left sm:text-right">
                    <div className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white">
                      {data.revenue}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Gelir</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total Target */}
          <div className="mt-6 sm:mt-8 p-4 sm:p-5 lg:p-6 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-lg sm:rounded-xl text-white text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1.5 sm:mb-2">117 Milyon TL</div>
            <div className="text-sm sm:text-base text-emerald-100">5. Yıl Hedeflenen Gelir</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketAnalysis;
