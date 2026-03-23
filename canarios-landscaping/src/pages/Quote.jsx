import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";

export default function QuoteDebug() {
  const { t } = useTranslation();
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Initialize EmailJS once
  useEffect(() => {
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    console.log("Initializing EmailJS with public key:", PUBLIC_KEY);
    emailjs.init(PUBLIC_KEY);
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setErrorMessage("");

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    // Log form data
    const formData = new FormData(form.current);
    for (let pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }

    try {
      const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current);
      console.log("EmailJS success:", result.text);
      setSuccess(true);
    } catch (error) {
      console.error("EmailJS error:", error);
      setSuccess(false);

      // Display detailed error
      if (error?.text) setErrorMessage(error.text);
      else if (error?.status) setErrorMessage(`Status ${error.status}: ${error.body || "No body"}`);
      else setErrorMessage(JSON.stringify(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-800 text-white">
      <div className="bg-black/60 p-10 rounded-2xl w-full max-w-xl">

        <h1 className="text-3xl font-bold mb-6 text-center">
          {t("get_quote")}
        </h1>

        <form ref={form} onSubmit={sendEmail} className="space-y-4">

          <input
            name="name"
            placeholder={t("name")}
            className="w-full p-3 text-black rounded"
            required
          />

          <input
            name="phone"
            placeholder={t("phone")}
            className="w-full p-3 text-black rounded"
            required
          />

          <textarea
            name="message"
            placeholder={t("message")}
            className="w-full p-3 text-black rounded"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded text-white ${
              loading ? "bg-gray-500" : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {loading ? "Sending..." : t("request_quote")}
          </button>

        </form>

        {/* Success / Error messages */}
        {success === true && (
          <p className="mt-4 text-green-400 font-semibold text-center">
            ✅ {t("message_sent_success")}
          </p>
        )}
        {success === false && (
          <div className="mt-4 text-center">
            <p className="text-red-400 font-semibold">
                {t("error_sending_message")}
            </p>
            <pre className="text-xs text-red-200 bg-black/30 p-2 mt-2 rounded break-words">
              {errorMessage}
            </pre>
          </div>
        )}

      </div>
    </div>
  );
}