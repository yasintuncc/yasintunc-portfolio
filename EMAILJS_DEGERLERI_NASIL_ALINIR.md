# EmailJS Değerlerini Nasıl Alınır? - Adım Adım

## 📋 İhtiyacınız Olan 3 Değer

1. **EMAILJS_SERVICE_ID** → Email Services'den
2. **EMAILJS_TEMPLATE_ID** → Email Templates'den  
3. **EMAILJS_PUBLIC_KEY** → Account Settings'den

---

## 🔍 ADIM 1: Service ID'yi Alma

1. **EmailJS Dashboard'a giriş yapın:** https://www.emailjs.com/
2. **Sol menüden "Email Services" seçin**
3. **Oluşturduğunuz servisi bulun** (Gmail servisi)
4. **Service ID'yi kopyalayın:**
   - Servisin yanında veya içinde "Service ID" yazısını bulun
   - Örnek: `service_abc123xyz`
   - Bu değeri kopyalayın

**Görünüm:**
```
Email Services
└── Gmail
    └── Service ID: service_abc123xyz  ← BUNU KOPYALAYIN
```

---

## 📝 ADIM 2: Template ID'yi Alma

1. **Sol menüden "Email Templates" seçin**
2. **Oluşturduğunuz template'i bulun** (Portfolio Contact Form)
3. **Template ID'yi kopyalayın:**
   - Template'in yanında veya içinde "Template ID" yazısını bulun
   - Örnek: `template_xyz789abc`
   - Bu değeri kopyalayın

**Görünüm:**
```
Email Templates
└── Portfolio Contact Form
    └── Template ID: template_xyz789abc  ← BUNU KOPYALAYIN
```

---

## 🔑 ADIM 3: Public Key'i Alma

1. **Sol menüden "Account" seçin**
2. **"General" sekmesine gidin**
3. **"Public Key" bölümünü bulun**
4. **Public Key değerini kopyalayın:**
   - Örnek: `abcdefghijklmnop123456`
   - Bu değeri kopyalayın

**Görünüm:**
```
Account > General
└── Public Key: abcdefghijklmnop123456  ← BUNU KOPYALAYIN
```

---

## 📝 ADIM 4: .env.local Dosyasına Yerleştirme

1. **VS Code'da `yasintunc-portfolio` klasörünü açın**
2. **`.env.local` dosyasını açın** (yoksa oluşturun)
3. **Değerleri şu şekilde yerleştirin:**

```env
# EmailJS Service ID (Email Services'den aldığınız)
EMAILJS_SERVICE_ID=service_abc123xyz

# EmailJS Template ID (Email Templates'den aldığınız)
EMAILJS_TEMPLATE_ID=template_xyz789abc

# EmailJS Public Key (Account > General'den aldığınız)
EMAILJS_PUBLIC_KEY=abcdefghijklmnop123456

# Alıcı Email (Zaten doğru, değiştirmeyin)
CONTACT_EMAIL=yasin.tncc22@gmail.com
```

### ⚠️ ÖNEMLİ:
- `service_abc123xyz` → Kendi Service ID'nizle değiştirin
- `template_xyz789abc` → Kendi Template ID'nizle değiştirin
- `abcdefghijklmnop123456` → Kendi Public Key'inizle değiştirin
- `yasin.tncc22@gmail.com` → Bu zaten doğru, değiştirmeyin

---

## ✅ Örnek Dolu Dosya

EmailJS'den değerleri aldıktan sonra `.env.local` dosyanız şöyle görünmelidir:

```env
# EmailJS Yapılandırması
EMAILJS_SERVICE_ID=service_8k7j9m2n
EMAILJS_TEMPLATE_ID=template_5x6y7z8w
EMAILJS_PUBLIC_KEY=user_AbCdEfGhIjKlMnOp
CONTACT_EMAIL=yasin.tncc22@gmail.com
```

**Not:** Yukarıdaki değerler örnektir, siz kendi değerlerinizi kullanacaksınız!

---

## 🧪 ADIM 5: Test Etme

1. **Dosyayı kaydedin** (Ctrl+S)
2. **Terminal'de projeyi durdurun** (Ctrl+C)
3. **Projeyi yeniden başlatın:**
   ```bash
   npm run dev
   ```
4. **İletişim formunu test edin**
5. **Email'inizin geldiğini kontrol edin**

---

## ❌ Sorun Giderme

### Değerleri bulamıyorum:
- EmailJS dashboard'da sol menüyü kontrol edin
- Her bölümde "ID" veya "Key" yazan yerleri arayın
- Bazen değerler küçük yazıyla gösterilir

### Dosya kaydedilmiyor:
- Dosya adının `.env.local` olduğundan emin olun (nokta ile başlıyor)
- VS Code'da "Save" butonuna tıklayın
- Dosya `yasintunc-portfolio` klasöründe olmalı

### Proje çalışmıyor:
- Projeyi yeniden başlattığınızdan emin olun
- Terminal'de hata mesajı var mı kontrol edin
- Değerlerin doğru kopyalandığından emin olun (boşluk olmamalı)

---

## 📸 Görsel Yardım

EmailJS dashboard'da değerler genellikle şu yerlerde görünür:

**Service ID:**
- Email Services sayfasında servisin yanında
- Veya servise tıklayınca detay sayfasında

**Template ID:**
- Email Templates sayfasında template'in yanında
- Veya template'e tıklayınca detay sayfasında

**Public Key:**
- Account > General sayfasında
- "Public Key" başlığı altında

---

## ✅ Kontrol Listesi

- [ ] Service ID kopyalandı ve `.env.local`'e eklendi
- [ ] Template ID kopyalandı ve `.env.local`'e eklendi
- [ ] Public Key kopyalandı ve `.env.local`'e eklendi
- [ ] CONTACT_EMAIL doğru (yasin.tncc22@gmail.com)
- [ ] Dosya kaydedildi
- [ ] Proje yeniden başlatıldı
- [ ] Test email gönderildi
- [ ] Email geldi ✅

---

## 🎉 Tamamlandı!

Tüm değerleri doğru yerleştirdikten sonra iletişim formu tam olarak çalışacaktır!

