const translations = {
    uk: {
        nav_home: "Головна",
        nav_services: "Послуги",
        nav_prices: "Тарифи",
        nav_faq: "FAQ",
        nav_contacts: "Контакти",
        nav_start: "Розпочати",

        pricing_title: "Тарифи Venqis",
        pricing_subtitle: "Оберіть окрему послугу або готовий пакет для стабільного росту та активності у соціальних мережах.",

        tab_social: "Соцмережі",

        price_from: "від",
        currency_uah: "грн",
        popular_badge: "Найпопулярніший",
        add_to_chat: "Додати в чат",

        single_services_title: "Окремі послуги",
        table_service: "Послуга",
        table_platform: "Платформа",
        table_price: "Стартова ціна",
        table_time: "Запуск",

        maps_text: "Для локального бізнесу, довіри та репутації компанії",
        maps_price_unit: "грн / 100 відгуків",
        maps_item_1: "Підвищення локальної довіри",
        maps_item_2: "Плавне збільшення активності",
        maps_item_3: "Підтримка рейтингу компанії",
        discuss_launch: "Обговорити запуск",

        pricing_cta_title: "Не знаєте, який пакет обрати?",
        pricing_cta_text: "Підберемо рішення для вашої платформи та цілей.",
        write_telegram: "Написати в Telegram",

        footer_text: "Платформа для безпечного та ефективного росту в соціальних мережах.",
        footer_nav: "Навігація",
        footer_platforms: "Платформи",
        footer_company: "Компанія",
        footer_about: "Про нас",
        footer_terms: "Умови використання",
        footer_privacy: "Політика конфіденційності",
        footer_telegram_title: "Звʼязок у Telegram",
        footer_telegram_text: "Швидка підтримка та консультація"
    },

    en: {
        nav_home: "Home",
        nav_services: "Services",
        nav_prices: "Pricing",
        nav_faq: "FAQ",
        nav_contacts: "Contacts",
        nav_start: "Start",

        pricing_title: "Venqis Pricing",
        pricing_subtitle: "Choose a single service or a ready-made package for stable growth and social media activity.",

        tab_social: "Social Media",

        price_from: "from",
        currency_uah: "UAH",
        popular_badge: "Most popular",
        add_to_chat: "Add to chat",

        single_services_title: "Single Services",
        table_service: "Service",
        table_platform: "Platform",
        table_price: "Starting price",
        table_time: "Launch",

        maps_text: "For local business, trust and company reputation",
        maps_price_unit: "UAH / 100 reviews",
        maps_item_1: "Increase local trust",
        maps_item_2: "Smooth activity growth",
        maps_item_3: "Support company rating",
        discuss_launch: "Discuss launch",

        pricing_cta_title: "Not sure which package to choose?",
        pricing_cta_text: "We will help select the best option for your platform and goals.",
        write_telegram: "Write on Telegram",

        footer_text: "A platform for safe and effective social media growth.",
        footer_nav: "Navigation",
        footer_platforms: "Platforms",
        footer_company: "Company",
        footer_about: "About us",
        footer_terms: "Terms of use",
        footer_privacy: "Privacy policy",
        footer_telegram_title: "Telegram contact",
        footer_telegram_text: "Fast support and consultation"
    }
};

