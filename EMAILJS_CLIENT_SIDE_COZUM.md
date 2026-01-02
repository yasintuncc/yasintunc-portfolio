# EmailJS Client-Side Çözümü

## 🔴 Sorun

EmailJS server-side (API route) üzerinden çağrılamaz. Hata:
```
403 API calls are disabled for non-browser applications
```

## ✅ Çözüm

EmailJS'i **client-side** (tarayıcı) üzerinden kullanmamız gerekiyor.

---

## 🔧 Yapılan Değişiklikler

### 1. ContactForm Component Güncellendi

EmailJS artık direkt frontend'den çağrılıyor (API route yerine).

### 2. Environment Variables Değişikliği

**ÖNEMLİ:** Client-side'da kullanmak için environment variables'lara `NEXT_PUBLIC_` prefix'i eklenmelidir!

---

## ⚙️ .env.local Dosyasını Güncelleyin

`.env.local` dosyanızı şu şekilde güncelleyin:

### ❌ ESKİ (Server-side için):
```env
EMAILJS_SERVICE_ID=service_xxxxx
EMAILJS_TEMPLATE_ID=template_xxxxx
EMAILJS_PUBLIC_KEY=your_public_key
CONTACT_EMAIL=yasin.tncc22@gmail.com
```

### ✅ YENİ (Client-side için):
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_CONTACT_EMAIL=yasin.tncc22@gmail.com
```

**ÖNEMLİ:** 
- Her değişkenin başına `NEXT_PUBLIC_` ekleyin
- Değerler aynı kalacak (sadece prefix eklenecek)

---

## 📝 Adım Adım

### 1. .env.local Dosyasını Açın

VS Code'da `yasintunc-portfolio/.env.local` dosyasını açın.

### 2. Değişken İsimlerini Güncelleyin

Her satırın başına `NEXT_PUBLIC_` ekleyin:

**Örnek:**
```env
# Önceki
EMAILJS_SERVICE_ID=service_abc123

# Yeni
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
```

### 3. Tüm Değişkenleri Güncelleyin

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_gerçek_değeriniz
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_gerçek_değeriniz
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=gerçek_public_key
NEXT_PUBLIC_CONTACT_EMAIL=yasin.tncc22@gmail.com
```

### 4. Dosyayı Kaydedin

`Ctrl+S` ile kaydedin.

### 5. Projeyi Yeniden Başlatın

Terminal'de:
```bash
Ctrl+C  (projeyi durdurun)
npm run dev  (yeniden başlatın)
```

### 6. Test Edin

1. İletişim formunu doldurun
2. Mesaj gönderin
3. Email'inizin geldiğini kontrol edin

---

## ✅ Başarı Kontrolü

EmailJS doğru yapılandırıldığında:

- ✅ Terminal'de hata görünmez
- ✅ Form gönderildiğinde "Mesajınız başarıyla gönderildi!" mesajı görünür
- ✅ Gmail'inize email gelir
- ✅ Email içeriğinde form bilgileri görünür

---

## ❌ Hala Çalışmıyorsa

### Kontrol Listesi:

1. **.env.local dosyası güncellendi mi?**
   - [ ] `NEXT_PUBLIC_` prefix'i eklendi mi?
   - [ ] Tüm değerler doğru mu?

2. **Proje yeniden başlatıldı mı?**
   - [ ] Terminal'de `Ctrl+C` yapıldı mı?
   - [ ] `npm run dev` çalıştırıldı mı?

3. **EmailJS Dashboard kontrolü:**
   - [ ] Service ID doğru mu?
   - [ ] Template ID doğru mu?
   - [ ] Public Key doğru mu?

4. **Tarayıcı konsolu kontrolü:**
   - [ ] F12 ile tarayıcı konsolunu açın
   - [ ] Hata mesajı var mı kontrol edin

---

## 🎯 Özet

1. ✅ `.env.local` dosyasındaki değişkenlere `NEXT_PUBLIC_` prefix'i ekleyin
2. ✅ Dosyayı kaydedin
3. ✅ Projeyi yeniden başlatın
4. ✅ Test edin

**Artık EmailJS client-side'dan çalışacak ve email'ler Gmail'inize gelecek!**

