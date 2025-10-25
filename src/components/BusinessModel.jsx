import React from 'react';
import { Package, Repeat, Wrench } from 'lucide-react';

const BusinessModel = () => {
  const models = [
    {
      icon: Package,
      title: 'B2B Turn-Key Kurulum',
      subtitle: 'Tam Paket Çözüm',
      features: [
        'Donanım (Akıllı telefon mikroskopu)',
        'Yazılım lisansı ve kurulum',
        'Personel eğitimi',
        'İlk 100 test ücretsiz',
        'Teknik destek paketi',
      ],
      price: 'Tek Seferlik Ödeme',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Repeat,
      title: 'SaaS Abonelik Modeli',
      subtitle: 'Esnek ve Ölçeklenebilir',
      features: [
        'Starter: 50 test/ay',
        'Professional: 200 test/ay',
        'Enterprise: Sınırsız test',
        'Bulut depolama',
        'Otomatik yazılım güncellemeleri',
      ],
      price: 'Aylık Abonelik',
      color: 'from-emerald-500 to-emerald-600',
      highlight: true,
    },
    {
      icon: Wrench,
      title: 'Bakım ve Destek',
      subtitle: 'Kesintisiz Hizmet',
      features: [
        'Donanım bakımı ve onarım',
        'Yazılım güncellemeleri',
        '7/24 teknik destek',
        'Eğitim ve danışmanlık',
        'Sarf malzeme tedariki',
      ],
      price: 'Yıllık Sözleşme',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <section id="business" className="py-20 lg:py-32 bg-white dark:bg-gray-800/30 backdrop-blur-sm transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            İş <span className="text-emerald-600 dark:text-emerald-400">Modeli</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Çeşitli iş modellerimiz ile her ölçekten işletmeye uygun çözümler sunuyoruz
          </p>
        </div>

        {/* Business Models */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {models.map((model, index) => {
            const Icon = model.icon;
            return (
              <div
                key={index}
                className={`relative group ${
                  model.highlight ? 'lg:-mt-4 lg:mb-0' : ''
                }`}
              >
                {model.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                      En Popüler
                    </span>
                  </div>
                )}

                <div
                  className={`h-full bg-gray-50 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 hover:bg-white dark:hover:bg-gray-700/50 hover:shadow-2xl transition-all duration-300 border-2 ${
                    model.highlight
                      ? 'border-emerald-500 dark:border-emerald-600 shadow-xl'
                      : 'border-gray-200 dark:border-gray-700/50 hover:border-emerald-300 dark:hover:border-emerald-700'
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${model.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {model.title}
                  </h3>
                  <p className="text-emerald-600 font-semibold mb-6">
                    {model.subtitle}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {model.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className={`w-5 h-5 bg-gradient-to-br ${model.color} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className={`mt-auto pt-6 border-t border-gray-200`}>
                    <div className="text-center">
                      <div className={`text-lg font-bold bg-gradient-to-r ${model.color} bg-clip-text text-transparent`}>
                        {model.price}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Revenue Streams */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-12 shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Gelir Akışları
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-emerald-400">40%</div>
              <div className="text-white font-semibold">Turn-Key Satış</div>
              <div className="text-gray-400 text-sm">İlk kurulum gelirleri</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-400">45%</div>
              <div className="text-white font-semibold">SaaS Abonelik</div>
              <div className="text-gray-400 text-sm">Tekrarlayan gelir</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-400">15%</div>
              <div className="text-white font-semibold">Bakım & Destek</div>
              <div className="text-gray-400 text-sm">Sürekli gelir</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;
