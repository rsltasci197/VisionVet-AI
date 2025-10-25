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
    <section id="market" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50 backdrop-blur-sm transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Pazar Analizi ve <span className="text-emerald-600 dark:text-emerald-400">Büyüme Potansiyeli</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            Veteriner teknoloji pazarı yılda %15 büyüyor
          </p>
          <p className="text-lg text-gray-500">
            Mastitis hastalığı için akıllı tanı sistemlerine olan talep sürekli artıyor. 
            VisionVet-AI bu büyüyen pazarda lider olmayı hedefliyor.
          </p>
        </div>

        {/* Market Stats */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {marketStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
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
        <div className="bg-gradient-to-br from-emerald-600 to-blue-600 rounded-2xl p-8 lg:p-12 shadow-2xl mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <Target className="w-8 h-8" />
                <h3 className="text-3xl font-bold">Hedef Pazar</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-xl">180.000 Süt Üreticisi</div>
                    <div className="text-emerald-100">Türkiye genelinde toplam</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-xl">30.000 Uygun Firma</div>
                    <div className="text-emerald-100">Teknoloji adaptasyonu için hazır</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-xl">%15 Yıllık Büyüme</div>
                    <div className="text-emerald-100">Veteriner teknoloji sektörü</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="text-center space-y-4">
                <div className="text-6xl font-bold text-white">16.7%</div>
                <div className="text-xl font-semibold text-white">Pazar Payı Hedefi</div>
                <p className="text-emerald-100">
                  5 yıl içinde 30.000 uygun firmadan 1.500'üne ulaşmayı hedefliyoruz
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Growth Timeline */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            5 Yıllık <span className="text-emerald-600">Büyüme Hedefi</span>
          </h3>
          
          <div className="space-y-4">
            {growthData.map((data, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-emerald-50 hover:to-blue-50 transition-all duration-300">
                  {/* Year */}
                  <div className="flex-shrink-0 w-20">
                    <div className="text-2xl font-bold text-emerald-600">
                      {data.year}
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">{data.milestone}</span>
                      <span className="text-sm text-gray-600">{data.firms} firma</span>
                    </div>
                    <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="absolute left-0 top-0 h-full bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full transition-all duration-1000"
                        style={{ width: `${(data.firms / 1500) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Revenue */}
                  <div className="flex-shrink-0 w-28 text-right">
                    <div className="text-xl font-bold text-gray-900">
                      {data.revenue}
                    </div>
                    <div className="text-xs text-gray-600">Gelir</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total Target */}
          <div className="mt-8 p-6 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-xl text-white text-center">
            <div className="text-4xl font-bold mb-2">117 Milyon TL</div>
            <div className="text-emerald-100">5. Yıl Hedeflenen Gelir</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketAnalysis;
