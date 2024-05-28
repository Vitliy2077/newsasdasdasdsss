const apiKey = '2f1d0daf6524c218aa94a3580477bf9';
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Обработка данных и отображение новостей на странице
    })
    .catch(error => {
        console.error('Error fetching news:', error);
    });
