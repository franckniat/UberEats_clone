const topbar = document.querySelector('.topbar');
const search_bar = document.querySelector('.search_item');
window.addEventListener("scroll", ()=>{
    topbar.classList.toggle("fixed",window.scrollY > 10);
    search_bar.classList.toggle("active",window.scrollY > 300);
})

const dropdown = document.querySelector('.dropdown_link');
const dropdown_content = document.querySelector('.dropdown_content');
dropdown.addEventListener("click",()=>{
    dropdown_content.classList.toggle('active');
})