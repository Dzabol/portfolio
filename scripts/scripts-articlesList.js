import { articles } from "/data/articles-data.js";

export function generateLatestArticle() {
    let latestArticleContainer = document.getElementById("latestArticle")
    let numberOfArticles = articles.length;
    let latestArticlenNumberInArray = numberOfArticles - 1;

    let htmlContent = generateArticleHTML(latestArticlenNumberInArray);

    latestArticleContainer.innerHTML = htmlContent;
}

export function generateArticles() {
    let articlesContainer = document.getElementById("allArticles-container");
    let numberOfAllArticles = articles.length;
    articlesContainer.innerHTML = generateManyArticlesHTML(true, numberOfAllArticles, 1, 6);
}

export function generateRequiredNumberOfArticles() {
    let articlesContainer = document.querySelector(".allArticles-container");

    let numberOfArticlesToGenerate = 3;
    let numberOfAllArticles = articles.length;
    articlesContainer.innerHTML = generateManyArticlesHTML(true, numberOfAllArticles, 0, numberOfArticlesToGenerate);
}


/* GENERATE HTML CONTENT */

function generateArticleHTML(articleNumber) {
    let htmlContent = `   
    <article class="article-container">    
        <img src="/Images/blog/${articles[articleNumber].imageSrc}" alt="${articles[articleNumber].imgAlt}" />
        <div class="description-container">
            <span class="date">${articles[articleNumber].addDate}</span>
            <span class="latestArticleTitle">${articles[articleNumber].title}</span>
            <span class="latestArticleSumary">${articles[articleNumber].summary}</span>
        </div>
        </article>`;

    return htmlContent;
}

function generateManyArticlesHTML2(numberOfArticlesToGenerate) {
    let htmlContent = ``;

    for (let i = numberOfArticlesToGenerate - 2; i >= 0; i--) {
        htmlContent += generateArticleHTML(i)
    }
    return htmlContent;
}

function generateManyArticlesHTML(generateFromLatestPosts, numberOfAllArticles, numberOfPostsToSkip, numberOfPostsToGenerate) {
    let htmlContent = ``;
    if (generateFromLatestPosts) {
        let firstArticleToDisplay = (numberOfAllArticles - numberOfPostsToSkip) - 1;
        let lastArticleToDisplay = firstArticleToDisplay - numberOfPostsToGenerate;
        for (let i = firstArticleToDisplay; i > lastArticleToDisplay; i--) {
            htmlContent += generateArticleHTML(i)
        }
    }

    else {
        let firstArticleToDisplay = numberOfPostsToSkip;
        let lastArticleToDisplay = numberOfPostsToGenerate;
        for (let i = firstArticleToDisplay; i < lastArticleToDisplay; i++) {
            htmlContent += generateArticleHTML(i)
        }
    }

    return htmlContent;
}

