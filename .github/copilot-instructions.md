## Amaç

Bu dosya, yapay zeka yardımcılarının (Copilot / otomatik ajanlar) bu depo içinde hızlı ve güvenli şekilde üretken olabilmesi için kısa, eyleme dönüştürülebilir yönergeler içerir. Hedef: değişiklik yapmadan önce projeyi keşfetmek, proje tarzına uygun değişiklikler önermek ve riskleri azaltmaktır.

## Hızlı keşif adımları (PowerShell)
Önce depo içinde hangi teknoloji ve ana dosya yapılarına sahip olduğumuzu tespit edin.

```powershell
# 1) Ana manifestleri ara
Get-ChildItem -Path . -Recurse -Include package.json,pyproject.toml,requirements.txt,setup.py,go.mod,Dockerfile -File

# 2) Önemli dokümanları oku (README, infra, CI)
Get-ChildItem -Path . -Recurse -Include README.md,.github/* -File

# 3) Hızlı içerik araması (ör. entrypoint, server, Docker)
Select-String -Path .\* -Pattern "server|app\(|main\(|Dockerfile|ENTRYPOINT|CMD" -SimpleMatch -Quiet
```

Bu depo için özel içerik bulunamazsa (boş ya da çok az dosya), önce proje sahibine hangi dil/çerçeve kullanılacağını sorun.

## Bulduğunuz şeylere göre eylemler (çeşitli örnekler)
- `package.json` bulunursa: bağımlılık bilgisi ve script'leri kontrol edin. Testleri çalıştırmadan önce `npm ci` veya `npm install` yerine proje tercihlerini kullanın.
  - Örnek: `npm ci && npm test`
- `pyproject.toml`/`requirements.txt` bulunursa: `python -m venv .venv; .\.venv\Scripts\Activate.ps1; pip install -r requirements.txt; pytest -q`
- `Dockerfile`/`docker-compose.yml` varsa: değişiklikler konteynerle test edilebilir — ancak varsayılan olarak uzak registry push etmeyin.

## Kod ve mimariyi anlama: nerelere bakılır
- Giriş noktaları: `src/`, `app/`, `cmd/`, `main.*`, `server.*` dosyaları. Bu dosyalar uygulamanın nasıl başlatıldığını ve konfigürasyonun nereden yüklendiğini gösterir.
- Hizmet sınırları: `services/`, `api/`, `controllers/` klasörleri genellikle sorumlulukları ayırır.
- Veri modelleri ve şemalar: `models/`, `schemas/`, `migrations/`.
- Entegrasyonlar: `integration/`, `clients/`, ya da `libs/` altındaki harici API client'larını inceleyin. Çoğu zaman `*.env` veya `config/*.yaml` ile birlikte konfigüre edilir.

## Proje-özgü konvansiyonlar (keşif odaklı yönergeler)
- Değişiklik yapmadan önce `README.md` ve `.github/workflows/*` dosyalarını kontrol edin; CI scriptleri, lint ve test komutlarını buradan öğrenin.
- Commit mesajları / PR başlıkları için proje spesifik bir şablon görürseniz onu takip edin. Bulamazsanız aşağıdaki kısa kuralları kullanın: `feat(scope): kısa açıklama` / `fix(scope): kısa açıklama`.

## Güvenlik ve gizli bilgiler
- Repo içinde `.env` veya `secrets` içeren dosyalar bulunuyorsa hiç değiştirmeyin veya içlerinden veri çıkarmayın.
- Bir dosyada açıkça API anahtarı ya da parola görürseniz (ör. `AKIA` veya `-----BEGIN PRIVATE KEY-----`), değişikliği durdurup insan geliştiriciye bildirin.

## Değişiklik yapma kuralları (ajan politikası)
1. Önce kapsamlı bir arama yapın ve değişikliklerin etkisini sınırlayın (tek commit, küçük PR).
2. Test komutları varsa yerel olarak çalıştırın; test yoksa en azından statik analiz / linter komutlarını koşturun (örn. `npm run lint`, `flake8`, `mypy`).
3. Yeni bağımlılık eklemeden önce `package.json`/`pyproject.toml`'ı kontrol edin; paket eklemeyi önermeden önce insan onayı alın.

## Değişiklik örnekleri (nasıl commit/PR oluşturulur)
- Küçük düzeltme (dokümantasyon): tek commit, `docs:` veya `chore` ile başlık.
- Kod değişikliği: kısa açıklama, hangi dosyaların etkilendiği, hangi testlerin çalıştırıldığı.

## Eğer repo boşsa veya belirsizse
Bu depo şu an için keşif sırasında agent tarafından otomatik değişiklik yapmaya uygun görünmüyor (özel kod/manifest bulunamadı). Yapılacaklar:
- Kullanıcıya hangi dil/çerçeve beklediğini sor (örnek: "Bu projede frontend mi, backend mi yoksa model eğitimi mi olacak?").
- Varsa örnek dizin yapısını, başlamamız gereken ana dosyaları belirtin.

## Sonuç ve iletişim
Bu dosya yerel keşif komutları ve ilk adımlar için bir şablon sağlar. Lütfen eksik veya projeye özgü kuralları iletin; dosyayı ihtiyaca göre hemen güncellerim.
