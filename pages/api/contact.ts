import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
  success: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed", success: false });
  }

  const { name, email, subject, message } = req.body;

  // Basit validasyon
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ 
      message: "Tüm alanlar doldurulmalıdır", 
      success: false 
    });
  }

  // Email validasyonu
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      message: "Geçerli bir email adresi giriniz", 
      success: false 
    });
  }

  try {
    // EmailJS kullanarak email gönderme
    // Not: EmailJS servis ID ve template ID'yi environment variables'dan alın
    const serviceId = process.env.EMAILJS_SERVICE_ID || "";
    const templateId = process.env.EMAILJS_TEMPLATE_ID || "";
    const publicKey = process.env.EMAILJS_PUBLIC_KEY || "";

    // Debug: Environment variables kontrolü
    console.log("🔍 EmailJS Yapılandırma Kontrolü:");
    console.log("Service ID:", serviceId ? "✅ Var" : "❌ Yok");
    console.log("Template ID:", templateId ? "✅ Var" : "❌ Yok");
    console.log("Public Key:", publicKey ? "✅ Var" : "❌ Yok");

    if (!serviceId || !templateId || !publicKey) {
      // EmailJS yapılandırılmamışsa, sadece log yap
      console.log("⚠️ EmailJS yapılandırılmamış! İletişim Formu Mesajı:", {
        name,
        email,
        subject,
        message,
      });

      return res.status(200).json({
        message: "Mesajınız alındı! (EmailJS yapılandırılmamış, konsola loglandı)",
        success: true,
      });
    }

    // EmailJS API çağrısı
    console.log("📧 EmailJS ile email gönderiliyor...");
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          from_name: name,
          from_email: email,
          subject: subject,
          message: message,
          to_email: process.env.CONTACT_EMAIL || "yasin.tncc22@gmail.com", // Alıcı email
        },
      }),
    });

    const responseData = await response.text();
    console.log("📬 EmailJS Yanıtı:", response.status, responseData);

    if (response.ok) {
      console.log("✅ Email başarıyla gönderildi!");
      return res.status(200).json({
        message: "Mesajınız başarıyla gönderildi!",
        success: true,
      });
    } else {
      console.error("❌ EmailJS API Hatası:", response.status, responseData);
      throw new Error(`EmailJS API hatası: ${response.status} - ${responseData}`);
    }
  } catch (error) {
    console.error("Email gönderme hatası:", error);
    return res.status(500).json({
      message: "Bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
      success: false,
    });
  }
}

