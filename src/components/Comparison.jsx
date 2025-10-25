import React from 'react';
import { ArrowRight, X, Check } from 'lucide-react';

const Comparison = () => {
  const oldMethod = [
    { label: 'Tanı Süresi', value: '48-72 Saat', negative: true },
    { label: 'Maliyet', value: '1.930 TL', negative: true },
    { label: 'Kullanım Yeri', value: 'Laboratuvar', negative: true },
    { label: 'Veteriner Gereksinimi', value: 'Zorunlu', negative: true },
    { label: 'Sonuç Bekleme', value: 'Uzun', negative: true },
    { label: 'Erken Müdahale', value: 'Sınırlı', negative: true },
  ];

  const newMethod = [
    { label: 'Tanı Süresi', value: '< 5 Dakika', positive: true },
    { label: 'Maliyet', value: '< 5 USD', positive: true },
    { label: 'Kullanım Yeri', value: 'Çiftlikte', positive: true },
    { label: 'Veteriner Gereksinimi', value: 'Opsiyonel', positive: true },
    { label: 'Sonuç Bekleme', value: 'Anında', positive: true },
    { label: 'Erken Müdahale', value: 'Maksimum', positive: true },
  ];

  return (
    <section id="comparison" className="py-20 lg:py-32 bg-white dark:bg-gray-800/30 backdrop-blur-sm transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="text-red-600 dark:text-red-400">Eski Yöntem</span> vs{' '}
            <span className="text-emerald-600 dark:text-emerald-400">Yeni Yöntem</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Geleneksel laboratuvar testleri ile VisionVet-AI arasındaki farkı görün
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto relative">
          {/* Arrow in the middle - desktop only */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="bg-gradient-to-r from-red-600 to-emerald-600 p-4 rounded-full shadow-xl">
              <ArrowRight className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Old Method */}
          <div className="relative">
            <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/30 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-red-200 dark:border-red-700/50">
              <div className="text-center mb-8">
                <div className="inline-block bg-red-600 dark:bg-red-700 text-white px-6 py-3 rounded-full font-bold text-lg mb-4">
                  Geleneksel Yöntem
                </div>
                <p className="text-gray-700 dark:text-gray-300">Laboratuvar Tabanlı Test</p>
              </div>

              <div className="space-y-4">
                {oldMethod.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 flex items-center justify-between shadow-sm border border-gray-200/50 dark:border-gray-700/50"
                  >
                    <div className="flex items-center space-x-3">
                      <X className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{item.label}</span>
                    </div>
                    <span className="text-red-600 dark:text-red-400 font-bold">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-red-200 rounded-lg">
                <p className="text-red-900 text-sm font-semibold text-center">
                  ⚠️ Yavaş, pahalı ve zaman kaybettirici
                </p>
              </div>
            </div>
          </div>

          {/* New Method */}
          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-emerald-200 dark:border-emerald-700/50">
              <div className="text-center mb-8">
                <div className="inline-block bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-6 py-3 rounded-full font-bold text-lg mb-4">
                  VisionVet-AI
                </div>
                <p className="text-gray-700">Yapay Zeka Destekli Çözüm</p>
              </div>

              <div className="space-y-4">
                {newMethod.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 flex items-center justify-between shadow-sm border border-gray-200/50 dark:border-gray-700/50"
                  >
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{item.label}</span>
                    </div>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-emerald-200 rounded-lg">
                <p className="text-emerald-900 text-sm font-semibold text-center">
                  ✓ Hızlı, ekonomik ve etkili çözüm
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Arrow */}
          <div className="lg:hidden flex justify-center">
            <div className="bg-gradient-to-r from-red-600 to-emerald-600 p-3 rounded-full shadow-xl">
              <ArrowRight className="w-6 h-6 text-white rotate-90" />
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-600 to-blue-600 text-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-4xl font-bold mb-2">%96</div>
            <div className="text-emerald-100">Maliyet Tasarrufu</div>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-4xl font-bold mb-2">95%</div>
            <div className="text-blue-100">Daha Hızlı</div>
          </div>
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-4xl font-bold mb-2">%96</div>
            <div className="text-purple-100">Doğruluk Oranı</div>
          </div>
        </div>
        
        {/* Accuracy Comparison */}
        <div className="mt-12 max-w-2xl mx-auto bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
            Doğruluk Karşılaştırması
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600 dark:text-gray-400">Geleneksel Test</span>
                <span className="font-bold text-gray-900 dark:text-white">%90-95</span>
              </div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full" style={{width: '92.5%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600 dark:text-gray-400">VisionVet-AI</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">%96+</span>
              </div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full" style={{width: '96%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
