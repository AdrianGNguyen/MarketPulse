async function fetchNews() {
    try {
        const response = await fetch('/news');
        const news = await response.json();
        const newsList = document.getElementById('news-list');

        news.forEach(article => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = article.url;
            link.textContent = article.title;
            link.target = '_blank';
            listItem.appendChild(link);
            newsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchNews);
