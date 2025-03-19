export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }
  
    const { name, email, message, recaptchaToken } = JSON.parse(req.body);
  
    // Verify reCAPTCHA with Google
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;
  
    const googleResponse = await fetch(verificationUrl, { method: "POST" });
    const result = await googleResponse.json();
  
    if (!result.success) {
      return res.status(400).json({ error: "reCAPTCHA verification failed." });
    }
  
    // Store in Google Sheets (if using Google Apps Script)
    await fetch("YOUR_GOOGLE_APPS_SCRIPT_URL", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
      headers: { "Content-Type": "application/json" },
    });
  
    return res.status(200).json({ message: "Message sent successfully!" });
  }
  