const pricingData = {
    social: {
        uk: {
            plans: {
                start: {
                    title: "START",
                    subtitle: "Для першого тесту",
                    price: "149",
                    items: [
                        "500 лайків",
                        "100 підписників",
                        "Поступове виконання",
                        "Підтримка запуску"
                    ]
                },
                boost: {
                    title: "BOOST",
                    subtitle: "Найкращий баланс росту",
                    price: "349",
                    items: [
                        "1500 лайків",
                        "300 підписників",
                        "30 коментарів",
                        "Пріоритетна підтримка"
                    ]
                },
                pro: {
                    title: "PRO",
                    subtitle: "Для активного масштабування",
                    price: "699",
                    items: [
                        "3500 лайків",
                        "700 підписників",
                        "70 коментарів",
                        "Індивідуальний підхід"
                    ]
                }
            },
            services: [
                ["Підписники", "Instagram / TikTok / Facebook", "від 25 грн / 100", "від 30 хв"],
                ["Лайки", "Instagram / TikTok / Facebook", "від 10 грн / 100", "від 10 хв"],
                ["Коментарі", "Instagram / TikTok / Facebook", "від 120 грн / 100", "від 1 год"]
            ]
        },
        en: {
            plans: {
                start: {
                    title: "START",
                    subtitle: "For a first test",
                    price: "149",
                    items: [
                        "500 likes",
                        "100 followers",
                        "Gradual delivery",
                        "Launch support"
                    ]
                },
                boost: {
                    title: "BOOST",
                    subtitle: "Best growth balance",
                    price: "349",
                    items: [
                        "1500 likes",
                        "300 followers",
                        "30 comments",
                        "Priority support"
                    ]
                },
                pro: {
                    title: "PRO",
                    subtitle: "For active scaling",
                    price: "699",
                    items: [
                        "3500 likes",
                        "700 followers",
                        "70 comments",
                        "Individual approach"
                    ]
                }
            },
            services: [
                ["Followers", "Instagram / TikTok / Facebook", "from 25 UAH / 100", "from 30 min"],
                ["Likes", "Instagram / TikTok / Facebook", "from 10 UAH / 100", "from 10 min"],
                ["Comments", "Instagram / TikTok / Facebook", "from 120 UAH / 100", "from 1 hour"]
            ]
        }
    },

    telegram: {
        uk: {
            plans: {
                start: {
                    title: "START",
                    subtitle: "Для старту каналу",
                    price: "199",
                    items: ["300 підписників", "300 реакцій", "300 лайків", "Поступове виконання"]
                },
                boost: {
                    title: "BOOST",
                    subtitle: "Для активнішого росту",
                    price: "399",
                    items: ["700 підписників", "700 реакцій", "700 лайків", "Пріоритетний запуск"]
                },
                pro: {
                    title: "PRO",
                    subtitle: "Для масштабування Telegram",
                    price: "799",
                    items: ["1500 підписників", "1500 реакцій", "1500 лайків", "50 коментарів"]
                }
            },
            services: [
                ["Підписники", "Telegram", "від 40 грн / 100", "від 30 хв"],
                ["Реакції", "Telegram", "від 15 грн / 100", "від 10 хв"],
                ["Лайки", "Telegram", "від 15 грн / 100", "від 10 хв"],
                ["Коментарі", "Telegram", "від 150 грн / 100", "від 1 год"]
            ]
        },
        en: {
            plans: {
                start: {
                    title: "START",
                    subtitle: "For channel launch",
                    price: "199",
                    items: ["300 subscribers", "300 reactions", "300 likes", "Gradual delivery"]
                },
                boost: {
                    title: "BOOST",
                    subtitle: "For stronger growth",
                    price: "399",
                    items: ["700 subscribers", "700 reactions", "700 likes", "Priority launch"]
                },
                pro: {
                    title: "PRO",
                    subtitle: "For Telegram scaling",
                    price: "799",
                    items: ["1500 subscribers", "1500 reactions", "1500 likes", "50 comments"]
                }
            },
            services: [
                ["Subscribers", "Telegram", "from 40 UAH / 100", "from 30 min"],
                ["Reactions", "Telegram", "from 15 UAH / 100", "from 10 min"],
                ["Likes", "Telegram", "from 15 UAH / 100", "from 10 min"],
                ["Comments", "Telegram", "from 150 UAH / 100", "from 1 hour"]
            ]
        }
    },

    youtube: {
        uk: {
            plans: {
                start: {
                    title: "START",
                    subtitle: "Для першого відео",
                    price: "249",
                    items: ["500 лайків", "100 підписників", "Поступове виконання", "Підтримка запуску"]
                },
                boost: {
                    title: "BOOST",
                    subtitle: "Для росту каналу",
                    price: "599",
                    items: ["1000 лайків", "300 підписників", "30 коментарів", "Пріоритетний запуск"]
                },
                pro: {
                    title: "PRO",
                    subtitle: "Для активного YouTube-росту",
                    price: "1199",
                    items: ["2500 лайків", "700 підписників", "70 коментарів", "Індивідуальний підхід"]
                }
            },
            services: [
                ["Лайки", "YouTube", "від 20 грн / 100", "від 20 хв"],
                ["Підписники", "YouTube", "від 60 грн / 100", "від 1 год"],
                ["Коментарі", "YouTube", "від 180 грн / 100", "від 1 год"]
            ]
        },
        en: {
            plans: {
                start: {
                    title: "START",
                    subtitle: "For a first video",
                    price: "249",
                    items: ["500 likes", "100 subscribers", "Gradual delivery", "Launch support"]
                },
                boost: {
                    title: "BOOST",
                    subtitle: "For channel growth",
                    price: "599",
                    items: ["1000 likes", "300 subscribers", "30 comments", "Priority launch"]
                },
                pro: {
                    title: "PRO",
                    subtitle: "For active YouTube growth",
                    price: "1199",
                    items: ["2500 likes", "700 subscribers", "70 comments", "Individual approach"]
                }
            },
            services: [
                ["Likes", "YouTube", "from 20 UAH / 100", "from 20 min"],
                ["Subscribers", "YouTube", "from 60 UAH / 100", "from 1 hour"],
                ["Comments", "YouTube", "from 180 UAH / 100", "from 1 hour"]
            ]
        }
    },

    maps: {
        uk: {
            plans: {
                start: {
                    title: "LOCAL",
                    subtitle: "Для малого бізнесу",
                    price: "800",
                    items: ["100 відгуків", "Плавне виконання", "Підтримка рейтингу", "Консультація"]
                },
                boost: {
                    title: "TRUST",
                    subtitle: "Для активного росту довіри",
                    price: "1499",
                    items: ["200 відгуків", "Поступове виконання", "Рекомендації по профілю", "Пріоритетна підтримка"]
                },
                pro: {
                    title: "BRAND",
                    subtitle: "Для локального бренду",
                    price: "2999",
                    items: ["400 відгуків", "Розширений запуск", "Підтримка репутації", "Індивідуальний підхід"]
                }
            },
            services: [
                ["Відгуки", "Google Maps", "від 800 грн / 100", "індивідуально"]
            ]
        },
        en: {
            plans: {
                start: {
                    title: "LOCAL",
                    subtitle: "For small business",
                    price: "800",
                    items: ["100 reviews", "Smooth delivery", "Rating support", "Consultation"]
                },
                boost: {
                    title: "TRUST",
                    subtitle: "For active trust growth",
                    price: "1499",
                    items: ["200 reviews", "Gradual delivery", "Profile recommendations", "Priority support"]
                },
                pro: {
                    title: "BRAND",
                    subtitle: "For a local brand",
                    price: "2999",
                    items: ["400 reviews", "Extended launch", "Reputation support", "Individual approach"]
                }
            },
            services: [
                ["Reviews", "Google Maps", "from 800 UAH / 100", "individual"]
            ]
        }
    }
};

