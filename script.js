function setupSearch() {

}

function setupBackToTopButton() {

}

document.addEventListener("DOMContentLoaded", () => {
    setupSmoothScroll();
    setupBackToTopButton();
    setupDynamicArticles();
    setupSearch();
    setupGoogleTranslate();
});

// === Плавная прокрутка ===
function setupSmoothScroll() {
    const nav = document.querySelector('nav');
    nav?.addEventListener('click', (e) => {
        const anchor = e.target.closest('a');
        if (!anchor) return;

        const targetId = anchor.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            e.preventDefault();
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Учитываем высоту меню
                behavior: 'smooth',
            });
        }
    });
}

// Создаём кнопку
const buttonToTop = document.createElement('button');
buttonToTop.textContent = 'Наверх';
buttonToTop.style.position = 'fixed';
buttonToTop.style.bottom = '20px';
buttonToTop.style.right = '20px';
buttonToTop.style.padding = '10px 20px';
buttonToTop.style.backgroundColor = '#1f3c5d';
buttonToTop.style.color = '#f4e7d3';
buttonToTop.style.border = 'none';
buttonToTop.style.borderRadius = '5px';
buttonToTop.style.cursor = 'pointer';
buttonToTop.style.display = 'none'; // Изначально скрыта
document.body.appendChild(buttonToTop);

// Логика отображения
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        buttonToTop.style.display = 'block';
    } else {
        buttonToTop.style.display = 'none';
    }
});

// Прокрутка наверх
buttonToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// === Динамическое добавление статей ===
function setupDynamicArticles() {
    const articles = [
        { title: 'Париж', summary: 'Не только Эйфелева башня, но и вкусы французской кухни.', link: '#' },
        { title: 'Дагестан', summary: 'Дагестан пленяет.', link: '#' },
        { title: 'Прага', summary: 'Каждый уголок пропитан историей.', link: '#' },
    ];

    function renderArticles(articles) {

    }

    renderArticles(articles);
}
// Массив с данными о постах
const posts = [
    {
        title: "Моя кулинарная прогулка по Парижу",
        description: "Париж — это не только Эйфелева башня, но и вкусы французской кухни. В этом путешествии я нашел скрытые жемчужины: кошары с сыром и грибами, багеты, о которых мечтает каждый гурман, и французский суп, который согреет ваше сердце.",
        link: "details-paris.html",
        image: "images/paris.jpg",
        date: "2024-01-15"
    },
    {
        title: "Вкусы Барселоны",
        description: "Барселона — это город ярких красок, где средиземноморский стиль жизни сочетается с современной архитектурой. Здесь я попробовал ароматную паэлью на шумной улице Лас-Рамблас, хрустящие тапас в маленьком семейном ресторане и нежный крем-брюле с апельсиновым соусом, подаваемый в уютной таверне у Готического квартала.",
        link: "details-barcelona.html",
        image: "images/barcelona.jpg",
        date: "2024-03-15"
    },

    {
        title: "Кулинарные приключения в Токио",
        description: "Токио — город контрастов, где традиции встречаются с современностью. Здесь я попробовал суши в укромном переулке, горячий торияки и нежный кусок, который растаял на языке.",
        link: "details-tokyo.html",
        image: "images/tokyo.jpg",
        date: "2024-03-05"
    },
    {
        title: "Прогулка по Норвегии: кухня и фьорды",
        description: "Норвегия — страна, где природа вдохновляет, а кухня удивляет. От лютефиска до коричневого сыра — я открыл для себя простые, но изысканные блюда, которые идеально дополняют виды на фьорды и северное сияние.",
        link: "details-norway.html",
        image: "images/norway.jpg",
        date: "2024-03-20"
    },
    {
        title: "Путешествие по Тбилиси: гастрономический рай",
        description: "Тбилиси встречает гостей не только древними улочками, но и вкуснейшей кухней. Мачапури, хачапури и лобио стали для меня настоящими открытиями.",
        link: "details-tbilisi.html",
        image: "images/tbilisi.jpg",
        date: "2024-04-01"
    },
    {
        title: "Гастрономические открытия Дагестана",
        description: "Дагестан пленяет не только своей природой, но и кухней. Попробуйте хинкал с чесночным соусом, чуду с зеленью и сыром или сладкий урбеч. Путешествие сюда — это праздник вкуса и гостеприимства, которые останутся с вами навсегда.",
        link: "details-dagestan.html",
        image: "images/dagestan.jpg",
        date: "2024-05-10"
    },
    {
        title: "Гастрономическое путешествие по Мехико",
        description: "Мехико — город, где кулинарные традиции переплетаются с культурным наследием. На утреннем рынке я попробовал тако с пряным мясом и сальсой, потом насладился энчиладами с сырным соусом и острым перцем чили, а на ужин попробовал гуакомоле, приготовленный прямо передо мной, с кукурузными чипсами.",
        link: "details-mexico.html",
        image: "images/mexico.jpg",
        date: "2024-04-20"
    },
    {
        title: "Прогулка по Праге: кухня и история",
        description: "Прага — город, где каждый уголок пропитан историей, а кухня дарит тепло и уют. Здесь я попробовал традиционный гуляш в хлебной чаше, хрустящий трдельник с сахарной корочкой и ароматный сливовый кнедлик, который напомнил мне о домашнем уюте. Все это — на фоне великолепного Карлова моста.",
        link: "details-prague.html",
        image: "images/prague.jpg",
        date: "2024-04-25"
    }
    ];
// Функция для генерации постов
function generatePosts(posts) {
    const container = document.getElementById('blog-posts');
    container.innerHTML = ""; // Очистка контейнера перед добавлением

    // Сортировка постов по дате (сначала самые свежие)
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    posts.forEach(post => {
        const article = document.createElement('article');
        article.classList.add('post', 'card');

        // Добавление изображения
        const image = document.createElement('img');
        image.src = post.image;
        image.alt = post.title;
        image.classList.add('post-image');

        const title = document.createElement('h2');
        const link = document.createElement('a');
        link.href = post.link;
        link.textContent = post.title;
        title.appendChild(link);

        const description = document.createElement('p');
        description.textContent = post.description;
const readMore = document.createElement('a');
        readMore.href = post.link;
        readMore.textContent = "Читать дальше...";
        readMore.classList.add('read-more');

        article.appendChild(image);
        article.appendChild(title);
        article.appendChild(description);
        article.appendChild(readMore);

        container.appendChild(article);
    });
}

// Генерация постов при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    generatePosts(posts);
});

// Генерация всех постов при загрузке
    generatePosts(posts);

// === Google Translate ===
let google;
google.translate.TranslateElement.InlineLayout["SIMPLE"] = undefined;

google.translate["TranslateElement"] = undefined;

google.translate.TranslateElement.InlineLayout = undefined;

function setupGoogleTranslate() {
    let google;
    if (typeof google !== 'undefined' && google.translate) {
        new google.translate.TranslateElement(
            { pageLanguage: 'ru', includedLanguages: 'en,fr,es,de,it,zh-CN,ru', layout: google.translate.TranslateElement.InlineLayout.SIMPLE },
            'google_translate_element'
        );
    }
}
