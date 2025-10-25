import React from 'react';
import { Smartphone, Brain, ShieldCheck, Microscope, FileText, Cloud } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'Akıllı Telefon Mikroskopu',
      description: 'Herhangi bir akıllı telefon ile kullanılabilen taşınabilir mikroskop aparatı. Özel bir ekipman gerektirmez, mevcut telefonunuzla çalışır.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Brain,
      title: 'Yapay Zeka Modeli',
      description: 'Derin öğrenme algoritmaları ile eğitilmiş yapay zeka modeli. Binlerce görüntü verisi üzerinde çalışarak sürekli kendini geliştiriyor.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: ShieldCheck,
      title: 'Veteriner Gözetimi Olmadan',
      description: 'Çiftlik sahipleri ve operatörler kendi başlarına tanı koyabilir. Veteriner onayı opsiyonel, acil durumlarda anlık müdahale imkanı.',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: Microscope,
      title: 'Otomatik Bakteriyel Analiz',
      description: 'Süt örneklerindeki bakterileri otomatik olarak tespit eder ve kategorize eder. Manuel sayım hatalarını tamamen ortadan kaldırır.',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: FileText,
      title: 'Anlık Raporlama',
      description: 'Test sonuçları anında detaylı rapor halinde sunulur. PDF formatında indirilebilir, veteriner ile paylaşılabilir.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Cloud,
      title: 'Bulut Tabanlı Kayıt',
      description: 'Tüm test geçmişi güvenli bulut ortamında saklanır. İstediğiniz zaman erişebilir, sürü sağlığını takip edebilirsiniz.',
      color: 'from-cyan-500 to-cyan-600',
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-white dark:bg-gray-800/30 backdrop-blur-sm transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Ürün <span className="text-emerald-600 dark:text-emerald-400">Özellikleri</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            VisionVet-AI'ın Teknik Yetenekleri
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Son teknoloji yapay zeka ve mobil mikroskopi teknolojilerini bir araya getiren 
            VisionVet-AI, veteriner tanı süreçlerinde devrim yaratıyor.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-gray-50 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 hover:bg-white dark:hover:bg-gray-700/50 hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700/50"
              >
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`}></div>
              </div>
            );
          })}
        </div>

        {/* Technical Specs */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-12 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-6">
              <h3 className="text-3xl font-bold">
                Teknik Spesifikasyonlar
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-emerald-400">Doğruluk Oranı</div>
                    <div className="text-gray-300">%90+ doğruluk ile güvenilir sonuçlar</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-blue-400">İşlem Süresi</div>
                    <div className="text-gray-300">5 dakikadan kısa analiz süresi</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-purple-400">Uyumluluk</div>
                    <div className="text-gray-300">iOS ve Android cihazlarla tam uyumlu</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-orange-400">Bağlantı</div>
                    <div className="text-gray-300">Çevrimdışı çalışma desteği, bulut senkronizasyonu</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="text-center space-y-4">
                <div className="text-5xl font-bold text-white">99.9%</div>
                <div className="text-emerald-400 font-semibold">Sistem Çalışma Süresi</div>
                <p className="text-gray-300 text-sm">
                  Bulut altyapımız kesintisiz hizmet için 7/24 aktif
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
