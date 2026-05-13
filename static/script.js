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
        platform_facebook: "Підписники сторінки, лайки, репости та коментарі",
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
        cta_btn: "Запустити ріст",
        feature_fast_title: 'Швидкий результат',
        feature_fast_text: 'Перші результати вже через 24 години',
        feature_safe_title: 'Безпечно',
        feature_safe_text: 'Живі користувачі та надійні методи просування',
        feature_effective_title: 'Ефективно',
        feature_effective_text: 'Комплексний підхід для максимального росту',
        feature_support_title: 'Підтримка 24/7',
        feature_support_text: 'Ми завжди на зв\'язку та готові допомогти'
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
        platform_facebook: "Page followers, likes, shares and comments",
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
        cta_btn: "Launch Growth",
        feature_fast_title: 'Fast Results',
        feature_fast_text: 'First results within 24 hours',
        feature_safe_title: 'Safe',
        feature_safe_text: 'Real users and reliable promotion methods',
        feature_effective_title: 'Effective',
        feature_effective_text: 'Comprehensive approach for maximum growth',
        feature_support_title: '24/7 Support',
        feature_support_text: 'We are always in touch and ready to help'
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
