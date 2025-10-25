import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../logo.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={logo}
                alt="VisionVet-AI Logo"
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold">VisionVet-AI</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Akıllı telefon mikroskopu ve yapay zeka ile mastitis hastalığına 
              hızlı, doğru ve ekonomik tanı çözümü sunuyoruz.
            </p>
            {/* Social Links */}
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  Anasayfa
                </a>
              </li>
              <li>
                <a href="#problem" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  Problem
                </a>
              </li>
              <li>
                <a href="#solution" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  Çözüm
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  Ürün Özellikleri
                </a>
              </li>
              <li>
                <a href="#market" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  Pazar Analizi
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  Ekibimiz
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">Şirket</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  Kariyer
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  Basın Kiti
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  Gizlilik Politikası
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  Kullanım Koşulları
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">İletişim</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:info@visionvet-ai.com" className="flex items-start space-x-3 text-gray-400 hover:text-emerald-400 transition-colors text-sm group">
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:text-emerald-400" />
                  <span>info@visionvet-ai.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+905001234567" className="flex items-start space-x-3 text-gray-400 hover:text-emerald-400 transition-colors text-sm group">
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:text-emerald-400" />
                  <span>+90 500 123 45 67</span>
                </a>
              </li>
              <li>
                <div className="flex items-start space-x-3 text-gray-400 text-sm">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>
                    Fırat Üniversitesi<br />
                    Teknoloji Geliştirme Bölgesi<br />
                    Elazığ, Türkiye
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} VisionVet-AI. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                Gizlilik
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                Kullanım Koşulları
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                Çerezler
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
