import { headerLinks } from "/data/headerLinks.js";

export function generateHeaderContent() {
    let header = document.querySelector(".headerWithLinks");
    let headerContent = `
    <div class="logo-container">${generateHeaderLogo()}</div>
    <div class="links-container">${generateHeaderLinks()}</div>`;

    header.innerHTML = headerContent;
}

/* Generate Content*/

function generateHeaderLinks() {
    let htlmInner = ``;
    for (let item of headerLinks) {
        htlmInner += `<a href="${item.link}">${item.linkName}</a>`;
    }
    return htlmInner;
}

function generateHeaderLogo() {
    const htmlInner = `
    <img
    src="/Images/Icons/blogIcon.png"
    alt="black rounder cloud with smile"/>
    <span class="blogName">My learning journal</span>  `;
    return htmlInner;
}


