import { articles } from "../data/articles-data.js";

generateLatestArticle();
generateArticles();

function generateLatestArticle() {
    let latestArticleContainer = document.getElementById("latestArticle")
    let numberOfArticles = articles.length;
    let latestArticlenNumberInArray = numberOfArticles - 1;

    let htmlContent = generateArticleHTML(latestArticlenNumberInArray);

    latestArticleContainer.innerHTML = htmlContent;
}

function generateArticles() {
    let articlesContainer = document.getElementById("allArticles-container");
    let numberOfAllArticles = articles.length;
    articlesContainer.innerHTML = generateManyArticlesHTML(numberOfAllArticles);
}


/* GENERATE HTML CONTENT */

function generateArticleHTML(articleNumber) {
    let htmlContent = `   
    <article class="article-container">    
        <img src="${articles[articleNumber].imageSrc}" alt="${articles[articleNumber].imgAlt}" />
        <div class="description-container">
            <span class="date">${articles[articleNumber].addDate}</span>
            <span class="latestArticleTitle">${articles[articleNumber].title}</span>
            <span class="latestArticleSumary">${articles[articleNumber].summary}</span>
        </div>
        </article>`;

    return htmlContent;
}

function generateManyArticlesHTML(numberOfArticlesToGenerate) {
    let htmlContent = ``;

    for (let i = numberOfArticlesToGenerate - 2; i >= 0; i--) {
        htmlContent += generateArticleHTML(i)
    }
    return htmlContent;
}

