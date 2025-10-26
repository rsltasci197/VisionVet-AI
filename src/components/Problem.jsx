import React from 'react';
import { TrendingDown, Clock, AlertTriangle } from 'lucide-react';
import veterinerMuayenesi from '../veterinerMuayenesi.png';
import laboratuvarTesti from '../laboratuvarTesti.png';

const Problem = () => {
  return (
    <section
      id="problem"
      className="relative py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-emerald-900/20 dark:to-blue-900/20 transition-colors duration-500 overflow-hidden"
      data-aos="fade-right"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-emerald-900 dark:text-emerald-300 mb-8 sm:mb-12">
              Problem
            </h2>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border border-emerald-200 dark:border-emerald-700 shadow-xl">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-emerald-900 dark:text-white mb-3 sm:mb-4">
                Mastitis Hastalığının<br/>Ekonomik Etkisi
              </h3>
              <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                <p className="flex items-start">
                  <span className="text-emerald-600 mr-2"></span>
                  <span>22 milyar USD global kayıp</span>
                </p>
                <p className="flex items-start">
                  <span className="text-emerald-600 mr-2"></span>
                  <span>Türkiye'de 750M USD zarar</span>
                </p>
                <p className="flex items-start">
                  <span className="text-emerald-600 mr-2"></span>
                  <span>%38.8 antimikrobiyal direnç</span>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="relative bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl overflow-hidden shadow-lg aspect-square">
                <img 
                  src={laboratuvarTesti} 
                  alt="Laboratuvar Testi" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="text-white text-center text-sm font-semibold">Laboratuvar Testi</div>
                </div>
              </div>

              <div className="relative bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl overflow-hidden shadow-lg aspect-square">
                <img 
                  src={veterinerMuayenesi} 
                  alt="Veteriner Muayenesi" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="text-white text-center text-sm font-semibold">Veteriner Muayenesi</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-red-200 dark:border-red-700 shadow-xl">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
                Mevcut Tanı Yöntemlerindeki Eksiklikler
              </h3>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-red-50 dark:bg-red-900/20 rounded-xl sm:rounded-2xl border border-red-200 dark:border-red-800">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-red-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-red-600 dark:text-red-400 mb-1 sm:mb-2">
                      48-72 saat bekleme süresi
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Yüksek maliyet (ort. 1.930 TL/test)
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                      Hastalık ilerlerken kayıp artıyor
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-orange-50 dark:bg-orange-900/20 rounded-xl sm:rounded-2xl border border-orange-200 dark:border-orange-800">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-orange-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <TrendingDown className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1 sm:mb-2">
                      Veteriner gözetimi gerekli
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Çiftlikte bağımsız kullanım yok
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                      Ulaşılabilirlik sorunu
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl sm:rounded-2xl border border-yellow-200 dark:border-yellow-800">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-yellow-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-yellow-600 dark:text-yellow-400 mb-1 sm:mb-2">
                      %38.8 antimikrobiyal direnç
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Geç tanı ciddi sonuçlar doğurur
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                      Tedavi başarı oranı düşer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
