import babyPic from "./images/baby.jpg"

function createAboutUs () {
    document.querySelector('#main_content').textContent = ""
    const about_wrapper = document.createElement("div");
    about_wrapper.classList.add("about_wrapper");
    const about_container = document.createElement("div");
    about_container.classList.add("about_container");
    about_container.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia leo convallis erat mattis, in scelerisque libero gravida. Donec ullamcorper, magna rutrum fringilla dictum, turpis ex efficitur turpis, sed bibendum orci lacus vitae augue. Fusce odio ex, ultricies a dapibus sed, laoreet eu felis. Nulla sed nisi malesuada, ornare odio vulputate, aliquet turpis. Aliquam erat volutpat. Ut egestas tortor ante, sed consequat sapien malesuada tempor. Proin pharetra molestie nibh eu convallis. Aenean est ante, convallis eget commodo ac, commodo vel leo. Fusce dapibus dictum velit vel mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut suscipit laoreet magna a tempor. Curabitur nec placerat nisi. Cras ac luctus dui, ac vehicula libero. Nulla ut mi in dui varius posuere pulvinar in turpis. Suspendisse malesuada volutpat orci, a maximus quam cursus et."
    const babyChef = document.createElement("img");
    babyChef.src = babyPic
    babyChef.classList.add("chef_pic")

    about_wrapper.appendChild(about_container)
    about_wrapper.appendChild(babyChef)


 return about_wrapper
}


export default createAboutUs