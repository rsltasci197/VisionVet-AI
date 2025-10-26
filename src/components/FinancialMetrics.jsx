import React from 'react';
import { TrendingUp, DollarSign, Calendar, BarChart } from 'lucide-react';

const FinancialMetrics = () => {
  const metrics = [
    {
      icon: TrendingUp,
      label: 'Müşteri Yaşam Boyu Değeri',
      abbreviation: 'LTV',
      value: '18.000 TL',
      description: 'Ortalama 3 yıl boyunca bir müşteriden elde edilen toplam gelir',
      color: 'from-emerald-500 to-emerald-600',
      trend: 'Yüksek',
    },
    {
      icon: DollarSign,
      label: 'Müşteri Edinme Maliyeti',
      abbreviation: 'CAC',
      value: '1.800 TL',
      description: 'Yeni bir müşteri kazanma maliyeti',
      color: 'from-blue-500 to-blue-600',
      trend: 'Optimize',
    },
    {
      icon: Calendar,
      label: 'Geri Ödeme Süresi',
      abbreviation: 'Payback',
      value: '3 Ay',
      description: 'CAC\'in geri dönüş süresi',
      color: 'from-purple-500 to-purple-600',
      trend: 'Hızlı',
    },
    {
      icon: BarChart,
      label: 'LTV/CAC Oranı',
      abbreviation: 'Ratio',
      value: '10:1',
      description: 'Sağlıklı büyüme göstergesi (endüstri ortalaması: 3:1)',
      color: 'from-orange-500 to-orange-600',
      trend: 'Mükemmel',
    },
  ];

  return (
    <section id="financials" className="py-20 lg:py-32 bg-gradient-to-br from-emerald-600 via-blue-600 to-purple-600 relative overflow-hidden" data-aos="fade-up" data-aos-delay="150">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-2">
            Finansal <span className="text-emerald-200">Göstergeler</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 px-2">
            Güçlü finansal metrikler ile sürdürülebilir büyüme
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className="h-full bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-2 shadow-xl">
                  {/* Icon */}
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br ${metric.color} rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                  </div>

                  {/* Abbreviation */}
                  <div className="text-xs sm:text-sm text-emerald-200 font-semibold mb-1.5 sm:mb-2">
                    {metric.abbreviation}
                  </div>

                  {/* Value */}
                  <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 sm:mb-3 break-words">
                    {metric.value}
                  </div>

                  {/* Label */}
                  <div className="text-sm sm:text-base text-white/80 font-medium mb-2 sm:mb-3 leading-tight">
                    {metric.label}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-3 sm:mb-4">
                    {metric.description}
                  </p>

                  {/* Trend */}
                  <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-semibold text-white">
                    {metric.trend}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Revenue Projection Chart */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 lg:p-12 border border-white/20 mb-12">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Gelir Projeksiyonu <span className="text-emerald-200">(2026-2031)</span>
          </h3>
          <div className="space-y-6">
            {[
              { year: '2026', revenue: 2, customers: 20, arr: '2M TL' },
              { year: '2027', revenue: 15, customers: 150, arr: '15M TL' },
              { year: '2029', revenue: 58, customers: 500, arr: '58M TL' },
              { year: '2031', revenue: 117, customers: 1500, arr: '117M TL' },
            ].map((data, index) => (
              <div key={index} className="relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-bold text-lg">{data.year}</span>
                  <div className="flex items-center space-x-4">
                    <span className="text-emerald-200 text-sm">{data.customers} Müşteri</span>
                    <span className="text-white font-bold text-xl">{data.arr}</span>
                  </div>
                </div>
                <div className="h-4 bg-white/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full transition-all duration-1000"
                    style={{width: `${(data.revenue / 117) * 100}%`}}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <div className="inline-block bg-white/20 rounded-xl px-6 py-3">
              <div className="text-emerald-200 text-sm mb-1">Toplam 5 Yıllık Hedef</div>
              <div className="text-white text-3xl font-bold">117 Milyon TL</div>
            </div>
          </div>
        </div>

        {/* Financial Highlights */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Unit Economics */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">
              Birim Ekonomisi
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-white/80">Test Başına Fiyat</span>
                <span className="text-white font-bold">5 USD</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/80">Test Başına Maliyet</span>
                <span className="text-white font-bold">0.20 USD</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/80">Brüt Kar Marjı</span>
                <span className="text-emerald-300 font-bold text-xl">96%</span>
              </div>
              <div className="border-t border-white/20 pt-4 mt-4">
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold">Aylık Test/Müşteri (Ort.)</span>
                  <span className="text-white font-bold">200</span>
                </div>
              </div>
            </div>
          </div>

          {/* Growth Metrics */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">
              Büyüme Metrikleri
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-white/80">Pazar Büyüme (CAGR)</span>
                <span className="text-emerald-300 font-bold">15%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/80">Hedef Pazar Penetrasyonu</span>
                <span className="text-emerald-300 font-bold">5% (2031)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/80">Toplam Hedef Müşteri</span>
                <span className="text-emerald-300 font-bold">30.000</span>
              </div>
              <div className="border-t border-white/20 pt-4 mt-4">
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold">5 Yıllık ARR Hedefi</span>
                  <span className="text-white font-bold">117M TL</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl p-8 shadow-2xl max-w-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Yatırım Fırsatı
            </h3>
            <p className="text-gray-600 mb-6">
              Güçlü finansal göstergeler ve hızlı büyüme potansiyeli ile VisionVet-AI, 
              veteriner teknoloji alanında öncü bir yatırım fırsatı sunuyor.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              İletişime Geçin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialMetrics;
