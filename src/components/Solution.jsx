import React from 'react';
import { ArrowRight } from 'lucide-react';
import ciftci from '../ciftci.png';
import sdg2 from '../sdg-2.png';
import sdg3 from '../sdg-3.png';
import sdg8 from '../sdg-8.png';
import sdg9 from '../sdg-9.png';
import ornekVideo from '../Çözüm_Sayfası_Örneği_İçin_Animasyon_Oluşturma (1).mp4';

const Solution = () => {
  const features = [
    { number: '01', title: 'Hızlı Tanı', description: '5 dakika içinde sonuç', detail: '%90+ doğruluk oranı' },
    { number: '02', title: 'Yüksek Doğruluk', description: '%90+ doğruluk oranı', detail: 'CNN tabanlı analiz' },
    { number: '03', title: 'Taşınabilirlik', description: 'Çiftlik ortamında kullanım', detail: 'Veteriner gözetimi olmadan' },
    { number: '04', title: 'Maliyet Etkinlik', description: 'Test başına %96 tasarruf', detail: '1.930 TL yerine 75 TL' }
  ];

  const sdgGoals = [
    { number: 3, image: sdg3, label: 'İyi Yaşam ve Sağlık' },
    { number: 2, image: sdg2, label: 'Açlığı Sona Erdir' },
    { number: 8, image: sdg8, label: 'İnsana Yakışır İş' },
    { number: 9, image: sdg9, label: 'Sanayi, Yenilikçilik' }
  ];

  return (
    <section id="solution" className="relative py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-emerald-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-emerald-900/20 transition-colors duration-500 overflow-hidden" data-aos="fade-left">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-blue-900 dark:text-blue-300 mb-8 sm:mb-12">Çözüm</h2>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4 lg:space-x-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 border border-blue-200 dark:border-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg sm:rounded-xl flex items-center justify-center text-white text-lg sm:text-xl lg:text-2xl font-bold">{feature.number}</div>
                  <div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-1">{feature.description}</p>
                    <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-400">{feature.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 sm:mt-10 lg:mt-12">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {sdgGoals.map((goal, index) => (
                  <div key={index} className="rounded-xl overflow-hidden shadow-lg hover:scale-110 transition-transform cursor-pointer">
                    <img 
                      src={goal.image} 
                      alt={`SDG ${goal.number} - ${goal.label}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl overflow-hidden shadow-2xl aspect-video">
              <img 
                src={ciftci} 
                alt="Çiftçi + Akıllı Telefon" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="text-white text-center">
                  <div className="text-xl font-bold">Çiftçi + Akıllı Telefon</div>
                  <div className="text-sm opacity-90 mt-2">Çiftlikte bağımsız kullanım</div>
                </div>
              </div>
            </div>

            {/* Example Section - Video */}
            <div className="relative bg-gradient-to-br from-white/95 to-gray-50/95 dark:from-gray-800/95 dark:to-gray-900/95 backdrop-blur-xl rounded-3xl overflow-hidden border border-emerald-100 dark:border-emerald-800 shadow-2xl">
              {/* Modern Header with Gradient */}
              <div className="relative bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500 px-8 py-6">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                <h3 className="relative text-3xl font-bold text-white text-center tracking-wide">
                  Örnek
                  <div className="mt-2 w-20 h-1 bg-white/40 mx-auto rounded-full"></div>
                </h3>
              </div>
              
              {/* Video Container with Glow Effect */}
              <div className="relative p-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
                <div className="relative rounded-2xl overflow-hidden shadow-xl ring-4 ring-emerald-100 dark:ring-emerald-900/50">
                  <video 
                    className="w-full h-auto"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                  >
                    <source src={ornekVideo} type="video/mp4" />
                    Tarayıcınız video etiketini desteklemiyor.
                  </video>
                  {/* Subtle Overlay Effect */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/5 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
