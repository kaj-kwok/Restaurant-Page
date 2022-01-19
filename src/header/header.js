import headerImg from "../images/logo.png"

function displayHeader(text) {
    const header = document.createElement('div')
    header.classList.add('header_container')

    const headerLogo = document.createElement("img");
    headerLogo.src = headerImg
    headerLogo.classList.add("header_logo")

    const headerText = document.createElement("div");
    headerText.textContent = text;
    headerText.classList.add("header_text")

    header.appendChild(headerLogo)
    header.appendChild(headerText)

    return header;
}

export default displayHeader;