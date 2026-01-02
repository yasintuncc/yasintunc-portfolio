import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import Fade from "react-reveal/Fade";

// EmailJS environment variables (client-side için NEXT_PUBLIC_ prefix gerekli)
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "yasin.tncc22@gmail.com";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [submitMessage, setSubmitMessage] = useState("");

  // Form validasyonu
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "İsim gereklidir";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email gereklidir";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Geçerli bir email adresi giriniz";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Konu gereklidir";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Mesaj gereklidir";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Mesaj en az 10 karakter olmalıdır";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form gönderme - EmailJS direkt client-side'dan
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // EmailJS yapılandırma kontrolü
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setSubmitStatus("error");
      setSubmitMessage("EmailJS yapılandırılmamış. Lütfen .env.local dosyasını kontrol edin.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage("");

    try {
      // EmailJS API çağrısı (client-side'dan)
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_email: CONTACT_EMAIL,
          },
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setSubmitMessage("Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      } else {
        const errorText = await response.text();
        throw new Error(`Email gönderme hatası: ${response.status}`);
      }
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : "Bir hata oluştu. Lütfen daha sonra tekrar deneyin veya doğrudan email gönderin."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Hata varsa temizle
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <Fade bottom duration={2000}>
      <section className="section section-lg">
        <Container>
          <Row className="justify-content-center">
            <Col lg="13" xl="10">
              <div className="text-center mb-4">
                <h2 className="display-4 text-info mb-2" style={{ fontWeight: 600 }}>
                  COMMUNİCATİON
                </h2>
                <p className="lead mb-0" style={{ color: "#6c757d", fontSize: "1.1rem" }}></p>
              </div>

              {submitStatus && (
                <Alert
                  color={submitStatus === "success" ? "success" : "danger"}
                  className="mb-4"
                  style={{ borderRadius: "10px", border: "none" }}
                  toggle={() => setSubmitStatus(null)}
                >
                  {submitMessage}
                </Alert>
              )}

              <div
                className="card shadow-lg border-0 contact-form-card"
                style={{
                  borderRadius: "15px",
                  padding: "4rem",
                }}
              >
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md="6">
                      <FormGroup className="mb-3">
                        <Label
                          for="name"
                          className="mb-2"
                          style={{
                            fontWeight: 600,
                            fontSize: "0.95rem",
                            color: "#495057",
                          }}
                        >
                          Ad Soyad <span className="text-danger"></span>
                        </Label>
                        <Input
                          type="text"
                          name="name"
                          id="name"
                          value={formData.name}
                          onChange={handleChange}
                          invalid={!!errors.name}
                          placeholder="Adınız Soyadınız"
                          style={{
                            backgroundColor: "#ffffff",
                            border: "2px solid #dee2e6",
                            borderRadius: "8px",
                            padding: "0.75rem 1rem",
                            fontSize: "0.95rem",
                            color: "#212529",
                            transition: "all 0.3s ease",
                            fontWeight: 500,
                          }}
                          className="contact-form-input"
                          onFocus={e => {
                            e.target.style.backgroundColor = "#ffffff";
                            e.target.style.borderColor = "#11CDEF";
                            e.target.style.boxShadow = "0 0 0 0.2rem rgba(17, 205, 239, 0.25)";
                          }}
                          onBlur={e => {
                            e.target.style.backgroundColor = "#f8f9fa";
                            e.target.style.borderColor = "#e9ecef";
                            e.target.style.boxShadow = "none";
                          }}
                        />
                        {errors.name && (
                          <div className="text-danger small mt-1" style={{ fontSize: "0.85rem" }}>
                            {errors.name}
                          </div>
                        )}
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup className="mb-3">
                        <Label
                          for="email"
                          className="mb-2"
                          style={{
                            fontWeight: 600,
                            fontSize: "0.95rem",
                            color: "#495057",
                          }}
                        >
                          Email<span className="text-danger"></span>
                        </Label>
                        <Input
                          type="email"
                          name="email"
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                          invalid={!!errors.email}
                          placeholder="email@example.com"
                          style={{
                            backgroundColor: "#ffffff",
                            border: "2px solid #dee2e6",
                            borderRadius: "8px",
                            padding: "0.75rem 1rem",
                            fontSize: "0.95rem",
                            color: "#212529",
                            transition: "all 0.3s ease",
                            fontWeight: 500,
                          }}
                          className="contact-form-input"
                          onFocus={e => {
                            e.target.style.backgroundColor = "#ffffff";
                            e.target.style.borderColor = "#11CDEF";
                            e.target.style.boxShadow = "0 0 0 0.2rem rgba(17, 205, 239, 0.25)";
                          }}
                          onBlur={e => {
                            e.target.style.backgroundColor = "#f8f9fa";
                            e.target.style.borderColor = "#e9ecef";
                            e.target.style.boxShadow = "none";
                          }}
                        />
                        {errors.email && (
                          <div className="text-danger small mt-1" style={{ fontSize: "0.85rem" }}>
                            {errors.email}
                          </div>
                        )}
                      </FormGroup>
                    </Col>
                  </Row>

                  <FormGroup className="mb-3">
                    <Label
                      for="subject"
                      className="mb-2"
                      style={{
                        fontWeight: 600,
                        fontSize: "0.95rem",
                        color: "#495057",
                      }}
                    >
                      Konu<span className="text-danger"></span>
                    </Label>
                    <Input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      invalid={!!errors.subject}
                      placeholder="Mesajınızın konusu"
                      style={{
                        backgroundColor: "#f8f9fa",
                        border: "1px solid #e9ecef",
                        borderRadius: "8px",
                        padding: "0.75rem 1rem",
                        fontSize: "0.95rem",
                        color: "#495057",
                        transition: "all 0.3s ease",
                      }}
                      className="contact-form-input"
                      onFocus={e => {
                        e.target.style.backgroundColor = "#ffffff";
                        e.target.style.borderColor = "#11CDEF";
                        e.target.style.boxShadow = "0 0 0 0.2rem rgba(17, 205, 239, 0.25)";
                      }}
                      onBlur={e => {
                        e.target.style.backgroundColor = "#f8f9fa";
                        e.target.style.borderColor = "#e9ecef";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                    {errors.subject && (
                      <div className="text-danger small mt-1" style={{ fontSize: "0.85rem" }}>
                        {errors.subject}
                      </div>
                    )}
                  </FormGroup>

                  <FormGroup className="mb-4">
                    <Label
                      for="message"
                      className="mb-2"
                      style={{
                        fontWeight: 600,
                        fontSize: "0.95rem",
                        color: "#495057",
                      }}
                    >
                      Mesaj<span className="text-danger"></span>
                    </Label>
                    <Input
                      type="textarea"
                      name="message"
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      invalid={!!errors.message}
                      placeholder="Mesajınızı buraya yazın..."
                      style={{
                        backgroundColor: "#ffffff",
                        border: "2px solid #dee2e6",
                        borderRadius: "8px",
                        padding: "0.75rem 1rem",
                        fontSize: "0.95rem",
                        color: "#212529",
                        transition: "all 0.3s ease",
                        resize: "vertical",
                        fontWeight: 500,
                      }}
                      className="contact-form-input"
                      onFocus={e => {
                        e.target.style.backgroundColor = "#ffffff";
                        e.target.style.borderColor = "#11CDEF";
                        e.target.style.boxShadow = "0 0 0 0.2rem rgba(17, 205, 239, 0.25)";
                      }}
                      onBlur={e => {
                        e.target.style.backgroundColor = "#f8f9fa";
                        e.target.style.borderColor = "#e9ecef";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                    {errors.message && (
                      <div className="text-danger small mt-1" style={{ fontSize: "0.85rem" }}>
                        {errors.message}
                      </div>
                    )}
                  </FormGroup>

                  <div className="text-center">
                    <Button
                      color="info"
                      size="lg"
                      type="submit"
                      disabled={isSubmitting}
                      className="px-5 animated-button"
                      style={{
                        borderRadius: "8px",
                        fontWeight: 600,
                        padding: "0.75rem 2.5rem",
                        fontSize: "1rem",
                        boxShadow: "0 4px 6px rgba(17, 205, 239, 0.3)",
                        transition: "all 0.3s ease",
                        position: "relative",
                        overflow: "hidden",
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.transform = "translateY(-3px) scale(1.05)";
                        e.currentTarget.style.boxShadow = "0 8px 16px rgba(17, 205, 239, 0.4)";
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.transform = "translateY(0) scale(1)";
                        e.currentTarget.style.boxShadow = "0 4px 6px rgba(17, 205, 239, 0.3)";
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm mr-2" />
                          Gönderiliyor...
                        </>
                      ) : (
                        <>
                          <i className="fa fa-paper-plane mr-2" />
                          Mesaj Gönder
                        </>
                      )}
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fade>
  );
};

export default ContactForm;
