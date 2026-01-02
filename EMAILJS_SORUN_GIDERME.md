# EmailJS Sorun Giderme - Adım Adım

## 🔴 Terminal'de Hala Log Görünüyorsa

Terminal'de şu mesajı görüyorsanız:
```
İletişim Formu Mesajı: { ... }
```

Bu, EmailJS environment variables'larının **okunmadığını** gösterir.

---

## ✅ ADIM 1: .env.local Dosyasını Kontrol Edin

### Dosya Konumu:
- ✅ Doğru: `yasintunc-portfolio/.env.local`
- ❌ Yanlış: `yasintunc-portfolio/pages/.env.local`
- ❌ Yanlış: `yasintunc-portfolio/components/.env.local`

### Dosya İçeriği Kontrolü:

`.env.local` dosyanız şu şekilde olmalı:

```env
EMAILJS_SERVICE_ID=service_gerçek_değeriniz
EMAILJS_TEMPLATE_ID=template_gerçek_değeriniz
EMAILJS_PUBLIC_KEY=gerçek_public_key
CONTACT_EMAIL=yasin.tncc22@gmail.com
```

### ⚠️ ÖNEMLİ KURALLAR:

1. **Tırnak işareti kullanmayın:**
   - ❌ `EMAILJS_SERVICE_ID="service_abc123"`
   - ✅ `EMAILJS_SERVICE_ID=service_abc123`

2. **Boşluk olmamalı:**
   - ❌ `EMAILJS_SERVICE_ID = service_abc123`
   - ✅ `EMAILJS_SERVICE_ID=service_abc123`

3. **Satır sonunda boşluk olmamalı:**
   - Değerlerin sonunda gereksiz boşluk olmamalı

4. **Yorum satırları:**
   - `#` ile başlayan satırlar yorum olarak kabul edilir

---

## ✅ ADIM 2: Projeyi Tamamen Yeniden Başlatın

### Önemli:
`.env.local` dosyası değiştikten sonra **mutlaka** projeyi yeniden başlatmanız gerekir!

1. **Terminal'de projeyi durdurun:**
   - `Ctrl+C` tuşlarına basın
   - Projenin tamamen durduğundan emin olun

2. **Projeyi yeniden başlatın:**
   ```bash
   npm run dev
   ```

3. **Terminal'de şu mesajı görmelisiniz:**
   ```
   ready - started server on 0.0.0.0:3000
   ```

---

## ✅ ADIM 3: Debug Loglarını Kontrol Edin

Form gönderdiğinizde terminal'de şu logları görmelisiniz:

### EmailJS Yapılandırılmışsa:
```
🔍 EmailJS Yapılandırma Kontrolü:
Service ID: ✅ Var
Template ID: ✅ Var
Public Key: ✅ Var
📧 EmailJS ile email gönderiliyor...
📬 EmailJS Yanıtı: 200 ...
✅ Email başarıyla gönderildi!
```

### EmailJS Yapılandırılmamışsa:
```
🔍 EmailJS Yapılandırma Kontrolü:
Service ID: ❌ Yok
Template ID: ❌ Yok
Public Key: ❌ Yok
⚠️ EmailJS yapılandırılmamış! İletişim Formu Mesajı: { ... }
```

---

## ❌ Hala Çalışmıyorsa - Kontrol Listesi

### 1. Dosya Konumu
- [ ] `.env.local` dosyası `yasintunc-portfolio` klasöründe mi?
- [ ] Dosya adı tam olarak `.env.local` mi? (nokta ile başlıyor)

### 2. Dosya İçeriği
- [ ] Tüm değerler doğru mu? (service_xxx, template_xxx, public_key)
- [ ] Tırnak işareti yok mu?
- [ ] Boşluk yok mu? (`=` işaretinin etrafında)
- [ ] Her satırda sadece bir değişken var mı?

### 3. Proje Yeniden Başlatma
- [ ] Proje tamamen durduruldu mu? (`Ctrl+C`)
- [ ] Proje yeniden başlatıldı mı? (`npm run dev`)
- [ ] Terminal'de "ready" mesajı göründü mü?

### 4. EmailJS Dashboard
- [ ] Service ID doğru mu? (`service_` ile başlıyor mu?)
- [ ] Template ID doğru mu? (`template_` ile başlıyor mu?)
- [ ] Public Key doğru mu? (boşluk yok mu?)

---

## 🔧 Manuel Test

Terminal'de şu komutu çalıştırarak environment variables'ları kontrol edebilirsiniz:

```bash
node -e "console.log(require('dotenv').config({path:'.env.local'})); console.log('SERVICE:', process.env.EMAILJS_SERVICE_ID);"
```

Veya Next.js içinde test etmek için:

1. `pages/api/test-env.ts` dosyası oluşturun:
```typescript
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.json({
    serviceId: process.env.EMAILJS_SERVICE_ID || "YOK",
    templateId: process.env.EMAILJS_TEMPLATE_ID || "YOK",
    publicKey: process.env.EMAILJS_PUBLIC_KEY || "YOK",
  });
}
```

2. Tarayıcıda `http://localhost:3000/api/test-env` adresine gidin
3. Değerlerin göründüğünü kontrol edin

---

## 📧 Email Gelmiyor mu?

### EmailJS yapılandırıldı ama email gelmiyor:

1. **Spam klasörünü kontrol edin**
2. **EmailJS Dashboard'da "Email History" bölümüne bakın:**
   - Email gönderildi mi?
   - Hata var mı?
3. **Terminal'deki hata mesajlarını kontrol edin:**
   - `❌ EmailJS API Hatası:` mesajı var mı?
4. **EmailJS Template ayarlarını kontrol edin:**
   - "To Email" doğru mu? (`yasin.tncc22@gmail.com`)
   - Template içeriği doğru mu?

---

## 🎯 Hızlı Çözüm

Eğer hala çalışmıyorsa:

1. **.env.local dosyasını silin**
2. **Yeniden oluşturun** (yukarıdaki formata göre)
3. **Değerleri tek tek kontrol edin**
4. **Projeyi yeniden başlatın**
5. **Test edin**

---

## ✅ Başarı Kriterleri

EmailJS doğru çalıştığında:

- ✅ Terminal'de "✅ Email başarıyla gönderildi!" mesajı görünür
- ✅ Terminal'de "İletişim Formu Mesajı" logu görünmez
- ✅ Gmail'inize email gelir
- ✅ Email içeriğinde form bilgileri görünür

