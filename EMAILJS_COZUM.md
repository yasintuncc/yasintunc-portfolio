# EmailJS Sorunu Çözümü - Email Gelmeme Sorunu

## 🔴 Şu Anki Durum

Terminal'de şu mesajı görüyorsunuz:
```
İletişim Formu Mesajı: {
  name: 'mehmet',
  email: 'mehmet@gmail.com',
  ...
}
```

Bu, EmailJS yapılandırılmadığı için email'lerin **sadece konsola loglandığını** gösterir. Email gönderilmiyor!

---

## ✅ Çözüm: EmailJS Yapılandırması

Email'lerin Gmail'inize gelmesi için EmailJS değerlerini eklemeniz gerekiyor.

### ADIM 1: EmailJS Değerlerini Alın

1. **EmailJS Dashboard'a gidin:** https://www.emailjs.com/
2. **3 değeri kopyalayın:**
   - Service ID (Email Services'den)
   - Template ID (Email Templates'den)
   - Public Key (Account > General'den)

### ADIM 2: .env.local Dosyasını Güncelleyin

1. **VS Code'da `yasintunc-portfolio` klasöründe `.env.local` dosyasını açın**
2. **Şu şekilde doldurun:**

```env
EMAILJS_SERVICE_ID=service_gerçek_değeriniz_buraya
EMAILJS_TEMPLATE_ID=template_gerçek_değeriniz_buraya
EMAILJS_PUBLIC_KEY=gerçek_public_key_buraya
CONTACT_EMAIL=yasin.tncc22@gmail.com
```

**ÖNEMLİ:** 
- `service_gerçek_değeriniz_buraya` → EmailJS'den aldığınız Service ID ile değiştirin
- `template_gerçek_değeriniz_buraya` → EmailJS'den aldığınız Template ID ile değiştirin
- `gerçek_public_key_buraya` → EmailJS'den aldığınız Public Key ile değiştirin

### ADIM 3: Projeyi Yeniden Başlatın

1. **Terminal'de projeyi durdurun:** `Ctrl+C`
2. **Projeyi yeniden başlatın:**
   ```bash
   npm run dev
   ```

### ADIM 4: Test Edin

1. **İletişim formunu doldurun**
2. **Mesaj gönderin**
3. **Terminal'de artık log görünmemeli** (email gönderildi demektir)
4. **Gmail'inizi kontrol edin:**
   - Gelen kutusu
   - Spam klasörü

---

## ✅ Başarı Kontrolü

EmailJS doğru yapılandırıldığında:

### Terminal'de:
- ❌ Artık "İletişim Formu Mesajı" logu görünmez
- ✅ Sadece normal Next.js logları görünür

### Email'de:
- ✅ `yasin.tncc22@gmail.com` adresine email gelir
- ✅ Email içeriğinde form bilgileri görünür

---

## ❌ Hala Email Gelmiyor mu?

### Kontrol Listesi:

1. **.env.local dosyası doğru yerde mi?**
   - `yasintunc-portfolio/.env.local` (proje kök dizininde)
   - Dosya adı `.env.local` olmalı (nokta ile başlıyor)

2. **Değerler doğru mu?**
   - Service ID `service_` ile başlamalı
   - Template ID `template_` ile başlamalı
   - Public Key boşluk içermemeli
   - Tırnak işareti kullanmayın

3. **Proje yeniden başlatıldı mı?**
   - `.env.local` değişiklikleri için projeyi yeniden başlatmak gerekir
   - Terminal'de `Ctrl+C` yapıp `npm run dev` çalıştırın

4. **EmailJS Dashboard kontrolü:**
   - Service aktif mi?
   - Template doğru yapılandırılmış mı?
   - Public Key doğru mu?

5. **Spam klasörünü kontrol edin:**
   - Email spam klasörüne düşmüş olabilir

---

## 📧 EmailJS Yapılandırması Detayları

### Email Template Ayarları:

**To Email:** `yasin.tncc22@gmail.com` (zaten doğru)

**Reply To:** `{{from_email}}` (formu dolduran kişinin email'i)

**Template İçeriği:**
```
Yeni bir iletişim formu mesajı aldınız!

Gönderen: {{from_name}}
Email: {{from_email}}
Konu: {{subject}}

Mesaj:
{{message}}
```

---

## 🎯 Özet

1. ✅ EmailJS değerlerini alın (Service ID, Template ID, Public Key)
2. ✅ `.env.local` dosyasına ekleyin
3. ✅ Projeyi yeniden başlatın (`npm run dev`)
4. ✅ Test edin
5. ✅ Email'inizi kontrol edin

**EmailJS yapılandırıldıktan sonra email'ler otomatik olarak Gmail'inize gelecektir!**

