import bannerPicture from "../images/sydney_home1920.jpg";
import saladPic from "../images/salad.jpg";
import chefPic from "../images/chef.jpg";


function createHome(){
const homeWrapper = document.createElement("div")
homeWrapper.classList.add('home_wrapper')
const hero = document.createElement("img")
hero.src = bannerPicture
hero.classList.add('hero_img')
homeWrapper.appendChild(hero)
homeWrapper.appendChild(createText("Experience World-Class dining experience with World-Class Views"))
homeWrapper.appendChild(createBlackBanner())
homeWrapper.appendChild(createPictureshow())

return homeWrapper;
}

function createText(text) {
    const heroContent = document.createElement("div")
    heroContent.classList.add("hero_content")
    heroContent.textContent = text

    return heroContent
}

function createBlackBanner() {
    const blackBanner = document.createElement("div")
    blackBanner.classList.add('black_banner');
    const bannerList = document.createElement("div")
    bannerList.classList.add('banner_text')
    bannerList.innerHTML = `
        <ul>
        <li>Head Chef: Barney Rubble</li>
        <li>Executive Sous Chef: Fred Rubble</li>
        <li>General Manager: Ted Rubble</li>
    `
    blackBanner.appendChild(bannerList)

    return blackBanner;
}

function createPictureshow() {
    const pictureDiv = document.createElement("div")
    pictureDiv.classList.add('picture_div');
    const salad = document.createElement("img")
    salad.src = saladPic
    const chef = document.createElement("img");
    chef.src = chefPic

    pictureDiv.appendChild(salad)
    pictureDiv.appendChild(chef)

    return pictureDiv
}



export default createHome