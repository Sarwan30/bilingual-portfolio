import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
      translation: {
        home: "Home",
        about: "About Me",
        services: "Projects",
        contact: "Contact Me",
        switch_language: "🇬🇧 English / 🇯🇵 日本語",
        get_in_touch: "Get in Touch",
        reach_out_message: "Feel free to reach out via email or phone.",
        send_message: "Send a Message",
        your_name: "Your Name",
        your_email: "Your Email",
        your_message: "Your Message",
        message_sent: "Message Sent Successfully!",
        message_failed: "Failed to send message!",
        copied: "copied to clipboard!",
        rights_reserved: "All Rights Reserved."
      }
    },
    jp: {
      translation: {
        home: "ホーム",
        about: "私について",
        services: "プロジェクト",
        contact: "お問い合わせ",
        switch_language: "🇯🇵 日本語 / 🇬🇧 English",
        get_in_touch: "お問い合わせ",
        reach_out_message: "メールまたは電話でお気軽にご連絡ください。",
        send_message: "メッセージを送る",
        your_name: "あなたの名前",
        your_email: "あなたのメール",
        your_message: "あなたのメッセージ",
        message_sent: "メッセージが送信されました！",
        message_failed: "メッセージの送信に失敗しました！",
        copied: "クリップボードにコピーしました！",
        rights_reserved: "すべての権利予約済み。"
      }
    }
  };
  

// Load the saved language or fallback to 'en'
const savedLanguage = localStorage.getItem("appLanguage") || "en";

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage, // Use the stored language
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
