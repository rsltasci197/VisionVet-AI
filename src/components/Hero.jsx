import React from 'react';
import { ChevronRight, Zap, Smartphone, Target, Cloud } from 'lucide-react';

const Hero = () => {
  const features = [
    {
      icon: Zap,
      title: 'Veteriner gözetimi olmadan kullanım',
      description: 'Çiftlikte bağımsız kullanım'
    },
    {
      icon: Target,
      title: 'Otomatik bakteriyel analiz',
      description: '%90+ doğruluk oranı'
    },
    {
      icon: Smartphone,
      title: 'Anlık raporlama',
      description: '5 dakikadan kısa süre'
    },
    {
      icon: Cloud,
      title: 'Bulut tabanlı kayıt',
      description: 'Güvenli veri saklama'
    }
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background with farm/cow image effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/95 via-green-800/90 to-blue-900/95 dark:from-gray-900/98 dark:via-emerald-900/95 dark:to-blue-900/98">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTItMTZ2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0tMiAydjJoMnYtMmgtMnptLTQgMHYyaDJ2LTJoLTJ6bS00IDB2Mmgydi0yaC0yem0tNCAwdjJoMnYtMmgtMnptLTQgMHYyaDJ2LTJoLTJ6bS00IDB2Mmgydi0yaC0yem0tNCAwdjJoMnYtMmgtMnptLTQgMHYyaDJ2LTJoLTJ6bS00IDB2Mmgydi0yaC0yem0zOC00djJoMnYtMmgtMnptMC00djJoMnYtMmgtMnptMC00djJoMnYtMmgtMnptMC00djJoMnYtMmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="inline-block px-4 py-2 bg-emerald-500/20 backdrop-blur-sm rounded-full border border-emerald-400/30 mb-4">
              <span className="text-emerald-300 text-sm font-semibold">🐄 Veteriner Teknolojisinde Yeni Dönem</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Çiftlikte dakikalar içinde{' '}
                <span className="text-emerald-300">mastitis tanısı</span>
              </h1>
              <p className="text-xl sm:text-2xl text-emerald-100 font-light">
                Akıllı telefon mikroskopu ve yapay zeka ile hızlı, doğru ve ekonomik tanı
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-emerald-900 bg-white rounded-xl hover:bg-emerald-50 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/50 hover:scale-105"
              >
                Demo Talep Et
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#features"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-md rounded-xl hover:bg-white/20 transition-all duration-300 border-2 border-white/30"
              >
                Ürünü Keşfet
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-white">%90+</div>
                <div className="text-emerald-200 text-sm lg:text-base">Doğruluk</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-white">&lt;5 dk</div>
                <div className="text-emerald-200 text-sm lg:text-base">Hızlı Sonuç</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-white">%96</div>
                <div className="text-emerald-200 text-sm lg:text-base">Tasarruf</div>
              </div>
            </div>
          </div>

          {/* Right - Product Showcase */}
          <div className="relative">
            {/* Main Title for Right Side */}
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">Ürün</h2>
              <p className="text-emerald-200">Çiftlik ortamında dakikalar içinde mastitis tanısı yapabilirsiniz</p>
            </div>

            {/* Phone Mockups Stack */}
            <div className="relative h-[500px] lg:h-[600px]">
              {/* Center Phone - Main Display */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <div className="relative">
                  {/* Phone Frame */}
                  <div className="w-64 h-[520px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-8 border-gray-800">
                    <div className="w-full h-full bg-gradient-to-br from-emerald-600 to-blue-600 rounded-[2.3rem] overflow-hidden relative">
                      {/* Screen Content */}
                      <div className="p-6 text-white">
                        <div className="text-sm opacity-75 mb-2">Akıllı Telefon Mikroskobu</div>
                        <h3 className="text-2xl font-bold mb-4">Dashboard</h3>
                        
                        {/* Sample UI Elements */}
                        <div className="space-y-3 mb-6">
                          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Son Test</span>
                              <span className="font-semibold">5 dk önce</span>
                            </div>
                          </div>
                          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Doğruluk</span>
                              <span className="font-semibold">%94.2</span>
                            </div>
                          </div>
                        </div>

                        {/* Chart Representation */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4">
                          <div className="text-xs mb-2">Bakteriyel Analiz</div>
                          <div className="flex items-end space-x-2 h-24">
                            <div className="flex-1 bg-yellow-400 rounded-t" style={{height: '60%'}}></div>
                            <div className="flex-1 bg-red-400 rounded-t" style={{height: '80%'}}></div>
                            <div className="flex-1 bg-blue-400 rounded-t" style={{height: '40%'}}></div>
                            <div className="flex-1 bg-green-400 rounded-t" style={{height: '90%'}}></div>
                          </div>
                        </div>

                        <button className="w-full bg-white text-emerald-600 font-semibold py-3 rounded-xl">
                          Yeni Test Başlat
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-2xl"></div>
                </div>
              </div>

              {/* Left Phone - Analysis History */}
              <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 opacity-75 hover:opacity-100 transition-opacity">
                <div className="w-48 h-96 bg-gray-900 rounded-[2.5rem] p-2 shadow-xl border-4 border-gray-800 transform rotate-[-5deg]">
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-[2rem] p-4">
                    <div className="text-white text-sm font-semibold mb-2">Test Geçmişi</div>
                    <div className="space-y-2">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className="bg-white/20 backdrop-blur-sm rounded-lg p-2 text-xs text-white">
                          Test #{i}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Phone - Disease Detection */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 opacity-75 hover:opacity-100 transition-opacity">
                <div className="w-48 h-96 bg-gray-900 rounded-[2.5rem] p-2 shadow-xl border-4 border-gray-800 transform rotate-[5deg]">
                  <div className="w-full h-full bg-gradient-to-br from-emerald-500 to-green-600 rounded-[2rem] p-4">
                    <div className="text-white text-sm font-semibold mb-2">Hastalık Tespiti</div>
                    <div className="bg-white/30 backdrop-blur-sm rounded-lg p-3 mb-3">
                      <div className="text-white text-xs">Mastitis Detected</div>
                      <div className="text-2xl font-bold text-white mt-1">Pozitif</div>
                    </div>
                    <div className="space-y-1 text-xs text-white/90">
                      <div>• Bakteriyel sayım yüksek</div>
                      <div>• Hücre konsantrasyonu artmış</div>
                      <div>• Tedavi önerilir</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature List */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-3 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{feature.title}</div>
                      <div className="text-emerald-200 text-xs">{feature.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
