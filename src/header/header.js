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

function displayFooter() {
    const footer = document.createElement("div");
    footer.classList.add("footer_bg")
    const footerLogo = document.createElement("img");
    footerLogo.src = headerImg
    footerLogo.classList.add("footer_logo")
    footer.appendChild(footerLogo)
    const footer_text = document.createElement("div")
    footer_text.innerHTML = `<ul>
    <li>604.000.0000</li>
    <li>1234 Main St</li>
    <li>Vancouver, BC</li>
    </ul>
     `
    footer.appendChild(footer_text)
     
     return footer
}

export {displayFooter, displayHeader};