let currentLanguage = localStorage.getItem("language") || "uk";
let currentCategory = "social";

const langButtons = document.querySelectorAll(".lang-btn");
const tabButtons = document.querySelectorAll(".pricing-tab");
const servicesBody = document.querySelector(".services-body");

function setLanguage(language) {
    currentLanguage = language;

    document.querySelectorAll("[data-lang]").forEach((element) => {
        const key = element.dataset.lang;
        const translation = translations?.[language]?.[key];

        if (translation !== undefined) {
            element.textContent = translation;
        }
    });

    langButtons.forEach((button) => {
        button.classList.toggle("active", button.dataset.langCode === language);
    });

    localStorage.setItem("language", language);
    renderPricing();
}

function renderPricing() {
    const data = pricingData[currentCategory][currentLanguage];

    Object.entries(data.plans).forEach(([planKey, plan]) => {
        document.querySelector(`[data-plan-title="${planKey}"]`).textContent = plan.title;
        document.querySelector(`[data-plan-subtitle="${planKey}"]`).textContent = plan.subtitle;
        document.querySelector(`[data-plan-price="${planKey}"]`).textContent = plan.price;

        const list = document.querySelector(`[data-plan-list="${planKey}"]`);
        list.innerHTML = "";

        plan.items.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = item;
            list.appendChild(li);
        });
    });

    servicesBody.innerHTML = "";

    data.services.forEach((service) => {
        const row = document.createElement("div");
        row.className = "services-row";

        service.forEach((cell) => {
            const span = document.createElement("span");
            span.textContent = cell;
            row.appendChild(span);
        });

        servicesBody.appendChild(row);
    });
}

langButtons.forEach((button) => {
    button.addEventListener("click", () => {
        setLanguage(button.dataset.langCode);
    });
});

tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
        currentCategory = button.dataset.category;

        tabButtons.forEach((tab) => {
            tab.classList.toggle("active", tab === button);
        });

        renderPricing();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    setLanguage(currentLanguage);
});

