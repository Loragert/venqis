const translations = {
    uk: {
        nav_home: "Головна",
        nav_services: "Послуги",
        nav_prices: "Ціни",
        nav_contacts: "Контакти",
        nav_start: "Почати",
        hero_badge: "Інструменти для розвитку соціальних мереж",
        hero_text: "Допомагаємо брендам, авторам та бізнесу масштабувати цифрову активність та посилювати онлайн-присутність.",
        hero_btn_start: "Розпочати",
        hero_btn_more: "Дізнатися більше",
        stat_clients: "Клієнтів",
        stat_orders: "Виконаних замовлень",
        stat_satisfied: "Задоволених клієнтів",
        stat_support: "Підтримка",
        platforms_title: "Популярні платформи",
        platform_instagram: "Підписники, лайки, перегляди та Reels",
        platform_tiktok: "Підписники, лайки, перегляди, коментарі та репости",
        platform_telegram: "Підписники в канал, перегляди постів, реакції",
        platform_youtube: "Підписники, перегляди, лайки, коментарі та годининики",
        platform_maps: "Відгуки, рейтинги та локальна популярність",
        btn_order: "Замовити",
        results_title: "Результат, який видно",
        result_before: "До",
        result_after: "Після",
        result_followers: "Підписників",
        result_views: "Переглядів",
        result_growth: "Ріст",
        cta_title: "Створюйте сильніший діджитал-бренд разом з Venqis",
        cta_text: "Ми допоможемо вам масштабувати присутність у соціальних мережах та досягати нових вершин разом.",
        cta_btn: "Запустити ріст"
    },
    en: {
        nav_home: "Home",
        nav_services: "Services",
        nav_prices: "Pricing",
        nav_contacts: "Contacts",
        nav_start: "Start",
        hero_badge: "Tools for social media growth",
        hero_text: "We help brands, creators and businesses scale digital activity and strengthen online presence.",
        hero_btn_start: "Get Started",
        hero_btn_more: "Learn More",
        stat_clients: "Clients",
        stat_orders: "Orders Completed",
        stat_satisfied: "Satisfied Clients",
        stat_support: "Support",
        platforms_title: "Popular Platforms",
        platform_instagram: "Followers, likes, views and Reels",
        platform_tiktok: "Followers, likes, views, comments and shares",
        platform_telegram: "Channel subscribers, post views, reactions",
        platform_youtube: "Subscribers, views, likes, comments and watch hours",
        platform_maps: "Reviews, ratings and local popularity",
        btn_order: "Order",
        results_title: "Visible Results",
        result_before: "Before",
        result_after: "After",
        result_followers: "Followers",
        result_views: "Views",
        result_growth: "Growth",
        cta_title: "Build a stronger digital brand with Venqis",
        cta_text: "We will help you scale your social media presence and reach new heights together.",
        cta_btn: "Launch Growth"
    }
};

function setLanguage(lang) {
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang-code') === lang) {
            btn.classList.add('active');
        }
    });
    
    localStorage.setItem('language', lang);
}

// Вішаємо обробники на кнопки
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang-code');
        setLanguage(lang);
    });
});

// При завантаженні сторінки ставимо збережену мову або UA
const savedLang = localStorage.getItem('language') || 'uk';
setLanguage(savedLang);
