const $ = selector => document.querySelector(selector)
const menu = $('.nav_target')
const line1_nav = $('.line1_nav_target')
const line2_nav = $('.line2_nav_target')
const line3_nav = $('.line3_nav_target')
const linksMenu = $('.nav_links')

menu.addEventListener('click', openMenu)
linksMenu.addEventListener('click', closeMenu)

function openMenu(){
    line1_nav.classList.toggle("active_line1_nav_target")
    line2_nav.classList.toggle("active_line2_nav_target")
    line3_nav.classList.toggle("active_line3_nav_target")

    linksMenu.classList.toggle('active_nav_links')
}

function closeMenu(){
    line1_nav.classList.remove("active_line1_nav_target")
    line2_nav.classList.remove("active_line2_nav_target")
    line3_nav.classList.remove("active_line3_nav_target")
    linksMenu.classList.remove('active_nav_links')
}