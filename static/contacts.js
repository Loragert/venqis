const translations = {
    uk: {
        nav_home: "Головна",
        nav_services: "Послуги",
        nav_prices: "Тарифи",
        nav_faq: "FAQ",
        nav_contacts: "Контакти",
        nav_start: "Розпочати",

        contact_title: "Звʼязок з Venqis",
        contact_subtitle: "Ми завжди на звʼязку та готові допомогти вам із запуском, консультацією або вибором рішення для вашої платформи.",

        contact_telegram_title: "Telegram підтримка",
        contact_telegram_text: "Швидкий звʼязок та консультація",
        contact_online: "Онлайн",
        contact_write: "Написати",

        contact_email_text: "Для бізнес-запитів та співпраці",
        contact_send_email: "Надіслати лист",

        contact_instagram_text: "Новини, оновлення та кейси",
        contact_go: "Перейти",

        contact_time_title: "Час відповіді",
        contact_time_text: "Середній час відповіді підтримки",

        form_title: "Напишіть нам",
        form_name: "Ваше імʼя",
        form_name_placeholder: "Введіть ваше імʼя",
        form_contact: "Telegram або Email",
        form_contact_placeholder: "username або email@example.com",
        form_platform: "Платформа",
        form_platform_placeholder: "Виберіть платформу",
        form_message: "Повідомлення",
        form_message_placeholder: "Опишіть ваше питання або завдання...",
        form_submit: "Надіслати повідомлення",
        form_note: "Ми не передаємо ваші дані третім сторонам.",

        social_title: "Ми в соціальних мережах",

        cta_title: "Потрібна допомога з запуском?",
        cta_text: "Підберемо оптимальне рішення для вашої платформи та цілей.",
        cta_btn: "Написати в Telegram",

        footer_text: "Venqis — платформа для зростання в соціальних мережах. Продуманий, аналітичний та автоматизований підхід до успіху.",
        footer_product: "Продукт",
        footer_services: "Послуги",
        footer_prices: "Тарифи",
        footer_options: "Можливості",
        footer_partners: "Партнерська програма",
        footer_updates: "Оновлення",

        footer_company: "Компанія",
        footer_about: "Про нас",
        footer_blog: "Блог",
        footer_cases: "Кейси",
        footer_reviews: "Відгуки",
        footer_contacts: "Контакти",

        footer_support: "Підтримка",
        footer_faq: "FAQ",
        footer_instructions: "Інструкції",
        footer_status: "Статус сервісів",
        footer_contact_us: "Звʼязатися з нами",

        footer_legal: "Правова інформація",
        footer_terms: "Умови використання",
        footer_privacy: "Політика конфіденційності",
        footer_refund: "Політика повернень",
        footer_offer: "Публічна оферта",

        footer_copyright: "© 2026 Venqis. Усі права захищені."
    },

    en: {
        nav_home: "Home",
        nav_services: "Services",
        nav_prices: "Pricing",
        nav_faq: "FAQ",
        nav_contacts: "Contacts",
        nav_start: "Start",

        contact_title: "Contact Venqis",
        contact_subtitle: "We are always available and ready to help you with launch, consultation, or choosing the right solution for your platform.",

        contact_telegram_title: "Telegram Support",
        contact_telegram_text: "Fast contact and consultation",
        contact_online: "Online",
        contact_write: "Message us",

        contact_email_text: "For business inquiries and partnerships",
        contact_send_email: "Send email",

        contact_instagram_text: "News, updates and cases",
        contact_go: "Open",

        contact_time_title: "Response time",
        contact_time_text: "Average support response time",

        form_title: "Write to us",
        form_name: "Your name",
        form_name_placeholder: "Enter your name",
        form_contact: "Telegram or Email",
        form_contact_placeholder: "username or email@example.com",
        form_platform: "Platform",
        form_platform_placeholder: "Choose a platform",
        form_message: "Message",
        form_message_placeholder: "Describe your question or task...",
        form_submit: "Send message",
        form_note: "We do not share your data with third parties.",

        social_title: "Find us on social media",

        cta_title: "Need help with launch?",
        cta_text: "We will help choose the best solution for your platform and goals.",
        cta_btn: "Write on Telegram",

        footer_text: "Venqis is a platform for social media growth. A thoughtful, analytical and automated approach to success.",
        footer_product: "Product",
        footer_services: "Services",
        footer_prices: "Pricing",
        footer_options: "Features",
        footer_partners: "Partner program",
        footer_updates: "Updates",

        footer_company: "Company",
        footer_about: "About us",
        footer_blog: "Blog",
        footer_cases: "Cases",
        footer_reviews: "Reviews",
        footer_contacts: "Contacts",

        footer_support: "Support",
        footer_faq: "FAQ",
        footer_instructions: "Guides",
        footer_status: "Service status",
        footer_contact_us: "Contact us",

        footer_legal: "Legal information",
        footer_terms: "Terms of use",
        footer_privacy: "Privacy policy",
        footer_refund: "Refund policy",
        footer_offer: "Public offer",

        footer_copyright: "© 2026 Venqis. All rights reserved."
    }
};

const langButtons = document.querySelectorAll(".lang-btn");

function setLanguage(language) {
    document.querySelectorAll("[data-lang]").forEach((element) => {
        const key = element.dataset.lang;
        const translation = translations?.[language]?.[key];

        if (translation !== undefined) {
            element.textContent = translation;
        }
    });

    document.querySelectorAll("[data-placeholder]").forEach((element) => {
        const key = element.dataset.placeholder;
        const translation = translations?.[language]?.[key];

        if (translation !== undefined) {
            element.placeholder = translation;
        }
    });

    langButtons.forEach((button) => {
        button.classList.toggle("active", button.dataset.langCode === language);
    });

    localStorage.setItem("language", language);
}

langButtons.forEach((button) => {
    button.addEventListener("click", () => {
        setLanguage(button.dataset.langCode);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem("language") || "uk";

    setLanguage(savedLanguage);
});

document.querySelector(".contact-form").addEventListener("submit", (event) => {
    event.preventDefault();
});
