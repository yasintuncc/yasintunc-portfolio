# EmailJS Template Ayarları - Portfolio İçin

## 📧 Email Template Yapılandırması

EmailJS template'inizi portfolio'nuz için şu şekilde yapılandırın:

---

## 📝 Subject (Konu) Alanı

**Şu anki:** `Contact Us: {{title}}`

**Değiştirin:**
```
Portfolio İletişim Formu: {{subject}}
```

**Açıklama:** `{{subject}}` değişkeni, formdan gelen konu bilgisini içerir.

---

## 📄 Content (İçerik) Alanı

**Şu anki:** `A message by {{name}} has been received...`

**Değiştirin (Desktop):**
```
Yeni bir iletişim formu mesajı aldınız!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Gönderen: {{from_name}}
📧 Email: {{from_email}}
📌 Konu: {{subject}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💬 Mesaj:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Bu mesaj portfolio web sitenizden (yasintunc-portfolio) gönderilmiştir.
En kısa sürede geri dönüş yapmanız önerilir.
```

**HTML Versiyonu (Daha güzel görünüm için):**
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
  <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
    <h2 style="color: #11CDEF; margin-bottom: 20px;">📧 Yeni İletişim Formu Mesajı</h2>
    
    <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
      <p style="margin: 5px 0;"><strong>👤 Gönderen:</strong> {{from_name}}</p>
      <p style="margin: 5px 0;"><strong>📧 Email:</strong> {{from_email}}</p>
      <p style="margin: 5px 0;"><strong>📌 Konu:</strong> {{subject}}</p>
    </div>
    
    <div style="margin-bottom: 20px;">
      <h3 style="color: #34495e; margin-bottom: 10px;">💬 Mesaj:</h3>
      <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #11CDEF; border-radius: 3px;">
        <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">{{message}}</p>
      </div>
    </div>
    
    <div style="border-top: 1px solid #e9ecef; padding-top: 15px; margin-top: 20px; font-size: 12px; color: #6c757d;">
      <p style="margin: 0;">Bu mesaj portfolio web sitenizden (yasintunc-portfolio) gönderilmiştir.</p>
      <p style="margin: 5px 0 0 0;">En kısa sürede geri dönüş yapmanız önerilir.</p>
    </div>
  </div>
</div>
```

---

## 📮 Email Ayarları (Sağ Panel)

### To Email (Alıcı)
```
yasin.tncc22@gmail.com
```
✅ Bu zaten doğru!

### From Name (Gönderen İsmi)
```
Portfolio Web Sitesi
```
veya
```
{{from_name}}
```
**Not:** `{{from_name}}` kullanırsanız, formdan gelen isim gönderen olarak görünür.

### From Email (Gönderen Email)
✅ **"Use Default Email Address" seçeneğini işaretli bırakın**
- Bu, EmailJS'in bağladığınız Gmail hesabını kullanmasını sağlar
- Manuel email girmenize gerek yok

### Reply To (Yanıt Adresi)
```
{{from_email}}
```
**Önemli:** Bu sayede email'e yanıt verdiğinizde, doğrudan formu dolduran kişiye gider.

### Bcc ve Cc
- Boş bırakabilirsiniz
- İsterseniz kendi email'inizi Bcc'ye ekleyebilirsiniz (kopya almak için)

---

## ✅ Kontrol Listesi

Template'i kaydetmeden önce kontrol edin:

- [ ] Subject: `Portfolio İletişim Formu: {{subject}}`
- [ ] Content: Yukarıdaki içerikten birini kullanın
- [ ] To Email: `yasin.tncc22@gmail.com`
- [ ] From Name: `Portfolio Web Sitesi` veya `{{from_name}}`
- [ ] From Email: "Use Default Email Address" işaretli
- [ ] Reply To: `{{from_email}}`
- [ ] Template kaydedildi
- [ ] Template ID kopyalandı

---

## 🔄 Değişken Eşleştirmesi

API'den gönderilen değişkenler:
- `{{from_name}}` → Formdan gelen isim
- `{{from_email}}` → Formdan gelen email
- `{{subject}}` → Formdan gelen konu
- `{{message}}` → Formdan gelen mesaj

Bu değişkenler template'de kullanılabilir.

---

## 🎨 İsteğe Bağlı: Daha Güzel Tasarım

HTML template kullanarak daha profesyonel görünümlü email'ler oluşturabilirsiniz. Yukarıdaki HTML versiyonunu kullanabilirsiniz.

---

## 📝 Notlar

- Template'i kaydettikten sonra Template ID'yi kopyalayın
- Template ID'yi `.env.local` dosyasına ekleyin
- Test email göndererek kontrol edin

