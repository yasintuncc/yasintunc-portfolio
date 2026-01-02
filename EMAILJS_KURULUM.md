# EmailJS Kurulum Rehberi - Adım Adım

## 📧 EmailJS ile Email Gönderme

İletişim formunun çalışması için EmailJS yapılandırması gereklidir. İşte detaylı kurulum rehberi:

---

## 🚀 ADIM 1: EmailJS Hesabı Oluşturma

1. **EmailJS sitesine gidin:** [https://www.emailjs.com/](https://www.emailjs.com/)
2. **"Sign Up" butonuna tıklayın**
3. **Ücretsiz hesap oluşturun:**
   - Email adresinizle kayıt olun
   - Şifre belirleyin
   - Email doğrulaması yapın

---

## 📮 ADIM 2: Email Servisi Yapılandırma

1. **EmailJS Dashboard'a giriş yapın**
2. **Sol menüden "Email Services" seçin**
3. **"Add New Service" butonuna tıklayın**
4. **Gmail seçin** (veya tercih ettiğiniz servis)
5. **Gmail bağlantısı:**
   - "Connect Account" butonuna tıklayın
   - Gmail hesabınızla giriş yapın
   - İzinleri onaylayın
6. **Service ID'yi kopyalayın:**
   - Oluşturulan servisin yanındaki "Service ID" değerini kopyalayın
   - Örnek: `service_abc123xyz`
   - ⚠️ **BU DEĞERİ NOT EDİN!**

---

## 📝 ADIM 3: Email Template Oluşturma

1. **Sol menüden "Email Templates" seçin**
2. **"Create New Template" butonuna tıklayın**
3. **Template içeriğini şu şekilde doldurun:**

### Template Ayarları:

**Template Name:** `Portfolio Contact Form`

**Subject (Konu):**

```
Portfolio İletişim Formu: {{subject}}
```

**Content (İçerik):**

```
Yeni bir iletişim formu mesajı aldınız!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Gönderen: {{from_name}}
Email: {{from_email}}
Konu: {{subject}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mesaj:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Bu mesaj portfolio web sitenizden gönderilmiştir.
```

4. **"Save" butonuna tıklayın**
5. **Template ID'yi kopyalayın:**
   - Template'in yanındaki "Template ID" değerini kopyalayın
   - Örnek: `template_xyz789abc`
   - ⚠️ **BU DEĞERİ NOT EDİN!**

---

## 🔑 ADIM 4: Public Key Alma

1. **Sol menüden "Account" seçin**
2. **"General" sekmesine gidin**
3. **"Public Key" bölümünü bulun**
4. **Public Key değerini kopyalayın**
   - Örnek: `abcdefghijklmnop`
   - ⚠️ **BU DEĞERİ NOT EDİN!**

---

## ⚙️ ADIM 5: Environment Variables Ekleme

1. **Proje kök dizinine gidin** (`yasintunc-portfolio` klasörü)
2. **`.env.local` dosyası oluşturun** (yoksa)
3. **Aşağıdaki içeriği ekleyin ve değerleri doldurun:**

```env
# EmailJS Yapılandırması
EMAILJS_SERVICE_ID=service_abc123xyz
EMAILJS_TEMPLATE_ID=template_xyz789abc
EMAILJS_PUBLIC_KEY=abcdefghijklmnop

# Alıcı Email (Form mesajlarının gönderileceği email)
CONTACT_EMAIL=yasin.tncc22@gmail.com
```

**Örnek:**

- `EMAILJS_SERVICE_ID` → ADIM 2'de aldığınız Service ID
- `EMAILJS_TEMPLATE_ID` → ADIM 3'te aldığınız Template ID
- `EMAILJS_PUBLIC_KEY` → ADIM 4'te aldığınız Public Key
- `CONTACT_EMAIL` → Email'lerin gönderileceği adres (zaten dolu)

---

## 🧪 ADIM 6: Test Etme

1. **Terminal'de projeyi durdurun** (Ctrl+C)
2. **Projeyi yeniden başlatın:**
   ```bash
   npm run dev
   ```
3. **Tarayıcıda projeyi açın:** `http://localhost:3000`
4. **İletişim formuna gidin** (sayfanın altında)
5. **Formu doldurun:**
   - İsim: Test İsmi
   - Email: Kendi email'iniz
   - Konu: Test Mesajı
   - Mesaj: Bu bir test mesajıdır
6. **"Mesaj Gönder" butonuna tıklayın**
7. **Email'inizi kontrol edin:**
   - `yasin.tncc22@gmail.com` adresine email gelmiş olmalı
   - Gelen kutusunu ve spam klasörünü kontrol edin

---

## ✅ Başarı Kontrolü

Eğer her şey doğru yapılandırıldıysa:

- ✅ Form gönderildiğinde "Mesajınız başarıyla gönderildi!" mesajı görünür
- ✅ Email'iniz `yasin.tncc22@gmail.com` adresine gelir
- ✅ Terminal'de hata mesajı görünmez

---

## ❌ Sorun Giderme

### Email gelmiyor mu?

1. **Environment variables kontrolü:**

   - `.env.local` dosyasının doğru yerde olduğundan emin olun
   - Değerlerin doğru kopyalandığından emin olun
   - Projeyi yeniden başlattığınızdan emin olun

2. **EmailJS Dashboard kontrolü:**

   - Service'in aktif olduğunu kontrol edin
   - Template'in doğru yapılandırıldığını kontrol edin
   - Public Key'in doğru olduğunu kontrol edin

3. **Spam klasörünü kontrol edin:**

   - Email spam klasörüne düşmüş olabilir

4. **Terminal loglarını kontrol edin:**
   - Hata mesajı var mı bakın
   - Konsol çıktısını inceleyin

### Form gönderilmiyor mu?

1. **Tarayıcı konsolunu açın** (F12)
2. **Network sekmesine gidin**
3. **Formu gönderin**
4. **`/api/contact` isteğini kontrol edin**
5. **Hata mesajını okuyun**

---

## 🔧 Alternatif: EmailJS Olmadan Test

EmailJS yapılandırılmadan da form çalışır:

- ✅ Form validasyonu çalışır
- ✅ Kullanıcıya başarı mesajı gösterilir
- ❌ Email gönderilmez
- 📝 Mesajlar terminal konsoluna loglanır

Terminal'de şu şekilde görünür:

```
İletişim Formu Mesajı: {
  name: 'Test İsmi',
  email: 'test@example.com',
  subject: 'Test Konu',
  message: 'Test mesajı'
}
```

---

## 📝 Önemli Notlar

- ✅ EmailJS ücretsiz planında **ayda 200 email** limiti vardır
- ✅ Production'da mutlaka environment variables kullanın
- ✅ `.env.local` dosyasını **Git'e commit etmeyin** (zaten .gitignore'da olmalı)
- ✅ EmailJS servisini düzenli olarak kontrol edin
- ✅ Template'i istediğiniz gibi özelleştirebilirsiniz

---

## 🎉 Tamamlandı!

EmailJS kurulumu tamamlandığında, iletişim formu tam olarak çalışacak ve email'leriniz otomatik olarak gönderilecektir!

Sorun yaşarsanız, yukarıdaki "Sorun Giderme" bölümüne bakın veya EmailJS dokümantasyonunu inceleyin.
